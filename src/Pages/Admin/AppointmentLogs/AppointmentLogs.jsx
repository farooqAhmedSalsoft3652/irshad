import { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import CustomTable from "../../../Components/CustomTable";
import { allAppointmentLogsData } from "../../../Config/data";
import { appointmentLogsHeaders } from "../../../Config/TableHeaders";
import { appointmentTypeOptions } from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters ";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { dateFormat, serialNum } from "../../../Utils/helper";
import CustomButton from "../../../Components/CustomButton";

const AppointmentLogs = ({ filters, setFilters, pagination, updatePagination }) => {
  const [appointmentLogs, setAppointmentLogs] = useState([]);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [activeTab, setActiveTab] = useState("Pending");
  const fetchAppointmentLogs = async () => {
    try {
      startSubmitting(true);
      const response = allAppointmentLogsData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setAppointmentLogs(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page),
        });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    fetchAppointmentLogs();
  }, [filters]);

  return (
    <DashboardLayout pageTitle="Appointment Logs">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row my-4">
              <div className="col-12">
                <h2 className="mainTitle mb-0">Appointment Logs</h2>
              </div>
            </div>
            <div className="mt-md-5 mb-4 d-flex flex-wrap justify-content-center">
              <CustomButton
                className={`site-btn mb-2  tab-btn ${activeTab === "Pending" && "tab-selected"} text-decoratio-none leftBordersRounded`}
                text="Pending"
                onClick={() => setActiveTab("Pending")}
              />
              <CustomButton
                className={`site-btn mb-2  tab-btn ${activeTab === "Requested" && "tab-selected"} text-decoration-none notRoundedBorders `}
                text="Requested"
                onClick={() => setActiveTab("Requested")}
              />
              <CustomButton
                className={`site-btn mb-2  tab-btn ${activeTab === "Completed" && "tab-selected"} text-decoration-none notRoundedBorders `}
                text="Completed"
                onClick={() => setActiveTab("Completed")}
              />
              <CustomButton
                className={`site-btn mb-2  tab-btn ${activeTab === "Rejected" && "tab-selected"} text-decoration-none rightBordersRounded`}
                text="Rejected"
                onClick={() => setActiveTab("Rejected")}
              />
            </div>
            <div className="dashCard">
              <div className="row mb-3">
                <div className="col-12">
                  <CustomTable
                    filters={filters}
                    setFilters={setFilters}
                    loading={isSubmitting}
                    headers={appointmentLogsHeaders}
                    pagination={pagination}
                    dateFilters={[
                      {
                        title: "Appointment Date",
                        from: "fromDate",
                        to: "toDate",
                      },
                    ]}
                    selectOptions={[
                      {
                        title: "Appointment Type",
                        options: appointmentTypeOptions,
                      },
                    ]}
                  >
                    <tbody>
                      {appointmentLogs.filter(app => app.status === activeTab)?.map((item, index) => (
                        <tr key={item?.id}>
                          <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                          <td>{item?.appointment_iD}</td>
                          <td>{item?.user?.name}</td>
                          <td>{item?.serviceProvider?.name}</td>
                          <td>{dateFormat(item?.date)}</td>
                          <td>{item?.charges}</td>
                          <td>{item?.appointment_type}</td>
                          <td>
                            <div className="d-flex cp gap-3 tableAction align-items-center justify-content-center">
                              <span className="tooltip-toggle" aria-label="View">
                                <Link to={`${item.id}`}>
                                  <FaEye size={20} color="#1819ff" />
                                </Link>
                              </span>
                            </div>
                          </td>
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

export default withFilters(AppointmentLogs);
