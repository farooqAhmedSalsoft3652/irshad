import { useEffect, useState } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { images } from "../../../../Assets";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomButton from "../../../../Components/CustomButton";
import ImageGallery from "../../../../Components/ImageGallery/ImageGallery";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import { newRequestConsultantData } from "../../../../Config/data";
import withModal from "../../../../HOC/withModal";
import { getCountryFlag, statusClassMap } from "../../../../Utils/helper";
import VideoVerificationTab from "./Tabs/VideoVerificationTab";
import MeetingWithAdminTab from "./Tabs/MeetingWithAdminTab";
import FinalApprovalTab from "./Tabs/FinalApprovalTab";

const ConsultantScreeningDetails = ({ showModal, reasonModal }) => {
  const { id } = useParams();
  const [consultantProfile, setConsultantProfile] = useState({});
  const [activeTab, setActiveTab] = useState("videos-verification-tab");

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

  const filteredTabsData = (type) => {
    switch (type) {
      case "videos-verification-tab":
        return <VideoVerificationTab />;
      case "meeting-admin-tab":
        return <MeetingWithAdminTab />;
      case "final-approval-tab":
        return <FinalApprovalTab />;
      default:
        return [];
    }
  };
  return (
    <>
      <DashboardLayout pageTitle="Consultant Screening Detail">
        <div className="container-fluid consultant-management">
          <div className="dashCard">
            <Row>
              <Col xs={12} className="d-flex mb-4 mb-xl-5 gap-2">
                <BackButton2 />
                <h2 className="mainTitle mb-0">Consultant Screening Detail</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Row>
                  <Col xs={12}>
                    <div className="d-flex flex-column flex-md-row align-items-center mb-4">
                      <div className="user-avater">
                        <img
                          src={
                            consultantProfile?.userImage ?? images.placeholder
                          }
                          alt="User"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="flex-grow-1 d-flex flex-column align-items-start align-items-sm-end justify-content-end justify-content-sm-start gap-3 mt-3 mt-md-0">
                        <div className="profile-status d-flex align-items-end flex-column gap-3 mx-auto mx-md-0">
                          <div>
                            <label className="fw-semibold">Status</label>
                            <span
                              className={`ms-3 fw-semibold ${
                                statusClassMap[consultantProfile?.status]
                              }`}
                            >
                              {consultantProfile?.status}
                            </span>
                          </div>
                        </div>

                        <div className="d-flex flex-column gap-3">
                          {consultantProfile.status === "Pending" && (
                            <>
                              <CustomButton
                                variant="primary"
                                className="min-width-220 px-3"
                                onClick={() =>
                                  handleStatusChange(
                                    "Approved",
                                    consultantProfile?.id
                                  )
                                }
                              >
                                Approve
                              </CustomButton>
                              <CustomButton
                                variant="outline-primary"
                                className="min-width-220 px-3"
                                onClick={() =>
                                  handleStatusChange(
                                    "Rejected",
                                    consultantProfile?.id
                                  )
                                }
                              >
                                Reject
                              </CustomButton>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>

                {/* Basic Information */}
                <Row className="mb-4">
                  <Col md={12} lg={12} xl={11} xxl={10}>
                    <Row>
                      {[
                        {
                          label: "User Name",
                          value: consultantProfile.name,
                        },
                        {
                          label: "Email Address",
                          value: consultantProfile.email,
                        },
                        {
                          label: "Contact Number",
                          value: consultantProfile.phoneNo,
                        },
                        {
                          label: "Category",
                          value: consultantProfile.category,
                        },
                        {
                          label: "Language",
                          value: consultantProfile.language,
                        },
                        {
                          label: "Nationality",
                          value: consultantProfile.nationality,
                        },
                        {
                          label: "Gender",
                          value: consultantProfile.gender,
                        },
                      ].map(({ label, value }) => (
                        <Col
                          xs={12}
                          md={6}
                          lg={6}
                          xl={4}
                          xxl={3}
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
                    {consultantProfile.status?.toLowerCase() == "pending" && (
                      <Row>
                        <Col
                          xs={12}
                          className="d-flex gap-2 flex-column flex-sm-row"
                        >
                          <Link
                            to={`/admin/consultant-management/final-report/${id}/profile`}
                            className="btn btn-primary min-width-220 px-3"
                          >
                            view profile
                          </Link>
                        </Col>
                      </Row>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Tab.Container
                      defaultActiveKey="videos-verification-tab"
                      // onSelect={(key) => setActiveTab(key)} // Update active tab
                      onSelect={setActiveTab}
                    >
                      <Nav
                        variant="tabs"
                        className="mb-3 mb-xl-4 mb-xxl-4 justify-content-start rounded-tabs"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="videos-verification-tab">
                            Video Verification
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="meeting-admin-tab">
                            Meeting With Admin
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="final-approval-tab">
                            Final Approval
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey={activeTab}>
                          {filteredTabsData(activeTab)}
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default withModal(ConsultantScreeningDetails);
