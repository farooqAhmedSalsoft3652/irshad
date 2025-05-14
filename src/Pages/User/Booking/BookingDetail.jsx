import React, { useEffect, useState } from 'react'
import { Col, Container, Row,  } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
import {  bookingsData, } from '../../../Config/data';
import CustomButton from '../../../Components/CustomButton';
import { Link, useParams } from 'react-router-dom';
import BackButton2 from '../../../Components/BackButton/BackButton2';
import { dateFormat, getCountryFlag, usePageTitle } from '../../../Utils/helper';
import withModal from '../../../HOC/withModal';
import CustomModal from '../../../Components/CustomModal';
import "./style.css";
import { ratingValidationSchema } from '../../../Config/Validations';
import { FaRegStar, FaStar } from 'react-icons/fa6'
import Rating from "react-rating";
import CustomInput from '../../../Components/CustomInput';
import { useFormStatus } from '../../../Hooks/useFormStatus';
import { images } from "../../../Assets";


const BookingsDetails = ({showModal }) => {
  usePageTitle("Booking Details", true);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [ratingModal, setRatingModal] = useState(false);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [rating, setRating] = useState(0); // State to store the rating value

  const fetchBookings = async () => {
    const response = bookingsData.detail.data.find((e) => e.id === Number(id));
    // const response = await getDetails(`/admin-api/users/${id}`);
    if (response) {
      setData(response);
    }
  };
  useEffect(() => {
    fetchBookings();
  }, [id]);

  // console.log("tdat",  data)

  const onClickApprove = async () => {
    showModal(
      "Additional Request ",
      "Are you sure you want to approve the Additional Request?",
      () => updateApprove(id),
      false 
    );
  };
  const updateApprove = async (status, id) => {
    showModal(
      `successful`,
      `Booking 123 has been Approved successfully.`,
      null,
      true
    );
  };

  const onClickReject = async () => {
    showModal(
      "Additional Request",
      "Are you sure you want to reject the additional request ?",
      () => updateReject(id),
      false 
    );
  };
  const updateReject = async (status, id) => {
    showModal(
      `successful`,
      `Appointment rejected successfully.`,
      null,
      true
    );
  };

  const handleRatingModal = async (values) => {
    setRatingModal(true);
  };
  const handleSubmit =  async (values) => {
    startSubmitting();
    console.log("Review:", values);
    setRatingModal(false);
    await updateReview("Approved", 13); 
    stopSubmitting();
  }
  const updateReview = async (status, id) => {
    showModal(
      `successful`,
      `Review has been submitted`,
      null,
      true
    );
  };
  const handleRatingChange = (value, setFieldValue) => {
    setRating(value); // Update the local rating state
    setFieldValue("rating", value); // Update the rating value in Formik's form values
    console.log("Selected Rating:", value); // Log the selected rating
  };

  return (
    <>
    <section className='page-banner py-5'>
      <Container fluid>
        <Row>
          <Col xs={12} className='g-0 ps-3'>
            <BackButton2 />
          </Col>
        </Row>
      </Container>
    </section>

    <section className='page-content booking-detail pb-5'>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <div className="d-flex booking-detail-header mb-2 mb-xl-2 mb-xxl-4 pb-3">
              <div className="flex-grow-1 d-flex flex-column">
                
                  {data?.category && <h5 className="category-name mb-3">{data?.category} Category</h5> }
                  <div className="d-flex mb-3 align-items-center">
                  <h2 className='fw-bold mb-0 page-title'>{data?.title}</h2>
                  {(data?.status?.toLowerCase() === "upcoming" ||
                    data?.status?.toLowerCase() === "in-progress") &&
                    data?.approval_status?.toLowerCase() == "approved" && (
                    <Link to=""
                      className="p-0 border-0 bg-transparent ms-3"
                      isPending="isPending"
                    >
                    <images.ChatIcon />
                    </Link>
                )}
                  </div>
                  <div className="provide-info border-0 d-flex gap-3">
                    <div className="flex-shrink-0">
                      <img className="allign-slf-start" src={data?.provider_image} alt="" />
                    </div>
                    <div className="flex-grow-1 align-self-center">
                      <h5 className="mb-0 text-black fw-semibold">{data?.provider_name}</h5>
                    </div>
                  </div>
                
              </div>
              <div className="flex-grow-1 d-flex justify-content-end">
                <div className="status-primary">
                Status:
                <span className={`ms-2 status-tag text-capitalize ${
                  data?.status?.toLowerCase() == "in-progress" ? 'text-yellowGreen' :
                  data?.status?.toLowerCase() == "upcoming" ? 'text-blue' :
                  data?.status?.toLowerCase() == "past" ? 'tag-red'
                  : ''}`}
                >{data?.status}</span>
                </div>
              </div>
            </div>
            <div className="booking-charges">
              <div className="booking-detail-card inline-card">
                <div className="mb-2 mb-md-2 mb-xxl-3 d-flex align-items-center">
                  <h5 className="mb-0 text-black fw-semibold">Approval Status:</h5>
                  <div className="status-primary">
                    <span className={`ms-0 status-tag text-capitalize ${
                      data?.approval_status?.toLowerCase() == "approved" ? 'text-green' :
                      data?.approval_status?.toLowerCase() == "pending" ? 'tag-yellow' :
                      data?.approval_status?.toLowerCase() == "requested" ? 'text-blue' :
                      data?.approval_status?.toLowerCase() == "rejected" ? 'tag-red'
                      : ''}`}
                    >{data?.approval_status}</span>
                    </div>
                </div>
                <div className="mb-2 mb-md-2 mb-xxl-3 d-flex align-items-center">
                  <h5 className="mb-0 text-black fw-semibold">Appointment Type:</h5>
                  <p className='text-blue'>{data?.type}</p>
                </div>
                <div className="mb-2 mb-md-2 mb-xxl-3 d-flex align-items-center">
                  <h5 className="mb-0 text-black fw-semibold">Service Charges</h5>
                  <p className='fw-bold price'>${data?.charges}</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className='mt-3'>
            <h3 className='fw-semibold mb-2 text-black mb-4 mb-lx-4 mb-xxl-4 text-capitalize'>Boking Detail</h3>
          </Col>
          <Col xs={12} lg={6} xxl={4}>
            <div className="booking-detail-card inline-card">
              <div className="mb-2 mb-md-3 mb-xxl-4 d-flex align-items-center">
                <h5 className="mb-0 text-black fw-semibold">Booking ID</h5>
                <p className=''>{data?.booking_id}</p>
              </div>
              <div className="mb-2 mb-md-3 mb-xxl-4 d-flex align-items-center">
                <h5 className="mb-0 text-black fw-semibold">Booking Date</h5>
                <p className=''>{dateFormat(data?.booking_id)}</p>
              </div>
              <div className="mb-2 mb-md-3 mb-xxl-4 d-flex align-items-center">
                <h5 className="mb-0 text-black fw-semibold">User Name</h5>
                <p className=''>{data?.user_name}</p>
              </div>
              <div className="mb-2 mb-md-3 mb-xxl-4 d-flex align-items-center">
                <h5 className="mb-0 text-black fw-semibold">Phone Number</h5>
                <p className=''><span className="me-1">{getCountryFlag(data?.phone_number)}</span>
                {data?.phone_number}</p>
              </div>
              {data?.approval_status?.toLowerCase() === "requested" && data?.type?.toLowerCase() === "onsite" && (
                <>
                  <div className="mb-2 mb-md-3 mb-xxl-4 d-flex align-items-center">
                    <h5 className="mb-0 text-black fw-semibold">Floor</h5>
                    <p className="">{data?.floor}</p>
                  </div>
                  <div className="mb-2 mb-md-3 mb-xxl-4 d-flex align-items-center">
                    <h5 className="mb-0 text-black fw-semibold">City</h5>
                    <p className="">{data?.city}</p>
                  </div>
                </>
              )}

            </div>
          </Col>
          <Col xs={12} lg={6} xxl={4}>
            <div className="booking-detail-card inline-card">
              <div className="mb-2 mb-md-2 mb-xxl-3 d-flex align-items-center">
                <h5 className="mb-0 text-black fw-semibold">E-mail Address</h5>
                <p className='text-blue'> <a href={`mailto:${data?.email_address}`}>{data?.email_address}</a></p>
              </div>
              {data?.type?.toLowerCase() === "onsite" && (
                <>
                  <div className="mb-2 mb-md-2 mb-xxl-3 d-flex align-items-center">
                    <h5 className="mb-0 text-black fw-semibold">Address</h5>
                    <p className=''>{data?.address}</p>
                  </div>
                  <div className="mb-2 mb-md-2 mb-xxl-3 d-flex align-items-center">
                    <h5 className="mb-0 text-black fw-semibold">Location</h5>
                    <p className=''><Link to="/wiew-map" target='_blank'>Location View</Link></p>
                  </div>
                </>
              )}

              <div className="mb-2 mb-md-2 mb-xxl-3 d-flex align-items-center">
                <h5 className="mb-0 text-black fw-semibold">Service Date</h5>
                <p className=''>{dateFormat(data?.booking_id)}</p>
              </div>
            </div>
          </Col>
          {data?.request_service && (
            <Col xs={12} className='booking-detail-card my-4'>
              <h4 className='fw-semibold mb-3 text-black'>Additional Request Service</h4>
              <p className='lh-base'>{data?.request_service}</p>
            </Col>
          )}
          {data?.request_charges &&(
            <Col xs={12}>
              <div className="booking-charges">
                <div className="booking-detail-card inline-card">
                  <div className="mb-2 mb-md-2 mb-xxl-3 d-flex align-items-center">
                    <h5 className="mb-0 text-black fw-semibold">Additional Request Charges</h5>
                    <p className='fw-bold price'>${data?.request_charges}</p>
                  </div>
                </div>
              </div>
            </Col>
          )}

          {data?.approval_status?.toLowerCase() == "rejected" && (
            <Col xs={12} className='booking-detail-card my-4'>
              <h4 className='fw-semibold mb-3 text-black'>Rejection Reason</h4>
              <p className='lh-base'>{data?.rejection_reason}</p>
            </Col>
          )}

          {data?.approval_status?.toLowerCase() == "requested" && (
            <Col xs={12} className='d-flex gap-3 mt-3'>
              <CustomButton
                variant="btn-green"
                className="btn min-width-220"
                onClick={onClickApprove}
              >
              Approve
              </CustomButton>
              <CustomButton
                variant="btn-red"
                className="btn min-width-220"
                onClick={onClickReject}
              >
              Reject
              </CustomButton>
            </Col>
          )}
          {data?.type?.toLowerCase() == "online" && data?.status?.toLowerCase() == "in-progress" && (
            <Col xs={12} className='d-flex gap-3 mt-3'>
              <Link
               to={`/bookings/join-session/${id}`}
                className="btn btn-primary min-width-220"
              >
              join session
              </Link>
            </Col>
          )}

          {data?.type?.toLowerCase() == "online"
          && data?.status?.toLowerCase() == "upcoming"
          && data?.approval_status?.toLowerCase() == "approved" && (
            <Col xs={12} className='d-flex gap-3 mt-3'>
              <CustomButton
                variant="btn-primary"
                className="btn min-width-220"
                isPending="isPending"
              >
              join session
              </CustomButton>
            </Col>
          )}
          
          {data?.approval_status?.toLowerCase() == "approved"
          && data?.status?.toLowerCase() == "past" && (
            <Col xs={12} className='d-flex gap-3 mt-3'>
              <CustomButton
                variant="btn-primary"
                className="btn min-width-220"
                onClick={handleRatingModal}
              >
              Rate Service
              </CustomButton>
            </Col>
          )}

        </Row>
      </Container>
    </section>
    {/* Rating Modal */}
    <CustomModal
      show={ratingModal}
      hideClose={false}
      close={() => {
      setRatingModal(false);
      }}
      className="rating-modal"
    >
      <Formik
        initialValues={{
          review_text: "",
          rating: 0, // Initialize rating in form values
        }}
        validationSchema={ratingValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
              <h4 className="modalHeading text-start">Rate Product</h4>
              <div className="mb-3">
              <Rating
                className="rating-star"
                emptySymbol={<FaRegStar color="#E9D225" size={24} />}
                fullSymbol={<FaStar size={24} color="#E9D225" />}
                initialRating={values.rating} // Bind the rating to Formik's values
                onChange={(value) => handleRatingChange(value, setFieldValue)} // Update both state and Formik value
              />
              {errors.rating && touched.rating && (
                <div className="text-danger">{errors.rating}</div> // Show error message for rating
              )}
              </div>
              <div className="mb-3">
                <CustomInput
                  type="textarea"
                  required
                  placeholder="Write Review"
                  inputclass="mainInput"
                  id="review_text"
                  rows="5"
                  value={values.review_text}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.review_text && errors.review_text}
                />
              </div>
              <div className="text-center">
                <CustomButton
                  variant="btn-user-primary"
                  className="btn-user"
                  text="Submit"
                  pendingText="Submitting..."
                  isPending={isSubmitting}
                  type="submit"
                  disabled={isSubmitting}
                />
              </div>
          </Form>
        )}
      </Formik>
    </CustomModal>
    </>
  )
}

export default withModal(BookingsDetails)