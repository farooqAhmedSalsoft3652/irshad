import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../../Components/BackButton";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import {
  appointmentLogsData,
  consultantAppointmentLogsData,
  consultantServiceAppointmentLogsData,
} from "../../../../Config/data";
import {
  dateFormat,
  getCountryFlag,
  isNullOrEmpty,
} from "../../../../Utils/helper";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";

const ConsultantServiceBookingDetails = () => {
  const { serviceId, id } = useParams();

  const [appointmentDetails, setAppointmentDetails] = useState();

  // useEffect(() => {
  //   const getAppointmentDetails = async () => {
  //     let response;
  //     if (serviceId) {
  //       const response = appointmentLogsData?.detail?.data?.find(
  //         (app) => app.id === serviceId
  //       );
  //     }
  //     // else if (id) {
  //     //   response = appointmentLogsData?.detail?.data?.find(
  //     //     (app) => String(app.id) === String(id)
  //     //   );
  //     // }

  //     if (response) {
  //       setAppointmentDetails(response.detail);
  //     }
  //   };

  //   getAppointmentDetails();
  // }, [id, serviceId, appointmentLogsData]);
  useEffect(() => {
    const getAppointmentDetails = () => {
      let response;

      if (serviceId) {
        // Jab URL me serviceId ho
        response = consultantServiceAppointmentLogsData?.detail?.data?.find(
          (app) => String(app.id) === String(serviceId)
        );
      } else if (id) {
        // Jab serviceId nahi ho, lekin id ho
        response = consultantAppointmentLogsData?.detail?.data?.find(
          (app) => String(app.id) === String(id)
        );
      }

      if (response) {
        setAppointmentDetails(response);
      }
    };

    getAppointmentDetails();
  }, [id, serviceId, appointmentLogsData]);

  // console.log("appointmentDetails", appointmentDetails);
  // console.log("appointment Id", serviceId);

  if (isNullOrEmpty(appointmentDetails)) {
    return (
      <DashboardLayout pageTitle="Appointment Details">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 ">
              <div className="row my-4">
                <div className="col-12 d-flex">
                  <BackButton2 />
                  <h2 className="mainTitle mb-0">Booking Details</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="dashCard">...</div>
        </div>
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout pageTitle="Appointment Details">
      <div className="container-fluid">
        <div className="dashCard">
          <Row>
            <Col xs={12} className="d-flex mb-3 mb-lg-4 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">Booking Details</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="d-flex flex-md-row flex-column">
                <div className="flex-grow-1 order-1 order-md-0">
                  <Row>
                    <Col xl={12} xxl={10}>
                      <Row>
                        {[
                          {
                            label: "Booking ID",
                            value: appointmentDetails.appointment_iD,
                          },
                          {
                            label: "Booking Date",
                            value: dateFormat(appointmentDetails.booking_date),
                          },
                        ].map(({ label, value }) => (
                          <Col
                            xs={12}
                            md={6}
                            lg={6}
                            xl={4}
                            className="mb-3 mb-lg-4"
                            key={label}
                          >
                            <div className="detail-box">
                              <h6 className="">{label}</h6>
                              <p className="mb-0">
                                {label === "Contact No:" && (
                                  <span>{getCountryFlag(value)}</span>
                                )}{" "}
                                {value}
                              </p>
                            </div>
                          </Col>
                        ))}
                      </Row>
                      <Row>
                        {[
                          {
                            label: "Session Type",
                            value: appointmentDetails.session_type,
                          },
                          {
                            label: "Category",
                            value: appointmentDetails.category,
                          },
                          {
                            label: "Sub Category",
                            value: appointmentDetails.category,
                          },
                          {
                            label: "Appointment Date",
                            value: dateFormat(
                              appointmentDetails?.appointment_date
                            ),
                          },
                          {
                            label: "Appointment Time",
                            value: appointmentDetails?.appointment_time,
                          },
                          {
                            label: "Appointment Charges",
                            value: appointmentDetails?.charges,
                          },
                          {
                            label: "User Name",
                            value: appointmentDetails?.user?.name,
                          },
                          {
                            label: "Contact Number",
                            value: appointmentDetails?.phone,
                          },
                          {
                            label: "Email Address",
                            value: appointmentDetails?.email,
                          },
                        ].map(({ label, value }) => (
                          <Col
                            xs={12}
                            md={6}
                            // lg={6}
                            xl={4}
                            className="mb-3 mb-lg-4"
                            key={label}
                          >
                            <div className="detail-box">
                              <h6 className="">{label}</h6>
                              <p className="mb-0">
                                {label === "Contact Number" && (
                                  <span className="me-2 d-inline-block lh-1">
                                    {getCountryFlag(value)}
                                  </span>
                                )}
                                {value}
                              </p>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </div>
                <div className="flex-shrink-0 ps-lg-5 mb-2 mb-lg-0">
                  <label style={{ color: "#666" }} className="fw-medium">
                    Status
                  </label>
                  <span
                    style={{
                      color:
                        appointmentDetails.status === "Upcoming"
                          ? "#FDB332"
                          : appointmentDetails.status === "Completed"
                          ? "#004126"
                          : appointmentDetails.status === "Past"
                          ? "#004126"
                          : "",
                    }}
                    className={`ms-3 fw-semibold`}
                  >
                    {appointmentDetails?.status}
                  </span>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-md-3 mt-0">
            <Col xxl={8}>
              <Row>
                <Col md={6} className="mb-md-0 mb-3">
                  <h2 className="mb-2">User Detail</h2>
                  <div className="booking-detail-card">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="d-flex gap-sm-3 gap-2 align-items-center">
                        <img
                          className="smallProfileImage"
                          src={appointmentDetails?.user?.photo}
                          alt="user photo"
                        />
                        <h4 style={{ fontSize: 18 }} className="mb-0">
                          {appointmentDetails?.user?.name}
                        </h4>
                      </div>
                      <div className="">
                        <Link
                          style={{ fontSize: 14 }}
                          to={`/admin/user-management/${appointmentDetails?.user?.id}`}
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-md-0 mb-3">
                  <h2 className="mb-2">Consultant Detail</h2>
                  <div className="booking-detail-card">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="d-flex gap-sm-3 gap-2 align-items-center">
                        <img
                          className="roundedBorders smallProfileImage"
                          src={appointmentDetails?.consultant?.photo}
                          alt="user photo"
                        />
                        <h4 style={{ fontSize: 18 }} className="mb-0">
                          {appointmentDetails?.consultant?.name}
                        </h4>
                      </div>
                      <div className="">
                        {/* <Link style={{ fontSize: 14 }} to={`/admin/consultant/${appointmentDetails?.consultant?.id}`}> */}
                        <Link style={{ fontSize: 14 }}>View Details</Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          {appointmentDetails?.status === "Past" && (
            <Row className="mt-3">
              <Col xs={12}>
                <h2>Rating</h2>
                {Array(parseInt(appointmentDetails?.ratings))
                  .fill()
                  .map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      size="xl"
                      style={{ color: "#FFA929", cursor: "pointer" }}
                    />
                  ))}
              </Col>
              <Col xxl={5} className="mt-3">
                <div className="detail-box">
                  <h6>Review</h6>
                  <p className="mb-0">{appointmentDetails?.review}</p>
                </div>
              </Col>
            </Row>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ConsultantServiceBookingDetails;
