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

const FinalQuizAdd = ({ showModal }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [categoryInfo, setCategoryInfo] = useState(null);

  useEffect(() => {
    const state = location.state;
    if (state?.categoryType === 'final_quiz' && state?.isQuiz) {
      setCategoryInfo(state);
    } else {
      navigate('/admin/consultant-management/category');
    }
  }, [location, navigate]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    passingScore: Yup.number()
      .required("Passing score is required")
      .min(0, "Passing score must be at least 0")
      .max(100, "Passing score cannot exceed 100"),
    questions: Yup.array().of(
      Yup.object().shape({
        question: Yup.string().required("Question is required"),
        options: Yup.array().of(
          Yup.string().required("Option is required")
        ).min(2, "At least 2 options are required"),
        correctOption: Yup.number()
          .required("Correct option is required")
          .min(0, "Invalid option selected")
      })
    ).min(1, "At least one question is required")
  });

  const initialValues = {
    title: "",
    description: "",
    passingScore: 70,
    questions: [
      {
        question: "",
        options: ["", ""],
        correctOption: 0
      }
    ]
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      showModal(
        "", 
        "Are You Sure You Want to Add this Final Quiz?", 
        async () => {
          try {
            console.log("Saving quiz with data:", values);
            // await Api.post('/final-quiz', values);
            
            showModal("Success", "Final Quiz has been added successfully!", () => {
              navigate('/admin/consultant-management/category', {
                state: {
                  categoryType: 'final',
                  isQuiz: true,
                  title: 'Final Quiz'
                }
              });
            }, true);
            resetForm();
          } catch (error) {
            console.error("Error saving quiz:", error);
            showModal("Error", "Failed to save quiz. Please try again.", null, true);
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
    <DashboardLayout pageTitle="Add Final Quiz">
      <div className="container-fluid">
        <div className="dashCard">
          <Row className="mb-4 page-header">
            <Col xs={12} className="d-flex mb-4 mb-xl-0">
              <BackButton2 />
              <h2 className="mainTitle mb-0">Add Final Quiz</h2>
            </Col>
          </Row>

          {categoryInfo ? (
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
                        placeholder="Enter Quiz Title"
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
                        placeholder="Enter Quiz Description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.description && errors.description}
                        required
                        rows="4"
                      />

                      <CustomInput
                        label="Passing Score (%)"
                        type="number"
                        name="passingScore"
                        placeholder="Enter Passing Score"
                        value={values.passingScore}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.passingScore && errors.passingScore}
                        required
                        min="0"
                        max="100"
                      />

                      <div className="questions-section mt-4">
                        <h3 className="mb-3">Questions</h3>
                        {values.questions.map((question, qIndex) => (
                          <div key={qIndex} className="question-item mb-4 p-3 border rounded">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <h4>Question {qIndex + 1}</h4>
                              {values.questions.length > 1 && (
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm"
                                  onClick={() => {
                                    const newQuestions = values.questions.filter((_, i) => i !== qIndex);
                                    setFieldValue('questions', newQuestions);
                                  }}
                                >
                                  Remove Question
                                </button>
                              )}
                            </div>

                            <CustomInput
                              label="Question"
                              type="text"
                              name={`questions.${qIndex}.question`}
                              placeholder="Enter Question"
                              value={question.question}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={
                                touched.questions?.[qIndex]?.question && 
                                errors.questions?.[qIndex]?.question
                              }
                              required
                            />

                            <div className="options-section mt-3">
                              <label className="form-label">Options</label>
                              {question.options.map((option, oIndex) => (
                                <div key={oIndex} className="d-flex gap-2 mb-2">
                                  <div className="flex-grow-1">
                                    <CustomInput
                                      type="text"
                                      name={`questions.${qIndex}.options.${oIndex}`}
                                      placeholder={`Option ${oIndex + 1}`}
                                      value={option}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={
                                        touched.questions?.[qIndex]?.options?.[oIndex] && 
                                        errors.questions?.[qIndex]?.options?.[oIndex]
                                      }
                                      required
                                    />
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <input
                                      type="radio"
                                      name={`questions.${qIndex}.correctOption`}
                                      checked={question.correctOption === oIndex}
                                      onChange={() => setFieldValue(`questions.${qIndex}.correctOption`, oIndex)}
                                      className="form-check-input"
                                    />
                                    {question.options.length > 2 && (
                                      <button
                                        type="button"
                                        className="btn btn-danger btn-sm ms-2"
                                        onClick={() => {
                                          const newOptions = question.options.filter((_, i) => i !== oIndex);
                                          setFieldValue(`questions.${qIndex}.options`, newOptions);
                                          if (question.correctOption === oIndex) {
                                            setFieldValue(`questions.${qIndex}.correctOption`, 0);
                                          }
                                        }}
                                      >
                                        Remove
                                      </button>
                                    )}
                                  </div>
                                </div>
                              ))}
                              <button
                                type="button"
                                className="btn btn-secondary btn-sm mt-2"
                                onClick={() => {
                                  setFieldValue(`questions.${qIndex}.options`, [
                                    ...question.options,
                                    ""
                                  ]);
                                }}
                              >
                                Add Option
                              </button>
                            </div>
                          </div>
                        ))}

                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => {
                            setFieldValue('questions', [
                              ...values.questions,
                              {
                                question: "",
                                options: ["", ""],
                                correctOption: 0
                              }
                            ]);
                          }}
                        >
                          Add Another Question
                        </button>
                      </div>
                    </Col>
                  </Row>

                  <div className="mt-4">
                    <CustomButton
                      variant="btn btn-primary min-width-180"
                      type="submit"
                      text="Add Quiz"
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

export default withModal(FinalQuizAdd); 