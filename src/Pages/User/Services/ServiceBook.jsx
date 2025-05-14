import React, { useEffect, useState } from 'react'
import { Col,  Container,  Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import { servicesData,  } from '../../../Config/data';
import withFilters from '../../../HOC/withFilters ';
import { useFormStatus } from '../../../Hooks/useFormStatus';
import CustomButton from '../../../Components/CustomButton';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../../Utils/helper';
import BackButton2 from '../../../Components/BackButton/BackButton2';
import { Formik, Form } from 'formik';
import { Form as BootstrapForm } from 'react-bootstrap';
import CustomInput from '../../../Components/CustomInput';
import { images } from '../../../Assets';
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { BookingvalidationSchema } from '../../../Config/Validations';

const ServiceBook = ({filters, updatePagination}) => {
  usePageTitle("Services Provider Request", true);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState(null);

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


const handleSubmit = (values) => {
  // Save form data
  setFormData(values);

  // Navigate to the next page with data
  navigate("/services/book-services/view-booking", {
    state: { formData: values },
  });
  console.log(values , "Val")
};

  return (
    <>
    <section className='page-content page-serviceprovider'>
      <Container fluid>
        <Row>
          <Col sm={12} className="d-flex align-items-center mb-4 mb-xxl-5">
              <BackButton2 className="me-2" /><h2 className="page-title fw-bold mb-0">Book Service</h2>
          </Col>
        </Row>

        <Row>
          <Col xs={12} className='booking-form'>
            <Formik
              initialValues={{
                selectedDate: "",
                selectedTime: "",
                city: "",
                address: "",
                first_name: "",
                last_name: "",
                mobile_number: "",
                email: "",
              }}
              onSubmit={handleSubmit}

              // onSubmit={(values) => {
              //   // Save form data and navigate
              //   handleSubmit(values);
              // }}

              validationSchema={BookingvalidationSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                setFieldTouched 
              }) => (
                <Form>
                  <div className="booking-block py-4 px-3 mb-4">
                    <Row>
                      <Col xs={12}>
                        <h3 className='mb-4'>Address Detail</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} xl={6} xxl={4}>
                        <CustomInput
                          label="City"
                          id="city"
                          type="text"
                          name="city"
                          placeholder="Enter City"
                          labelclass="mainLabel"
                          inputclass="mainInput"
                          value={values.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.city && errors.city}
                          required
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} xl={6} xxl={4}>
                        <CustomInput
                          label="Address"
                          id="address"
                          type="text"
                          name="address"
                          placeholder="Enter Address"
                          labelclass="mainLabel"
                          inputclass="mainInput"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.address && errors.address}
                          required
                        />
                      </Col>
                      <Col xs={12}>
                        <img src={images.map} alt="" className='img-fluid' />
                      </Col>
                    </Row>
                  </div>
                  <div className="booking-block py-4 px-3 mb-4">
                    <Row>
                      <Col xs={12}>
                        <h3 className='mb-4'>Contact Detail</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} xl={6} xxl={4}>
                        <CustomInput
                          label="First Name"
                          id="first_name"
                          type="text"
                          name="first_name"
                          placeholder="Enter First Name"
                          labelclass="mainLabel"
                          inputclass="mainInput"
                          value={values.first_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.first_name && errors.first_name}
                          required
                        />
                      </Col>
                      <Col xs={12} xl={6} xxl={4}>
                        <CustomInput
                          label="Last Name"
                          id="last_name"
                          type="text"
                          name="last_name"
                          placeholder="Enter Last Name"
                          labelclass="mainLabel"
                          inputclass="mainInput"
                          value={values.last_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.last_name && errors.last_name}
                          required
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} xl={6} xxl={4}>
                        <label htmlFor="mobile_number" className="mainLabel">
                          Mobile Number<span className="text-danger">*</span>
                        </label>
                        <PhoneInput
                          id="mobile_number"
                          name="mobile_number"
                          defaultCountry="US"
                          placeholder="Enter Mobile Number"
                          value={values.mobile_number}
                          onChange={(mobile_number) => setFieldValue("mobile_number", mobile_number)}
                          onBlur={() => setFieldTouched("mobile_number", true)}
                          className="mainInput"
                        />
                        {touched.mobile_number && errors.mobile_number ? <div className="text-danger">{errors.mobile_number}</div> : null}
                      </Col>
                      <Col xs={12} xl={6} xxl={4}>
                        <CustomInput
                          label="Email"
                          id="email"
                          type="text"
                          name="email"
                          placeholder="Enter Email"
                          labelclass="mainLabel"
                          inputclass="mainInput"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.email && errors.email}
                          required
                        />
                      </Col>
                    </Row>
                  </div>
                  <div className="booking-block py-4 px-3">
                    <Row>
                      <Col xs={12}>
                        <h3 className='mb-4'>Service Detail</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} lg={6}>
                      <Row>
                        <Col xs={12} className="mb-4 mt-3">
                          <h3 className="mb-3 fw-semibold">Slot</h3>
                          <ToggleButtonGroup
                            className="day-slots"
                            type="radio"
                            name="selectedDate"
                            value={values.selectedDate}
                            onChange={(value) => setFieldValue("selectedDate", value)}
                          >
                            <ToggleButton id="tbg-radio-1" value={1}>
                              <span className="date d-block">10</span>
                              <span className="day d-block">Sun</span>
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-2" value={2}>
                              <span className="date d-block">11</span>
                              <span className="day d-block">Mon</span>
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-3" value={3}>
                              <span className="date d-block">12</span>
                              <span className="day d-block">Tue</span>
                            </ToggleButton>
                            {/* Add more buttons as needed */}
                          </ToggleButtonGroup>
                          {touched.selectedDate && errors.selectedDate && (
                            <div className="text-danger mt-2">{errors.selectedDate}</div>
                          )}
                        </Col>

                        <Col xs={12} className="mt-3">
                          <h3 className="mb-3 fw-semibold">Available Hours</h3>
                          <ToggleButtonGroup
                            type="radio"
                            name="selectedTime"
                            value={values.selectedTime}
                            onChange={(value) => setFieldValue("selectedTime", value)}
                          >
                            <ToggleButton id="tbg-radio-1" value={1}>
                              11:00 AM - 11:30 AM
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-2" value={2}>
                              12:00 PM - 12:30 PM
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-3" value={3}>
                              01:00 PM - 01:30 PM
                            </ToggleButton>
                            {/* Add more buttons as needed */}
                          </ToggleButtonGroup>
                          {touched.selectedTime && errors.selectedTime && (
                            <div className="text-danger mt-2">{errors.selectedTime}</div>
                          )}
                        </Col>
                      </Row>
                    </Col>
                    </Row>
                  </div>
                  <Row>
                    <Col xs={12} className='mt-3 mt-lg-4'>
                      <CustomButton
                      variant="btn-primary"
                      className="px-5 btn px-5"
                      text="Continue"
                      pendingText="Loading..."
                      // isPending={isSubmitting}
                      type="submit"
                      // onClick={() => navigate('/services-provider/book-services/view-booking')}
                      // onClick={handleSubmit}
                      />
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

export default withFilters(ServiceBook)
