import { Form, Formik } from "formik";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { images } from "../../../Assets";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import CustomModal from "../../../Components/CustomModal";
import {
  addOtpSchema,
  bankDetailsValidationSchema,
} from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";
import { usePageTitleUser } from "../../../Utils/helper";

const BankDetailsUserAdd = ({ showModal }) => {
  usePageTitleUser("Bank Details");
  const navigate = useNavigate();
  const [otpModalShow, setOtpModalShow] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = async (values) => {
    setFormData(values);
    setOtpModalShow(true);
  };

  const handleOtpSubmit = async (values) => {
    // console.log("OTP Submitted:", values.otp);
    setOtpModalShow(false);
    showModal(
      "",
      `Card Details Has Been Added Successfully!`,
      () => navigate("/bank-details", { state: formData }),
      true
    );
  };

  return (
    <>
      <Container fluid>
        <div className="py-sm-5 py-3 px-sm-0 px-1">
          <div className="site_card">
            <Row className="my-3">
              <Col xs={12}>
                <div className="d-flex align-items-center">
                  <BackButton2 />
                  <h2 className="page-title fw-bold mx-auto mb-0">
                    Add Bank Details
                  </h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={10}>
                <Row>
                  <Col xs={12} lg={12} xxl={11}>
                    <Formik
                      initialValues={{
                        name: "",
                        cardNumber: "",
                        cvcNumber: "",
                        validityDate: "",
                      }}
                      validationSchema={bankDetailsValidationSchema}
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
                      }) => (
                        <Form onSubmit={handleSubmit}>
                          <Row>
                            <Col xs={12}>
                              <Row>
                                <Col xs={12} lg={6} xxl={6} className="mb-3">
                                  <CustomInput
                                    label="Name"
                                    labelclass="mainLabel"
                                    type="text"
                                    required
                                    placeholder="Enter Name"
                                    id="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.name && errors.name}
                                  />
                                </Col>
                                <Col xs={12} lg={6} xxl={6} className="mb-3">
                                  <CustomInput
                                    label="Card Number"
                                    labelclass="mainLabel"
                                    type="text"
                                    required
                                    placeholder="Enter Card Number"
                                    id="cardNumber"
                                    value={values.cardNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={
                                      touched.cardNumber && errors.cardNumber
                                    }
                                  />
                                </Col>
                                <Col xs={12} lg={6} xxl={6} className="mb-3">
                                  <CustomInput
                                    label="CVC Number"
                                    labelclass="mainLabel"
                                    type="text"
                                    required
                                    placeholder="Enter CVC Number"
                                    id="cvcNumber"
                                    value={values.cvcNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={
                                      touched.cvcNumber && errors.cvcNumber
                                    }
                                  />
                                </Col>
                                <Col xs={12} lg={6} xxl={6} className="mb-3">
                                  <CustomInput
                                    label="Validity Date"
                                    labelclass="mainLabel"
                                    type="date"
                                    required
                                    placeholder="Enter Validity Date"
                                    id="validityDate"
                                    value={values.validityDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={
                                      touched.validityDate &&
                                      errors.validityDate
                                    }
                                  />
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={12}>
                              <CustomButton
                                variant="siteBtn primaryBtn"
                                className="px-5"
                                text="Add"
                                type="submit"
                              />
                            </Col>
                          </Row>
                        </Form>
                      )}
                    </Formik>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Container>

      {/* OTP Modal */}
      <CustomModal
        show={otpModalShow}
        hideClose={false}
        close={() => {
          setOtpModalShow(false);
        }}
        background="gray"
      >
        <div className="text-center px-sm-5">
          <Formik
            initialValues={{ otp: "" }}
            validationSchema={addOtpSchema}
            onSubmit={handleOtpSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="otp_wrapper">
                  <img
                    src={images.Question}
                    alt="Question"
                    className="modalImage"
                  />
                  <h2 className="modalHeading text-start mb-0">
                    OTP<span className="text-danger">*</span>
                  </h2>
                  <div className="mb-3">
                    <CustomInput
                      labelclass="mainLabel"
                      type="text"
                      required
                      placeholder="Enter OTP"
                      id="otp"
                      value={values.otp}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.otp && errors.otp}
                    />
                  </div>
                  <div className="my-4">
                    <CustomButton
                      variant="primary"
                      className="px-5"
                      text="Submit"
                      type="submit"
                    />
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </CustomModal>
    </>
  );
};

export default withModal(BankDetailsUserAdd);
