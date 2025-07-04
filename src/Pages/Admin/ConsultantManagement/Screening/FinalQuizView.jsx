import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton2 from "../../../../Components/BackButton/BackButton2";

const FinalQuizView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    const state = location.state;
    if (state?.categoryType === 'final' && state?.isQuiz && state?.id) {
      // Fetch quiz data based on ID
      // This is dummy data - replace with actual API call
      setQuizData({
        id: state.id,
        title: "Final Consultant Assessment Quiz",
        description: "This quiz evaluates the consultant's overall understanding of our platform and policies.",
        passingScore: 80,
        questions: [
          {
            question: "What is the primary purpose of our consultation platform?",
            options: [
              "To provide online shopping",
              "To connect experts with clients",
              "To offer educational courses",
              "To sell products"
            ],
            correctOption: 1
          },
          {
            question: "What is the maximum response time for client messages?",
            options: [
              "12 hours",
              "24 hours",
              "48 hours",
              "72 hours"
            ],
            correctOption: 1
          },
          {
            question: "Which of the following is a required document for verification?",
            options: [
              "High school diploma",
              "Professional certification",
              "Driver's license",
              "Social media profile"
            ],
            correctOption: 1
          }
        ]
      });
    } else {
      navigate('/admin/consultant-management/category-links');
    }
  }, [location, navigate]);

  return (
    <DashboardLayout pageTitle="View Final Quiz">
      <div className="container-fluid">
        <div className="dashCard">
          <Row className="mb-4 page-header">
            <Col xs={12} className="d-flex mb-4 mb-xl-0">
              <BackButton2 />
              <h2 className="mainTitle mb-0">View Final Quiz</h2>
            </Col>
          </Row>

          {quizData ? (
            <div className="quiz-content">
              <div className="section mb-4">
                <h3 className="mb-3">{quizData.title}</h3>
                <p className="description">{quizData.description}</p>
                <p className="passing-score">
                  <strong>Passing Score:</strong> {quizData.passingScore}%
                </p>
              </div>

              <div className="questions-list">
                <h4 className="mb-3">Questions</h4>
                {quizData.questions.map((question, qIndex) => (
                  <div key={qIndex} className="question-item mb-4 p-4 border rounded bg-light">
                    <h5 className="question-title mb-3">
                      Question {qIndex + 1}: {question.question}
                    </h5>
                    <div className="options-list">
                      {question.options.map((option, oIndex) => (
                        <div 
                          key={oIndex} 
                          className={`option-item p-2 mb-2 rounded ${
                            question.correctOption === oIndex ? 'bg-success text-white' : ''
                          }`}
                        >
                          {option}
                          {question.correctOption === oIndex && (
                            <span className="ms-2">(Correct Answer)</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

export default FinalQuizView; 