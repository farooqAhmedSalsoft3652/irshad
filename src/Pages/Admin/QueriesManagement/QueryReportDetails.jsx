import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { reportTableData } from "../../../Config/data";

const QueryReportDetails = () => {
  const { id } = useParams();
  const [queriesData, setQueriesData] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const response = reportTableData.detail.data.find((e) => e.id === id);

      // const response = await getDetails(`/admin-api/users/${id}`);
      if (response) {
        // setQueriesData(response.detail);
        setQueriesData(response);
      }
    };
    getUser();
  }, [id]);

  const { emailAddress, userType, fullName, date, subject, message } = queriesData;
  return (
    <DashboardLayout pageTitle="View Query">
      <div className="dashCard ">
        <div className="row mb-lg-4 mb-3">
          <div className="col-12">
            <div className="d-flex">
              <BackButton2 />
              <h2 className="mainTitle mb-0">View Query</h2>
            </div>
          </div>
        </div>
        <Row>
          <Col xs={12} className="d-flex flex-column flex-lg-row gap-3">
            <div className="flex-grow-1 order-2 order-lg-1">
              <Col lg={12} xl={11} xxl={7}>
                <Row>
                  {[
                    { label: "Full Name", value: fullName },
                    { label: "email Address", value: emailAddress },
                    { label: "User Type", value: userType },
                    { label: "Date", value: date },
                  ].map(({ label, value }) => (
                    <Col md={6} className="mb-3 mb-lg-4" key={label}>
                      <div className="detail-box">
                        <h6 className="">{label}</h6>
                        <p className="mb-0" style={{ textTransform: label === "User Type" ? "capitalize" : "none" }}>
                          {value}
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>
                <Row>
                  {[
                    { label: "Subject", value: subject },
                    { label: "Message", value: message },
                  ].map(({ label, value }) => (
                    <Col xs={12} className="mb-3 mb-lg-4" key={label}>
                      <div className="detail-box">
                        <h6 className="">{label}</h6>
                        <p className="mb-0">{value}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </div>
            {/* <div className="flex-shrink-0 order-1 order-lg-2">
              <CustomButton text="Initiate Chat" onClick={() => setInitiateModal(true)} />
            </div> */}
          </Col>
        </Row>
      </div>
    </DashboardLayout>
  );
};

export default QueryReportDetails;
