import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import withModal from "../../../HOC/withModal";
import { isNullOrEmpty } from "../../../Utils/helper";
// import { accountInfo } from "../../../Config/data";
import BankIcon from "../../../Assets/images/bank-icon.png";
const MyBankDetail = () => {
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
    <DashboardLayout pageTitle="My Bank Details">
      {isNullOrEmpty(bankData) ? (
        <div className="dashCard">
          <Link to={"/admin/add-bank-details"}>
            <div className="bankCard">
              <div className="d-flex flex-column justify-content-center">
                <img src={BankIcon} alt="bankicon" className="img-fluid" />
                <p className="mb-0 text-decoration-underline blackColor mt-2">Add bank details</p>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div className="dashCard">
          <div className="row mb-4">
            <div className="col-12">
              <div className="d-flex">
                <h2 className="mainTitle mb-0">My Bank Details</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-5">
              <div className="row mb-3">
                {[
                  { label: "Card holder name", value: bankData?.cardHolderName },
                  { label: "Card Number", value: bankData?.cardNumber },
                  { label: "Validity Date", value: bankData?.validityDate },
                ].map(({ label, value }) => (
                  <div className={`col-sm-4 mb-4`} key={label}>
                    <div className="detail-box">
                      <h6 className="">{label}</h6>
                      <p className="mb-0">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="d-flex align-items-center gap-3">
                  <Link to={`edit`} className="btn btn-primary px-5">
                    Edit Bank Details
                  </Link>
                  <Link to={`/admin/add-bank-details`} className="btn btn-outline-primary px-5">
                    Add Bank Details
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default withModal(MyBankDetail);
