import { ErrorMessage, Field, Formik, Form as FormikForm } from "formik";
import { useState } from "react";
import { Container, FormCheck } from "react-bootstrap";
import * as Yup from "yup";
import VideoVerificationQuiz from "../../../Assets/images/videoVerificationQuiz.png";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomModal from "../../../Components/CustomModal";
import { usePageTitleUser } from "../../../Utils/helper";
import "./index.css";

const VideoVerification = () => {
  usePageTitleUser("Video Verification");
  const [modal, setModal] = useState(false);

  const questions = [
    { id: 1, text: "Lorem ipsum dolor sit amet.", time: "1:59" },
    { id: 2, text: "Consectetur adipiscing elit.", time: "2:09" },
    { id: 3, text: "Aenean euismod bibendum.", time: "2:06" },
    { id: 4, text: "Proin gravida dolor sit amet.", time: "2:00" },
    { id: 5, text: "Vestibulum lorem.", time: "2:45" },
    { id: 6, text: "Vestibulum lorem.", time: "2:30" },
  ];

  const validationSchema = Yup.object(
    questions.reduce((shape, q) => {
      shape[`question${q.id}`] = Yup.string().required(
        "This question is required"
      );
      return shape;
    }, {})
  );
  const initialValues = questions.reduce((acc, q) => {
    acc[`question${q.id}`] = "";
    return acc;
  }, {});

  const handleSubmit = (values, { resetForm }) => {
    // console.log("Form Values:", values);
    setModal(true);
    resetForm();
  };
  return (
    <Container fluid>
      <div className="py-sm-5 py-3 px-sm-0 px-1">
        <div className="site_card">
          <div className="d-flex align-items-center flex-wrap mb-3">
            <BackButton2 />
            <h2 className="mx-auto fw-bold mb-0 page-title">
              Video Verification Quiz
            </h2>
          </div>
          <div className="mb-3">
            <img
              src={VideoVerificationQuiz}
              alt="video-quiz"
              className="img-fluid w-100"
            />
          </div>
          <p className="">
          The video verification quiz needs to be only an automated interview. First, we ensure that the users webcam and microphones are enabled. Once that setup is done, the user will be shown a question on the screen for 10 seconds and then they will be given 30 secs amount of time to record their answers on the same page itself. Once that question is recorded, the user can click “Next” to proceed to the next question and each time the user clicks Next, the recorded videos will be sent to then admin for each question separately and repeat the process. So, on the admin side, that particular user’s profile will be updated each time they click on the Next button with the recorded videos for the admin to approve. 
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true} // 👈 important when initialValues is dynamic
          >
            {({ values }) => (
              <FormikForm className="mt-sm-5">
                <div className="row">
                  {questions.map((q) => (
                    <div key={q.id} className="mb-3 col-md-5">
                      <div className="d-flex justify-content-between align-items-center pe-5">
                        <h6>Question {q.id}</h6>
                        <small className="me-3" style={{ color: "#999" }}>
                          {q.time}
                        </small>
                      </div>
                      <p style={{ color: "#999" }}>{q.text}</p>
                      <div className="d-flex gap-3 flex-wrap">
                        {["A", "B", "C", "D"].map((opt) => (
                          <FormCheck key={opt} type="radio" className="me-2">
                            <Field
                              name={`question${q.id}`}
                              type="radio"
                              value={opt}
                              as={FormCheck.Input}
                              id={`q${q.id}-${opt}`}
                            />
                            <FormCheck.Label htmlFor={`q${q.id}-${opt}`}>
                              Option {opt}
                            </FormCheck.Label>
                          </FormCheck>
                        ))}
                      </div>
                      <div style={{ color: "red", fontSize: "0.8rem" }}>
                        <ErrorMessage name={`question${q.id}`} />
                      </div>
                    </div>
                  ))}

                  <div>
                    <button
                      className="btn btn-primary  min-width-160"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </FormikForm>
            )}
          </Formik>
        </div>
        <CustomModal
          show={modal}
          action={() => {
            setModal(false);
          }}
          close={() => setModal(false)}
          para="Video Verfication Test has bees sent successfully. Please wait for the admin approval."
          success
        />
      </div>
    </Container>
  );
};

export default VideoVerification;
