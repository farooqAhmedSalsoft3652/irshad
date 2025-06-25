import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackButton from "../../../Components/BackButton";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { RequestManagementData } from "../../../Config/data";
import { dateFormat, getCountryFlag, isNullOrEmpty } from "../../../Utils/helper";

const RequestDetails = () => {
  const { id } = useParams();

  const [requestDetails, setRequestDetails] = useState();

  useEffect(() => {
    const getrequestDetails = async () => {
      const response = RequestManagementData?.detail?.data?.find((req) => req.id === id);

      // const response = await getDetails(`/admin-api/users/${id}`);
      if (response) {
        setRequestDetails(response);
      }
    };
    getrequestDetails();
  }, [id]);

  if (isNullOrEmpty(requestDetails)) {
    return (
      <DashboardLayout pageTitle="Request Details">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 ">
              <div className="row my-4">
                <div className="col-12 d-flex">
                  <BackButton />
                  <h2 className="mainTitle mb-0">Request Details</h2>
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
        <div className="row">
          <div className="col-12 ">
            <div className="dashCard">
              <div className="row mb-4">
                <div className="col-12">
                  <div className="d-flex align-items-center">
                    <BackButton2 />
                    <h2 className="mainTitle mb-0">Booking Details</h2>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-12">
                  <div className="d-flex flex-md-row flex-column">
                    <div className="flex-grow-1 order-1 order-md-0">
                      <div className="row">
                        <div className="col-xxl-10 col-lg-8">
                          <div className="row my-2">
                            {[
                              { label: "Booking ID:", value: requestDetails.booking_id },
                              { label: "Booking Date:", value: dateFormat(requestDetails.booking_date) },
                              { label: "Session Type:", value: requestDetails.session_type },
                              { label: "Category:", value: requestDetails.category },
                              { label: "Appointment Date:", value: dateFormat(requestDetails.appointment_date) },
                              { label: "Appointment Time:", value: requestDetails.appointment_time },
                              { label: "Appointment Charges:", value: requestDetails.amount },
                              { label: "Sub Category:", value: requestDetails.category },
                              { label: "User Name:", value: requestDetails.user.name },
                              { label: "Contact No:", value: requestDetails.phone },
                              { label: "Email Address:", value: requestDetails.email },
                            ].map(({ label, value }) => (
                              <div className="col-xxl-3 col-xl-6 mb-3" key={label}>
                                <div className="detail-box">
                                  <h6 className="">{label}</h6>
                                  <p className="mb-0">
                                    {label === "Contact No:" && <span>{getCountryFlag(value)}</span>} {value}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ">
                      <div className="">
                        <label style={{ color: "#666" }} className="fw-medium">
                          Status
                        </label>
                        <span
                          style={{
                            color: requestDetails.status === "Pending" ? "#FDB332" : requestDetails.status === "Resolved" ? "#D27231" : "",
                          }}
                          className={`ms-3 fw-semibold`}
                        >
                          {requestDetails?.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-md-3 mt-0">
                <div className="col-xxl-8">
                  <div className="row">
                    <div className="col-md-6 mb-md-0 mb-3">
                      <h2 className="mb-2">User Detail</h2>
                      <div className="booking-detail-card">
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                          <div className="d-flex gap-sm-3 gap-2 align-items-center">
                            <img className="smallProfileImage" src={requestDetails?.user?.photo} alt="user photo" />
                            <h4 style={{ fontSize: 18 }} className="mb-0">
                              {requestDetails?.user?.name}
                            </h4>
                          </div>
                          <div className="">
                            <Link style={{ fontSize: 14 }} to={`/admin/user-management/${requestDetails?.user?.id}`}>
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-md-0 mb-3">
                      <h2 className="mb-2">Consultant Detail</h2>
                      <div className="booking-detail-card">
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                          <div className="d-flex gap-sm-3 gap-2 align-items-center">
                            <img className="roundedBorders smallProfileImage" src={requestDetails?.consultant?.photo} alt="user photo" />
                            <h4 style={{ fontSize: 18 }} className="mb-0">
                              {requestDetails?.consultant?.name}
                            </h4>
                          </div>
                          <div className="">
                            {/* <Link style={{ fontSize: 14 }} to={`/admin/consultant/${requestDetails?.consultant?.id}`}> */}
                            <Link style={{ fontSize: 14 }}>View Details</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {requestDetails.status == "Past" && (
                <div className="row mt-3">
                  <div className="col-12">
                    <h2>Rating</h2>
                    {Array(parseInt(requestDetails.ratings))
                      .fill()
                      .map((_, index) => (
                        <FontAwesomeIcon key={index} icon={faStar} size="xl" style={{ color: "#FFA929", cursor: "pointer" }} />
                      ))}
                  </div>
                  <div className="col-xxl-4 mt-3">
                    <div className="detail-box">
                      <h6>Review</h6>
                      <p className="mb-0">{requestDetails.review}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RequestDetails;
