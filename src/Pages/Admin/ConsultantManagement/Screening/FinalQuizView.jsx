import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomButton from "../../../../Components/CustomButton";

const FinalQuizView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [quizData, setQuizData] = useState(null);

  const quizData = {
    comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. ",
    passingMarks: 1,
    totalMarks: 2,
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
  // useEffect(() => {
  //   const state = location.state;
  //   if (state?.categoryType === "final" && state?.isQuiz && state?.id) {
  //     // Fetch quiz data based on ID
  //     // This is dummy data - replace with actual API call
  //     setQuizData({
  //       id: state.id,
  //       title: "Final Consultant Assessment Quiz",
  //       description:
  //         "This quiz evaluates the consultant's overall understanding of our platform and policies.",
  //       passingScore: 80,
  //       questions: [
  //         {
  //           question:
  //             "What is the primary purpose of our consultation platform?",
  //           options: [
  //             "To provide online shopping",
  //             "To connect experts with clients",
  //             "To offer educational courses",
  //             "To sell products",
  //           ],
  //           correctOption: 1,
  //         },
  //         {
  //           question: "What is the maximum response time for client messages?",
  //           options: ["12 hours", "24 hours", "48 hours", "72 hours"],
  //           correctOption: 1,
  //         },
  //         {
  //           question:
  //             "Which of the following is a required document for verification?",
  //           options: [
  //             "High school diploma",
  //             "Professional certification",
  //             "Driver's license",
  //             "Social media profile",
  //           ],
  //           correctOption: 1,
  //         },
  //       ],
  //     });
  //   } else {
  //     navigate("/admin/consultant-management/category");
  //   }
  // }, [location, navigate]);

  return (
    <DashboardLayout pageTitle="View Finalize Quiz">
      <div className="container-fluid">
        <div className="dashCard">
          <Row className="mb-2 page-header">
            <Col xs={12} className="d-flex mb-4 mb-xl-4 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">View Finalize Quiz</h2>
            </Col>
          </Row>
          <div className="quiz-details">
            <Row>
              <Col xs={12} md={10} xl={8} xxl={7}>
                <Row>
                  <Col md={9} xxl={8} className="detail-box mb-3">
                    <h6>Description</h6>
                    <p className="mb-0">{quizData.comments}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <h6>Quiz</h6>
                  </Col>
                  <Col md={6} className="detail-box">
                    <h6 className="mb-1">Passing Marks</h6>
                    <p className="mb-0">{quizData.passingMarks}</p>
                  </Col>
                  <Col md={3} className="detail-box">
                    <h6 className="text-secondary mb-1">Total Marks</h6>
                    <p className="mb-0">{quizData.totalMarks}</p>
                  </Col>
                  <Col xs={12}>
                    Passing Marks must be less than or equal to total marks
                  </Col>
                </Row>

                <Row>
                  <Col className="question-section" md={9} xxl={8}>
                    {quizData?.questions?.map((question, index) => (
                      <Row key={index} className="question-row mt-4">
                        <Col className="mb-3">
                          <h3>Question {index + 1}:</h3>
                        </Col>
                        <Col xs={12} className="detail-box mb-3">
                          <h6>Question</h6>
                          <p className="mb-0">{question.question}</p>
                        </Col>
                        {["A", "B", "C", "D"].map((optKey) => {
                          return (
                            <Col
                              xs={12}
                              className="detail-box mb-3"
                              key={optKey}
                            >
                              <h6>Option {optKey}</h6>
                              <p
                                className={`mb-0 ${
                                  question.correctAnswer === optKey
                                    ? "fw-bold text-primary"
                                    : ""
                                }`}
                              >
                                {question[`option${optKey}`]}
                              </p>
                            </Col>
                          );
                        })}
                        <Col xs={12} className="detail-box mb-3">
                          <h6>Correct Answer:</h6>
                          <p className="mb-0">
                            {question[`option${question.correctAnswer}`]}
                          </p>
                        </Col>
                      </Row>
                    ))}
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} xxl={8}>
                    <div className="actions mt-4">
                      <CustomButton
                        variant="btn btn-primary min-width-180 me-2"
                        text="Edit Quiz"
                        onClick={() => navigate("../edit")}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FinalQuizView;
