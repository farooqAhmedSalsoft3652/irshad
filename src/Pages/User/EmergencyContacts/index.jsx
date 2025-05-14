import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { emergencyContactData } from '../../../Config/data';
import { usePageTitle } from '../../../Utils/helper';
import { Link } from 'react-router-dom';


const EmergencyContacts = () => {
  usePageTitle("Emergency Contact", true);
  const [emergencyContacts, setEmergencyContacts] = useState(emergencyContactData);

  return (
    <section className='page-content emergency-contect'>
      <Container fluid>
        <Row>
          <Col xs={12} className='mb-4 mb-xxl-5'>
            <h2 className='page-title fw-bold'>Emergency Contacts</h2>
          </Col>
            {emergencyContacts.map((item, index) => (
              <Col xs={12} sm={6} md={4} lg={3} xxl={3} className="mb-2 mb-md-3 mb-lg-3 mb-xxl-4 detail-card" key={index}>
                <h5 className="mb-2 fw-semibold">{item?.name}</h5>
                <p className="fw-normal">{item?.phone}</p>
              </Col>
            ))}
        </Row>
        <Row>
          <Col xs={12} className='mb-4 mb-xxl-4'>
            <h2 className='page-title fw-bold'>User's Added Numbers</h2>
          </Col>
          {emergencyContacts.map((item, index) => (
            <Col xs={12} sm={6} md={4} lg={3} xxl={3} className="mb-2 mb-md-3 mb-lg-3 mb-xxl-4 detail-card" key={index}>
              <h5 className="mb-2 fw-semibold">{item?.name}</h5>
              <p className="fw-normal">{item?.phone}</p>
            </Col>
          ))}
          <Col xs={12} className=''>
            <Link to="/emergency-contacts/add" className="btn btn-primary">Add more or remove</Link>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default EmergencyContacts