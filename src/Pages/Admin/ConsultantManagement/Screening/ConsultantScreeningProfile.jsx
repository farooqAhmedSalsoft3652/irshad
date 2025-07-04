import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { images } from "../../../../Assets";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomButton from "../../../../Components/CustomButton";
import ImageGallery from "../../../../Components/ImageGallery/ImageGallery";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import { newRequestConsultantData } from "../../../../Config/data";
import withModal from "../../../../HOC/withModal";
import { getCountryFlag, statusClassMap } from "../../../../Utils/helper";

const ConsultantScreeningProfile = ({ showModal, reasonModal }) => {
  const { id } = useParams();
  const [consultantProfile, setConsultantProfile] = useState({});

  useEffect(() => {
    const getConsultantProfile = async () => {
      const response = newRequestConsultantData.detail.data.find(
        (e) => e.id === id
      );

      // const response = await getDetails(`/admin-api/users/${id}`);
      if (response) {
        // setConsultantProfile(response.detail);
        setConsultantProfile(response);
      }
    };
    getConsultantProfile();
  }, [id]);

  // console.log(consultantProfile, "consultantProfile");
  // Handle status change
  const handleStatusChange = (e, id) => {
    const newStatusValue = e;
    console.log(newStatusValue);
    // Open the modal for confirmation
    if (newStatusValue === "Rejected") {
      reasonModal(
        "", //heading
        `Are you sure you want to Reject this Consultant?`, //para
        (reason) => onConfirmStatusChange(id, newStatusValue, reason), //action
        false, //success
        true, //reason
        "Reject Consultant",
        "Please provide a reason for rejection"
      );
    } else {
      showModal(``, `Are you sure you want to Approve this Consultant?`, () =>
        onConfirmStatusChange(id, newStatusValue)
      );
    }
  };

  // Confirm status change and update the state
  const onConfirmStatusChange = async (id, newStatusValue, reason = "") => {
    console.log({ reason });
    // Update the status in the appointmentLogs state
    if (reason) {
      setConsultantProfile({
        ...consultantProfile,
        status: newStatusValue,
        rejectionReason: reason,
      });
    } else {
      setConsultantProfile({
        ...consultantProfile,
        status: newStatusValue,
      });
    }
    showModal(
      "",
      `Consultant Has Been ${
        newStatusValue === "Approved" ? "Approved" : "Rejected"
      } Successfully!`,
      null,
      true
    );
  };

  return (
    <>
      <DashboardLayout pageTitle="Consultant Profile">
        <div className="container-fluid consultant-management">
          <div className="dashCard">
            <Row>
              <Col xs={12} className="d-flex mb-4 mb-xl-5 gap-2">
                <BackButton2 />
                <h2 className="mainTitle mb-0">Consultant Profile</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                {/* Personal Detail */}
                <Row className="mb-4">
                  <Col md={12} lg={10} xl={8} xxl={6}>
                    <Row>
                      <Col xs={12}>
                        <h5 className="section-title mb-3">Personal Detail</h5>
                      </Col>

                      <Col xs={12} className="mb-2">
                        <div className="detail-box">
                          <h6 className="">About</h6>
                          <p className="mb-0">{consultantProfile.bio}</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                {/* Educational Detail */}
                {consultantProfile.education &&
                  consultantProfile.education.length > 0 && (
                    <Row className="mb-3">
                      <Col md={12} lg={10} xl={8} xxl={7}>
                        <Row>
                          <Col xs={12}>
                            <h5 className="section-title mb-3">
                              Educational Detail
                            </h5>
                          </Col>
                        </Row>
                        {consultantProfile.education.map((edu, index) => (
                          <Row key={index}>
                            {[
                              {
                                label: "Institute Name",
                                value: edu.institute_name,
                              },
                              {
                                label: "Degree Title",
                                value: edu.degree_title,
                              },
                              {
                                label: "Year",
                                value: `${edu.start_year} - ${edu.end_year}`,
                              },
                            ].map(({ label, value }) => (
                              <Col
                                xs={12}
                                md={4}
                                className="mb-3 mb-lg-4"
                                key={label}
                              >
                                <div className="detail-box">
                                  <h6>{label}</h6>
                                  <p className="mb-0">{value}</p>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        ))}
                      </Col>
                    </Row>
                  )}

                {/* Work Experience */}
                {consultantProfile.work_experience &&
                  consultantProfile.work_experience.length > 0 && (
                    <Row className="mb-3">
                      <Col md={12} lg={10} xl={8} xxl={7}>
                        <Row>
                          <Col xs={12}>
                            <h5 className="section-title mb-3">
                              Work Experience
                            </h5>
                          </Col>
                        </Row>

                        {consultantProfile.work_experience.map(
                          (work, index) => (
                            <Row key={index}>
                              {[
                                {
                                  label: "Organization Name",
                                  value: work.organization_name,
                                },
                                {
                                  label: "Designation",
                                  value: work.designation,
                                },
                                {
                                  label: "Year",
                                  value: `${work.start_year} - ${work.end_year}`,
                                },
                              ].map(({ label, value }) => (
                                <Col
                                  xs={12}
                                  md={4}
                                  className="mb-3 mb-lg-4"
                                  key={label}
                                >
                                  <div className="detail-box">
                                    <h6>{label}</h6>
                                    <p className="mb-0">{value}</p>
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          )
                        )}
                      </Col>
                    </Row>
                  )}
                {/* Certification Detail */}
                {consultantProfile.certification &&
                  consultantProfile.certification.length > 0 && (
                    <Row className="">
                      <Col md={12} lg={10} xl={8} xxl={7}>
                        <Row>
                          <Col xs={12}>
                            <h5 className="section-title mb-3">
                              Certification Detail
                            </h5>
                          </Col>
                        </Row>
                        {consultantProfile?.certification?.map(
                          (certificate, index) => (
                            <Row
                              key={index}
                              className={
                                consultantProfile.certification.length > 1
                                  ? "mb-4"
                                  : "" // empty if only one
                              }
                            >
                              {[
                                {
                                  label: "Institute Name",
                                  value: certificate.institute,
                                },
                                {
                                  label: "Certificate Title",
                                  value: certificate.certificateTitle,
                                },
                              ].map(({ label, value }) => (
                                <Col
                                  xs={12}
                                  md={4}
                                  className="mb-3 mb-lg-3"
                                  key={label}
                                >
                                  <div className="detail-box">
                                    <h6 className="">Institute Name</h6>
                                    <p className="mb-0">
                                      {certificate.institute}
                                    </p>
                                  </div>
                                </Col>
                              ))}
                              <Col xs={12} className="mb-3 mb-lg-4">
                                <ImageGallery
                                  images={[certificate?.photo]}
                                  maxWidth={300}
                                  className="certificate-img"
                                />
                              </Col>
                            </Row>
                          )
                        )}
                      </Col>
                    </Row>
                  )}
                {consultantProfile?.status?.toLowerCase() == "rejected" && (
                  <Row>
                    <Col md={12} xxl={6} xl={8} lg={10}>
                      <Row>
                        <Col xs={12} className="mb-2">
                          <div className="detail-box">
                            <h6>Rejection Reason</h6>
                            <p>{consultantProfile?.rejectionReason}</p>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                )}
              </Col>
            </Row>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default withModal(ConsultantScreeningProfile);
