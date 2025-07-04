import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { images } from "../../../../Assets";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomButton from "../../../../Components/CustomButton";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import { consultantScreeningData } from "../../../../Config/data";
import {
  dateFormat,
  getCountryFlag,
  timeFormat2,
} from "../../../../Utils/helper";

const ConsultantScreeningMeetingDetails = () => {
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
            <Col xs={12} className="d-flex mb-4 mb-xl-5 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">Admin's Meeting 123</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={12}>
                  <div className="d-flex flex-column flex-md-row align-items-center mb-4">
                    <div className="user-avater">
                      <img
                        src={screeningData?.userImage ?? images.placeholder}
                        alt="User"
                        className="rounded-circle"
                      />
                    </div>
                  </div>
                </Col>
              </Row>

              {/* Basic Information */}
              <Row>
                <Col md={12} lg={12} xl={10} xxl={8}>
                  <Row>
                    {[
                      {
                        label: "User Name",
                        value: screeningData.name,
                      },
                      {
                        label: "Email Address",
                        value: screeningData.email,
                      },
                      {
                        label: "Contact Number",
                        value: screeningData.phoneNo,
                      },
                      {
                        label: "Meeting Date",
                        value: dateFormat(screeningData.registration_date),
                      },
                      {
                        label: "Meeting time",
                        value: timeFormat2(screeningData.appointment_time),
                      },
                    ].map(({ label, value }) => (
                      <Col
                        xs={12}
                        md={6}
                        lg={6}
                        xxl={4}
                        className="mb-3 mb-lg-4"
                        key={label}
                      >
                        <div className="detail-box">
                          <h6>{label}</h6>
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

                  <Row>
                    <Col
                      xs={12}
                      className="d-flex gap-2 flex-column flex-sm-row"
                    >
                      <Link
                        className="btn btn-primary min-width-220 px-3"
                        to={`/admin/consultant-management/consultant-screening/${id}/meeting`}
                      >
                        Join Session
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ConsultantScreeningMeetingDetails;
