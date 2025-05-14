import React, { useEffect, useRef, useState } from "react";
import CounterCard from "./CounterCard";
import { Container, Row, Col } from "react-bootstrap";
import "./CounterSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

const CounterSection = ({ data }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isProviderPath = location.pathname.includes('provider');


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section className={`section counter-sec ${isProviderPath  ? 'py-5 pt-3' : 'py-1'}`} ref={sectionRef}>
      <Container fluid>
        <Row>
          {data.map((item, index) => (
            <Col
              xs={12}
              sm={6}
              md={3}
              key={index}
              className={`mb-4 mb-md-0 column ${
                index < data.length - 1 ? "border-right" : ""
              }`}

              data-aos={
                index ===  0 ||
                index === 1 ||
                index === 2 ||
                index === 3 ? "fade-up" : ""
              }
              data-aos-delay={
                index === 0 ? "200" :
                index === 1 ? "350" :
                index === 2 ? "500" :
                index === 3 ? "650" : ""
              }

            >
              <CounterCard data={item} isVisible={isVisible} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CounterSection;
