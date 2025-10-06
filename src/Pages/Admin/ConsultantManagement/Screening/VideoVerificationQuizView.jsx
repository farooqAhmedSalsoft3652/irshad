import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomButton from "../../../../Components/CustomButton";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";

const VideoVerificationQuizView = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const [quizInfo, setQuizInfo] = useState(null);

  // Dummy data for view page
  const quizData = {
    id: 1,
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

  return (
    <DashboardLayout pageTitle="Video Verification Quiz">
      <div className="container-fluid">
        <div className="dashCard">
          <Row className="mb-2 page-header">
            <Col xs={12} className="d-flex mb-4 mb-xl-4 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">View Video Verification Quiz</h2>
              {console.log(quizInfo?.title, "test")}
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
                    <CustomButton
                      variant="primary"
                      className="min-width-180"
                      text="Edit"
                      type="submit"
                      onClick={() =>
                        navigate(
                          `/admin/consultant-management/edit-quiz/${quizData.id}`
                        )
                      }
                    />
                    {/* <CustomButton
                      variant="btn btn-primary min-width-180 me-2"
                      text="Edit Quiz"
                      onClick={() => navigate("../edit")}
                    /> */}
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

export default VideoVerificationQuizView;
