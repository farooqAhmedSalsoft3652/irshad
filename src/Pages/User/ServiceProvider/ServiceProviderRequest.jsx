import React, { useEffect, useState } from 'react'
import { Col,  Container,  Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import GeneralCard from '../../../Components/UserComponents/GeneralCard';
import { servicesData,  } from '../../../Config/data';
import CustomPagination from '../../../Components/CustomPagination';
import withFilters from '../../../HOC/withFilters ';
import { useFormStatus } from '../../../Hooks/useFormStatus';
import CustomFilters from '../../../Components/CustomFilters';
import { serviceCategories } from '../../../Config/TableStatus';
import CustomButton from '../../../Components/CustomButton';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../../Utils/helper';
import BackButton2 from '../../../Components/BackButton/BackButton2';
import { Formik, Form } from 'formik';
import { Form as BootstrapForm } from 'react-bootstrap';
import CustomInput from '../../../Components/CustomInput';

const ServiceProviderRequest = ({filters, setFilters, pagination, updatePagination}) => {
  usePageTitle("Services Provider Request", true);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      startSubmitting(true);
    const response = servicesData;
    if (response?.status) {
      const { data, total, per_page, current_page, to } = response.detail;
      setServices(data);
      updatePagination({
        showData: to,
        currentPage: current_page,
        totalRecords: total,
        totalPages: Math.ceil(total / per_page),
      });
    }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filters]);

const  handleSubmit = () =>{
  console.log("handleSubmit")
}

  return (
    <>
    <section className='page-content page-serviceprovider'>
    <Container fluid>
     <Row>
      <Col sm={12} className="d-flex align-items-center mb-4 mb-xxl-5">
          <BackButton2 className="me-2" /><h2 className="page-title fw-bold mb-0">Additional Service</h2>
      </Col>
    </Row>

    <Row>
          <Col xs={12} xl={10}  className='booking-form'>
            <Formik
              initialValues={{
                full_name: "",
                email_address: "",
                subject: "",
                message: "",
              }}
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
                    <Col xs={12}>
                      <CustomInput
                        label="Would you like to request any additional services?"
                        id="message"
                        type="textarea"
                        rows="7"
                        required
                        placeholder="What is your request?"
                        labelclass="mainLabel"
                        inputclass="mainInput mainInputLogIn"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.message && errors.message}
                      />
                      <span className='LightblackColor fw-medium'>Note: It's up to the service provider to decide whether they want to offer an additional service that isn't listed in the category and what the charges for that service will be.</span>
                    </Col>
                    <Col xs={12} className='mt-4'>
                      <BootstrapForm.Group>
                        <BootstrapForm.Check
                          className='mb-3'
                          label="Online 30$"
                          name="group1"
                          type="radio"
                          id="inline-1"
                          value="1"
                          checked={values.group1 === '1'} // Bind to Formik state
                          onChange={() => setFieldValue('group1', '1')} // Update Formik state
                        />
                        <BootstrapForm.Check
                          className='mb-3'
                          label="Offline 30$"
                          name="group1"
                          type="radio"
                          id="inline-2"
                          value="2"
                          checked={values.group1 === '2'}
                          onChange={() => setFieldValue('group1', '2')}
                        />
                      </BootstrapForm.Group>
                    </Col>
                    {values.group1 === '1' && (
                      <>
                      <Col xs={12} xl={7}>
                      <Row>
                        <Col xs={12} className='mb-4 mt-3'>
                            <h3 className='mb-3 fw-semibold'>Slot</h3>
                            <ToggleButtonGroup className='day-slots' type="radio" name="options" defaultValue={1}>
                              <ToggleButton id="tbg-radio-1" value={1}>
                                <span className='date d-block'>10</span>
                                <span className='day d-block'>Sun</span>
                              </ToggleButton>
                              <ToggleButton id="tbg-radio-2" value={2}>
                                <span className='date d-block'>11</span>
                                <span className='day d-block'>Mon</span>
                              </ToggleButton>
                              <ToggleButton id="tbg-radio-3" value={3}>
                              <span className='date d-block'>12</span>
                                <span className='day d-block'>Tue</span>
                              </ToggleButton>
                              <ToggleButton id="tbg-radio-4" value={4}>
                              <span className='date d-block'>13</span>
                                <span className='day d-block'>Wed</span>
                              </ToggleButton>
                              <ToggleButton id="tbg-radio-5" value={5}>
                              <span className='date d-block'>14</span>
                                <span className='day d-block'>Thu</span>
                              </ToggleButton>
                              <ToggleButton id="tbg-radio-6" value={6}>
                              <span className='date d-block'>15</span>
                                <span className='day d-block'>Fri</span>
                              </ToggleButton>
                              <ToggleButton id="tbg-radio-6" value={6}>
                              <span className='date d-block'>16</span>
                                <span className='day d-block'>Sat</span>
                              </ToggleButton>
                            </ToggleButtonGroup>
                        </Col>
                        <Col xs={12} className='mt-3'>
                          <h3 className='mb-3 fw-semibold'>Available Hours</h3>
                          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton id="tbg-radio-1" value={1}>
                            11:00  AM - 11:30 AM
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-2" value={2}>
                            11:00  AM - 11:30 AM
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-3" value={3}>
                            11:00  AM - 11:30 AM
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-4" value={4}>
                            11:00  AM - 11:30 AM
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-5" value={5}>
                            11:00  AM - 11:30 AM
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-6" value={6}>
                            11:00  AM - 11:30 AM
                            </ToggleButton>
                          </ToggleButtonGroup>
                        </Col>
                        </Row>
                      </Col>
                      </>
                    )}
                  </Row>
                  <Row>
                    <Col xs={12} className='mt-3 mt-lg-4'>
                    {values.group1 === '1' ? (
                      <CustomButton
                        variant="btn-primary"
                        className="px-5 btn px-5"
                        text="Request"
                        pendingText="Loading..."
                        // isPending={isSubmitting}
                        type="button"
                        onClick={() => navigate('/services-provider/payment')}
                      />
                    ) : (

                      <CustomButton
                      variant="btn-primary"
                      className="px-5 btn px-5"
                      text="Book Appointment"
                      pendingText="Loading..."
                      // isPending={isSubmitting}
                      type="button"
                      onClick={() => navigate('/services-provider/book-services')}
                      // onClick={handleSubmit}
                      />
                    )}
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
              
          </Col>
        </Row>
    </Container>
    </section>
  </>
  )
}

export default withFilters(ServiceProviderRequest)
