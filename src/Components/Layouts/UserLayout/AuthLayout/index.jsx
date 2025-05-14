import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { images } from "../../../../Assets";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

export const UserAuthLayout = (props) => {
  const location = useLocation();
  const pathname = location?.pathname;
  const [, firstSegment] = pathname.split("/");

  return (
    <>
      <section className={`user-login`}>
        <Container fluid>
          <Row>
            <Col xs={12} lg={12} xxl={11} className='mx-auto'>
              <Row className="row justify-content-center authBox align-items-center">
                <div className="col-lg-6 d-none d-lg-block ">
                  <div className="authLogo ">
                    <img src={images.adminLogo} alt="authLogo" />
                  </div>
                  <div className="auth-Bg pe-xxl-5 me-5">
                    <div className="auth-wrap text-white">
                      <p className="auth_card_title">{props?.authLeftText}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xxl-6"> 
                  <div className="authFormWrapper">
                    <div className="authForm">
                      {/* <div className="authLogo ">
                        <img src={images.adminLogo} alt="authLogo" />
                      </div> */}
                      <div className="authFormHeader mb-sm-5 mb-3 text-center">
                        <h2 className="authTitle">{props?.authTitle}</h2>
                        {props?.authMain && <p className="authPara ">{props?.authPara}</p>}
                      </div>
                      {props?.children}
                      {props?.backOption && (
                        <div className="text-center mt-5">
                          <Link to={`/${firstSegment}`} className="fw-normal text-decoration-underline grayColor">
                            <button className="notButton underlineOnHover blueColor">Back to Login</button>
                          </Link>
                        </div>
                      )}
                      <p className="new-user px-2 px-lg-2 mb-0 mt-3 fw-medium mt-lg-3 mt-xxl-4 text-center">Not a User? Register Now</p>
                      <div className="login-social-acount mt-4">
                        <Link to="facebook.com" target="_blank">
                          <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                        <Link to="facebook.com" target="_blank">
                        <img src={images.googleIcon} alt="" className="google-icon" />
                        </Link>
                        <Link to="facebook.com" target="_blank">
                          <FontAwesomeIcon icon={faApple} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
