import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomTable from "../../../Components/CustomTable";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { RequestManagementData } from "../../../Config/data";
import { RequestManagementHeaders } from "../../../Config/TableHeaders";
import { appointmentTypeOptions, pendingTypeOptions, requestOptions } from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters";
import { dateFormat, serialNum } from "../../../Utils/helper";

const RequestManagement = ({
  filters,
  setFilters,
  pagination,
  updatePagination,
}) => {
  const [requestData, setRequestData] = useState([]);
  const fetchRequests = async () => {
    try {
      const response = RequestManagementData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setRequestData(data);
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
      // console.log()
    }
  };

  useEffect(() => {
    fetchRequests();
  }, [filters]);

  return (
    <DashboardLayout pageTitle="Request Management">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="dashCard">
              <div className="row mb-4">
                <div className="col-12">
                  <h2 className="mainTitle mb-0">Request Management</h2>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <CustomTable
                    filters={filters}
                    setFilters={setFilters}
                    headers={RequestManagementHeaders}
                    pagination={pagination}
                    dateFilters={[
                      {
                        title: "Date",
                        from: "fromDate",
                        to: "toDate",
                        fromTitle: "From",
                        toTitle: "To",
                      },
                    ]}
                    selectOptions={[
                      {
                        main_title: "Filter By Status",
                        title: "Status",
                        options: pendingTypeOptions,
                      },
                      {
                        main_title: "Filter By Request",
                        title: "Request Status",
                        options: requestOptions,
                      },
                    ]}
                  >
                    <tbody>
                      {requestData?.map((item, index) => (
                        <tr key={item?.id}>
                          <td>
                            {serialNum(
                              (filters.page - 1) * filters.per_page + index + 1
                            )}
                          </td>
                          <td>{item?.consultant_name}</td>
                          <td>{item?.request}</td>
                          <td
                            style={{
                              color:
                                item.status === "Pending"
                                  ? "#B58D00"
                                  : item.status === "Resolved"
                                  ? "#197E00"
                                  : "",
                            }}
                          >
                            {item?.status}
                          </td>
                          <td>{dateFormat(item?.recieved_on)}</td>
                          <td>
                            <div className="d-flex cp gap-3 tableAction align-items-center justify-content-center">
                              <span
                                className="tooltip-toggle"
                                aria-label="View"
                              >
                                <Link to={`${item.id}`}>
                                  <FaEye size={20} />
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

export default withFilters(RequestManagement);
