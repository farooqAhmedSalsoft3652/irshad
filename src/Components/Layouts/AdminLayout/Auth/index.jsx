import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { images } from "../../../../Assets";

export const AuthLayout = (props) => {
  const location = useLocation();
  const pathname = location?.pathname;
  const [, firstSegment] = pathname.split("/");
  console.log(firstSegment, "firstSegment")

  return (
    <>
      <section className={`authBg ${props?.authClasMain}`}>
        <div className="container-fluid">
          <div className="row gap-xl-5 gap-lg-3 justify-content-center authBox align-items-center">
            <div className="col-lg-5 col-xxl-4 d-none d-lg-block ">
              <div className="authLogo ">
                <img src={images.adminLogo} alt="authLogo" />
              </div>
              <div className="auth-Bg">
                <div className="auth-wrap  text-white">
                  <p className="auth_card_title">{props?.authLeftText}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xxl-4">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
