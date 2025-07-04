import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { newRequestConsultantData } from "../../../../../Config/data";
import { useFormStatus } from "../../../../../Hooks/useFormStatus";
import { isNullOrEmpty } from "../../../../../Utils/helper";
import { Link, useParams } from "react-router-dom";

const VideoVerificationTab = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  const fetchTabsData = async () => {
    try {
      startSubmitting(true);
      const response = newRequestConsultantData.detail.data.find(
        (e) => e.id === id
      );

      if (response) {
        setData(response);
      }
    } catch (error) {
      console.error("Error fetching reports:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    fetchTabsData();
  }, [id]);

  if (isNullOrEmpty(data)) {
    return (
      <div className="dashCard mt-4">
        <div className="row mb-3">
          <div className="col-12">loading...</div>
        </div>
      </div>
    );
  }

  console.log("data Video", data);
  return (
    <Row>
      <Col xs={12} lg={11} xl={8} xxl={7}>
        <Row>
          <Col xxl={4}>
            <h3>Quiz</h3>
          </Col>
          <Col xxl={4}>
            <Link
              className="fw-semibold"
              to={`/admin/consultant-management/final-report/${id}/video`}
            >
              Open Video
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xxl={4} className="detail-box">
            <h6>Gain Marks</h6>
            <p className="mb-0">{data.gainMarks}</p>
          </Col>
          <Col xxl={4} className="detail-box">
            <h6>Passing Marks</h6>
            <p className="mb-0">{data.passingMarks}</p>
          </Col>
          <Col xxl={4} className="detail-box">
            <h6 className="text-secondary">Total Marks</h6>
            <p className="mb-0 text-secondary">{data.totalMarks}</p>
          </Col>
        </Row>

        {data?.questions?.map((q, index) => (
          <Row key={index} className="question-row mt-4">
            <Col className="mb-3">
              <h3>Question {q.questionNo}</h3>
            </Col>

            <Col xs={12} className="detail-box mb-3">
              <h6>Question:</h6>
              <p className="mb-0">{q.question}</p>
            </Col>

            {["A", "B", "C", "D"].map((optKey) => {
              const isSelected = q.selectedAnswer === optKey;
              const isCorrect = q.answer === q.options[optKey];

              return (
                <Col xs={12} className="detail-box mb-3" key={optKey}>
                  <h6>Option {optKey}:</h6>
                  <p
                    className={`mb-0 p-2 rounded ${
                      isSelected
                        ? isCorrect
                          ? "fw-bold text-primary"
                          : ""
                        : ""
                    }`}
                  >
                    {q.options[optKey]}
                  </p>
                </Col>
              );
            })}

            <Col xs={12} className="detail-box mb-3">
              <h6>Correct Answer:</h6>
              <p className="mb-0">{q.answer}</p>
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  );
};

export default VideoVerificationTab;
