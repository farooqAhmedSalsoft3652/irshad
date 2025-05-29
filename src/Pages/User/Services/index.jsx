import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import GeneralCard from "../../../Components/UserComponents/GeneralCard";
import { servicesData } from "../../../Config/data";
import withFilters from "../../../HOC/withFilters ";
import { usePageTitle } from "../../../Utils/helper";
import "./style.css";
import CustomButton from "../../../Components/CustomButton";

const Services = () => {
  usePageTitle("All Services", true);

  const [services, setServices] = useState([]); // Initialize as an array

  const fetchBookings = async () => {
    try {
      const response = servicesData;
      if (response.status) {
        const { data } = response.detail;
        setServices(data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <Container fluid>
      <div className="py-sm-5 py-3 px-sm-0 px-1">
        <div className="site_card">
          <Row>
            <Col xs={12}>
              <div className="text-center service-header mb-3">
                <div className="flex-shrink-0 mb-3 mb-lg-0 align-self-center">
                  <h2 className="fw-bold mb-0 page-title">All Services</h2>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            {services?.map((item, index) => (
              <Col xs={12} lg={4} xl={4} key={index} className="mb-3">
                <GeneralCard data={item} serviceCard={true} linkPath="/services/" />
              </Col>
            ))}
            <div className="text-center">
            <CustomButton className='siteBtn secondaryBtn' text='Load More' />
            </div>
          </Row>
        </div>
      </div>
    </Container>
  );
};

// export default Services
export default withFilters(Services);
