import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Col, Row } from "react-bootstrap";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomButton from "../../../../Components/CustomButton";
import CustomInput from "../../../../Components/CustomInput";
import withModal from "../../../../HOC/withModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const RulesRegulationsAdd = ({ showModal }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [rulesInfo, setRulesInfo] = useState(null);

  useEffect(() => {
    const state = location.state;
    if (state?.categoryType === 'rules') {
      setRulesInfo(state);
    } else {
      navigate('/admin/consultant-management/category-links');
    }
  }, [location, navigate]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    rules: Yup.array().of(
      Yup.object().shape({
        rule: Yup.string().required("Rule is required"),
        explanation: Yup.string().required("Explanation is required")
      })
    ).min(1, "At least one rule is required")
  });

  const initialValues = {
    title: "",
    description: "",
    rules: [
      {
        rule: "",
        explanation: ""
      }
    ]
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      if (!values.title || !values.description || !values.rules.length) {
        showModal("Error", "Please fill all required fields", null, true);
        return;
      }

      const formData = {
        ...values,
        categoryId: rulesInfo?.categoryId,
        categoryName: rulesInfo?.categoryName,
        categoryType: rulesInfo?.categoryType
      };

      showModal(
        "", 
        "Are You Sure You Want to Add these Rules & Regulations?", 
        async () => {
          try {
            console.log("Saving rules with data:", formData);
            // await Api.post('/rules', formData);
            
            showModal("Success", "Rules & Regulations have been added successfully!", () => {
              navigate('/admin/consultant-management/category', {
                state: {
                  categoryType: 'rules',
                  isQuiz: false,
                  title: 'Rules & Regulations'
                }
              });
            }, true);
            resetForm();
          } catch (error) {
            console.error("Error saving rules:", error);
            showModal("Error", "Failed to save rules. Please try again.", null, true);
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
              <h2 className="mainTitle mb-0">{rulesInfo?.title || "Add Rules & Regulations"}</h2>
            </Col>
          </Row>

          {rulesInfo ? (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
                setFieldValue
              }) => (
                <Form>
                  <Row>
                    <Col xs={12} xxl={8}>
                      <CustomInput
                        label="Title"
                        type="text"
                        name="title"
                        placeholder="Enter Title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.title && errors.title}
                        required
                      />

                      <CustomInput
                        label="Description"
                        type="textarea"
                        name="description"
                        placeholder="Enter Description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.description && errors.description}
                        required
                        rows="4"
                      />

                      <div className="rules-section mt-4">
                        <h3 className="mb-3">Rules</h3>
                        {values.rules.map((rule, index) => (
                          <div key={index} className="rule-item mb-4 p-3 border rounded">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <h4>Rule {index + 1}</h4>
                              {values.rules.length > 1 && (
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm"
                                  onClick={() => {
                                    const newRules = values.rules.filter((_, i) => i !== index);
                                    setFieldValue('rules', newRules);
                                  }}
                                >
                                  <FontAwesomeIcon icon={faTrash} /> Remove Rule
                                </button>
                              )}
                            </div>

                            <CustomInput
                              label="Rule"
                              type="text"
                              name={`rules.${index}.rule`}
                              placeholder="Enter Rule"
                              value={rule.rule}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={
                                touched.rules?.[index]?.rule && 
                                errors.rules?.[index]?.rule
                              }
                              required
                            />

                            <CustomInput
                              label="Explanation"
                              type="textarea"
                              name={`rules.${index}.explanation`}
                              placeholder="Enter Explanation"
                              value={rule.explanation}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={
                                touched.rules?.[index]?.explanation && 
                                errors.rules?.[index]?.explanation
                              }
                              required
                              rows="3"
                            />
                          </div>
                        ))}

                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => {
                            setFieldValue('rules', [
                              ...values.rules,
                              { rule: '', explanation: '' }
                            ]);
                          }}
                        >
                          <FontAwesomeIcon icon={faPlus} /> Add Another Rule
                        </button>
                      </div>
                    </Col>
                  </Row>

                  <div className="mt-4">
                    <CustomButton
                      variant="btn btn-primary min-width-180"
                      type="submit"
                      text="Add Rules"
                      disabled={isSubmitting}
                    />
                  </div>
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