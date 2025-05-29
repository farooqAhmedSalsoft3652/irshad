import { useState } from "react";
import { Container, Form, FormCheck } from "react-bootstrap";
import VideoVerificationQuiz from "../../../Assets/images/videoVerificationQuiz.png";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomModal from "../../../Components/CustomModal";
import { usePageTitleUser } from "../../../Utils/helper";
import "./index.css";

const VideoVerification = () => {
  usePageTitleUser("Video Verification");
  const [modal, setModal] = useState(false);
  const [answers, setAnswers] = useState({});

  const questions = [
    { id: 1, text: "Lorem ipsum dolor sit amet.", time: "1:59" },
    { id: 2, text: "Consectetur adipiscing elit.", time: "2:09" },
    { id: 3, text: "Aenean euismod bibendum.", time: "2:06" },
    { id: 4, text: "Proin gravida dolor sit amet.", time: "2:00" },
    { id: 5, text: "Vestibulum lorem.", time: "2:45" },
    { id: 5, text: "Vestibulum lorem.", time: "2:30" },
  ];

  const handleOptionChange = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Selected Answers:", answers);
    setModal(true);
    setAnswers({});
  };
  return (
    <Container fluid>
    <div className="py-sm-5 py-3 px-sm-0 px-1">
      <div className="site_card">
        <div className="d-flex align-items-center flex-wrap mb-3">
          <BackButton2 />
          <h2 className="mx-auto fw-bold mb-0">Video Verification Quiz</h2>
        </div>
        <div className="mb-3">
          <img src={VideoVerificationQuiz} alt="video-quiz" className="img-fluid w-100" />
        </div>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
          commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
          luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
        </p>
        <Form onSubmit={handleSubmit} className="mt-sm-5">
          <div className="row">
            {questions.map((q) => (
              <div key={q.id} className="mb-3 col-md-5">
                <div className="d-flex justify-content-between align-items-center">
                  <h6>Question {q.id}</h6>
                  <small style={{ color: "#999" }}>{q.time}</small>
                </div>
                <p style={{ color: "#999" }}>{q.text}</p>
                <div className="d-flex gap-3 flex-wrap">
                  {["A", "B", "C", "D"].map((opt) => (
                    <FormCheck
                      key={opt}
                      type="radio"
                      id={`q${q.id}-${opt}`}
                      label={`Option ${opt}`}
                      name={`question${q.id}`}
                      value={opt}
                      onChange={() => handleOptionChange(q.id, opt)}
                      checked={answers[q.id] === opt}
                    />
                  ))}
                </div>
              </div>
            ))}

            <div>
              <button className="siteBtn primaryBtn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </Form>
      </div>
      <CustomModal
        show={modal}
        action={() => {
          setModal(false);
        }}
        close={() => setModal(false)}
        para="Meeting With Admin done successfully. Please wait for the admin approval."
        success
      />
    </div>
    </Container>
  );
};

export default VideoVerification;
