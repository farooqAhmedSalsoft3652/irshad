import React, { useEffect, useState } from 'react'
import { Col,  Container,  Dropdown,  Row, } from "react-bootstrap";
import { servicesData,  } from '../../../Config/data';
import withFilters from '../../../HOC/withFilters ';
import { useFormStatus } from '../../../Hooks/useFormStatus';
import CustomButton from '../../../Components/CustomButton';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../../Utils/helper';
import BackButton2 from '../../../Components/BackButton/BackButton2';
import { Formik, Form } from 'formik';
import { Form as BootstrapForm } from 'react-bootstrap';
import CustomInput from '../../../Components/CustomInput';
import { FaEllipsisH, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { faEllipsisH, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceProviderBookView = ({filters, updatePagination}) => {
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


  const location = useLocation();
  const { formData } = location.state || {};

  // Check if data is incomplete
  const isDataIncomplete = !formData || Object.values(formData).some((value) => !value);


  console.log(formData, "formData ")
  

  return (
    <>
    <section className='page-content page-serviceprovider'>
    <Container fluid>
     <Row>
      <Col sm={12} className="d-flex align-items-center mb-4 mb-xxl-5">
          <BackButton2 className="me-2" /><h2 className="page-title fw-bold mb-0">View Book Service</h2>
      </Col>
    </Row>

    <Row>
    {/* <div>
      {formData ? (
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      ) : (
        <p>No data submitted.</p>
      )}
      {isDataIncomplete && (
        <button onClick={() => navigate(-1)}>Edit</button>
      )}
    </div> */}

          <Col xs={12} className='booking-form'>
          
                  <div className="booking-block py-4 px-3 mb-4">
                    <Row>
                      <Col xs={12} className='d-flex justify-content-between'>
                        <h3 className='mb-4'>Address Detail</h3>
                        <Dropdown align="end" className='post-dropdown'>
                          <Dropdown.Toggle id="dropdown-basic" className='btn-transparent'>
                              <FontAwesomeIcon icon={faEllipsisH} />
                          </Dropdown.Toggle>
                          <Dropdown.Menu className=''>
                            <Dropdown.Item as={Link} to={`/services-provider/book-services`} >
                              <FontAwesomeIcon icon={faPencilAlt} />
                              <span>Edit</span>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} xl={6} xxl={4} className='detail-card mb-2'>
                        <p className='text-dark fw-medium'>{formData.city}</p>
                        <p className='text-dark fw-medium'>{formData.address}</p>
                      </Col>
                    </Row>
                  </div>
                  <div className="booking-block py-4 px-3 mb-4">
                    <Row>
                      <Col xs={12} className='d-flex justify-content-between'>
                        <h3 className='mb-4'>Contact Detail</h3>
                        <Dropdown align="end" className='post-dropdown'>
                          <Dropdown.Toggle id="dropdown-basic" className='btn-transparent'>
                              <FontAwesomeIcon icon={faEllipsisH} />
                          </Dropdown.Toggle>
                          <Dropdown.Menu className=''>
                            <Dropdown.Item as={Link} to={`/services-provider/book-services`} >
                              <FontAwesomeIcon icon={faPencilAlt} />
                              <span>Edit</span>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} xl={6} xxl={4} className='detail-card mb-2'>
                        <h5 className='mb-2 fw-medium'>First Name</h5>
                        <p>{formData.first_name}</p>
                      </Col>
                      <Col xs={12} xl={6} xxl={4} className='detail-card mb-2'>
                        <h5 className='mb-2 fw-medium'>Last Name</h5>
                        <p>{formData.last_name}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} xl={6} xxl={4} className='detail-card mb-2'>
                        <h5 className='mb-2 fw-medium'> Mobile Number</h5>
                        <p>{formData.mobile_number}</p>
                      </Col>
                      <Col xs={12} xl={6} xxl={4} className='detail-card mb-2'>
                        <h5 className='mb-2 fw-medium'>Email</h5>
                        <p>{formData.email}</p>
                      </Col>
                    </Row>
                  </div>
                  <div className="booking-block py-4 px-3">
                    <Row>
                      <Col xs={12} className='d-flex justify-content-between'>
                        <h3 className='mb-4'>Service Detail</h3>
                        <Dropdown align="end" className='post-dropdown'>
                          <Dropdown.Toggle id="dropdown-basic" className='btn-transparent'>
                              <FontAwesomeIcon icon={faEllipsisH} />
                          </Dropdown.Toggle>
                          <Dropdown.Menu className=''>
                            <Dropdown.Item as={Link} to={`/services-provider/book-services`} >
                              <FontAwesomeIcon icon={faPencilAlt} />
                              <span>Edit</span>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} xl={6} xxl={4} className='detail-card mb-2'>
                        <h5 className='mb-2 fw-medium'>Date</h5>
                        <p>08/ 07/ 2022</p>
                      </Col>
                      <Col xs={12} xl={6} xxl={4} className='detail-card mb-2'>
                        <h5 className='mb-2 fw-medium'>Time</h5>
                        <p>08/ 07/ 2022</p>
                      </Col>
                    </Row>
                  </div>

              <Row>
                <Col xs={12} className='mt-3 mt-lg-4'>
                  <CustomButton
                  variant="btn-primary"
                  className="px-5 btn px-5"
                  text="Send Booking request"
                  pendingText="Loading..."
                  // isPending={isSubmitting}
                  type="button"
                  onClick={() => navigate('/services-provider/payment')}
                  // onClick={handleSubmit}
                  />
                
                </Col>
              </Row>
                        
          </Col>
        </Row>
    </Container>
    </section>
  </>
  )
}

export default withFilters(ServiceProviderBookView)
