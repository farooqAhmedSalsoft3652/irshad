import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CustomButton from "../../../Components/CustomButton";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import ContactUsTable from "./ContactUsTable";
import ComplainTable from "./ComplainTable";
import ReportTable from "./ReportTable";
import QuestionTable from "./QuestionTable";


const QueriesManagement = () => {
  const [activeTab, setActiveTab] = useState("contact");
  const [tabWidth, setTabWidth] = useState(160);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    let tab = searchParams.get("tab");
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  useEffect(() => {
    const handleResize = () => {
      setTabWidth(window.innerWidth < 768 ? 160 : 180);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderTab = () => {
    switch (activeTab) {
      case "contact":
        return <ContactUsTable />;
      case "complain":
        return <ComplainTable />;
      case "report":
        return <ReportTable />;
      case "question":
        return <QuestionTable />;;
      default:
        return <ContactUsTable />;
    }
  };

  const handleTabChange = (tab) => {
  setActiveTab(tab);
  const params = new URLSearchParams(window.location.search);
  params.set("tab", tab);
  window.history.replaceState({}, "", `${window.location.pathname}?${params}`);
};

  return (
    <DashboardLayout pageTitle="Query Management">
      <div className="container-fluid">
        <div className="row dashCard">
          <div className="col-12">
            <div className="row mb-4">
              <div className="col-12">
                <h2 className="mainTitle mb-0">Query Management</h2>
              </div>
            </div>
            <div className="mt-4 mb-4 d-flex justify-content-center">
              <CustomButton
                style={{ minWidth: tabWidth, marginBottom: "8px" }}
                className={`tab-btn ${activeTab === "contact" && "tab-selected"} text-decoratio-none leftBordersRounded`}
                text="Contact Us"
                  onClick={() => handleTabChange("contact")}
              />
              <CustomButton
                style={{ minWidth: tabWidth, marginBottom: "8px" }}
                className={`tab-btn ${activeTab === "complain" && "tab-selected"} text-decoration-none rounded-0`}
                text="Complain"
                 onClick={() => handleTabChange("complain")}
              />
              <CustomButton
                style={{ minWidth: tabWidth, marginBottom: "8px" }}
                className={`tab-btn ${activeTab === "report" && "tab-selected"} text-decoration-none rounded-0`}
                text="Report"
                onClick={() => handleTabChange("report")}
              />
              <CustomButton
                style={{ minWidth: tabWidth, marginBottom: "8px" }}
                className={`tab-btn ${activeTab === "question" && "tab-selected"} text-decoration-none rightBordersRounded`}
                text="Ask A Question"
                onClick={() => handleTabChange("question")}
              />
            </div>
            <div className="dashCard mt-4">{renderTab()}</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default QueriesManagement;
