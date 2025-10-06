import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Col, Row } from "react-bootstrap";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomButton from "../../../../Components/CustomButton";
import CustomInput from "../../../../Components/CustomInput";
import withModal from "../../../../HOC/withModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import VideoUploader from "../../../../Components/VideoUploader";
import ImageUpload from "../../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";

const RulesRegulationsAdd = ({ showModal }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [rulesInfo, setRulesInfo] = useState(null);

  useEffect(() => {
    const state = location.state;
    if (state?.categoryType === "rules") {
      setRulesInfo(state);
    } else {
      navigate("/admin/consultant-management/category");
    }
  }, [location, navigate]);

  const validationSchema = Yup.object().shape({
    text: Yup.string().required("Title is required"),
    // description: Yup.string().required("Description is required"),
    // rules: Yup.array()
    //   .of(
    //     Yup.object().shape({
    //       rule: Yup.string().required("Rule is required"),
    //       explanation: Yup.string().required("Explanation is required"),
    //     })
    //   )
    //   .min(1, "At least one rule is required"),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const formData = {
        ...values,
        categoryId: rulesInfo?.categoryId,
        categoryName: rulesInfo?.categoryName,
        categoryType: rulesInfo?.categoryType,
      };

      showModal(
        "",
        "Are You Sure You Want to Add these Rules & Regulations?",
        async () => {
          try {
            console.log("Saving rules with data:", formData);
            // await Api.post('/rules', formData);

            showModal(
              "",
              "Rules & Regulations have been added successfully!",
              () => {
                navigate("/admin/consultant-management/category", {
                  state: {
                    categoryType: "rules",
                    isQuiz: false,
                    title: "Rules & Regulations",
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
    <DashboardLayout pageTitle={rulesInfo?.title || "Add Rules & Regulations"}>
      <div className="container-fluid">
        <div className="dashCard">
          <Row className="mb-2 page-header">
            <Col xs={12} className="d-flex mb-4 mb-xl-4 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">Add {rulesInfo?.title}</h2>
            </Col>
          </Row>

          {rulesInfo ? (
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
                            {["Text", "Image"].map((opt) => (
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

export default withModal(RulesRegulationsAdd);
