import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import CustomButton from "../../../Components/CustomButton";
import CustomTable from "../../../Components/CustomTable";
import { subscriptionLogsData } from "../../../Config/data";
import { subscriptionLogHeaders } from "../../../Config/TableHeaders";
import { subcriptionStatus , subscriptionType } from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters ";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { serialNum } from "../../../Utils/helper";

const SubscriptionLogs = ({ filters, setFilters, pagination, updatePagination }) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [subscriptionLogs, setSubscriptionLogs] = useState(subscriptionLogsData.detail.data);
  const [tabWidth, setTabWidth] = useState(160);
  const [activeTab, setActiveTab] = useState("provider");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleResize = () => {
      setTabWidth(window.innerWidth < 768 ? 160 : 190);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let tab = searchParams.get("tab");
    if (tab) setActiveTab(tab);
  }, []);

  const fetchSubscriptionLogs = async () => {
    try {
      const response = subscriptionLogsData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setSubscriptionLogs(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page),
        });
      }
    } catch (error) {
      console.error("Error fetching subscription:", error);
    }
  };

  useEffect(() => {
    fetchSubscriptionLogs();
  }, [filters]);

  return (
    <DashboardLayout pageTitle="Subscription Logs">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 ">
            <div className="my-4 d-flex flex-wrap gap-3 gap-md-0 align-items-center justify-content-between">
              <h2 className="mainTitle mb-0">Subscription Logs</h2>
              <Link to={`${activeTab}/management`} className="site-btn primary-btn text-decoration-none">
                Manage Subscription Plan
              </Link>
            </div>
            <div className="mt-5 d-flex justify-content-center mb-4">
              <CustomButton
                className={`site-btn tab-btn ${activeTab === "provider" && "tab-selected"} text-decoratio-none leftBordersRounded`}
                text="Service Provider"
                onClick={() => setActiveTab("provider")}
              />
              <CustomButton
                style={{ minWidth: tabWidth }}
                className={`site-btn tab-btn ${activeTab === "user" && "tab-selected"} text-decoration-none rightBordersRounded `}
                text="User"
                onClick={() => setActiveTab("user")}
              />
            </div>
            <div className="dashCard">
              <div className="row mb-3">
                <div className="col-12">
                  <CustomTable
                    filters={filters}
                    setFilters={setFilters}
                    loading={isSubmitting}
                    headers={subscriptionLogHeaders}
                    pagination={pagination}
                    dateFilters={[
                      {
                        title: "Purchase Date",
                        from: "fromDate",
                        to: "toDate",
                      },
                      {
                        title: "Expiry Date",
                        from: "fromDate",
                        to: "toDate",
                      },
                    ]}
                    selectOptions={[
                      {
                        title: "Status",
                        options: subcriptionStatus,
                      },
                      {
                        title: "Plane Name",
                        options: subscriptionType,
                      },
                    ]}
                  >
                    <tbody>
                      {subscriptionLogs
                        ?.filter((sub) => sub.type === activeTab)
                        .map((item, index) => (
                          <tr key={item?.id}>
                            <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                            <td>{item?.fullName}</td>
                            <td>{item?.emailAddress}</td>
                            <td>{item?.planName}</td>
                            <td className={`${item?.status_detail === "0" ? "text-danger" : "text-success"}`}>
                              {item?.status_detail === "0" ? "Expired" : "Active"}
                            </td>
                            <td>{item?.price}</td>
                            <td>{item?.purchaseDate}</td>
                            <td>{item?.expiryDate}</td>
                          </tr>
                        ))}
                    </tbody>
                  </CustomTable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(withFilters(SubscriptionLogs));
