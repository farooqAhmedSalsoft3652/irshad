import React, { useEffect, useState } from 'react'
import { Col, Container, Row,  } from 'react-bootstrap'
import { images } from '../../../Assets'
import CustomButton from '../../../Components/CustomButton';
import {  bookingsData, } from '../../../Config/data';
import {  useNavigate, useParams } from 'react-router-dom';
import BackButton2 from '../../../Components/BackButton/BackButton2';
import { usePageTitle } from '../../../Utils/helper';
import withModal from '../../../HOC/withModal';
import "./style.css";


const JoinSession = ({showModal }) => {
  usePageTitle("Booking Session", true);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  const fetchBookings = async () => {
    const response = bookingsData.detail.data.find((e) => e.id === Number(id));
    // const response = await getDetails(`/admin-api/users/${id}`);
    if (response) {
      setData(response);
    }
  };
  useEffect(() => {
    fetchBookings();
  }, [id]);

  const onLeaveSession = async () => {
    showModal(
      "Leave Session",
      "Are you sure you want to leave the session?",
      () => updateLeaveSession(id),
      false 
    );
  };
  const updateLeaveSession = async (status, id) => {
    showModal(
      `successful`,
      `Session Leave successfully.`,
      () => navigate('/bookings'),
      true,
    );
  };

  return (
    <>
    <section className="page-content session-screen pt-3 pt-lg-4 pb-3 pb-lg-4">
      <header className="d-flex booking-detail-header mb-2 mb-xl-2 mb-xxl-4 pb-3">
        <Container fluid>
          <Row>
            <Col xs={12} className="d-flex justify-content-between">
              <div className="flex-grow-1 d-flex">
                <BackButton2 className="me-2" />
                {data?.booking_id && (
                  <h2 className="fw-bold text-black mb-0 page-title">
                    Booking Id <span className="fw-medium">{data?.booking_id}</span>
                  </h2>
                )}
              </div>
              {data?.provider_name && (
                <div className="flex-shrink-0 align-self-center">
                  <div className="status-primary d-flex align-items-center">
                    <span className="fw-semibold">Service Provider:</span>
                    <p className="ms-2 mb-0 fw-medium status-tag text-capitalize">{data.provider_name}</p>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </header>
      <main className="bg-black pt-3 pb-4">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <img src={images.sessionScreen} alt="Session screen" />
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="session-footer pt-4">
        <Container fluid>
          <Row>
            <Col xs={12} className="d-flex justify-content-center">
              <CustomButton
                variant="btn-red"
                className="btn min-width-220"
                onClick={onLeaveSession}
              >
                Leave
              </CustomButton>
            </Col>
          </Row>
        </Container>
      </footer>
    </section>
    </>
  )
}

export default withModal(JoinSession)