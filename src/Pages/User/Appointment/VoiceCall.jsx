import { Col, Container, Row } from "react-bootstrap";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import VoiceCallImg from '../../../Assets/images/voicecall.png';

const VoiceCall = () => {
  return (
    <Container fluid>
      <div className="py-sm-5 py-3 px-sm-0 px-1">
        <div className="site_card">
          <Row>
            <Col xs={12}>
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-sm-3 mb-sm-4 mb-2">
                <div className="d-flex align-items-center">
                  <BackButton2 />
                  <h5 className="fw-bold mb-0">
                    Booking ID: <span className="fw-medium">#123456</span>
                  </h5>
                </div>
                <div>
                  <h5 className="fw-bold mb-0">
                    User: <span className="fw-medium">User Name</span>
                  </h5>
                </div>
              </div>
              <div className="text-center mt-sm-5">
                <img src={VoiceCallImg} alt="call" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default VoiceCall;
