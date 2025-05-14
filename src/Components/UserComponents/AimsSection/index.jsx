import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css"
const AimsSection = ({ title, subtitle, description }) => {
  return (
    <section className="section aim-sec">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h3 className="text-capitalize fw-bold mb-3"
            data-aos="flip-up"
            >{title}</h3>
          </Col>
          <Col xs={12} lg={6}>
            <h2 className="fw-bold mb-2 text-capitalize"
             data-aos="flip-up"
             data-aos-delay="150"
            >
              {subtitle}
            </h2>
          </Col>
          <Col xs={12} lg={6} className="align-self-end"
          data-aos="fade-up"
          data-aos-delay="200">
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AimsSection;
