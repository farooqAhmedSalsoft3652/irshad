import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import { appointmentsData } from "../../../Config/data";
import withModal from "../../../HOC/withModal";
import { dateFormat, usePageTitleUser } from "../../../Utils/helper";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CustomModal from "../../../Components/CustomModal";
import { Form, Formik } from "formik";
import CustomInput from "../../../Components/CustomInput";
import { modalReasonValidation } from "../../../Config/Validations";
import UploadIcon from "../../../Assets/images/svg/uploadIcon.svg?react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentsDetails = ({ showModal, closeModal }) => {
  usePageTitleUser("Appointments Details");
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [reasonModal, setReasonModal] = useState(false);
  const [appointmentModal, setAppointmentModal] = useState(false);
  const [pendingSubmission, setPendingSubmission] = useState(null);

  const [value, setValue] = useState(new Date());

  const onChange = (newDate) => {
    setValue(newDate);
    console.log("Selected Date:", newDate);
  };

  const navigate = useNavigate();

  const fetchBookings = async () => {
    const response = appointmentsData.detail.data.find(
      (e) => e.id === Number(id)
    );
    // const response = await getDetails(`/admin-api/users/${id}`);
    if (response) {
      setData(response);
    }
  };
  useEffect(() => {
    fetchBookings();
  }, [id]);

  const cancelBooking = () => {
    showModal(
      "",
      "Are you sure you want to cancel this booking as you have to pay cancellation penalty [Amount] for it?",
      () => {
        closeModal(); // ✅ now it works
        setTimeout(() => setReasonModal(true), 300);
      },
      null,
      true
    );
  };

  const handleFormSubmit = (values, { resetForm }) => {
    // Store the values and resetForm function for later use
    setPendingSubmission({ values, resetForm });
    setReasonModal(false);
    // Show the modal about remaining cancellations
    showModal(
      "",
      "You have now 10 cancels left for this month. After that you will have to pay cancellation penalty [Amount] for it.",
      () => {
        // When user confirms, proceed with the actual submission
        // Use the values directly from the closure instead of from state
        handleRequestSubmit(values, { resetForm });
        //closeModal();
      },
      true // success
    );
  };

  const handleRequestSubmit = (values, { resetForm }) => {
    console.log("Request submitted with values:", values);

    // Add null check to prevent errors
    if (!values) {
      console.error("No values provided to handleRequestSubmit");
      return;
    }

    // Create FormData for file upload if needed
    if (values.uploadFile) {
      const formData = new FormData();
      formData.append("description", values.description);
      formData.append("document", values.uploadFile);
      console.log("FormData created with file for upload");
    }

    // Show success message and close the reason modal only after success
    showModal(
      "",
      "Booking has been Cancelled Successfully.",
      () => {
        setReasonModal(false); // Close the reason modal after success
        resetForm();
        navigate("/appointments");
      },
      true // success
    );
  };

  const handleAppointmentUpdate = () => {
    console.log(value, "value");
    setAppointmentModal(false);
    showModal(
      "",
      "Booking date updated Sucessfully.",
      () => {
        navigate("/appointments");
      },
      true,
      true
    );
  };

  return (
    <>
      <Container fluid>
        <div className="py-sm-5 py-3 px-sm-0 px-1">
          <div className="site_card">
            <Row>
              <Col xs={12}>
                <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-between gap-2 gap-md-0">
                  <div>
                    <BackButton2 />
                  </div>
                  <div>
                    <h2 className="fw-bold mb-0 page-title">
                      Appointment Details
                    </h2>
                  </div>
                  <div>
                    <p className="mb-0 fw-medium" style={{ color: "#333" }}>
                      Status :
                      <span
                        className="text-capitalize"
                        style={{
                          color:
                            data.status === "upcoming"
                              ? "#FDB332"
                              : data.status === "past"
                              ? "#0DCF38"
                              : data.status === "in-progress"
                              ? "#D27231"
                              : data.status === "cancelled"
                              ? "#FC0000"
                              : "black",
                        }}
                      >
                        {" "}
                        {data?.status}
                      </span>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mt-md-5 mt-3">
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">Booking ID:</h6>
                  <p style={{ color: "#727A84" }}>{data?.booking_id}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">Booking Date:</h6>
                  <p style={{ color: "#727A84" }}>
                    {dateFormat(data?.booking_date)}
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">Appointment Date:</h6>
                  <p style={{ color: "#727A84" }}>{data?.appointment_date}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">Appointment Time:</h6>
                  <p style={{ color: "#727A84" }}>{data?.appointment_time}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">Appointment Charges:</h6>
                  <p style={{ color: "#727A84" }}>
                    {data?.appointment_charges}
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">Session Type:</h6>
                  <p style={{ color: "#727A84" }}>{data?.session_type}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">Category:</h6>
                  <p style={{ color: "#727A84" }}>{data?.category}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">Sub-Category:</h6>
                  <p style={{ color: "#727A84" }}>{data?.sub_category}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">User Name:</h6>
                  <p style={{ color: "#727A84" }}>{data?.user_name}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">User Contact No:</h6>
                  <p style={{ color: "#727A84" }}>{data?.user_number}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} xxl={3} className="mb-md-2">
                <div>
                  <h6 className="fw-medium mb-2">User Email:</h6>
                  <p style={{ color: "#727A84" }}>{data?.user_email}</p>
                </div>
              </Col>
              {data?.status == "past" && (
                <>
                  <Col xs={12} className="mb-md-2">
                    <div>
                      <h6 className="fw-medium mb-2">Rating</h6>
                      <div className="review-rating d-flex gap-0">
                        {[...Array(Number(data?.rating || 0))].map(
                          (_, index) => (
                            <span key={index} className="rating fw-light me-1">
                              <FontAwesomeIcon icon={faStar} />
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} className="mb-md-2">
                    <div>
                      <h6 className="fw-medium mb-2">Reviews</h6>
                      <p style={{ color: "#727A84" }}>{data?.reviews}</p>
                    </div>
                  </Col>
                </>
              )}
              {data?.status == "cancelled" && (
                <Col xs={12} className="mb-md-2">
                  <div>
                    <h6 className="fw-medium mb-2">Rejection Reason:</h6>
                    <p style={{ color: "#727A84" }}>{data?.reason}</p>
                  </div>
                </Col>
              )}

                
              {(data?.status === "upcoming") && (
                <div className="d-flex gap-2 flex-wrap align-items-center">
                  {data?.session_type == "Chat" ? (
                    <CustomButton
                      onClick={() => setAppointmentModal(true)}
                      variant="primary"
                      className="min-width-180"
                    >
                      Start Chat
                    </CustomButton>
                  ) : data?.session_type == "Call" ? (
                    <CustomButton
                      onClick={() => setAppointmentModal(true)}
                      variant="primary"
                      className="min-width-180"
                    >
                      Start Session
                    </CustomButton>
                  ) : data?.session_type == "Video Call" ? (
                    <CustomButton
                      onClick={() => setAppointmentModal(true)}
                      variant="primary"
                      className="min-width-180"
                    >
                      Start Session
                    </CustomButton>
                  ) : 
                  null}

                  {data?.status !== "in-progress" && (
                    <CustomButton
                      onClick={cancelBooking}
                      className="siteBtn min-width-180"
                      text="Cancel Booking"
                      variant="outline-danger"
                    />
                  )}
                </div>
              )}

              {(data?.status === "in-progress") && (
                <div className="d-flex gap-2 flex-wrap align-items-center">
                  {data?.session_type == "Chat" ? (
                    <Link to="/chat" className="btn btn-primary min-width-180">
                      Start Chat
                    </Link>
                  ) : data?.session_type == "Call" ? (
                    <Link to="/call" className="btn btn-primary min-width-180">
                      Start Session
                    </Link>
                  ) : data?.session_type == "Video Call" ? (
                    <Link
                      to="/video-call"
                      className="btn btn-primary min-width-180"
                    >
                      Join Session
                    </Link>
                  ) : 
                  null}
                </div>
              )}

            </Row>
          </div>
        </div>
        <CustomModal
          show={reasonModal}
          hideClose={false}
          close={() => {
            setReasonModal(false);
          }}
          className="rating-modal"
        >
          <Formik
            initialValues={{
              description: "",
              uploadFile: null, // Initialize as null
            }}
            validationSchema={modalReasonValidation}
            onSubmit={handleFormSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              isSubmitting,
            }) => (
              <Form>
                <h3 className="modalHeading">Cancellation Reason</h3>
                {console.log("Errors", errors)}
                <div className="mb-3">
                  <CustomInput
                    type="textarea"
                    required
                    label="Reason:"
                    placeholder="Enter Reason"
                    id="description"
                    name="description"
                    rows="4"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.description && errors.description}
                  />
                </div>

                <div className="modal-file-uploader mb-3">
                  <label className="upload-label" htmlFor="uploadFile">
                    <UploadIcon /> <span>Upload Files (PDF, Docx, JPG)</span>
                  </label>

                  <input
                    id="uploadFile"
                    name="uploadFile"
                    type="file"
                    accept=".pdf,.docx,.jpg,.jpeg"
                    onChange={(event) =>
                      setFieldValue("uploadFile", event.currentTarget.files[0])
                    }
                    className="d-none"
                  />

                  {touched.uploadFile && errors.uploadFile && (
                    <div className="error-message red-text">
                      {errors.uploadFile}
                    </div>
                  )}

                  {values.uploadFile && (
                    <div className="upload-file">
                      <strong>{values.uploadFile.name}</strong>
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => setFieldValue("uploadFile", null)}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                <div className="text-center d-flex justify-content-center gap-3">
                  <CustomButton
                    variant="primary"
                    text="Post"
                    pendingText="Submitting..."
                    isPending={isSubmitting}
                    type="submit"
                    disabled={isSubmitting}
                  />
                  <CustomButton
                    variant="secondary"
                    text="Cancel"
                    onClick={() => setReasonModal(false)}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </CustomModal>
        <CustomModal
          show={appointmentModal}
          hideClose={false}
          close={() => {
            setAppointmentModal(false);
          }}
          className="rating-modal"
        >
          {/* <Calendar onChange={onChange} value={value} /> */}
          <h4 className="text-center fw-bold mb-3">Appointment Date</h4>
          <div className="calendar-container">
            <Calendar
              onChange={setValue}
              value={value}
              tileClassName={({ date, view }) =>
                date.getDate() === value.getDate() &&
                date.getMonth() === value.getMonth() &&
                date.getFullYear() === value.getFullYear()
                  ? "selected-day"
                  : null
              }
            />
            <button
              className="btn btn-primary mt-3"
              onClick={handleAppointmentUpdate}
            >
              Update
            </button>
          </div>
        </CustomModal>
      </Container>
    </>
  );
};

export default withModal(AppointmentsDetails);
