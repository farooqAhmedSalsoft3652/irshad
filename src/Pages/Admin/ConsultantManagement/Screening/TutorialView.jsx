import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomButton from "../../../../Components/CustomButton";
import VidThumbnail from "../../../../Assets/images/videoThumbnail.png";
import TestVideo from "../../../../Assets/images/video_dummy.mp4";
import { images } from "../../../../Assets";
import { FaPlay } from "react-icons/fa";

const TutorialAddView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [tutorialData, settutorialData] = useState(null);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const tutorialData = {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. ",
    poster: VidThumbnail,
    video: TestVideo,
    answerType: ["Image"],
  };

  return (
    <DashboardLayout pageTitle="View Tutorial">
      <div className="container-fluid">
        <div className="dashCard">
          <Row className="mb-2 page-header">
            <Col xs={12} className="d-flex mb-4 mb-xl-4 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">View Tutorial</h2>
            </Col>
          </Row>

          {tutorialData ? (
            <Row>
              <Col xs={12} md={10} xl={8} xxl={7}>
                <Row>
                  <Col md={9} xxl={8} className="detail-box mb-3">
                    <p className="mb-0">{tutorialData.text}</p>
                  </Col>
                  <Col md={9} xxl={8} className="rules-image-edit mb-3">
                    <label for="comments" class="form-label ">
                      Image
                    </label>
                    <div className="rules-image">
                      <img
                        src={tutorialData.poster}
                        alt=""
                        className="img-fluid w-100 rounded-4"
                      />
                    </div>
                  </Col>
                  <Col md={9} xxl={8} className="detail-box mb-3">
                    <label for="comments" class="form-label ">
                      Video
                    </label>
                    <div className="custom-video-wrapper">
                      <video
                        ref={videoRef}
                        src={tutorialData.video}
                        poster={images.videoPoster}
                        className="custom-video"
                        controls={isPlaying}
                        onEnded={() => setIsPlaying(false)}
                        onPause={(e) => {
                          if (e.target.currentTime !== e.target.duration) {
                            setIsPlaying(false);
                          }
                        }}
                      />
                      {!isPlaying && (
                        <>
                          <div className="video-overlay" />
                          <button className="play-button" onClick={handlePlay}>
                            <FaPlay size={32} color="#fff" />
                          </button>
                        </>
                      )}
                    </div>
                  </Col>
                  <Col xs={12}>
                    <CustomButton
                      variant="btn btn-primary min-width-180 me-2"
                      text="Edit"
                      onClick={() =>
                        navigate(
                          `/admin/consultant-management/edit-tutorial/${tutorialData.id}`,
                          {
                            state: {
                              ...location.state,
                              id: tutorialData.id,
                            },
                          }
                        )
                      }
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
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

export default TutorialAddView;
