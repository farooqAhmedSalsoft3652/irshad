import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomButton from "../../../../Components/CustomButton";
import CustomInput from "../../../../Components/CustomInput";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import ImageUpload from "../../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import VideoUploader from "../../../../Components/VideoUploader";
import { useNavigate, useLocation } from "react-router-dom";
import withModal from "../../../../HOC/withModal";
import { Col, Row } from "react-bootstrap";
import { quizOptions, statusOptions } from "../../../../Config/TableStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Select } from "../../../../Components/Select";
import { useState, useEffect } from "react";

const VideoVerificationQuizAdd = ({ showModal }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [quizInfo, setQuizInfo] = useState(null);

  useEffect(() => {
    const state = location.state;
    if (state?.quizType === "video_verification") {
      setQuizInfo(state);
    } else {
      // If no valid state, redirect back to category links
      navigate("/admin/consultant-management/category");
    }
  }, [location, navigate]);

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      console.log("Form Values:", values);

      if (
        !values.comments ||
        !values.passingMarks ||
        !values.questions.length
      ) {
        showModal("Error", "Please fill all required fields", null, true);
        return;
      }

      if (values.passingMarks > 2) {
        showModal(
          "Error",
          "Passing marks must be less than or equal to total marks (2)",
          null,
          true
        );
        return;
      }

      // Add category information to the form values
      const formData = {
        ...values,
        categoryId: quizInfo?.categoryId,
        categoryName: quizInfo?.categoryName,
        quizType: quizInfo?.quizType,
      };

      console.log("Saving quiz with data:", formData);

      showModal(
        "Success",
        "Quiz has been added successfully!",
        () => {
          navigate("/admin/consultant-management/category", {
            state: {
              categoryType: "video_verification",
              isQuiz: true,
              quizType: "video_verification",
              title: "Video Verification Quiz",
            },
          });
        },
        true
      );
      resetForm();
    } catch (error) {
      console.error("Form submission error:", error);
      showModal("Error", "An error occurred. Please try again.", null, true);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    comments: Yup.string().required("Comments are required"),
    passingMarks: Yup.number()
      .required("Passing marks are required")
      .min(1, "Passing marks must be at least 1")
      .max(2, "Passing marks must be less than or equal to total marks"),
    questions: Yup.array()
      .of(
        Yup.object().shape({
          question: Yup.string().required("Question is required"),
          optionA: Yup.string().required("Option A is required"),
          optionB: Yup.string().required("Option B is required"),
          optionC: Yup.string().required("Option C is required"),
          optionD: Yup.string().required("Option D is required"),
          correctAnswer: Yup.string().required("Select correct answer"),
        })
      )
      .min(1, "At least one question is required"),
  });
  const initialQuestion = {
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: "",
  };

  return (
    <DashboardLayout pageTitle={quizInfo?.title || "Add Video Verification"}>
      <div className="container-fluid">
        <div className="dashCard">
          <Row className="mb-2 page-header">
            <Col xs={12} className="d-flex mb-4 mb-xl-4 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">
                {/* {quizInfo?.title || "Add Quiz"} */}
                Add {quizInfo?.title}
              </h2>
            </Col>
          </Row>

          {quizInfo ? (
            <Formik
              initialValues={{
                comments: "",
                passingMarks: "",
                questions: [
                  {
                    question: "",
                    optionA: "",
                    optionB: "",
                    optionC: "",
                    optionD: "",
                    correctAnswer: "",
                  },
                ],
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
                isSubmitting,
              }) => (
                <Form>
                  <Row>
                    <Col xs={12} md={10} xl={8} xxl={7}>
                      <Row>
                        <Col md={9} xxl={7}>
                          <CustomInput
                            label="Comments"
                            type="textarea"
                            required
                            placeholder="Enter Comments"
                            id="comments"
                            name="comments"
                            inputclass=""
                            rows="5"
                            value={values.comments}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.comments && errors.comments}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="mt-4" xxl={12}>
                          <Row>
                            <Col xs={12}>
                              <h3 className="mb-3">Quiz</h3>
                              <label
                                htmlFor="passingMarks"
                                className="form-label d-block"
                              >
                                Passing Marks
                                <span className="text-danger">*</span>
                              </label>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={9} xxl={7}>
                              <CustomInput
                                type="number"
                                required
                                placeholder="Enter Passing Marks"
                                id="passingMarks"
                                name="passingMarks"
                                inputclass=""
                                value={values.passingMarks}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={
                                  touched.passingMarks && errors.passingMarks
                                }
                              />
                            </Col>
                            <Col
                              md={3}
                              xxl={5}
                              className="align-self-center mt-sm-2 mt-0"
                            >
                              <div className="fw-medium">Total Marks: 2</div>
                            </Col>
                            <Col xs={12}>
                              <div className="text-muted mt-2">
                                Passing Marks must be less than or equal to
                                total marks
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      <Row className="mt-3 mt-lg-4">
                        <Col className="quiz-question" md={9} xxl={7}>
                          <FieldArray name="questions">
                            {({ push, remove }) => (
                              <>
                                {values.questions.map((q, index) => (
                                  <div
                                    key={index}
                                    className={`question-row ${
                                      values.questions.length > 1
                                        ? "mb-4"
                                        : "mb-3"
                                    }`}
                                  >
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                      <h3 className="mb-0">
                                        Question {index + 1}
                                      </h3>
                                      {values.questions.length > 1 && (
                                        <button
                                          type="button"
                                          className="btn remove-btn"
                                          onClick={() => remove(index)}
                                        >
                                          <span className="delete-icon me-2">
                                            <FontAwesomeIcon icon={faTrash} />
                                          </span>
                                          Delete
                                        </button>
                                      )}
                                    </div>

                                    <div className="mb-2">
                                      <label className="form-label">
                                        Question
                                      </label>
                                      <Field
                                        name={`questions[${index}].question`}
                                        className="form-control"
                                      />
                                      <ErrorMessage
                                        name={`questions[${index}].question`}
                                        component="div"
                                        className="error-message red-text"
                                      />
                                    </div>

                                    {["A", "B", "C", "D"].map((opt) => (
                                      <div className="mb-2" key={opt}>
                                        <label className="form-label">
                                          Option {opt}
                                        </label>
                                        <Field
                                          name={`questions[${index}].option${opt}`}
                                          className="form-control"
                                        />
                                        <ErrorMessage
                                          name={`questions[${index}].option${opt}`}
                                          component="div"
                                          className="error-message red-text"
                                        />
                                      </div>
                                    ))}

                                    <div className="mb-2">
                                      <label className="form-label">
                                        Correct Answer
                                      </label>
                                      <Field
                                        as="select"
                                        name={`questions[${index}].correctAnswer`}
                                        className="form-select"
                                      >
                                        <option value="">Select Answer</option>
                                        {["A", "B", "C", "D"].map((opt) => (
                                          <option
                                            key={opt}
                                            value={opt}
                                          >{`Option ${opt}`}</option>
                                        ))}
                                      </Field>
                                      <ErrorMessage
                                        name={`questions[${index}].correctAnswer`}
                                        component="div"
                                        className="error-message red-text"
                                      />
                                    </div>
                                  </div>
                                ))}

                                <button
                                  type="button"
                                  className="btn add-btn"
                                  onClick={() => push(initialQuestion)}
                                >
                                  <span className="add-icon">
                                    <FontAwesomeIcon icon={faPlus} />
                                  </span>
                                  Add More
                                </button>
                              </>
                            )}
                          </FieldArray>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs={12} className="mt-4">
                          <CustomButton
                            variant="primary"
                            className="min-width-180"
                            text="Add"
                            type="submit"
                            disabled={isSubmitting}
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

export default withModal(VideoVerificationQuizAdd);
