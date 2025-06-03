import { Col, Container, Row } from "react-bootstrap";
import CustomInput from "../../../Components/CustomInput";
import withModal from "../../../HOC/withModal";
import { Formik } from "formik";
import { Select } from "../../../Components/Select";
import { accountTypeOptions } from "../../../Config/TableStatus";
import CustomButton from "../../../Components/CustomButton";

const WithDrawAmount = ({showModal}) => {
    const handleFormSubmit = async (values) => {
        showModal("Successful", `Bank Details Has Been added Successfully!`, () => navigate("/admin/mybank-detail", {state:formData}), true);
        // console.log(values, 'abc');
    }

  return (
    <Container fluid>
      <div className="py-sm-5 py-3">
        <div className="site_card">
          <Row>
            <Col xs={12}>
                <Formik
                  initialValues={{
                    accountHolderName: "",
                    accountType: "",
                    bankName: "",
                    routingNumber: "",
                    accountNumber: ""
                  }}
                //   validationSchema={addBankDetailSchema}
                  onSubmit={handleFormSubmit}
                >
                  {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                            <div className="row">
                              <div className="col-12 mb-2">
                                <CustomInput
                                  label="Account holder Name"
                                  labelclass="mainLabel"
                                  type="text"
                                  required
                                  placeholder="Enter Account holder Name"
                                  inputclass="mainInput"
                                  id="accountHolderName"
                                  value={values.accountHolderName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={touched.accountHolderName && errors.accountHolderName}
                                />
                              </div>
                              <div className="col-12 mb-4">
                                <div className="select-inner-wrapper">
                                  <Select
                                    className="mainInput selectInput w-100"
                                    required
                                    id="accountType"
                                    name="accountType"
                                    value={values?.accountType}
                                    onChange={(e) => setFieldValue("accountType", e)}
                                    label="Account Type"
                                    labelclass="mainLabel"
                                    onBlur={handleBlur}
                                    isInputNeeded={false}
                                    error={touched.accountType && errors.accountType}
                                  >
                                    {accountTypeOptions}
                                  </Select>
                                </div>
                              </div>
                              <div className="col-12 mb-2">
                                <CustomInput
                                  label="Bank Name"
                                  labelclass="mainLabel"
                                  type="text"
                                  required
                                  placeholder="Enter Bank Name"
                                  inputclass="mainInput"
                                  id="bankName"
                                  value={values.bankName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={touched.bankName && errors.bankName}
                                />
                              </div>
                              <div className="col-12 mb-2">
                                <CustomInput
                                  label="Routing Number"
                                  labelclass="mainLabel"
                                  type="text"
                                  required
                                  placeholder="Enter Routing Number"
                                  inputclass="mainInput"
                                  id="routingNumber"
                                  value={values.routingNumber}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={touched.routingNumber && errors.routingNumber}
                                />
                              </div>
                              <div className="col-12 mb-2">
                                <CustomInput
                                  label="Account Number"
                                  labelclass="mainLabel"
                                  type="text"
                                  required
                                  placeholder="Enter Account Number"
                                  inputclass="mainInput"
                                  id="accountNumber"
                                  value={values.accountNumber}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={touched.accountNumber && errors.accountNumber}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <CustomButton
                              variant="site-btn primary-btn"
                              className="px-5"
                              text="Add"
                              type="submit"
                            />
                          </div>
                        </div>
                    </form>
                  )}
                </Formik>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default withModal(WithDrawAmount);
