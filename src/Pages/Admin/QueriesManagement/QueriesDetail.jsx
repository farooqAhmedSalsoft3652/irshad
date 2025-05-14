import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
// import { getDetails } from "../../../Services/Api";
import { queriesManagementData } from "../../../Config/data";

const QueriesDetails = () => {
  const { id } = useParams();
  const [queriesData, setQueriesData] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const response = queriesManagementData.detail.data.find((e) => e.id === Number(id));

      // const response = await getDetails(`/admin-api/users/${id}`);
      if (response) {
        // setQueriesData(response.detail);
        setQueriesData(response);
      }
    };
    getUser();
  }, [id]);

  const { emailAddress, userType, userName, date, subject, message } = queriesData;
  return (
    <DashboardLayout pageTitle="View query">
      <div className="row my-4">
        <div className="col-12">
          <div className="d-flex">
            <BackButton />
            <h2 className="mainTitle mb-0">View query</h2>
          </div>
        </div>
      </div>
      <div className="dashCard ">
        <div className="row ">
          <div className="col-12">
            <div className="row">
              <div className="col-md-10 col-lg-9 col-xl-7">
                <div className="row my-4">
                  {[
                    { label: "User Name", value: userName },
                    { label: "email Address", value: emailAddress },
                    { label: "User Type", value: userType },
                    { label: "Date", value: date }
                  ].map(({ label, value }) => (
                    <div className="col-md-6 mb-3" key={label}>
                      <h4 className="secondaryLabel">{label}</h4>
                      <p className="secondaryText wrapText mb-0">{value}</p>
                    </div>
                  ))}
                  <div className="row ">
                    {[
                      { label: "Subject", value: subject },
                      { label: "Message", value: message }
                    ].map(({ label, value }) => (
                      <div className="col-md-10 col-12 mb-3" key={label}>
                        <h4 className="secondaryLabel">{label}</h4>
                        <p className="secondaryText wrapText mb-0">{value}</p>
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

export default QueriesDetails;
