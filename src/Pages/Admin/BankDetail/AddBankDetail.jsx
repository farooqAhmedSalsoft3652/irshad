import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../../Assets";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import CustomModal from "../../../Components/CustomModal";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { addBankDetailSchema, addOtpSchema } from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";

const AddBankDetail = ({ showModal }) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const navigate = useNavigate();
  const [otpModalShow, setOtpModalShow] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = async (values) => {
    setFormData(values);
    setOtpModalShow(true);
  };

  const handleOtpSubmit = async (values) => {
    startSubmitting();
    // console.log("OTP Submitted:", values.otp);
    setOtpModalShow(false);
    showModal("", `Bank Details Has Been added Successfully!`, () => navigate("/admin/mybank-detail", { state: formData }), true);
    stopSubmitting();
  };

  return (
    <>
      <DashboardLayout pageTitle="Add Bank Details">
        <div className="container-fluid">
          <div className="dashCard">
            <div className="row mb-lg-4 mb-3">
              <div className="col-12">
                <div className="d-flex align-items-center">
                  <BackButton2 />
                  <h2 className="mainTitle mb-0">Add Bank Details</h2>
                </div>
              </div>
            </div>
            <div className="">
              <div className="row mb-3">
                <div className="col-12">
                  <Formik
                    initialValues={{
                      cardHolderName: "",
                      cardNumber: "",
                      cvvNumber: "",
                      validityDate: "",
                    }}
                    validationSchema={addBankDetailSchema}
                    onSubmit={handleFormSubmit}
                  >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
                      <Form onSubmit={handleSubmit}>
                        <div className="">
                          <div className="row">
                            <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                              <div className="row">
                                <div className="col-12 mb-3">
                                  <CustomInput
                                    label="Card holder Name"
                                    labelclass="mainLabel"
                                    type="text"
                                    required
                                    placeholder="Enter Card holder Name"
                                    id="cardHolderName"
                                    value={values.cardHolderName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.cardHolderName && errors.cardHolderName}
                                  />
                                </div>
                                <div className="col-12 mb-3">
                                  <CustomInput
                                    label="Card Number"
                                    labelclass="mainLabel"
                                    type="number"
                                    required
                                    placeholder="Enter Card Number"
                                    inputclass="mainInput"
                                    id="cardNumber"
                                    value={values.cardNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.cardNumber && errors.cardNumber}
                                  />
                                </div>
                                <div className="col-12 mb-3">
                                  <CustomInput
                                    label="CVV Number"
                                    labelclass="mainLabel"
                                    type="number"
                                    required
                                    placeholder="Enter CVV Number"
                                    inputclass="mainInput"
                                    id="cvvNumber"
                                    value={values.cvvNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.cvvNumber && errors.cvvNumber}
                                  />
                                </div>
                                <div className="col-12 mb-3">
                                  <CustomInput
                                    label="Validity Date"
                                    labelclass="mainLabel"
                                    type="date"
                                    required
                                    placeholder="Enter Validity Date"
                                    inputclass="mainInput"
                                    id="validityDate"
                                    value={values.validityDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.validityDate && errors.validityDate}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 mt-3">
                              <CustomButton
                                variant="btn btn-primary"
                                className="px-5"
                                text="Add Bank Detail"
                                pendingText="Submitting..."
                                isPending={isSubmitting}
                                type="submit"
                                disabled={isSubmitting}
                              />
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>

      {/* OTP Modal */}
      <CustomModal
        show={otpModalShow}
        hideClose={false}
        close={() => {
          setOtpModalShow(false);
        }}
        background="gray"
      >
        <div className="px-4">
          <Formik initialValues={{ otp: "" }} validationSchema={addOtpSchema} onSubmit={handleOtpSubmit}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="otp_wrappe">
                  <div className="text-center">
                  <img src={images.Check} alt="Question" className="modalImage" />
                  </div>
                  <h2 className="modalHeading text-start mb-1">
                    OTP<span className="text-danger">*</span>
                  </h2>
                  <div className="mb-3">
                    <CustomInput
                      labelclass="mainLabel"
                      type="text"
                      required
                      placeholder="Enter Otp"
                      inputclass="mainInput"
                      id="otp"
                      value={values.otp}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.otp && errors.otp}
                    />
                  </div>
                  <div className="my-4 text-center">
                    <CustomButton
                      variant="btn btn-primary"
                      className="px-5"
                      text="Submit"
                      pendingText="Submitting..."
                      isPending={isSubmitting}
                      type="submit"
                      disabled={isSubmitting}
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

export default withModal(AddBankDetail);
