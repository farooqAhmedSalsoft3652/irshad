import { Accordion, Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { usePageTitle } from "../../../Utils/helper";
import { images } from "../../../Assets";
import { useEffect, useState } from "react";
import { userFaqData } from "../../../Config/data";

const Faqs = () => {
  usePageTitle("Faqs", true);

  const [faqsData, setFaqsData] = useState([]); // Initialize as an array

  const getFaqsApiData = async () => {
    try {
      const response = userFaqData;
      if (response.status) {
        const { data } = response.detail;
        setFaqsData(data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getFaqsApiData();
  }, []);
  return (
    <section className="page-content profile">
      <Container fluid>
        <Row>
            <Col sm={12} className="gap-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 mb-lg-4">
              <h2 className="page-title fw-bold text-uppercase">Faqs</h2>
            </Col>
        </Row>
        <Row>
          <Col xs={12} lg={12} className="mx-auto">
          <Accordion defaultActiveKey={[1]} alwaysOpen>
            {faqsData?.map((item, index) => (
              <Accordion.Item eventKey={item.id} key={item.id} className="mb-4">
                <Accordion.Header>{index + 1}. {item.title}</Accordion.Header>
                <Accordion.Body>
                  {item.content}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          </Col>
        </Row>
      </Container>
      </section>
  )
};

export default Faqs;
