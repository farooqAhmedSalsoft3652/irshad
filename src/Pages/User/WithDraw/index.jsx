import { Form, Formik } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import { FaDollarSign } from "react-icons/fa6";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import { Select } from "../../../Components/Select";
import {
  accountTypeOptions,
  bankNameOptions,
} from "../../../Config/TableStatus";
import { withDrawValidationSchema } from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";
import { usePageTitleUser } from "../../../Utils/helper";
import "./index.css";

const WithDrawAmount = ({ showModal }) => {
  usePageTitleUser("Withdraw Amount");
  const handleFormSubmit = async (values, { resetForm }) => {
    showModal("", `Amount has been transferred`, null, true);
    resetForm();
    // console.log(values, 'abc');
  };

  return (
    <Container fluid>
      <div className="py-sm-5 py-3 px-sm-0 px-1">
        <div className="site_card withdraw_page">
          <Row>
            <Col sm={12} className="d-flex flex-wrap mb-3 mb-lg-4">
              <BackButton2 />
              <div className="mx-auto">
                <h2 className="page-title fw-bold">Withdraw Amount</h2>
                <h4 className="page-title fw-medium">
                  Minimum withdraw Amount: $20
                </h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={10}>
              <Row>
                <Col xs={12} lg={12} xxl={11}>
                  <Formik
                    initialValues={{
                      fundAmount: "",
                      accountHolderName: "",
                      accountType: "",
                      bankName: "",
                      routingNumber: "",
                      confirmRoutingNumber: "",
                      accountNumber: "",
                      confirmAccountNumber: "",
                      swiftCode: "",
                      confirmSwiftCode: "",
                      branchCode: "",
                    }}
                    validationSchema={withDrawValidationSchema}
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
                              <Col
                                xs={12}
                                lg={6}
                                xxl={6}
                                className="mb-lg-4 mb-3 position-relative"
                              >
                                <div className="position-relative">
                                  <CustomInput
                                    label="Fund Amount"
                                    labelclass="mainLabel"
                                    type="text"
                                    required
                                    placeholder="Enter Fund Amount"
                                    id="fundAmount"
                                    value={values.fundAmount}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={
                                      touched.fundAmount && errors.fundAmount
                                    }
                                  />
                                  <span
                                    className={`${
                                      touched.fundAmount && errors.fundAmount
                                        ? "dollar_icon_with_error"
                                        : "dollar_icon"
                                    }`}
                                  >
                                    <FaDollarSign />
                                  </span>
                                </div>
                              </Col>
                              <Col
                                xs={12}
                                lg={6}
                                xxl={6}
                                className="mb-lg-4 mb-3"
                              >
                                <CustomInput
                                  label="Account holder Name"
                                  labelclass="mainLabel"
                                  type="text"
                                  required
                                  placeholder="Enter Account holder Name"
                                  id="accountHolderName"
                                  value={values.accountHolderName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={
                                    touched.accountHolderName &&
                                    errors.accountHolderName
                                  }
                                />
                              </Col>
                              <Col
                                xs={12}
                                lg={6}
                                xxl={6}
                                className="mb-lg-4 mb-3"
                              >
                                <div className="select-inner-wrapper">
                                  <Select
                                    required
                                    id="accountType"
                                    name="accountType"
                                    value={values?.accountType}
                                    onChange={(e) =>
                                      setFieldValue("accountType", e)
                                    }
                                    label="Account Type"
                                    labelclass="mainLabel"
                                    onBlur={handleBlur}
                                    error={
                                      touched.accountType && errors.accountType
                                    }
                                  >
                                    {accountTypeOptions}
                                  </Select>
                                </div>
                              </Col>
                              <Col
                                xs={12}
                                lg={6}
                                xxl={6}
                                className="mb-lg-4 mb-3"
                              >
                                <div className="select-inner-wrapper">
                                  <Select
                                    required
                                    id="bankName"
                                    name="bankName"
                                    value={values?.bankName}
                                    onChange={(e) =>
                                      setFieldValue("bankName", e)
                                    }
                                    label="Bank Name"
                                    labelclass="mainLabel"
                                    onBlur={handleBlur}
                                    error={touched.bankName && errors.bankName}
                                  >
                                    {bankNameOptions}
                                  </Select>
                                </div>
                              </Col>
                              <Col
                                xs={12}
                                lg={6}
                                xxl={6}
                                className="mb-lg-4 mb-3"
                              >
                                <CustomInput
                                  label="Routing Number"
                                  labelclass="mainLabel"
                                  type="text"
                                  required
                                  placeholder="Enter Routing Number"
                                  id="routingNumber"
                                  value={values.routingNumber}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={
                                    touched.routingNumber &&
                                    errors.routingNumber
                                  }
                                />
                              </Col>
                              <Col
                                xs={12}
                                lg={6}
                                xxl={6}
                                className="mb-lg-4 mb-3"
                              >
                                <CustomInput
                                  label="Confirm Routing Number"
                                  labelclass="mainLabel"
                                  type="text"
                                  required
                                  placeholder="Confirm Routing Number"
                                  id="confirmRoutingNumber"
                                  value={values.confirmRoutingNumber}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={
                                    touched.confirmRoutingNumber &&
                                    errors.confirmRoutingNumber
                                  }
                                />
                              </Col>
                              <Col
                                xs={12}
                                lg={6}
                                xxl={6}
                                className="mb-lg-4 mb-3"
                              >
                                <CustomInput
                                  label="Account Number"
                                  labelclass="mainLabel"
                                  type="text"
                                  required
                                  placeholder="Enter Account Number"
                                  id="accountNumber"
                                  value={values.accountNumber}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={
                                    touched.accountNumber &&
                                    errors.accountNumber
                                  }
                                />
                              </Col>
                              <Col
                                xs={12}
                                lg={6}
                                xxl={6}
                                className="mb-lg-4 mb-3"
                              >
                                <CustomInput
                                  label="Confirm Account Number"
                                  labelclass="mainLabel"
                                  type="text"
                                  required
                                  placeholder="Confirm Account Number"
                                  id="confirmAccountNumber"
                                  value={values.confirmAccountNumber}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={
                                    touched.confirmAccountNumber &&
                                    errors.confirmAccountNumber
                                  }
                                />
                              </Col>
                              <Col
                                xs={12}
                                lg={6}
                                xxl={6}
                                className="mb-lg-4 mb-3"
                              >
                                <CustomInput
                                  label="Swift Code"
                                  labelclass="mainLabel"
                                  type="text"
                                  required
                                  placeholder="Enter Swift Code"
                                  id="swiftCode"
                                  value={values.swiftCode}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={touched.swiftCode && errors.swiftCode}
                                />
                              </Col>
                              <Col
                                xs={12}
                                lg={6}
                                xxl={6}
                                className="mb-lg-4 mb-3"
                              >
                                <CustomInput
                                  label="Confirm Swift Code"
                                  labelclass="mainLabel"
                                  type="text"
                                  required
                                  placeholder="Confirm Swift Code"
                                  id="confirmSwiftCode"
                                  value={values.confirmSwiftCode}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={
                                    touched.confirmSwiftCode &&
                                    errors.confirmSwiftCode
                                  }
                                />
                              </Col>
                              <Col
                                xs={12}
                                lg={6}
                                xxl={6}
                                className="mb-lg-4 mb-3"
                              >
                                <CustomInput
                                  label="Branch Code"
                                  labelclass="mainLabel"
                                  type="text"
                                  required
                                  placeholder="Enter Branch Code"
                                  id="branchCode"
                                  value={values.branchCode}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={
                                    touched.branchCode && errors.branchCode
                                  }
                                />
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12}>
                            <CustomButton
                              variant="primary"
                              className="px-5"
                              text="Transfer Amount"
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
  );
};

export default withModal(WithDrawAmount);
