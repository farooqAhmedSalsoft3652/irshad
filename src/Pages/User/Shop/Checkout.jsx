import React, { useEffect, useState } from 'react'
import { images } from '../../../Assets'
import {Container, Row, Col,  Table, } from 'react-bootstrap'
import { Formik,  Form } from 'formik'
import { useFormStatus } from '../../../Hooks/useFormStatus'
import { productData } from '../../../Config/data'
import { useNavigate, useParams } from 'react-router-dom'
import CustomButton from '../../../Components/CustomButton'
import BackButton2 from '../../../Components/BackButton/BackButton2'
import { usePageTitle } from '../../../Utils/helper'
import "./style.css"
import CustomInput from '../../../Components/CustomInput'
import { checkoutValidationSchema } from '../../../Config/Validations'
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Select } from '../../../Components/Select'
import { countryOptions, stateOptions, yearOptions } from '../../../Config/TableStatus'

const Checkout = () => {
  usePageTitle("Checkout", true);
  const navigate = useNavigate();

  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus(); // use your custom hook   

  const handleSubmit = async (values,  { resetForm }) => {
    startSubmitting();
    console.log("Form Submit Values" ,values)
    navigate('/category-management')
    stopSubmitting();
    resetForm();
  };

  
  return (
    <section className='page-content product-view'>
      <Container fluid>
        <Row>
          <Col sm={12} className="d-flex align-items-center mb-4 mb-xxl-5">
            <BackButton2 className="me-2" /><h2 className="page-title fw-bold mb-0">Checkout</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
          <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            mobile_number: "",
            shipping_first_name:"",
            shipping_last_name: "",
            shipping_mobile_number:"",
            shipping_address: "",
            shipping_country: "",
            shipping_state: "",
            shipping_zip_code: "",
            shipping_city: "",
            sameBillingAddress: false,
            billing_first_name:"",
            billing_last_name: "",
            billing_mobile_number:"",
            billing_address: "",
            billing_country: "",
            billing_state: "",
            billing_zip_code: "",
            billing_city: "",
          }}
          validationSchema={checkoutValidationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({
            values,
            errors,
            touched,
            fieldValue,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            setFieldTouched,
          }) => {

            const handleSameBillingAddressChange = (event) => {
              const isChecked = event.target.checked;
          
              // If checked, copy values from shipping to billing
              if (isChecked) {
                setFieldValue("billing_first_name", values.shipping_first_name);
                setFieldValue("billing_last_name", values.shipping_last_name);
                setFieldValue("billing_mobile_number", values.shipping_mobile_number);
                setFieldValue("billing_address", values.shipping_address);
                setFieldValue("billing_country", values.shipping_country);
                setFieldValue("billing_city", values.shipping_city);
                setFieldValue("billing_state", values.shipping_state);
                setFieldValue("billing_zip_code", values.shipping_zip_code);
                // Add any other billing fields to be copied
              } else {
                // If unchecked, clear billing fields
                setFieldValue("billing_first_name", "");
                setFieldValue("billing_last_name", "");
                setFieldValue("billing_mobile_number", "");
                setFieldValue("billing_address", "");
                setFieldValue("billing_country", "");
                setFieldValue("billing_city", "");
                setFieldValue("billing_state", "");
                setFieldValue("billing_zip_code", "");
                // Clear other billing fields
              }
          
              // Update the sameBillingAddress value
              setFieldValue("sameBillingAddress", isChecked);
            };

            return(
              <Form>
              { console.log(errors)}
                <Row>
                  <Col xs={12}>
                    <h4 className="fw-bold mb-4 text-black">Contact Information</h4>
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <CustomInput
                      label="First Name"
                      id="first_name"
                      type="text"
                      required
                      placeholder="Enter Full Name"
                      labelclass="mainLabel"
                      inputclass="mainInput"
                      value={values.first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.first_name && errors.first_name}
                    />
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <CustomInput
                      label="Last Name"
                      id="last_name"
                      type="text"
                      required
                      placeholder="Enter Last Name"
                      labelclass="mainLabel"
                      inputclass="mainInput"
                      value={values.last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.last_name && errors.last_name}
                    />
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <CustomInput
                      label="Email"
                      id="email"
                      type="email"
                      required
                      placeholder="Enter Email"
                      labelclass="mainLabel"
                      inputclass="mainInput"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && errors.email}
                    />
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <label htmlFor="mobile_number" className="mainLabel">
                    Mobile Number<span className="text-danger">*</span>
                    </label>
                    <PhoneInput
                      id="mobile_number"
                      defaultCountry="US"
                      placeholder="Enter Mobile Number"
                      value={values.mobile_number}
                      onChange={(mobile_number) => setFieldValue("mobile_number", mobile_number)}
                      onBlur={() => setFieldTouched("mobile_number", true)}
                      className="mainInput"
                    />
                    {touched.mobile_number && errors.mobile_number ? <div className="text-danger">{errors.mobile_number}</div> : null}
                  </Col>
                  <Col xs={12}>
                    <h4 className="fw-bold mb-4 text-black mt-2">Shipping Address</h4>
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <CustomInput
                      label="First Name"
                      id="shipping_first_name"
                      type="text"
                      required
                      placeholder="Enter Full Name"
                      labelclass="mainLabel"
                      inputclass="mainInput"
                      value={values.shipping_first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.shipping_first_name && errors.shipping_first_name}
                    />
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <CustomInput
                      label="Last Name"
                      id="shipping_last_name"
                      type="text"
                      required
                      placeholder="Enter Last Name"
                      labelclass="mainLabel"
                      inputclass="mainInput"
                      value={values.shipping_last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.shipping_last_name && errors.shipping_last_name}
                    />
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <label htmlFor="mobile_number" className="mainLabel">
                    Mobile Number<span className="text-danger">*</span>
                    </label>
                    <PhoneInput
                      id="mobile_number"
                      defaultCountry="US"
                      placeholder="Enter Mobile Number"
                      value={values.shipping_mobile_number}
                      onChange={(shipping_mobile_number) => setFieldValue("shipping_mobile_number", shipping_mobile_number)}
                      onBlur={() => setFieldTouched("shipping_mobile_number", true)}
                      className="mainInput"
                    />
                    {touched.shipping_mobile_number && errors.shipping_mobile_number ? <div className="text-danger">{errors.shipping_mobile_number}</div> : null}
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <CustomInput
                      label="Residential Address"
                      id="shipping_address"
                      type="text"
                      required
                      placeholder="Enter residential address"
                      labelclass="mainLabel"
                      inputclass="mainInput"
                      value={values.shipping_address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.shipping_address && errors.shipping_address}
                    />
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <Select
                      className="mainInput selectInput w-100"
                      label="Country"
                      labelclass="mainLabel"
                      required
                      id="shipping_country"
                      name="shipping_country"
                      wrapperClass="d-block mb-3"
                      mainLabel="Select Country"
                      value={values.shipping_country}
                      onChange={(value) =>
                        handleChange({ target: { name: "shipping_country", value } })
                      } // Adapting to Formik
                      onBlur={handleBlur}
                      error={touched.shipping_country && errors.shipping_country}
                    >
                      {countryOptions}
                    </Select>
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <Select
                      className="mainInput selectInput w-100"
                      label="State"
                      labelclass="mainLabel"
                      required
                      id="shipping_state"
                      name="shipping_state"
                      wrapperClass="d-block mb-3"
                      mainLabel="Select State"
                      value={values.shipping_state}
                      onChange={(value) =>
                        handleChange({ target: { name: "shipping_state", value } })
                      } // Adapting to Formik
                      onBlur={handleBlur}
                      error={touched.shipping_state && errors.shipping_state}
                    >
                      {stateOptions}
                    </Select>
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <CustomInput
                      label="Zip Code"
                      id="shipping_zip_code"
                      type="text"
                      required
                      placeholder="Enter Zip code"
                      labelclass="mainLabel"
                      inputclass="mainInput"
                      value={values.shipping_zip_code}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.shipping_zip_code && errors.shipping_zip_code}
                    />
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <CustomInput
                      label="City"
                      id="shipping_city"
                      type="text"
                      required
                      placeholder="Enter City"
                      labelclass="mainLabel"
                      inputclass="mainInput"
                      value={values.shipping_city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.shipping_city && errors.shipping_city}
                    />
                  </Col>
                  <Col xs={12} className="mb-3 mb-lg-4">
                    <div className="radio-checkbox-wrapper gap-3 gap-sm-5">                           
                      <label className="radio-checkbox-container">
                        <input
                          type="checkbox"
                          name="sameBillingAddress"
                          checked={values.sameBillingAddress}
                          // onChange={(event) => {
                          //   setFieldValue("sameBillingAddress", event.target.checked); // Update Formik value
                          // }}
                          onChange={handleSameBillingAddressChange} // Handle checkbox change
                        />
                        <span className="custom-checkbox"></span>
                        Is Billing Address same as Shipping Address?
                      </label>
                    </div>
                  </Col>
                  
                  <Col xs={12}>
                    <h4 className="fw-bold mb-4 text-black">Billing Address</h4>
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <CustomInput
                      label="First Name"
                      id="billing_first_name"
                      type="text"
                      required
                      placeholder="Enter Full Name"
                      labelclass="mainLabel"
                      inputclass="mainInput"
                      value={values.billing_first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.billing_first_name && errors.billing_first_name}
                    />
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <CustomInput
                      label="Last Name"
                      id="billing_last_name"
                      type="text"
                      required
                      placeholder="Enter Last Name"
                      labelclass="mainLabel"
                      inputclass="mainInput"
                      value={values.billing_last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.billing_last_name && errors.billing_last_name}
                    />
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <label htmlFor="billing_mobile_number" className="mainLabel">
                      Billing Mobile Number <span className="text-danger">*</span>
                    </label>
                    <PhoneInput
                      id="billing_mobile_number"
                      defaultCountry="US"
                      placeholder="Enter Mobile Number"
                      value={values.billing_mobile_number}
                      onChange={(billing_mobile_number) =>
                        setFieldValue("billing_mobile_number", billing_mobile_number)
                      }
                      onBlur={() => setFieldTouched("billing_mobile_number", true)}
                      className="mainInput"
                    />
                    {touched.billing_mobile_number && errors.billing_mobile_number && (
                      <div className="text-danger">{errors.billing_mobile_number}</div>
                    )}
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <CustomInput
                      label="Residential Address"
                      id="billing_address"
                      type="text"
                      required
                      placeholder="Enter residential address"
                      labelclass="mainLabel"
                      inputclass="mainInput"
                      value={values.billing_address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.billing_address && errors.billing_address}
                    />
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <Select
                      className="mainInput selectInput w-100"
                      label="Country"
                      labelclass="mainLabel"
                      required
                      id="billing_country"
                      name="billing_country"
                      wrapperClass="d-block mb-3"
                      mainLabel="Select Country"
                      value={values.billing_country}
                      onChange={(value) =>
                        handleChange({ target: { name: "billing_country", value } })
                      } // Adapting to Formik
                      onBlur={handleBlur}
                      error={touched.billing_country && errors.billing_country}
                    >
                      {countryOptions}
                    </Select>
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <Select
                      className="mainInput selectInput w-100"
                      label="State"
                      labelclass="mainLabel"
                      required
                      id="billing_state"
                      name="billing_state"
                      wrapperClass="d-block mb-3"
                      mainLabel="Select State"
                      value={values.billing_state}
                      onChange={(value) =>
                        handleChange({ target: { name: "billing_state", value } })
                      } // Adapting to Formik
                      onBlur={handleBlur}
                      error={touched.billing_state && errors.billing_state}
                    >
                      {stateOptions}
                    </Select>
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <CustomInput
                      label="Zip Code"
                      id="billing_zip_code"
                      type="text"
                      required
                      placeholder="Enter Zip code"
                      labelclass="mainLabel"
                      inputclass="mainInput"
                      value={values.billing_zip_code}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.billing_zip_code && errors.billing_zip_code}
                    />
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <CustomInput
                      label="City"
                      id="billing_city"
                      type="text"
                      required
                      placeholder="Enter City"
                      labelclass="mainLabel"
                      inputclass="mainInput"
                      value={values.billing_city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.billing_city && errors.billing_city}
                    />
                  </Col>
                  <Col xs={12} lg={6} className="mb-1 mb-lg-2">
                    <CustomButton
                      variant="btn-primary"
                      className="btn px-5"
                      text="Place Order"
                      pendingText="Loading..."
                      // isPending={isSubmitting}
                      type="submit"
                    />
                  </Col>
                </Row>
                
            </Form>
            );
          }}
        </Formik> 
          </Col>
          
          <Col lg={4}>
            <div className="cart-checkout">
              <div className="checkout-item sub-total">
                <h3 className="item-title">Subtotal</h3>
                <span className="item-value">$24</span>
              </div>
              <div className="checkout-item delivery-charges">
                <h3 className="item-title">Delivery Charges</h3>
                <span className="item-value">$10</span>
              </div>
              <div className="checkout-item cart-total">
                <h3 className="item-title">Total</h3>
                <span className="item-value">$59.00</span>
              </div>
            </div>
          </Col>
        </Row>

      </Container>  
    </section>
  )
}

export default Checkout
