import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import { consultantScreeningData } from "../../../../Config/data";
import VideoCall from "../../../../Assets/images/dummy-video-screen.png";
import VideoCallButtons from "../../../../Assets/images/video-action-btns.png";

const ConsultantScreeningSession = () => {
  const { id } = useParams();
  const [screeningData, setScreeningData] = useState({});

  useEffect(() => {
    const getConsultantData = async () => {
      // const response = await getDetails(`/admin-api/users/${id}`);
      const response = consultantScreeningData.detail.data.find(
        (e) => e.id === id
      );

      if (response) {
        setScreeningData(response);
      }
    };
    getConsultantData();
  }, [id]);

  console.log("data", screeningData);
  return (
    <DashboardLayout pageTitle="Consultant Screening Details">
      <div className="container-fluid consultant-management">
        <div className="dashCard">
          <Row>
            <Col xs={12} className="d-flex mb-4 mb-xl-4 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">Meeting With Consultant</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} xxl={8}>
              <div className="videocall-bg p-4">
                <div className="video-screen">
                  <img
                    src={VideoCall}
                    alt="join-session"
                    className="img-fluid"
                  />
                </div>
                <div className="video-action-buttons mt-3 mb-2 text-center">
                  <img src={VideoCallButtons} alt="join-session" className="" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ConsultantScreeningSession;
