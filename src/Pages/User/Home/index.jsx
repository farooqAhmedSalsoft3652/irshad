import "aos/dist/aos.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../../Assets";
import CustomModal from "../../../Components/CustomModal";
import { useAuth } from "../../../Hooks/useAuth";
import { usePageTitleUser } from "../../../Utils/helper";
import "./style.css";

const Home = () => {
  usePageTitleUser("Home");
  const { token } = useAuth();
  const [loginModal, setLoginModal] = useState(false);
  const handleProtectedClick = () => {
    if (!token) {
      setLoginModal(true);
    }
  };
  return (
    <>
      <section className="hero-banner">
        <div className="header-slide position-relative">
          <img className="img-fluid banner-image" src={images.BannerImg} alt="Hero Banner" />
          <div className="slide-content-wrap container-fluid">
            <div className="slide-content">
              <h2 className="section-title fw-bold mt-5 text-capitalize">Consult. Grow. Succeed – Book Your Session Now!</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="why_we pt-sm-5 pt-3 text-center">
        <div className="container-fluid">
          <h2 className="fw-bold">Why We?</h2>
          <p className="mb-0" style={{ color: "#666764" }}>
            How to be a consultant. 1. You sign up as a consultant, add the necessary details and implement a form. There are 3 screening phases. 2. Once form
            submitted you will wait for approval. 3. Post approval you have finished the first screening step of the 3 phase screening. 4. Next it would be the
            2nd screening, the video verification 10 minute Q and A. Where 5 common questions are asked and consultant has 2 minutes to answer each. 3. Once
            approved, an email sent to schedule a meeting with the admins for the next screening process. 4. The meeting date chosen and once meeting takes
            place, the admins ask the consultant necessary questions to judge the consultant whether he is competent or not. Here they can also discuss about
            commissions, pricings, dates of availability. 5. Once approved, there will be an email sent about approval. Where they will take him to a page where
            they will be able to see tutorials about how to operate. Somewhat like a probation period. A simple tutorial, a reading of rules and regulations and
            a quiz will take place to assess the consultant finally. Why the quiz? to make sure he knows his things, and later doesn't say I didn't know. AND he
            will not consult and be approved a 100% unless he passes the probation period of learning and tutorials and quiz and reading the rules
          </p>
        </div>
      </section>
      <section className="how_to_be pt-sm-5 pt-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold">How To be a Consultant</h2>
              <p style={{ color: "#666764" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
                justo commodo. Proin sodales pulvinar tempor.{" "}
              </p>
              <div>
                <button className="button_1" onClick={handleProtectedClick}>
                  <images.ArrowVector /> Video Verification
                </button>
                <button className="button_2" onClick={handleProtectedClick}>
                  <images.ArrowVector /> Meeting With Admin
                </button>
                <button className="button_3" onClick={handleProtectedClick}>
                  <images.ArrowVector /> Rules & Regulation
                </button>
                <button className="button_4" onClick={handleProtectedClick}>
                  <images.ArrowVector /> Tutorials
                </button>
                <button className="button_5" onClick={handleProtectedClick}>
                  <images.ArrowVector /> Final Approval
                </button>
                <button className="button_6" onClick={handleProtectedClick}>
                  <images.ArrowVector /> Wait for Result
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="how_to_be_img">
                <img src={images.ConsultantImg} alt="our-aim" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our_aim pt-sm-5 pb-sm-5 pt-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="our_aim_img">
                <img src={images.OurAim} alt="our-aim" className="w-100" />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold">Our Aim?</h2>
              <p style={{ color: "#666764" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
                justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam
                fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aenean euismod bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin
                gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc
                eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <CustomModal show={loginModal} close={() => setLoginModal(false)} para="You need to login or signup first">
        <div className="text-center">
          <img src={images.Question} alt="check" className="modalImage" />
          <p className="modalPara text-capitalize">You need to login or signup first</p>
          <div className="d-flex gap-2 justify-content-center">
            <Link to="/login" className="siteBtn primaryBtn">
              Login
            </Link>
            <Link to="/signup" className="siteBtn secondaryBtn">
              Signup
            </Link>
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default Home;
