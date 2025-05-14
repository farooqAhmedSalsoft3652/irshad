import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import withModal from "../../../HOC/withModal";
import { isNullOrEmpty } from "../../../Utils/helper";
import BankIcon from "../../../Assets/images/bank-icon.png";
import FaqAccordion from "./FaqAccordion";
import { faqs } from "../../../Config/data";
const FAQsManagement = () => {
  const [faqsData, setFaqsData] = useState({});

  useEffect(() => {
    const getFaqsApiData = async () => {
      const response = faqs;
      if (response) {
        setFaqsData(response);
      }
    };
    getFaqsApiData();
  }, []);

  return (
    <DashboardLayout pageTitle="FAQs Management">
      <div className="row my-4">
        <div className="col-12">
          <h2 className="mainTitle mb-0">FAQs Management</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="dashCard">
            <div className="text-center">
              <p className="mb-0">You haven’t added any FAQ yet, Click Below to Add</p>
              <div className="mt-4">
                <Link to={"add"} className="site-btn primary-btn text-decoration-none">
                  Add
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashCard mt-3">
        <div className="row">
          <div className="col-12">
            <FaqAccordion faqs={faqs} />
          </div>
          <div className="col-12">
            <Link to={`edit`} className="site-btn primary-btn text-decoration-none px-5">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(FAQsManagement);
