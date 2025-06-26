import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import CustomButton from "../../../Components/CustomButton";
import { reportsManagementBookingData } from "../../../Config/data";
import { getCountryFlag, isNullOrEmpty, statusClassMap } from "../../../Utils/helper";
import withModal from "../../../HOC/withModal";

const ViewReport = ({ showModal }) => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [reportDetails, setReportDetails] = useState({});

  useEffect(() => {
    const getReportDetails = async () => {
      const response = reportsManagementBookingData.detail.data.find((report) => report.id === id);

      // const response = await getDetails(`/admin-api/users/${id}`);
      if (response) {
        // setServiceProvider(response.detail);
        setReportDetails(response);
      }
    };
    getReportDetails();
  }, [id]);

  // Handle status change
  const handleStatusChange = () => {
    showModal(`Mark as Resolved`, `Are you sure you want to mark this report as resolved?`, () => onConfirmStatusChange());
  };

  // Confirm status change and update the state
  const onConfirmStatusChange = async () => {
    setReportDetails({ ...reportDetails, status: "Resolved" });
    showModal("Successful", `Report has been resolved successfully!`, ()=>navigate("/admin/reports-management?tab=booking" ), true);
  };

  if (isNullOrEmpty(reportDetails)) {
    return (
      <DashboardLayout pageTitle="View Report">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 ">
              <div className="row my-4">
                <div className="col-12 d-flex">
                  <BackButton url="/admin/reports-management?tab=booking" />
                  <h2 className="mainTitle mb-0">View Report</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="dashCard">loading...</div>
        </div>
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout pageTitle="View Report">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 ">
            <div className="row my-4">
              <div className="col-12 d-flex">
                <BackButton url="/admin/reports-management?tab=booking" />
                <h2 className="mainTitle mb-0">View Report</h2>
              </div>
            </div>
            <div className="dashCard">
              <div className="row ">
                <div className="col-12">
                  <div className="d-flex flex-column flex-sm-row mb-2 gap-3">
                    <div className="flex-grow-1 ">
                      <div className="row">
                        <div className="order-2 order-md-1 col-md-8 col-lg-8">
                          <h2 className="fw-semibold fs-3 mb-4">{reportDetails?.serviceProvider?.serviceName}</h2>
                          <div className="row">
                            <div className="col-lg-6 mb-3">
                              <h4 className="secondaryLabel">Service Category:</h4>
                              <p className="secondaryText wrapText mb-0">{reportDetails.serviceCategory}</p>
                            </div>
                            <div className="col-lg-6 mb-3">
                              <h4 className="secondaryLabel">Service charges:</h4>
                              <p className="secondaryText wrapText mb-0">{reportDetails.charges}</p>
                            </div>
                          </div>
                        </div>
                        <div className="order-1 order-md-2 col-md-4 col-lg-4 mb-4 mb-md-0">
                          <div className="d-flex flex-column align-items-start align-items-md-end justify-content-end justify-content-sm-start gap-3">
                            <div>
                              <label className="fw-semibold">Status</label>
                              <span className={`ms-3 fw-semibold ${statusClassMap[reportDetails?.status === "Resolved" ? "Approved" : reportDetails?.status]}`}>
                                {reportDetails?.status}
                              </span>
                            </div>
                            {reportDetails?.status === "Pending" ? (
                              <div>
                                <CustomButton onClick={handleStatusChange} variant="site-btn primary-btn" text="Mark As Resolved" />
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-10 col-lg-8">
                      <h2 className="fw-semibold fs-3 mb-4 pt-3">Booking Details</h2>
                      <div className="row my-2">
                        {[
                          { label: "Booking ID:", value: reportDetails.bookingId },
                          { label: "Booking Date:", value: reportDetails.bookingDate },
                          { label: "User Name:", value: reportDetails.user.name },
                          { label: "Email Address:", value: reportDetails.emailAddress },
                          { label: "Phone No:", value: reportDetails.phone },
                          { label: "Service Date:", value: reportDetails.serviceDate },
                          { label: "Service Time:", value: reportDetails.serviceTime },
                        ].map(({ label, value }) => (
                          <div className="col-lg-6 mb-3" key={label}>
                            <h4 className="secondaryLabel">{label}</h4>
                            <p className="secondaryText wrapText mb-0">
                              {label === "Phone No:" && <span>{getCountryFlag(value)}</span>} {value}
                            </p>
                          </div>
                        ))}
                      </div>
                      {reportDetails?.address && (
                        <div className="mb-4">
                          <h4 className="secondaryLabel">Address</h4>
                          <p className="secondaryText mb-0">{reportDetails.address}</p>
                        </div>
                      )}
                      <div className="mb-4">
                        <h2 className="fw-semibold fs-3 mb-4 pt-3">Report Details</h2>
                        <div className="col-lg-6 mb-3">
                          <h4 className="secondaryLabel">Report Date:</h4>
                          <p className="secondaryText wrapText mb-0">{reportDetails.reportedDate}</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="secondaryLabel">Message:</h4>
                          <p className=" secondaryText mb-0">{reportDetails.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-12 col-md-6">
                <div className="dashCard">
                  <div className="d-flex justify-content-between">
                    <h2 style={{ fontSize: 18 }} className="secondaryTitle mb-0">
                      User Detail
                    </h2>
                    <Link style={{ fontSize: 14 }} to={`/admin/user-management/${reportDetails?.user?.id}`}>
                      View Details
                    </Link>
                  </div>
                  <div className="d-flex gap-3 mt-3 align-items-center">
                    <img className="roundedBorders smallProfileImage" src={reportDetails?.user?.photo} alt="user photo" />
                    <h4 style={{ fontSize: 18 }} className="mb-0">
                      {reportDetails?.user?.name}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="dashCard">
                  <div className="d-flex justify-content-between">
                    <h2 style={{ fontSize: 18 }} className="secondaryTitle mb-0">
                      Service Provider Detail
                    </h2>
                    <Link style={{ fontSize: 14 }} to={`/admin/service-provider-management/${reportDetails?.serviceProvider?.id}`}>
                      View Details
                    </Link>
                  </div>
                  <div className="d-flex gap-3 mt-3 align-items-center">
                    <img className="roundedBorders smallProfileImage" src={reportDetails?.serviceProvider?.photo} alt="service provider photo" />
                    <h4 style={{ fontSize: 18 }} className="mb-0">
                      {reportDetails?.serviceProvider?.name}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(ViewReport);
