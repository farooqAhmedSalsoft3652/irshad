import { Col, Container, Row } from "react-bootstrap";
import VideoCall from "../../../Assets/images/videoCall.png";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import { usePageTitleUser } from "../../../Utils/helper";
import { useState } from "react";
import CustomModal from "../../../Components/CustomModal";

const JoinSession = () => {
  usePageTitleUser("Join Session");
  const [leaveModal, setLeaveModal] = useState(false);
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
              <div>
                <img src={VideoCall} alt="join-session" className="img-fluid w-100" />
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button className="cam_btn">
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.4422 4H6.55785H6.55783C5.61354 3.99999 4.8443 3.99998 4.21978 4.05101C3.5743 4.10374 2.99586 4.21593 2.45704 4.49047C1.61031 4.9219 0.921902 5.61031 0.490472 6.45704C0.215932 6.99586 0.103744 7.5743 0.0510066 8.21978C-1.94162e-05 8.8443 -1.05588e-05 9.61354 3.16219e-07 10.5578V10.5579V13.4422V13.4422C-1.05588e-05 14.3865 -1.94162e-05 15.1557 0.0510066 15.7802C0.103744 16.4257 0.215932 17.0041 0.490472 17.543C0.921902 18.3897 1.61031 19.0781 2.45704 19.5095C2.99586 19.7841 3.5743 19.8963 4.21978 19.949C4.84429 20 5.6135 20 6.55776 20H6.55788H11.4421H11.4422C12.3865 20 13.1557 20 13.7802 19.949C14.4257 19.8963 15.0041 19.7841 15.543 19.5095C16.3897 19.0781 17.0781 18.3897 17.5095 17.543C17.7841 17.0041 17.8963 16.4257 17.949 15.7802C17.9516 15.7482 17.9541 15.7159 17.9564 15.6831L22.4188 18.8705C23.0806 19.3433 24 18.8702 24 18.0568V5.94317C24 5.1298 23.0806 4.65667 22.4188 5.12944L17.9564 8.31681C17.9541 8.28409 17.9516 8.25174 17.949 8.21978C17.8963 7.5743 17.7841 6.99586 17.5095 6.45704C17.0781 5.61031 16.3897 4.9219 15.543 4.49047C15.0041 4.21593 14.4257 4.10374 13.7802 4.05101C13.1557 3.99998 12.3865 3.99999 11.4422 4H11.4422ZM3.36502 6.27248C3.5749 6.16555 3.86085 6.087 4.38264 6.04436C4.91611 6.00078 5.60341 6 6.6 6H11.4C12.3966 6 13.0839 6.00078 13.6174 6.04436C14.1392 6.087 14.4251 6.16555 14.635 6.27248C15.1054 6.51217 15.4878 6.89462 15.7275 7.36502C15.8345 7.5749 15.913 7.86085 15.9556 8.38264C15.9992 8.91611 16 9.60341 16 10.6V13.4C16 14.3966 15.9992 15.0839 15.9556 15.6174C15.913 16.1392 15.8345 16.4251 15.7275 16.635C15.4878 17.1054 15.1054 17.4878 14.635 17.7275C14.4251 17.8345 14.1392 17.913 13.6174 17.9556C13.0839 17.9992 12.3966 18 11.4 18H6.6C5.60341 18 4.91611 17.9992 4.38264 17.9556C3.86085 17.913 3.5749 17.8345 3.36502 17.7275C2.89462 17.4878 2.51217 17.1054 2.27248 16.635C2.16555 16.4251 2.087 16.1392 2.04436 15.6174C2.00078 15.0839 2 14.3966 2 13.4V10.6C2 9.60341 2.00078 8.91611 2.04436 8.38264C2.087 7.86085 2.16555 7.5749 2.27248 7.36502C2.51217 6.89462 2.89462 6.51217 3.36502 6.27248Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="text">Cam</span>
                </button>
                <button className="cam_btn">
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 13C8 14.1046 8.89543 15 10 15H14C15.1046 15 16 14.1046 16 13V5C16 2.79086 14.2091 1 12 1C9.79086 1 8 2.79086 8 5V13ZM5 9.5C5.55228 9.5 6 9.94771 6 10.5V14C6 15.6569 7.34315 17 9 17H12H15C16.6569 17 18 15.6569 18 14V10.5C18 9.94771 18.4477 9.5 19 9.5C19.5523 9.5 20 9.94771 20 10.5V14C20 16.7614 17.7614 19 15 19H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22L11 19H9C6.23858 19 4 16.7614 4 14V10.5C4 9.94771 4.44772 9.5 5 9.5Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="text">Mic</span>
                </button>
                <button className="cam_btn" onClick={() => setLeaveModal(true)}>
                  <span className="icon" style={{ background: "#F04438" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.08412 2.9999C7.45543 1.46444 9.0016 0.428815 10.6286 0.777455L18.6286 2.49174C20.0118 2.78814 21 4.01053 21 5.42515V5.9999V17.9999V18.5747C21 19.9893 20.0118 21.2117 18.6286 21.5081L10.6286 23.2223C9.0016 23.571 7.45543 22.5354 7.08412 20.9999H6C4.34315 20.9999 3 19.6568 3 17.9999V11.4999V10.9999V5.9999C3 4.34305 4.34315 2.9999 6 2.9999H7.08412ZM7 4.9999H6C5.44772 4.9999 5 5.44762 5 5.9999V10.9999V11.4999V17.9999C5 18.5522 5.44772 18.9999 6 18.9999H7V4.9999ZM11 11.9999C11 12.5522 10.5523 12.9999 10 12.9999C9.44772 12.9999 9 12.5522 9 11.9999C9 11.4476 9.44772 10.9999 10 10.9999C10.5523 10.9999 11 11.4476 11 11.9999Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="text">Leave</span>
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <CustomModal
        show={leaveModal}
        headin=""
        para="Are you sure you want to leave the session?"
        close={() => setLeaveModal(false)}
        action={() => {
          setLeaveModal(false);
        }}
      />
    </Container>
  );
};

export default JoinSession;
