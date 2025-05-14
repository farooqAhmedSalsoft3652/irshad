import { Col, Container, Row } from "react-bootstrap";
import ConsolidatedNotifications from "../../../Components/ConsolidatedNotifications";
import { usePageTitle } from "../../../Utils/helper";
import "./style.css";

const UserNotifications = () => {
  usePageTitle("Notifications", true);
  const apiEndpoint = `/admin-api/notifications`;
  return (
    <section className="page-content notification-page">
      <Container fluid>
        <Row>
            <Col sm={12} className="gap-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 mb-lg-4">
              <h2 className="page-title fw-bold">Notifications</h2>
            </Col>
        </Row>
        <Row>
          <Col xs={12} xxl={11} className="mx-auto">
            <ConsolidatedNotifications apiEndpoint={apiEndpoint} />
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default UserNotifications;
