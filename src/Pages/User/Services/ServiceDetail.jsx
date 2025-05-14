import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik';
import { Col, Container, Row,  } from 'react-bootstrap'
import { Form as BootstrapForm } from 'react-bootstrap';
import { images } from '../../../Assets'
import CustomButton from '../../../Components/CustomButton';
import { servicesData } from '../../../Config/data';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BackButton2 from '../../../Components/BackButton/BackButton2';
import { userContactValidationSchema } from '../../../Config/Validations';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import "./style.css";
import { usePageTitle } from '../../../Utils/helper';
import withModal from '../../../HOC/withModal';

const ServicesDetails = ({showModal}) => {
  usePageTitle("Product Detail", true)

  const {id} = useParams();
  const navigate = useNavigate();
  const [services, setServices] = useState();

  const handleSubmit = () =>{
      showModal(
        "Book Appointment",
        "Are you sure you want to book the appointment",
        () => navigate(`/services/payment/${id}`),
        false
      );

    console.log("submit")
  }

// console.log(servicesData, "servicesData")
const getServices = async () => {
  
  const response = servicesData?.detail?.data?.find((item) => item.id === Number(id));
  if (response) {
    setServices(response);
  }
};

// UseEffect for calling the async function and handling other side effects
useEffect(() => {
  getServices();
  window.scrollTo({ top: 0, behavior: 'auto' });
}, [id]);
 
// console.log(services, "services")



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

    <section className='page-content services-detail'>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <div className="d-flex services-detail-header mb-3 mb-xl-4 mb-xxl-4 pb-2">
              <div className="flex-shrink-0 align-self-center">
                <h5 className="category-name mb-3">{services?.category}</h5>
                <h2 className='fw-bold mb-2 page-title'>{services?.title}</h2>
                <h4 className='provide-name fw-normal'>{services?.provider_name}</h4>
              </div>
              <div className="flex-grow-1 d-flex justify-content-end align-self-center">
                <Link className='review-link' to={`/services/review/${id}`}>View Review</Link>           
              </div>
            </div>
            {services?.description && (
              <div className="service-des mb-4">
                <h3 className='fw-semibold mb-2'>Description</h3>
                <p>{services.description}</p>
              </div>
            )}
          </Col>
        </Row>
        <Row>
          <Col xs={12} xl={6}  className='booking-form'>
            <h4 className='fw-semibold mb-2 text-black mb-3 mb-lx-4 mb-xxl-4'>Book Appointment</h4>
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
                // handleSubmit,
                setFieldValue
              }) => (
                <Form>
                  <Row>
                    <Col xs={12}>
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
                      </>
                    )}
                    <Col xs={12} className='mt-3 mt-4'>
                    {values.group1 === '1' ? (
                      <CustomButton
                        variant="btn-primary"
                        className="px-5 btn px-5"
                        text="Request"
                        pendingText="Loading..."
                        // isPending={isSubmitting}
                        type="button"
                        onClick={() => navigate(`/services/payment/${id}`)}
                      />
                    ) : (
                      <CustomButton
                      variant="btn-primary"
                      className="px-5 btn px-5"
                      text="Book Appointment"
                      pendingText="Loading..."
                      // isPending={isSubmitting}
                      type="button"
                      onClick={() => navigate('/services/book-services')}
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

export default withModal(ServicesDetails)