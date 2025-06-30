import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackButton from "../../../Components/BackButton";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { RequestManagementData } from "../../../Config/data";
import { dateFormat, isNullOrEmpty } from "../../../Utils/helper";
import PdfSvg from "../../../Assets/images/svg/pdfSvg.svg?react";
import withModal from "../../../HOC/withModal";

const RequestDetails = ({showModal}) => {
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
      <DashboardLayout pageTitle="View Request">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 ">
              <div className="row my-4">
                <div className="col-12 d-flex">
                  <BackButton />
                  <h2 className="mainTitle mb-0">View Request</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="dashCard">...</div>
        </div>
      </DashboardLayout>
    );
  }
  const handleResolved = () =>{
    showModal(``, "Are you sure you want to mark as resolved this report?", ()=>handleSuccess(), false);
  }
  const handleSuccess = () =>{
    showModal(``, "report has been Marked as Resolved Successfully!", null, true)
  }
  return (
    <DashboardLayout pageTitle="View Request">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 ">
            <div className="dashCard">
              <div className="row mb-4">
                <div className="col-12">
                  <div className="d-flex align-items-center">
                    <BackButton2 />
                    <h2 className="mainTitle mb-0">View Request</h2>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-12">
                  <div className="d-flex justify-content-between align-items-lg-start flex-lg-row flex-column">
                    <div className="row flex-grow-1 order-lg-0 order-1">
                      <div className="col-xxl-5 col-xl-7 col-lg-9">
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
                    <div className="mb-sm-0 mb-2">
                      <div className="text-end pe-lg-3">
                        <label style={{ color: "#666" }} className="fw-medium">
                          Status
                        </label>
                        <span
                          style={{
                            color: requestDetails.status === "Pending" ? "#B58D00" : requestDetails.status === "Resolved" ? "#197E00" : "",
                          }}
                          className={`ms-3 fw-semibold`}
                        >
                          {requestDetails?.status}
                        </span>
                      </div>
                      {requestDetails?.status == "Pending" && (
                      <div className="mt-lg-3 mt-1 text-lg-start text-end">
                        <CustomButton text="Mark As Resolved" onClick={handleResolved} />
                      </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-5 col-xl-6 col-lg-8">
                  <h2 className="mb-2">Reduce Hours For The Next Week</h2>
                  <div className="detail-box">
                    <div>
                      <h6>request Date</h6>
                      <p>{dateFormat(requestDetails?.request_date)}</p>
                    </div>
                    <div>
                      <h6>request Date</h6>
                      <p>{requestDetails?.message}</p>
                    </div>
                    <div>
                      <PdfSvg />
                    </div>
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

export default withModal(RequestDetails);
