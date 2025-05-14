import { Formik, Form } from 'formik'
import React from 'react'
import { Col, Container,  Row } from 'react-bootstrap'
import { Form as BootstrapForm } from 'react-bootstrap';
import { userContactValidationSchema } from '../../../Config/Validations'
// import { Form } from 'react-router-dom';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
import { useFormStatus } from '../../../Hooks/useFormStatus';
import PageTitle from '../../../Components/PageTitle';
import { usePageTitle } from '../../../Utils/helper';

const ContactUs = () => {
  usePageTitle("Contact", true);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus(); // use your custom hook
  const handleSubmit = async (values, { resetForm }) => {
    startSubmitting();
    console.log("submit Forms Value", values)
    stopSubmitting();
    resetForm();
  };


  return (
    <>
      <PageTitle pageHeading="Contact Us" />
      <section className="page-content contactpage">
        <Container fluid>
          <Row>
            <Col xs={12} lg={6} xxl={6} className='mx-auto'>
            <div className="form-card">
              <Formik
                initialValues={{
                  full_name: "",
                  email_address: "",
                  subject: "",
                  message: "",
                }}
                validationSchema={userContactValidationSchema}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue
                }) => (
                  <Form>
                    <Row>
                      <Col xs={12} className="mb-2 mb-lg-2 mb-xxl-2">
                        <CustomInput
                          label="Full Name"
                          id="full_name"
                          type="text"
                          required
                          placeholder="Enter Full Name"
                          labelclass="mainLabel"
                          inputclass="mainInput mainInputLogIn"
                          value={values.full_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.full_name && errors.full_name}
                        />
                      </Col>
                      <Col xs={12} className="mb-2 mb-lg-2 mb-xxl-2">
                        <CustomInput
                          label="Email"
                          id="email_address"
                          type="email"
                          required
                          placeholder="Enter Email"
                          labelclass="mainLabel"
                          inputclass="mainInput mainInputLogIn"
                          value={values.email_address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.email_address && errors.email_address}
                        />
                      </Col>
                      <Col xs={12} className="mb-2 mb-lg-2 mb-xxl-2">
                        <CustomInput
                          label="Subject"
                          id="subject"
                          type="text"
                          required
                          placeholder="Enter Subject"
                          labelclass="mainLabel"
                          inputclass="mainInput mainInputLogIn"
                          value={values.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.subject && errors.subject}
                        />
                      </Col>
                      <Col xs={12} className="mb-2 mb-lg-2 mb-xxl-2">
                        <CustomInput
                          label="Message"
                          id="message"
                          type="textarea"
                          rows="7"
                          required
                          placeholder="Enter Message"
                          labelclass="mainLabel"
                          inputclass="mainInput mainInputLogIn"
                          value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.message && errors.message}
                        />
                      </Col>
                      <Col xs={12} className="mt-2 mt-lg-2">
                        <CustomButton
                          variant="site-btn primary-btn"
                          className="px-5 w-100"
                          text="Submit"
                          pendingText="Loading..."
                          // isPending={isSubmitting}
                          type="submit"
                        />
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ContactUs