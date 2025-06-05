import BackButton2 from "../../../Components/BackButton/BackButton2";
import MeetingImg from "../../../Assets/images/meetAdmin.png";
import MeetAdminBtn1 from "../../../Assets/images/svg/meetAdminBtn1.svg?react";
import MeetAdminBtn2 from "../../../Assets/images/svg/meetAdminBtn2.svg?react";
import MeetAdminBtn3 from "../../../Assets/images/svg/meetAdminBtn3.svg?react";
import MeetAdminBtn4 from "../../../Assets/images/svg/meetAdminBtn4.svg?react";
import "./index.css";
import CustomModal from "../../../Components/CustomModal";
import { useState } from "react";
import { usePageTitleUser } from "../../../Utils/helper";
import { Container } from "react-bootstrap";

const MeetingWithAdmin = () => {
  const [modal, setModal] = useState(false);
  usePageTitleUser("Meeting With Admin");
  return (
    <Container fluid>
      <div className="py-sm-5 py-3 px-sm-0 px-1">
        <div className="site_card">
          <div className="d-flex align-items-center flex-wrap mb-3">
            <BackButton2 />
            <h2 className="mx-auto fw-bold mb-0 page-title">Meeting With Admin</h2>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="position-relative">
                <img src={MeetingImg} alt="" className="img-fluid w-100" />
                <div className="d-flex meetBtns">
                  <button>
                    <MeetAdminBtn1 />
                  </button>
                  <button>
                    <MeetAdminBtn2 />
                  </button>
                  <button>
                    <MeetAdminBtn3 />
                  </button>
                  <button onClick={() => setModal(true)}>
                    <MeetAdminBtn4 />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CustomModal
          show={modal}
          action={() => {
            setModal(false);
          }}
          close={() => setModal(false)}
          para="Meeting With Admin done successfully. Please wait for the admin approval."
          success
        />
      </div>
    </Container>
  );
};

export default MeetingWithAdmin;
