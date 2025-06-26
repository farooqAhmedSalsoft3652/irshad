import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import CustomButton from "../../../Components/CustomButton";
import { reportsManagementNewsfeedData } from "../../../Config/data";
import withModal from "../../../HOC/withModal";
import { getCountryFlag, isNullOrEmpty, statusClassMap } from "../../../Utils/helper";

const ReportDetails = ({ showModal }) => {
  const { id } = useParams();

  const [reportDetails, setReportDetails] = useState({});

  useEffect(() => {
    const getReportDetails = async () => {
      const response = reportsManagementNewsfeedData.detail.data.find((report) => report.id === id);

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
    showModal("Successful", `Report has been resolved successfully!`, null, true);
  };

  if (isNullOrEmpty(reportDetails)) {
    return (
      <DashboardLayout pageTitle="Report Details">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 ">
              <div className="row my-4">
                <div className="col-12 d-flex">
                  <BackButton />
                  <h2 className="mainTitle mb-0">Report Details</h2>
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
    <DashboardLayout pageTitle="Report Details">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 ">
            <div className="row my-4">
              <div className="col-12 d-flex">
                <BackButton url="/admin/reports-management?tab=newsfeed" />
                <h2 className="mainTitle mb-0">Report Details</h2>
              </div>
            </div>
            <div className="dashCard">
              <div className="row ">
                <div className="col-12">
                  <div className="d-flex flex-column flex-sm-row mb-2 gap-3">
                    <div className="flex-grow-1 ">
                      <div className="row">
                        <div className="order-2 order-md-1 col-md-9">
                          <h2 className="fw-semibold fs-3 mb-4">User Details</h2>
                          <div className="row">
                            <div className="col-md-6 col-lg-4 mb-3">
                              <h4 className="secondaryLabel">User Name:</h4>
                              <p className="secondaryText wrapText mb-0">{reportDetails.userName}</p>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-3">
                              <h4 className="secondaryLabel">Email Address:</h4>
                              <p className="secondaryText wrapText mb-0">{reportDetails.emailAddress}</p>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-3">
                              <h4 className="secondaryLabel">Phone No:</h4>
                              <p className="secondaryText wrapText mb-0">
                                <span>{getCountryFlag(reportDetails.phone)}</span>
                                {reportDetails.phone}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="order-1 order-md-2 col-md-3 mb-4 mb-md-0">
                          <div className="d-flex flex-column align-items-start align-items-md-end justify-content-end justify-content-sm-start gap-3">
                            <div>
                              <label className="fw-semibold">Status</label>
                              <span className={`ms-3 fw-semibold ${statusClassMap[reportDetails?.status === "Resolved" ? "Approved" : reportDetails?.status]}`}>
                                {reportDetails?.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-10 col-lg-8">
                      <div className="mb-4">
                        <h2 className="fw-semibold fs-3 mb-4 pt-3">Report</h2>
                        <div className="mb-3">
                          <h4 className="secondaryLabel">Reason:</h4>
                          <p className=" secondaryText mb-0">{reportDetails.reason}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {reportDetails?.status === "Pending" && (
                    <div className="mt-4 mb-5 d-flex gap-3">
                      <Link className="site-btn primary-btn text-decoration-none" to={`post`}>
                        View Post
                      </Link>
                      <CustomButton className="site-btn secondary-btn" onClick={handleStatusChange}>
                        Mark as Resolved
                      </CustomButton>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(ReportDetails);
