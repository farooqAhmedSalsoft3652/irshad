import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import withModal from "../../../HOC/withModal";
import { isNullOrEmpty, usePageTitleUser } from "../../../Utils/helper";
// import { accountInfo } from "../../../Config/data";
import { Container } from "react-bootstrap";
import BankIcon from "../../../Assets/images/bank-icon.png";
const BankDetailsUser = () => {
  usePageTitleUser("Bank Details");
  const [bankData, setBankData] = useState({});

  const location = useLocation();
  useEffect(() => {
    // const getBankApiData = async () => {
    //   const response = accountInfo;
    //   if (response) {
    //     setBankData(response);
    //   }
    // };
    // getBankApiData();
    const state = location.state;
    console.log(state);
    setBankData(state);
  }, []);

  return (
    <Container fluid className="py-sm-5 py-0">
      <div className="py-sm-5 py-3">
        <div className="site_card">
          <div className="row my-3">
            <div className="col-12">
              <div className="d-flex justify-content-center mb-4">
                <h2 className="page-title fw-bold mb-0">My Bank Details</h2>
              </div>
            </div>
          </div>
          {isNullOrEmpty(bankData) ? (
            <div className="">
              <Link to={"/bank-details-add"}>
                <div className="bankCard">
                  <div className="d-flex flex-column justify-content-center">
                    <img src={BankIcon} alt="bankicon" className="img-fluid" />
                    <p className="mb-0 text-decoration-underline  mt-2">Add Bank Details</p>
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            <div className="mt-3">
              <div className="row">
                <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-5">
                  <div className="row">
                    {[
                      { label: "Name", value: bankData?.name },
                      { label: "Card Number", value: bankData?.cardNumber },
                      { label: "Validity Date", value: bankData?.validityDate },
                    ].map(({ label, value }) => (
                      <div className={`col-md-4 col-sm-6 mb-sm-4`} key={label}>
                        <h5 className="mb-0 fw-medium text-capitalize mb-2">{label}:</h5>
                        <p className="text-capitalize" style={{color: "#727A84"}}>{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex align-items-center gap-2">
                        {/* <Link to={`/bank-details-add`} className="siteBtn primaryBtn text-decoration-none px-5">
                          Add
                        </Link> */}
                        <Link to={`/bank-details-edit`} className="siteBtn secondaryBtn text-decoration-none px-5">
                          Edit Bank Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default withModal(BankDetailsUser);
