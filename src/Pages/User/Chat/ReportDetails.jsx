import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import { chatReportDetailsData } from "../../../Config/data";
import { dateFormat, usePageTitleUser } from "../../../Utils/helper";
import CustomButton from "../../../Components/CustomButton";

const ChatReportDetails = () => {
  usePageTitleUser("Report Details");
  const { id } = useParams();
  const [chatReportData, setChatReportData] = useState({});

  const fetchReportDetails = async () => {
    const response = chatReportDetailsData?.detail?.data[0];
    // const response = await getDetails(`/admin-api/users/${id}`);
    if (response) {
      setChatReportData(response);
    }
  };
  useEffect(() => {
    fetchReportDetails();
  }, [id]);

  return (
    <>
      <Container fluid>
        <div className="py-sm-5 py-3 px-sm-0 px-1">
          <div className="site_card">
            <Row>
              <Col xs={12}>
                <div className="d-flex align-items-center flex-wrap gap-2">
                  <BackButton2 />
                  <h2 className="fw-bold page-title mb-0 mx-auto">View Report Details</h2>
                </div>
              </Col>
            </Row>
            <Row className="mt-md-5 mt-3">
              <Col xs={12}>
                <h2 className="fw-bold page-title mb-4">Booking Details</h2>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">Booking ID:</h6>
                  <p style={{ color: "#727A84" }}>{chatReportData?.booking_id}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">Booking Date:</h6>
                  <p style={{ color: "#727A84" }}>{dateFormat(chatReportData?.booking_date)}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">Appointment Date:</h6>
                  <p style={{ color: "#727A84" }}>{chatReportData?.appointment_date}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">Appointment Time:</h6>
                  <p style={{ color: "#727A84" }}>{chatReportData?.appointment_time}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">Appointment Charges:</h6>
                  <p style={{ color: "#727A84" }}>{chatReportData?.appointment_charges}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">Session Type:</h6>
                  <p style={{ color: "#727A84" }}>{chatReportData?.session_type}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">Category:</h6>
                  <p style={{ color: "#727A84" }}>{chatReportData?.category}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">Sub-Category:</h6>
                  <p style={{ color: "#727A84" }}>{chatReportData?.sub_category}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">User Name:</h6>
                  <p style={{ color: "#727A84" }}>{chatReportData?.user_name}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">User Contact No:</h6>
                  <p style={{ color: "#727A84" }}>{chatReportData?.user_number}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">User Email:</h6>
                  <p style={{ color: "#727A84" }}>{chatReportData?.user_email}</p>
                </div>
              </Col>
              <Col xs={12}>
                <Link to={`/appointments/${chatReportData?.id}`} className="siteBtn primaryBtn">View Booking</Link>
              </Col>
            </Row>
            <Row className="mt-md-4 mt-3">
              <Col xs={12} xl={9}>
                <Row>
                  <Col xs={12}>
                    <h2 className="fw-bold page-title mb-4">Report Details</h2>
                  </Col>
                  <Col xs={12} xxl={4}>
                    <div>
                      <h6 className="fw-medium mb-2">Report Date:</h6>
                      <p style={{ color: "#727A84" }}>{dateFormat(chatReportData?.report_date)}</p>
                    </div>
                  </Col>
                  <Col xs={12} xxl={8}>
                    <div>
                      <h6 className="fw-medium mb-2">Message:</h6>
                      <p style={{ color: "#727A84" }}>{chatReportData?.message}</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ChatReportDetails;
