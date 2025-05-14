import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { images } from "../../../Assets";
import AimsSection from "../../../Components/UserComponents/AimsSection";
import CounterCard from "../../../Components/UserComponents/CounterSection/CounterCard";
import PageTitle from "../../../Components/PageTitle";
import {
  aimsData,
  counterData
} from "../../../Config/data";
import "./style.css";
import { usePageTitle } from "../../../Utils/helper";
import JourneySection from "../../../Components/UserComponents/JourneySection";
import CounterSection from "../../../Components/UserComponents/CounterSection/CounterSection";

const AboutUs = () => {
  usePageTitle("About", true);

  const [aims, setAims] = useState([]); // Initialize as an array

  const getData  = async () => {
    try {
      const aimsResponse = aimsData;
      
      if (aimsResponse.status) {
        const { detail } = aimsResponse;
        setAims(detail);
      }

    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getData ();
  }, []);

  // console.log(aims, "aims")
  return (
    <>
      {/* <PageTitle pageHeading="About Us" /> */}
      <section className={`page-content about-us`}>
        <Container fluid>
          <Row>
            <Col xs={12} md={12} lg={6}>
              <div className="d-flex gap-3 align-items-center about-img">
                <img src={images.aboutImg1} alt="" className="img-fluid" />
                <img src={images.aboutImg2} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col xs={12} md={12} lg={6} className="align-self-center">
              <div className="ps-xl-2 ps-xxl-4 pe-xxl-2">
                <Row>
                  <Col xs={12}>
                    <h2 className="section-title fw-bold mt-3 mt-lg-0 mb-3 mb-xl-4 text-capitalize">
                      Your journey to emotional well-being.
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>

                    <div className="sep-bar"></div>
                  </Col>
                  <Col xs={12} lg={6}>
                    <h3 className="fw-bold mb-2">Our Vision</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </Col>
                  <Col xs={12} lg={6}>
                    <h3 className="fw-bold mb-2">Vision</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </Col>
                  <Col xs={12}>
                    <Link
                      className="btn btn-primary mt-4 wow animate__fadeInUp"
                      to=""
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

      <CounterSection data={counterData} />

      {/* <section className={`section counter-sec pb-5`}>
        <Container fluid>
          <Row>
            {counterData.map((item, index) => (
              <Col
                xs={12}
                lg={3}
                key={index}
                className={`${
                  index < counterData.length - 1 ? "border-right" : ""
                }`}
              >
                <CounterCard data={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}

      {/* Aim Section */}
      <AimsSection
        title={aims.title}
        subtitle={aims.subtitle}
        description={aims.description}
      />
      
      <JourneySection />
    </>
  );
};

export default AboutUs;
