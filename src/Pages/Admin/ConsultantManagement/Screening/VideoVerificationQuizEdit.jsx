import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomButton from "../../../../Components/CustomButton";
import CustomInput from "../../../../Components/CustomInput";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import { useNavigate } from "react-router-dom";
import withModal from "../../../../HOC/withModal";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const VideoVerificationQuizEdit = ({ showModal }) => {
  const navigate = useNavigate();

  // Dummy data for edit page
  const dummyData = {
    comments: "This is a sample quiz for video verification process",
    passingMarks: "1",
    questions: [
      {
        question: "What is the capital of France?",
        optionA: "London",
        optionB: "Paris",
        optionC: "Berlin",
        optionD: "Madrid",
        correctAnswer: "B",
      },
      {
        question: "Which planet is known as the Red Planet?",
        optionA: "Venus",
        optionB: "Jupiter",
        optionC: "Mars",
        optionD: "Saturn",
        correctAnswer: "C",
      },
    ],
  };

  const handleSubmit = async (values, { setSubmitting }) => {
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

      showModal("", `Are You Sure You Want to Update this Quiz?`, async () => {
        try {
          // Here you would typically make an API call to update the quiz
          // await Api.put('/quiz/:id', values);

          showModal(
            "Success",
            "Quiz has been updated successfully!",
            () => {
              navigate(-1);
            },
            true
          );
        } catch (error) {
          console.error("Error updating quiz:", error);
          showModal(
            "Error",
            "Failed to update quiz. Please try again.",
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
    <DashboardLayout pageTitle="Edit Video Verification">
      <div className="container-fluid">
        <div className="dashCard">
          <Row className="mb-2 page-header">
            <Col xs={12} className="d-flex mb-4 mb-xl-4 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">Edit Video Verification Quiz</h2>
            </Col>
          </Row>

          <Formik
            initialValues={dummyData}
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
                              Passing Marks must be less than or equal to total
                              marks
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
                                <div key={index} className="question-row mb-4">
                                  <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h3>Question {index + 1}</h3>
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
                                    <label>Question</label>
                                    <Field
                                      name={`questions[${index}].question`}
                                      className="form-control"
                                    />
                                    <ErrorMessage
                                      name={`questions[${index}].question`}
                                      component="div"
                                      className="text-danger"
                                    />
                                  </div>

                                  {["A", "B", "C", "D"].map((opt) => (
                                    <div className="mb-2" key={opt}>
                                      <label>Option {opt}</label>
                                      <Field
                                        name={`questions[${index}].option${opt}`}
                                        className="form-control"
                                      />
                                      <ErrorMessage
                                        name={`questions[${index}].option${opt}`}
                                        component="div"
                                        className="text-danger"
                                      />
                                    </div>
                                  ))}

                                  <div className="mb-2">
                                    <label>Correct Answer</label>
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
                                      className="text-danger"
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
                          text="Update"
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
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(VideoVerificationQuizEdit);
