import BackButton2 from "../../../Components/BackButton/BackButton2";
import MeetingImg from "../../../Assets/images/meetAdmin.png";
import MeetAdminBtn1 from "../../../Assets/images/meetAdminBtn1.svg?react";
import MeetAdminBtn2 from "../../../Assets/images/meetAdminBtn2.svg?react";
import MeetAdminBtn3 from "../../../Assets/images/meetAdminBtn3.svg?react";
import MeetAdminBtn4 from "../../../Assets/images/meetAdminBtn4.svg?react";
import "./index.css";
import CustomModal from "../../../Components/CustomModal";
import { useState } from "react";
import { usePageTitleUser } from "../../../Utils/helper";

const MeetingWithAdmin = () => {
  const [modal, setModal] = useState(false);
  usePageTitleUser("Meeting With Admin");
  return (
    <div className="p-sm-5 p-3">
      <div className="site_card">
        <div className="d-flex align-items-center flex-wrap mb-3">
          <BackButton2 />
          <h2 className="mx-auto fw-bold mb-0">Meeting With Admin</h2>
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
                <button onClick={()=>setModal(true)}>
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
  );
};

export default MeetingWithAdmin;
