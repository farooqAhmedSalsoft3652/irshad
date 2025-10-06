import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomButton from "../../../../Components/CustomButton";
import CustomInput from "../../../../Components/CustomInput";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import ImageUpload from "../../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import VideoUploader from "../../../../Components/VideoUploader";
import { useLocation, useNavigate } from "react-router-dom";
import withModal from "../../../../HOC/withModal";
import { Col, Row } from "react-bootstrap";
import VidThumbnail from "../../../../Assets/images/videoThumbnail.png";
import { useEffect, useState } from "react";

const addFaqSchema = Yup.object().shape({
  question: Yup.string().required("Question is required"),
  text: Yup.string().when("answerType", {
    is: (val) => val?.includes("Text"),
    then: Yup.string().required("Text answer is required"),
  }),
  photo: Yup.mixed().when("answerType", {
    is: (val) => val?.includes("Image"),
    then: Yup.mixed().required("Image is required"),
  }),
  video: Yup.mixed().when("answerType", {
    is: (val) => val?.includes("Video"),
    then: Yup.mixed().required("Video is required"),
  }),
});

const TutorialAdd = ({ showModal }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [turorialInfo, setRulesInfo] = useState(null);

  const validationSchema = Yup.object().shape({
    text: Yup.string().required("Title is required"),
    // photo: Yup.mixed().when("answerType", {
    //   is: (val) => val?.includes("Image"),
    //   then: Yup.mixed().required("Image is required"),
    // }),
    // video: Yup.mixed().when("answerType", {
    //   is: (val) => val?.includes("Video"),
    //   then: Yup.mixed().required("Video is required"),
    // }),
  });

  useEffect(() => {
    const state = location.state;
    if (state?.categoryType === "tutorials") {
      setRulesInfo(state);
    } else {
      // If no valid state, redirect back to category links
      navigate("/admin/consultant-management/category");
    }
  }, [location, navigate]);

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const formData = {
        ...values,
        categoryId: turorialInfo?.categoryId,
        categoryName: turorialInfo?.categoryName,
        categoryType: turorialInfo?.categoryType,
      };

      showModal("", "Are You Sure You Want to Add this Tutorial?", async () => {
        try {
          console.log("Saving rules with data:", formData);
          // await Api.post('/rules', formData);

          showModal(
            "",
            "Tutorial has Been Added Successfully!",
            () => {
              navigate("/admin/consultant-management/category", {
                state: {
                  categoryType: "tutorials",
                  isQuiz: false,
                  title: "Tutorials",
                },
              });
            },
            true
          );
          resetForm();
        } catch (error) {
          console.error("Error saving rules:", error);
          showModal(
            "Error",
            "Failed to save rules. Please try again.",
            null,
            true
          );
        }
      });
    } catch (error) {
      console.error("Form submission error:", error);
      showModal("Error", "An error occurred. Please try again.", null, true);
    } finally {
      setSubmitting(false);
    }
  };

  const tutorialData = {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. ",
    poster: VidThumbnail,
    // video: TestVideo,
    answerType: ["Image"],
  };

  return (
    <DashboardLayout pageTitle="Add FAQ">
      <div className="container-fluid">
        <div className="dashCard">
          <Row className="mb-2 page-header">
            <Col xs={12} className="d-flex mb-4 mb-xl-4 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">Add {turorialInfo?.title}</h2>
            </Col>
          </Row>

          {tutorialData ? (
            <Formik
              initialValues={{
                text: "",
                photo: "",
                answerType: [], // Array for selected checkboxes
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                setFieldValue,
              }) => (
                <Form>
                  {/* {console.log(errors)} */}
                  <Row>
                    <Col xs={12} md={10} xl={8} xxl={7}>
                      <Row>
                        <Col md={9} xxl={8} className="detail-box mb-3">
                          <label className="form-label fw-medium">Option</label>
                          <div className="d-flex gap-4 flex-wrap">
                            {["Text", "Image", "Video"].map((opt) => (
                              <div
                                key={opt}
                                className="form-check form-check-inline"
                              >
                                <Field
                                  name="answerType"
                                  type="checkbox"
                                  value={opt}
                                  className="form-check-input"
                                  id={`answer-${opt}`}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`answer-${opt}`}
                                >
                                  {opt}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Col>
                        <Col md={9} xxl={8} className="detail-box mb-3">
                          <CustomInput
                            label="Text"
                            type="textarea"
                            rows={5}
                            placeholder="Enter Text Answer"
                            id="text"
                            name="text"
                            value={values.text}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.text && errors.text}
                          />
                        </Col>
                        <Col md={9} xxl={8} className="mb-3 rules-image-edit">
                          <label className="mainLabel ps-3">Image</label>
                          <ImageUpload
                            onChange={(file) => setFieldValue("photo", file)}
                            numberOfFiles={1}
                            errorFromParent={touched.photo && errors.photo}
                          />
                        </Col>
                        <Col md={9} xxl={8} className="mb-3 rules-image-edit">
                          <VideoUploader
                            name="video"
                            label="Video"
                            onChange={handleChange}
                            // onChange={(file) => setFieldValue("video", file)}
                            errorFromParent={touched.video && errors.video}
                          />
                        </Col>
                        <Col xs={12}>
                          <CustomButton
                            variant="primary"
                            className="min-width-180"
                            text="Add"
                            type="submit"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          ) : (
            <div className="text-center py-5">
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(TutorialAdd);
