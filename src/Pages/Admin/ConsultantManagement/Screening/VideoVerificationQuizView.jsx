import React from "react";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../../Components/CustomButton";
import { useNavigate } from "react-router-dom";

const VideoVerificationQuizView = () => {
  const navigate = useNavigate();

  // Dummy data for view page
  const quizData = {
    comments: "This is a sample quiz for video verification process",
    passingMarks: 1,
    totalMarks: 2,
    questions: [
      {
        question: "What is the capital of France?",
        optionA: "London",
        optionB: "Paris",
        optionC: "Berlin",
        optionD: "Madrid",
        correctAnswer: "B"
      },
      {
        question: "Which planet is known as the Red Planet?",
        optionA: "Venus",
        optionB: "Jupiter",
        optionC: "Mars",
        optionD: "Saturn",
        correctAnswer: "C"
      }
    ]
  };

  return (
    <DashboardLayout pageTitle="View Quiz">
      <div className="container-fluid">
        <div className="dashCard">
          <Row className="mb-2 page-header">
            <Col xs={12} className="d-flex mb-4 mb-xl-4 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">View Video Verification Quiz</h2>
            </Col>
          </Row>

          <div className="quiz-details">
            <Row>
              <Col xs={12} xxl={8}>
                <div className="info-section mb-4">
                  <h3 className="section-title mb-3">Quiz Information</h3>
                  <div className="info-item mb-3">
                    <label className="fw-bold">Comments:</label>
                    <p className="mb-0">{quizData.comments}</p>
                  </div>
                  <div className="info-item mb-3">
                    <label className="fw-bold">Passing Marks:</label>
                    <p className="mb-0">{quizData.passingMarks} out of {quizData.totalMarks}</p>
                  </div>
                </div>

                <div className="questions-section">
                  <h3 className="section-title mb-4">Questions</h3>
                  {quizData.questions.map((question, index) => (
                    <div key={index} className="question-card mb-4 p-4 border rounded bg-light">
                      <h4 className="question-title mb-3">
                        Question {index + 1}: {question.question}
                      </h4>
                      <div className="options-list">
                        {["A", "B", "C", "D"].map((opt) => (
                          <div
                            key={opt}
                            className={`option-item p-2 mb-2 rounded ${
                              question.correctAnswer === opt
                                ? "bg-success text-white"
                                : ""
                            }`}
                          >
                            <span className="fw-bold me-2">Option {opt}:</span>
                            {question[`option${opt}`]}
                            {question.correctAnswer === opt && (
                              <span className="ms-2">(Correct Answer)</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="actions mt-4">
                  <CustomButton
                    variant="btn btn-primary min-width-180 me-2"
                    text="Edit Quiz"
                    onClick={() => navigate("../edit")}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VideoVerificationQuizView; 