import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { images } from "../../../Assets";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

import WOW from "wowjs"; // Import WOW.js (make sure you import it correctly from 'wowjs')
import "animate.css"; // Import Animate.css
const AboutSection = () => {
  const isProviderPath = location.pathname.includes('provider');
  // useEffect(() => {
  //   // Initialize WOW.js when the component mounts
  //   const wow = new WOW.WOW({
  //     boxClass: "wow", // The class that triggers the animation
  //     animateClass: "animate__animated", // The class that applies the animation styles
  //     offset: 0, // Distance from the bottom of the viewport to trigger the animation
  //     live: false,
  //   });
  //   wow.init();
  // }, []);

  return (
    <section className="section about-sec">
      <Container fluid>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <div className="d-flex gap-3 align-items-center about-img">
              <img
                src={images.aboutImg1}
                alt="About Image 1"
                className="img-fluid"
                data-aos="fade-right"
                    data-aos-delay="100"
              />
              <img
                src={images.aboutImg2}
                alt="About Image 2"
                className="img-fluid"
                data-aos="fade-left"
                    data-aos-delay="110"
              />
            </div>
          </Col>
          <Col xs={12} md={12} lg={6} className="align-self-center">
            <div
              className="ps-xl-2 ps-xxl-4 pe-xxl-2"
            >
              <Row>
                <Col xs={12}>
                  <h2 className="section-title fw-bold mt-3 mt-lg-0 mb-3 mb-xl-4 text-capitalize"
                  data-aos="flip-up" // Animation trigger
                  >
                    Your journey to emotional well-being.
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-offset="150"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>

                  <div className="sep-bar"></div>
                </Col>
                <Col xs={12} lg={6}>
                  <h3 className="fw-bold mb-2"
                    data-aos="flip-up"
                    // data-aos-delay="100"
                    // data-aos-offset="100"
                  >Our Vision</h3>
                  <p
                   data-aos="fade-up"
                   >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </Col>
                <Col xs={12} lg={6}>
                  <h3 className="fw-bold mb-2"
                   data-aos="flip-up"
                   >Vision</h3>
                  <p
                  data-aos="fade-up"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </Col>
                <Col xs={12}>
                  <Link className="btn btn-primary mt-1 mt-md-3"to={isProviderPath ? "/provider/about-us" : "/about-us"}
                   data-aos="zoom-in"
                  >
                    Learn More
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
