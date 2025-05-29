import { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { BiPlayCircle } from "react-icons/bi";
import VideoVerificationQuiz from "../../../Assets/images/videoVerificationQuiz.png";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import { usePageTitleUser } from "../../../Utils/helper";
import CustomModal from "../../../Components/CustomModal";
import VidThumbnail from "../../../Assets/images/videoThumbnail.png";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Tutorials = () => {
  usePageTitleUser("Tutorials");
  const [show, setShow] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const handleShow = (videoSrc) => {
    setActiveVideo(videoSrc);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setActiveVideo(null);
  };
  const videos = [
    {
      id: 1,
      thumbnail: VidThumbnail,
      src: "https://videos.pexels.com/video-files/32080458/13674775_640_360_25fps.mp4",
    },
    {
      id: 2,
      thumbnail: VidThumbnail,
      src: "https://videos.pexels.com/video-files/8276045/8276045-sd_640_360_24fps.mp4",
    },
    {
      id: 3,
      thumbnail: VidThumbnail,
      src: "https://videos.pexels.com/video-files/31365150/13384285_640_360_60fps.mp4",
    },
    {
      id: 4,
      thumbnail: VidThumbnail,
      src: "https://videos.pexels.com/video-files/31531557/13439703_360_640_60fps.mp4",
    },
    {
      id: 5,
      thumbnail: VidThumbnail,
      src: "https://videos.pexels.com/video-files/30986296/13247012_640_360_24fps.mp4",
    },
    {
      id: 6,
      thumbnail: VidThumbnail,
      src: "https://videos.pexels.com/video-files/32080458/13674775_640_360_25fps.mp4",
    },
  ];

  return (
    <Container fluid>
    <div className="py-sm-5 py-3 px-sm-0 px-1">
      <div className="site_card">
        <div className="d-flex flex-wrap align-items-center mb-3">
          <BackButton2 />
          <h2 className="mx-auto fw-bold mb-0">Tutorials</h2>
        </div>
        <div className="mb-3">
          <img src={VideoVerificationQuiz} alt="video-quiz" className="img-fluid w-100" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
          commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
          luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
        </p>
        <Row>
          {videos?.map((video) => (
            <Col xs={12} md={6} xxl={4} className="mb-4" key={video.id}>
              <div className="video-card position-relative" onClick={() => handleShow(video.src)} style={{ cursor: "pointer" }}>
                <img src={video.thumbnail} alt={`video-${video.id}`} className="img-fluid w-100 rounded" />
                <div className="playVidBtn">
                  <BiPlayCircle />
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div>
          <button className="siteBtn primaryBtn" type="button">
            Continue
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <button className="closeButton" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <Modal.Body className="pt-0">
          {activeVideo && (
            <video className="rounded" width="100%" height="auto" controls={false} autoPlay loop>
              <source src={activeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Modal.Body>
      </Modal>
    </div>
    </Container>
  );
};

export default Tutorials;
