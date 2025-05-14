import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import Slider from "react-slick";
import {
  aimsData,
  counterData,
  servicesData,
  servicesProviderData,
} from "../../../Config/data";
import "./style.css";
import AboutSection from "../../../Components/UserComponents/AboutSection";
import CounterSection from "../../../Components/UserComponents/CounterSection/CounterSection";
import { images } from "../../../Assets";
import AimsSection from "../../../Components/UserComponents/AimsSection";
import JourneySection from "../../../Components/UserComponents/JourneySection";
import GeneralCard from "../../../Components/UserComponents/GeneralCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuth } from "../../../Hooks/useAuth";



const Home = () => {
  const [services, setServices] = useState([]); // Initialize as an array
  const [aims, setAims] = useState([]); // Initialize as an array

  const location = useLocation();
  const { role, token, user } = useAuth();
  const isProviderPath = location.pathname.includes('provider');


  const headerSliderSettings = {
    className: "center",
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    // speed: 500,
    autoplaySpeed: 2000,
    centerPadding: "100px",
    arrows: false,
    infinite: true,

    responsive: [
      {
        breakpoint: 1667,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  const onWishListClick = () => {
    console.log("on click Wish List");
  };
  // const onBookNowClick = () => {
  //   console.log("on Booking Click");
  // };

  const getData = async () => {
    try {
      const servicesResponse = servicesData;
      const aimsResponse = aimsData;
      if (servicesResponse.status) {
        const { data } = servicesResponse.detail;
        setServices(data);
      }

      if (aimsResponse.status) {
        const { detail } = aimsResponse;
        setAims(detail);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const heroSectionRef = useRef(null);
  useEffect(() => {
    
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Run the animation only once
      offset: 200, // Trigger animation when 200px in view
    }); 
    AOS.refresh();

    const handleScroll = () => {
      AOS.refresh();  // Refresh AOS when user scrolls
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <>
     

      <section className="hero-banner" ref={heroSectionRef}>
        <div className="header-slide position-relative">
          <img
            className="img-fluid banner-image"
            src={images.heroBanner}
            alt="Hero Banner"
            // data-aos="fade-up" // Animation trigger
            // data-aos-offset="200" // Offset from the viewport
          />
          <div className="slide-content-wrap container-fluid">
            <div className="slide-content">
              <h2
                className="section-title fw-bold mb-2 mb-md-3 mb-lg-4 text-white text-capitalize"
                data-aos="fade-up"
                data-aos-offset="100"
                 data-aos-delay="200"
              >
                Recovery Made Simple, Accessible, and Personal
              </h2>
              <h5
                className="text-white mb-0 fw-regular mb-2"
                data-aos="fade-up"
                data-aos-offset="0"
                 data-aos-delay="300"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h5>
              <a
                href="#about-sec"
                className="btn btn-primary mt-3 mt-lg-4"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="400"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      {token && isProviderPath && (  
      <section className={`section booking-sec`}>
        <Container fluid>
        <Row>
          <Col xs={12} className="mb-3 mb-lg-4">
            <h3 className="section-title fw-bold text-center mb-0" data-aos="flip-up">
              My Bookings
            </h3>
          </Col>
          <Col xs={12} lg={6}>  
            <Card className="booking-card border-0 flex-grow-1">
              <Card.Body className="position-relative p-0 booking-detail-card inline-card">
                <Row>
                  <Col xs={12} lg={6}>
                    <div class="mb-3 mb-md-3 mb-xxl-4 d-sm-flex gap-3 align-items-center">
                      <h5 class="mb-2 mb-sm-0 text-black fw-semibold">Booking ID:</h5>
                      <p class="mb-0">#1234567</p>
                    </div>
                    <div class="mb-0 d-sm-flex gap-3 align-items-center">
                      <h5 class="mb-2 mb-sm-0 text-black fw-semibold">Visit Charges:     </h5>
                      <p class="mb-0">$250</p>
                    </div>
                  </Col>
                  <Col xs={12} lg={6}>
                    <div class="mb-3 mb-md-3 mb-xxl-4 d-sm-flex gap-3 align-items-center">
                      <h5 class="mb-2 mb-sm-0 text-black fw-semibold">Status:</h5>
                      <p class="mb-0">Upcoming</p>
                    </div>
                    <div class="mb-0 d-sm-flex gap-3 align-items-center">
                      <h5 class="mb-2 mb-sm-0 text-black fw-semibold">Appointment Type:</h5>
                      <p class="mb-0">Onsite</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={6}>  
            <Card className="booking-card border-0 flex-grow-1">
              <Card.Body className="position-relative p-0 booking-detail-card inline-card">
                <Row>
                  <Col xs={12} lg={6}>
                    <div class="mb-3 mb-md-3 mb-xxl-4 d-sm-flex gap-3 align-items-center">
                      <h5 class="mb-2 mb-sm-0 text-black fw-semibold">Booking ID:</h5>
                      <p class="mb-0">#1234567</p>
                    </div>
                    <div class="mb-0 d-sm-flex gap-3 align-items-center">
                      <h5 class="mb-2 mb-sm-0 text-black fw-semibold">Visit Charges:     </h5>
                      <p class="mb-0">$250</p>
                    </div>
                  </Col>
                  <Col xs={12} lg={6}>
                    <div class="mb-3 mb-md-3 mb-xxl-4 d-sm-flex gap-3 align-items-center">
                      <h5 class="mb-2 mb-sm-0 text-black fw-semibold">Status:</h5>
                      <p class="mb-0">Upcoming</p>
                    </div>
                    <div class="mb-0 d-sm-flex gap-3 align-items-center">
                      <h5 class="mb-2 mb-sm-0 text-black fw-semibold">Appointment Type:</h5>
                      <p class="mb-0">Onsite</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} className="text-center mt-3">
            <Link className="btn btn-primary mt-1 mt-md-3" to="booking-logs">
              View All
            </Link>
          </Col>
        </Row>
        </Container>
      </section>
      )}

      <AboutSection />

      <CounterSection data={counterData} />
    
      {!isProviderPath && (
        <section className={`section services-sec`}>
          <Container fluid>
            <Row>
              <Col xs={12} className="mb-4">
                <h2 className="section-title fw-bold text-center mb-0"
                data-aos="flip-up"
                >
                  Top Services
                </h2>
              </Col>
              {services.slice(0, 3).map((item, index) => (
                <Col lg={4} key={index} className="mb-4 mb-lg-0"
                data-aos={
                  index === 0 ? "fade-right" :
                  index === 1 ? "fade-up" :
                  index === 2 ? "fade-left" : ""
                }
                >
                  <GeneralCard
                    data={item}
                    serviceCard={true}
                    linkPath="/services/"
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      

      
      {/* Aim Section */}
      <AimsSection
        title={aims.title}
        subtitle={aims.subtitle}
        description={aims.description}
      />

      <JourneySection />

      {!isProviderPath && (
        <section className={`section service-provider-sec pt-0 pb-4`}>
          <Container fluid className="mw-100">
            <Row>
              <Col xs={12} className="mb-2 mb-md-3 mb-lg-4">
                <h2 className="section-title fw-bold text-center mb-0"
                data-aos="flip-up"
                >
                  Top Service Providers
                </h2>
              </Col>
              <Col xs={12} className="g-0"
              data-aos="fade-up"
              >
                <Slider
                  {...headerSliderSettings}
                  className="service-provider-slider"
                  
                >
                  {servicesProviderData.detail.data.map((item, index) => (
                    <Card
                      className="top-service-card border-0 flex-grow-1"
                      key={index}
                    >
                      <Card.Body className="position-relative p-0">
                        <div className="d-flex px-0 px-md-3">
                          <div className="flex-grow-1 d-flex gap-2 gap-md-3">
                            <div className="flex-shrink-0">
                              <img src={item.image} alt={item.name} />
                            </div>
                            <div className="flex-grow-1 align-self-center">
                              <h5 className="mb-1 fw-semibold">{item.name}</h5>
                              <p className="mb-0 text-capitalize fw-normal">
                                {item.category}
                              </p>
                            </div>
                          </div>
                          {item.wishList && (
                            <div className="flex-shrink-0">
                              <button
                                className="wish-btn"
                                onClick={onWishListClick}
                              >
                                <FontAwesomeIcon icon={faHeart} />
                              </button>
                            </div>
                          )}
                        </div>
                        <div className="sep-bar"></div>
                        <div className="d-flex px-0 px-md-3">
                          <div className="flex-grow-1 align-self-center">
                            <div className="review-rating">
                              <span className="rating fw-normal">
                                <FontAwesomeIcon icon={faStar} className="me-2" />
                                {item.rating}
                              </span>
                              <span className="review position-relative">
                                {item.reviews} reviews
                              </span>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <Link
                              className="btn btn-blue"
                              to={`/services-provider/${item?.id}`}
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </Slider>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default Home;
