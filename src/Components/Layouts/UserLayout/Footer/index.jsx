
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link,NavLink } from "react-router-dom";
import { images } from "../../../../Assets";
import './style.css'

export const Footer = () => {
  return (
    <>
    <footer id="footer" className="position-relative">
      <div className="footer-widgets">
          <Container fluid>
              <Row>
                  <Col col={12} md={6} lg={4} className="align-items-center mb-4 mb-md-0 align-items-stretch">
                    <div className="widget image-widget text-left w-100">
                      <img src={images.FooterLogo} className='img-fluid' alt="" />
                      <div className="w-100 pe-lg-5">
                        <p className="mt-3 mb-0 text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled.</p>
                      </div>

                    </div>
                  </Col>
                  <Col col={12} md={6} lg={4} className="mt-lg-0 mt-4">
                    <Row>
                      <Col xs={12} md={6} xxl={6}>
                        <div className="widget">
                          <h3 className="widget-title fw-bold mb-2 mb-lg-2">Quick Links</h3>
                          <Nav as="ul" className="">
                            <Nav.Item as="li">
                              <NavLink to="/">Home</NavLink>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <NavLink to="/about-us">About Us</NavLink>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <NavLink to="/contact-us">Contact Us</NavLink>
                            </Nav.Item>
                          </Nav>
                        </div>
                      </Col>
                      <Col xs={12} md={6} xxl={6}>
                        <div className="widget">
                          <h3 className="widget-title fw-bold mb-2 mb-lg-2">Services</h3>
                          <Nav as="ul" className="">
                            <Nav.Item as="li">
                              <NavLink to="/">Drug Consultation</NavLink>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <NavLink to="/">Pet Walker</NavLink>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <NavLink to="/">Mental Therapy</NavLink>
                            </Nav.Item>
                          </Nav>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col col={12} md={6} lg={3} className="mt-lg-0 mt-4">
                    <div className="widget contact-info">
                        <h3 className="widget-title fw-bold mb-3 mb-lg-4">Get in Touch</h3>
                        <Nav as="ul" className="">
                          <Nav.Item as="li" className="contact-number">
                            <a href="tel:123456789">(123)-456-74700</a>
                          </Nav.Item>
                          <Nav.Item as="li"><a href="tel:123456789">info@example.com</a></Nav.Item>
                          <Nav.Item as="li">121 Lato Street, Melbourne, POC 3000</Nav.Item>
                        </Nav>
                    </div>
                  </Col>
              </Row>
          </Container>
      </div>
      <div className="footer-info">
        <Container>
          <Row>
            <Col col={12} className="text-center info">
              <div className="border-top py-3">
                <address>Copy&copy; 2024 All rights reserved.</address>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>      
    </>
  );
};


