import { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import { newRequestConsultantData } from "../../../../Config/data";
import TestVideo from "../../../../Assets/images/video_dummy.mp4";
import { FaPlay } from "react-icons/fa";
import { images } from "../../../../Assets";
const ConsultantScreeningVideo = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    const getConsultantData = async () => {
      // const response = await getDetails(`/admin-api/users/${id}`);
      const response = newRequestConsultantData.detail.data.find(
        (e) => e.id === id
      );

      if (response) {
        setData(response);
      }
    };
    getConsultantData();
  }, [id]);

  console.log("data", data);
  return (
    <DashboardLayout pageTitle="Consultant Screening Video">
      <div className="container-fluid Screening-video">
        <div className="dashCard">
          <Row>
            <Col xs={12} className="d-flex mb-4 mb-xl-4 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">Meeting With Consultant</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} xxl={8}>
              <div className="custom-video-wrapper">
                <video
                  ref={videoRef}
                  src={TestVideo}
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
          </Row>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ConsultantScreeningVideo;
