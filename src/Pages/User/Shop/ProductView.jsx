import React, { useEffect, useState } from 'react'
import { images } from '../../../Assets'
import {Container, Row, Col, ProgressBar } from 'react-bootstrap'
import "./style.css"
import { Formik, Form, Field } from 'formik'
import { useFormStatus } from '../../../Hooks/useFormStatus'
import { productData } from '../../../Config/data'
import { useNavigate, useParams } from 'react-router-dom'
import Rating from "react-rating";
import { FaRegStar, FaStar } from 'react-icons/fa6'
import CustomButton from '../../../Components/CustomButton'

const ProductView = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [reviewsFilter, setReviewsFilter] = useState("All");
  const navigate = useNavigate();





  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus(); // use your custom hook   

  useEffect(() => {
    const getproductDetails = async () => {
      const response = productData?.detail?.data?.find((item) => item.id === Number(id));
      if (response) {
        // setProductDetails(response.detail);
        setProductDetails(response);
        setReviews(response.reviews);
        setFilteredReviews(response.reviews);
      }
    };
    getproductDetails();
  }, [id]);

  useEffect(() => {
    setFilteredReviews(
      reviews.comments?.filter((c) => {
        if (reviewsFilter === "All") return c;
        else {
          return Number(c.rating) === Number(reviewsFilter);
        }
      })
    );
  }, [reviews, reviewsFilter]);

const handleSubmit = async (values,  { resetForm }) => {
  startSubmitting();
  console.log("Form Submit Values" ,values)
  navigate('/view-cart')
  stopSubmitting();
  resetForm();
};
console.log(productDetails, "productDetails")

  return (
    <section className='page-content product-view'>
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className="product-media-wrap">
              <div className="product-media-main">
                <img src={images.productImage} alt="" />
              </div>
            </div>
          </Col>
          <Col md={6} className='d-flex'>
            <div className="product-info-wrap align-self-center flex-grow-1">
              <div className="product-info-list">
              <Formik
                 initialValues={{
                  product_quantity: 1, // Default value set to 1
                }}
                // validationSchema={ProductValidation}
                
                onSubmit={handleSubmit}
                enableReinitialize
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  setFieldValue,
                }) => {
                  const increaseValue = () => {
                    setFieldValue('product_quantity', Number(values.product_quantity) + 1);
                  };

                  const decreaseValue = () => {
                    if (values.product_quantity > 1) {
                      setFieldValue('product_quantity', Number(values.product_quantity) - 1);
                    }
                  };
                  return (
                    <>
                      {/* Static Information */}
                      
                      <div className="product-category">
                        <h5 className='fw-regular'>{productDetails?.category}</h5>
                      </div>
                      <div className="product-title mb-3">
                        <h3 className='fw-bold'>{productDetails?.title}</h3>
                      </div>
                      {/* Formik Form Starts */}
                      <Form>
                      <div className="d-flex justify-content-between mb-4">
                        <div className="product-info-price flex-grow-1 align-self-center">
                          <div className="price fw-bold"><span className='currency-symbol'>$</span>{productDetails?.price}</div>
                        </div>
                        <div className="product-info-quantity flex-shrink-0">
                          <div className="quantity-picker">
                            <span className="btn-quantity minus-btn" onClick={decreaseValue}>-</span>
                            <Field
                              name="product_quantity"
                              type="number"
                              className="form-control"
                              value={values.product_quantity}
                              onChange={handleChange}
                              min="1"
                            />
                            <span className="btn-quantity plus-btn"  onClick={increaseValue}>+</span>
                          </div>
                          {touched.product_quantity && errors.product_quantity && (
                            <div className="text-danger">{errors.product_quantity}</div>
                          )}
                        </div>
                      </div>
                      {productDetails?.description && (
                        <div className="product-description mb-4">
                          <h6 className='fw-bold'>Description</h6>
                          <p>{productDetails?.description}</p>
                        </div>
                      )}
                      <div className="product-info-buy-button mt-3">
                        <button type="submit" className="btn btn-primary">
                          Add to Cart
                        </button>
                      </div>
                      </Form>
                      {/* Formik Form Ends */}
                    </>
                  );
                }}
              </Formik>
              </div>              
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={10} className='product-reviews pt-4 pt-lg-5'>
              <Row>
                <Col xs={12}>
                  <h2 className='page-title fw-bold'>Reviews</h2>
                </Col>
                <Col xs={12} className="d-flex flex-wrap justify-content-between align-items-center gap-4 rating-reviews">
                  <div className="d-flex flex-column align-items-start reviews-info">
                    <div className="d-flex gap-4 align-items-baseline">
                      <h3 className='fw-bold'>{productDetails.rating}<span>/5</span></h3>
                      <p className="review-count mb-0">{reviews?.count} Reviews</p>
                    </div>
                    <Rating
                      className="mt-3"
                      emptySymbol={<FaRegStar color="#E9D225" size={40} />}
                      fullSymbol={<FaStar size={40} color="#E9D225" />}
                      initialRating={parseFloat(productDetails.rating).toFixed(1)}
                      readonly
                    />
                  </div>
                  <div className='reviews-bar'>
                    <div className="reviews-item d-flex align-items-center gap-4">
                      <label htmlFor="rating1">5 Star</label>
                        <ProgressBar variant="progress" now={90} />
                      <span>30</span>
                    </div>
                    <div className="reviews-item d-flex align-items-center gap-4">
                      <label htmlFor="rating2">4 Star</label>
                        <ProgressBar variant="progress" now={75} />
                      <span>20</span>
                    </div>
                    <div className="reviews-item d-flex align-items-center gap-4">
                      <label htmlFor="rating3">3 Star</label>
                        <ProgressBar variant="progress" now={20} />
                      <span>5</span>
                    </div>
                    <div className="reviews-item d-flex align-items-center gap-4">
                      <label htmlFor="rating4">2 Star</label>
                        <ProgressBar variant="progress" now={10} />
                      <span>1</span>
                    </div>
                    <div className="reviews-item d-flex align-items-center gap-4">
                      <label htmlFor="rating5">1 Star</label>
                        <ProgressBar variant="progress" now={4} />
                      <span>1</span>
                    </div>
                  </div>
                </Col>
                <Col xs={12} className="mt-4 pt-3">
                  <div className="d-flex flex-wrap gap-3 review-tabs">
                    <CustomButton
                      onClick={() => {
                        setReviewsFilter("All");
                      }}
                      className={`btn ${reviewsFilter === "All" ? "primary-btn" : "btn-outline-primary"}`}
                      text="All"
                    />
                    <CustomButton
                      onClick={() => {
                        setReviewsFilter("5");
                      }}
                      className={`btn ${reviewsFilter === "5" ? "primary-btn" : "btn-outline-primary"}`}
                    >
                      
                        <FaStar className="text-warning" />
                        <span>5</span>
                    </CustomButton>
                    <CustomButton
                      onClick={() => {
                        setReviewsFilter("4");
                      }}
                      className={`btn ${reviewsFilter === "4" ? "btn-primary" : "btn-outline-primary"}`}
                    >
                      <FaStar className="text-warning" />
                      <span>4</span>
                    </CustomButton>
                    <CustomButton
                      onClick={() => {
                        setReviewsFilter("3");
                      }}
                      className={`btn ${reviewsFilter === "3" ? "btn-primary" : "btn-outline-primary"}`}
                    >                      
                        <FaStar className="text-warning" />
                        <span>3</span>
                    </CustomButton>
                    <CustomButton
                      onClick={() => {
                        setReviewsFilter("2");
                      }}
                      className={`btn ${reviewsFilter === "2" ? "btn-primary" : "btn-outline-primary"}`}
                    >
                      <div className="d-flex align-items-center">
                        <FaStar className="text-warning" />
                        <span>2</span>
                      </div>
                    </CustomButton>
                    <CustomButton
                      onClick={() => {
                        setReviewsFilter("1");
                      }}
                      className={`btn ${reviewsFilter === "1" ? "btn-primary" : "btn-outline-primary"}`}
                    >
                      <div className="d-flex align-items-center">
                        <FaStar className="text-warning" />
                        <span>1</span>
                      </div>
                    </CustomButton>
                  </div>
                  <hr className="my-5" />
                  {filteredReviews?.length > 0 ? (
                    filteredReviews?.map((data, i) => (
                      <div key={i} className="card-comment d-flex gap-3 mt-4">
                        <div className="d-flex flex-grow-1 gap-3 comment-info">
                          <img className="profile-avatar" src={data.user?.["photo-path"]} alt="user_photo" />
                          <div className="flex-grow-1 align-self-center">
                            <div className="star-rating d-flex gap-1 mb-3">
                              {Array.from({ length: data.rating }).map((_, j) => (
                                <FaStar key={`${i}-${j}`} className="" />
                              ))}
                            </div>
                            <h6 className="mb-1">{data.user?.name}</h6>
                            <time className="published-date" dateTime={data.timestamp}>{data.timestamp} </time>
                          </div>
                        </div>
                        <div className="d-flex flex-grow-1 align-self-center">
                          <div className="comment-text">
                            <p>{data.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No {reviewsFilter} star review</p>
                  )}
                </Col>
              </Row>
          
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProductView
