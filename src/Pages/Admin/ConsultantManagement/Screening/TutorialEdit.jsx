import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomButton from "../../../../Components/CustomButton";
import CustomInput from "../../../../Components/CustomInput";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import ImageUpload from "../../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import VideoUploader from "../../../../Components/VideoUploader";
import { useNavigate, useParams } from "react-router-dom";
import withModal from "../../../../HOC/withModal";
import { useEffect, useState } from "react";
import { images } from "../../../../Assets";
import { Col, Row } from "react-bootstrap";
import VidThumbnail from "../../../../Assets/images/videoThumbnail.png";
import TestVideo from "../../../../Assets/images/video_dummy.mp4";

const TutorialEdit = ({ showModal }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const [initialValues, setInitialValues] = useState({
  //   question: "",
  //   answer: "",
  //   poster: "",
  //   video: "",
  //   answerType: [],
  // });
  const [isLoading, setIsLoading] = useState(true);

  const tutorialData = {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. ",
    poster: VidThumbnail,
    video: TestVideo,
    answerType: ["Image"],
  };

  const validationSchema = Yup.object().shape({
    text: Yup.string().required("Title is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      showModal(
        "",
        "Are You Sure You Want to Update these Tutorial?",
        async () => {
          try {
            console.log("Updating rules with data:", values);
            // await Api.put(`/rules/${rulesData.id}`, values);

            showModal(
              "",
              "Tutorial have been updated successfully!",
              () => {
                navigate(-1);
              },
              true
            );
          } catch (error) {
            console.error("Error updating rules:", error);
            showModal(
              "Error",
              "Failed to update rules. Please try again.",
              null,
              true
            );
          }
        }
      );
    } catch (error) {
      console.error("Form submission error:", error);
      showModal("Error", "An error occurred. Please try again.", null, true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <DashboardLayout pageTitle="Edit Tutorial">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="dashCard mb-4">
              <Row>
                <Col xs={12} className="d-flex mb-4 mb-xl-4 gap-2">
                  <BackButton2 />
                  <h2 className="mainTitle mb-0">Edit Tutorial</h2>
                </Col>
              </Row>

              {tutorialData ? (
                <Formik
                  initialValues={tutorialData}
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
                              <label className="form-label fw-medium">
                                Option
                              </label>
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
                            <Col
                              md={9}
                              xxl={8}
                              className="mb-3 rules-image-edit"
                            >
                              <label className="mainLabel ps-3">Image</label>
                              <ImageUpload
                                onChange={(file) =>
                                  setFieldValue("poster", file)
                                }
                                numberOfFiles={1}
                                errorFromParent={
                                  touched.poster && errors.poster
                                }
                                images={values.poster}
                              />
                            </Col>
                            <Col md={9} xxl={8} className="mb-3">
                              <VideoUploader
                                name="video"
                                label="Video"
                                video={values.video}
                                onChange={(file) =>
                                  setFieldValue("video", file)
                                }
                                errorFromParent={touched.video && errors.video}
                              />
                            </Col>
                            <Col xs={12}>
                              <CustomButton
                                variant="primary"
                                className="min-width-180"
                                text="Update"
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
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(TutorialEdit);
