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
import ImageUpload from "../../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import { images } from "../../../../Assets";

const RulesRegulationsEdit = ({ showModal }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const rulesData = {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. ",
    poster: images.BannerImg,
    answerType: ["Image"],
  };

  const validationSchema = Yup.object().shape({
    text: Yup.string().required("Title is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      showModal(
        "",
        "Are You Sure You Want to Update these Rules & Regulations?",
        async () => {
          try {
            console.log("Updating rules with data:", values);
            // await Api.put(`/rules/${rulesData.id}`, values);

            showModal(
              "",
              "Rules & Regulations have been updated successfully!",
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
    <DashboardLayout pageTitle="Edit Rules & Regulations">
      <div className="container-fluid">
        <div className="dashCard">
          <Row className="mb-2 page-header">
            <Col xs={12} className="d-flex mb-4 mb-xl-4 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">Edit Rules & Regulations</h2>
            </Col>
          </Row>

          {rulesData ? (
            <Formik
              initialValues={rulesData}
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
                <Form className="category-wrap">
                  {console.log(errors)}
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
                            value={rulesData.text}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.text && errors.text}
                          />
                        </Col>
                        <Col md={9} xxl={8} className="mb-3 rules-image-edit">
                          <label className="mainLabel ps-3">Image</label>
                          <ImageUpload
                            className={`rules-image-edit`}
                            onChange={(file) => setFieldValue("poster", file)}
                            numberOfFiles={1}
                            errorFromParent={touched.poster && errors.poster}
                            images={rulesData.poster}
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
    </DashboardLayout>
  );
};

export default withModal(RulesRegulationsEdit);
