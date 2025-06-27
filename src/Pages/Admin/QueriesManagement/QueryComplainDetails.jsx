import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { complainTableData } from "../../../Config/data";

const QueryComplainDetails = () => {
  const { id } = useParams();
  const [queriesData, setQueriesData] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const response = complainTableData.detail.data.find((e) => e.id === id);

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
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex">
              <BackButton2 />
              <h2 className="mainTitle mb-0">View Query</h2>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <div className="row">
              <div className="col-md-10 col-lg-9 col-xl-7">
                <div className="row my-4">
                  {[
                    { label: "Full Name", value: fullName },
                    { label: "email Address", value: emailAddress },
                    { label: "User Type", value: userType },
                    { label: "Date", value: date },
                  ].map(({ label, value }) => (
                    <div className="col-md-6 mb-3" key={label}>
                      <div className="detail-box">
                        <h6 className="">{label}</h6>
                        <p className="mb-0" style={{ textTransform: label === "User Type" ? "capitalize" : "none" }}>{value}</p>
                      </div>
                    </div>
                  ))}
                  <div className="row ">
                    {[
                      { label: "Subject", value: subject },
                      { label: "Message", value: message },
                    ].map(({ label, value }) => (
                      <div className="col-md-10 col-12 mb-3" key={label}>
                        <div className="detail-box">
                        <h6 className="">{label}</h6>
                        <p className="mb-0">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default QueryComplainDetails;
