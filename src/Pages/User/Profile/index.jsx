import {React, useEffect, useState,} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { fullName, usePageTitle } from "../../../Utils/helper";
import CustomButton from "../../../Components/CustomButton";
import { useAuth } from "../../../Hooks/useAuth";
import { getCountryFlag } from "../../../Utils/helper";
import './style.css';
import { images } from "../../../Assets";

const UserProfile = (props) => {
  usePageTitle("My Profile", true);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState();

  useEffect(() => {
    setProfilePic(user.photo_path || images.userImage);
  }, []);

  return (
    <section className="page-content profile-page">
      <Container fluid>
        <Row>
            <Col sm={12} className="gap-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 mb-lg-4">
              <h2 className="page-title fw-bold">My Profile</h2>
              <Link className="btn btn-primary" to="/subscriptions/subscriptions-logs/">Delete Account</Link>
            </Col>
        </Row>
        <Row>
          <Col xs={12} lg={10} className="mx-auto">
            <div className="profile-card">
              <div className="px-lg-4 px-xxl-5">
                {user ? (
                <>
                  <Row>
                    <Col xs={12} className="d-flex justify-content-center mb-3 mb-lg-4 mb-xxl-5">
                    <div className="profile-image">
                      <img src={profilePic ?? images.userImage} alt="User" />
                    </div>
                    </Col>
                    <Col xs={12} lg={4} className="mb-3 mb-lg-4 mb-xxl-5">
                      <h5 className="mb-0 fw-medium text-capitalize mb-2">user Name:</h5>
                      <p className="text-black text-capitalize fw-semibold">{fullName(user)}</p>
                    </Col>
                    <Col xs={12} lg={4} className="mb-3 mb-lg-4 mb-xxl-5">
                      <h5 className="mb-0 fw-medium text-capitalize mb-2">Email Address:</h5>
                      <p className="text-black fw-semibold">{user?.email}</p>
                    </Col>
                    <Col xs={12} lg={4} className="mb-3 mb-lg-4 mb-xxl-5">
                      <h5 className="mb-0 fw-medium text-capitalize mb-2">Phone no:</h5>
                      <p className="text-black text-capitalize fw-semibold"><span className="me-1">{getCountryFlag(user.phone)}</span>
                      {user?.phone}</p>
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <Col xs={12} lg={4} className="mb-3 mb-lg-4 mb-xxl-5">
                      <h5 className="mb-0 fw-medium text-capitalize mb-2">Language</h5>
                      <p className="text-black text-capitalize fw-semibold">{user?.language}</p>
                    </Col>
                    <Col xs={12} lg={4} className="mb-3 mb-lg-4 mb-xxl-5">
                      <h5 className="mb-0 fw-medium text-capitalize mb-2">Your Relationship</h5>
                      <p className="text-black text-capitalize fw-semibold">{user?.relationship}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} className="d-flex gap-3 flex-wrap justify-content-center">
                      <CustomButton
                        type="button"
                        variant="btn btn-primary px-0"
                        className="px-5"
                        text="Edit Profile"
                        onClick={() => {
                          navigate("/edit-profile");
                        }}
                      />
                      <CustomButton
                        type="button"
                        className="btn btn-outline-primary px-0"
                        text="Change Password"
                        onClick={() => {
                          navigate("/change-password");
                        }}
                      />
                    </Col>
                  </Row>
                </>
                ) : ""}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default UserProfile