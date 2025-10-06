import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { images } from "../../../Assets";
import ApprovedBadge from "../../../Assets/images/approveBadge.png";
import InitialSignup from "../../../Assets/images/svg/initialSignup.svg?react";
import VideoVerification from "../../../Assets/images/svg/videVerification.svg?react";
import MeetWithAdmin from "../../../Assets/images/svg/meetingWithAdmin.svg?react";
import FinalApproval from "../../../Assets/images/svg/finalApproval.svg?react";
import Rule_Regulations from "../../../Assets/images/svg/rulesAndRegulations.svg?react";
import Tutorials from "../../../Assets/images/svg/tutorials.svg?react";
import WaitResult from "../../../Assets/images/svg/waitForResult.svg?react";
import MakeDecision from "../../../Assets/images/svg/makeDecision.svg?react";
import CustomButton from "../../../Components/CustomButton";
import { useAuth } from "../../../Hooks/useAuth";
import { usePageTitleUser } from "../../../Utils/helper";
import "./style.css";
const ScreeningHome = () => {
  usePageTitleUser("Home");
  const { token } = useAuth();
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      title: "initial Sign-Up page application",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
      date: "20/02/2025",
      status: "open",
      icon: <InitialSignup />,
      cardBg: "#FEF7E6",
      approved: ApprovedBadge,
      link_path: "/video-verification",
    },
    {
      id: 2,
      title: "Video Verification",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <VideoVerification />,
      cardBg: "#EFF8F8",
      link_path: "/video-verification ",
    },
    {
      id: 3,
      title: "Live meeting with the admin ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <MeetWithAdmin />,
      cardBg: "#F1FAEE",
      link_path: "/meeting-admin",
    },
    {
      id: 4,
      title: "Final Approval",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <FinalApproval />,
      highlight: true,
      cardBg: "#D1E6E1",
      link_path: "/final-quiz",
    },
    {
      id: 5,
      title: "Rules & Regulations",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <Rule_Regulations />,
      highlight: true,
      cardBg: "#EFF8F8",
      link_path: "/rules-regulations",
    },
    {
      id: 6,
      title: "Tutorials",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <Tutorials />,
      cardBg: "#E1FFCA",
      link_path: "/tutorials",
    },
    {
      id: 7,
      title: "Wait For Result",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <WaitResult />,
      cardBg: "#F1FAEE",
      link_path: "",
    },
    {
      id: 8,
      title: "Make your decision ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <MakeDecision />,
      cardBg: "rgba(21, 53, 94, 0.20)",
      link_path: "",
    },
    // final-quiz
  ];
  return (
    <>
      <section className="hero-banner">
        <div className="header-slide position-relative">
          <img
            className="img-fluid banner-image"
            src={images.BannerImg}
            alt="Hero Banner"
          />
          <div className="slide-content-wrap container-fluid">
            <div className="slide-content">
              <h2 className="section-title fw-bold mt-5 text-capitalize">
                Consult. Grow. Succeed – Book Your Session Now!
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="p-sm-5 p-2">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <h2 className="fw-bold mb-3">Screening</h2>
              {steps.map((step, index) => (
                <div
                  className={`position-relative timeline-container d-flex ${
                    index === 0
                      ? "first-step"
                      : index === steps.length - 1
                      ? "last-step"
                      : ""
                  }`}
                  key={step.id}
                >
                  {/* Numbered Circle */}
                  <div className={`timeline-step flex-shrink-0`}>
                    <div className={`step-circle flex-shrink-0`}>
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div
                    className={`step_card p-md-4 p-3 flex-grow-1`}
                    style={{ backgroundColor: step.cardBg }}
                    onClick={() => navigate(step.link_path)}
                  >
                    <div className="d-flex flex-md-row flex-column align-items-md-center gap-md-3">
                      <div className="flex-shrink-0">{step.icon}</div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-between gap-2">
                          <div>
                            <div className="d-flex align-items-end gap-4 mb-2">
                              <h4 className="mb-0 step-title">{step.title}</h4>
                              {step.approved && (
                                <img
                                  src={step.approved}
                                  className="approved-badge"
                                  alt=""
                                />
                              )}
                            </div>
                            <p className="mb-0" style={{ color: "#333" }}>
                              {step.description}
                            </p>
                          </div>
                          <div className="text-end">
                            {step.date && (
                              <p
                                className="mb-md-3 mb-0"
                                style={{ color: "#333" }}
                              >
                                Date: {step.date}
                              </p>
                            )}
                            {step.status === "open" && (
                              <CustomButton
                                variant="primary"
                                className=" min-width-160"
                                text="Open"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ScreeningHome;
