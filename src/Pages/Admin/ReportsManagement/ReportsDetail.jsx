import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackButton from "../../../Components/BackButton";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import CustomModal from "../../../Components/CustomModal";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { reportsManagementData } from "../../../Config/data";
import { chatInitiateSchema } from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";
import { dateFormat, getCountryFlag, isNullOrEmpty } from "../../../Utils/helper";

const ReportsDetail = ({ showModal }) => {
  const { id } = useParams();

  const [reportsDetail, setReportsDetail] = useState();
  const [initiateModal, setInitiateModal] = useState(false);

  useEffect(() => {
    const getReportsDetail = async () => {
      const response = reportsManagementData?.detail?.data?.find((rep) => rep.id === id);

      if (response) {
        setReportsDetail(response);
      }
    };
    getReportsDetail();
  }, [id]);

  if (isNullOrEmpty(reportsDetail)) {
    return (
      <DashboardLayout pageTitle="Reports Detail">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 ">
              <div className="row my-4">
                <div className="col-12 d-flex">
                  <BackButton />
                  <h2 className="mainTitle mb-0">Reports Detail</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="dashCard">...</div>
        </div>
      </DashboardLayout>
    );
  }

  const handleResolved = () => {
    showModal(``, "Are you sure you want to mark as resolved this report?", () => handleSuccess(), false);
  };
  const handleSuccess = () => {
    showModal(``, "report has been Marked as Resolved Successfully!", null, true);
  };

  const handleSubmit = async (values, { resetForm }) => {
    // console.log(values, "title value");
    resetForm();
    setInitiateModal(false);
  };

  return (
    <DashboardLayout pageTitle="Reports Detail">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 ">
            <div className="dashCard">
              <div className="row mb-4">
                <div className="col-12">
                  <div className="d-flex align-items-center">
                    <BackButton2 />
                    <h2 className="mainTitle mb-0">View Report Details</h2>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-12">
                  <div className="d-flex flex-md-row flex-column">
                    <div className="flex-grow-1 order-1 order-md-0">
                      <div className="row">
                        <div className="col-xxl-10 col-lg-8">
                          <h2 className="mb-md-4 mb-3">Booking Details</h2>
                          <div className="row my-2">
                            {[
                              { label: "Booking ID:", value: reportsDetail.bookingId },
                              { label: "Booking Date:", value: dateFormat(reportsDetail.bookingDate) },
                              { label: "Session Type:", value: reportsDetail.sessionType },
                              { label: "Category:", value: reportsDetail.category },
                              { label: "Appointment Date:", value: dateFormat(reportsDetail.appointmentDate) },
                              { label: "Appointment Time:", value: reportsDetail.appointmentTime },
                              { label: "Appointment Charges:", value: reportsDetail.charges },
                              { label: "Sub Category:", value: reportsDetail.category },
                              { label: "User Name:", value: reportsDetail.user.name },
                              { label: "Contact No:", value: reportsDetail.phone },
                              { label: "Email Address:", value: reportsDetail.emailAddress },
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
                    <div className="flex-shrink-0 mb-md-0 mb-3">
                      <div className="text-end pe-sm-2">
                        <label style={{ color: "#666" }} className="fw-medium">
                          Status
                        </label>
                        <span
                          style={{
                            color: reportsDetail.status === "Pending" ? "#B58D00" : reportsDetail.status === "Resolved" ? "#197E00" : "",
                          }}
                          className={`ms-3 fw-semibold`}
                        >
                          {reportsDetail?.status}
                        </span>
                      </div>
                      {reportsDetail.status == "Pending" && (
                        <div className="mt-sm-3 text-md-start text-end">
                          <div className="mb-2">
                            <CustomButton text="Initiate Chat" onClick={() => setInitiateModal(true)} className="min-width-200" />
                          </div>
                          <div>
                            <CustomButton text="Mark As Resolved" onClick={handleResolved} className="min-width-200 btn-outline-primary" />
                          </div>
                        </div>
                      )}
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
                            <img className="smallProfileImage" src={reportsDetail?.user?.photo} alt="user photo" />
                            <h4 style={{ fontSize: 18 }} className="mb-0">
                              {reportsDetail?.user?.name}
                            </h4>
                          </div>
                          <div className="">
                            <Link style={{ fontSize: 14 }} to={`/admin/user-management/${reportsDetail?.user?.id}`}>
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
                            <img className="roundedBorders smallProfileImage" src={reportsDetail?.consultant?.photo} alt="user photo" />
                            <h4 style={{ fontSize: 18 }} className="mb-0">
                              {reportsDetail?.consultant?.name}
                            </h4>
                          </div>
                          <div className="">
                            <Link style={{ fontSize: 14 }}>View Details</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <h2 className="">Report Details</h2>
                <div className="col-xxl-4 col-xl-6 mt-3">
                  <div className="detail-box">
                    <h6>Report Date</h6>
                    <p className="">{reportsDetail.reportedDate}</p>
                  </div>
                  <div className="detail-box">
                    <h6>Reason</h6>
                    <p className="">{reportsDetail.reason}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomModal show={initiateModal} close={() => setInitiateModal(false)}>
        <h2 className="text-center fw-bold">Initiate Chat</h2>
        <p className="text-center text-capitalize mb-0">Give report title to initiate Chat</p>
        <Formik
          initialValues={{
            title: "",
          }}
          validationSchema={chatInitiateSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="category-wrap px-sm-4">
              <div className="row">
                <div className="col-12 mb-md-4 mb-3 mt-3">
                  <CustomInput
                    label="Title"
                    labelclass="mainLabel"
                    type="textarea"
                    rows={4}
                    required
                    placeholder="Enter Title"
                    id="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.title && errors.title}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 mb-3 text-center">
                  <CustomButton variant="btn btn-primary" className="px-5" text="Okay" type="submit" />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </CustomModal>
    </DashboardLayout>
  );
};

export default withModal(ReportsDetail);
