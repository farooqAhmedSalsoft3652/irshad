import React from 'react'
import { Formik, Form } from 'formik';
import { Col, Container, Row,  } from 'react-bootstrap'
import { Form as BootstrapForm } from 'react-bootstrap';
import { images } from '../../../Assets'

import CustomButton from '../../../Components/CustomButton';
import { servicesData } from '../../../Config/data';
import { Link, useParams } from 'react-router-dom';
import BackButton2 from '../../../Components/BackButton/BackButton2';
import { userContactValidationSchema } from '../../../Config/Validations';
import CustomInput from '../../../Components/CustomInput';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import Accordion from 'react-bootstrap/Accordion';

import "./style.css";
const ServicesDetails_1 = ({filters, setFilters, pagination, updatePagination,}) => {
  const id = useParams();

  const handleSubmit = () =>{
    console.log("submit")
  }

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
                <h5 className="category-name mb-3">Abc category</h5>
                <h2 className='fw-bold mb-2 page-title'>Drug Consultation</h2>
              </div>
              <div className="flex-grow-1 d-flex justify-content-end align-self-end">
                <span className='price fw-semibold'>$20</span>
              </div>
            </div>
            <Accordion defaultActiveKey={['0']} alwaysOpen className=''>
              <Accordion.Item eventKey="0" className='mb-4'>
                <Accordion.Header>Address Detail</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex justify-content-between">
                    <div className="flex-grow-1">
                      <p className='mb-1'>XYZ Address</p>
                      <p className='mb-1'>City Name</p>
                    </div>
                    <div className="flex-shrink-0">
                      <CustomButton
                        variant="site-btn primary-btn"
                      >
                        Continue
                      </CustomButton>
                    </div>
                  </div>
                  <div className="map mt-2"></div><img src={images.map} alt="" className='img-fluid' />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className='mb-4'>
                <Accordion.Header>Contact Detail</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className='mb-4'>
                <Accordion.Header>Service Detail</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default ServicesDetails_1