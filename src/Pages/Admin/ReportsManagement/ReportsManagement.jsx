import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomTable from "../../../Components/CustomTable";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { reportsManagementData } from "../../../Config/data";
import { reportsManagementHeader } from "../../../Config/TableHeaders";
import { pendingTypeOptions } from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters";
import { serialNum } from "../../../Utils/helper";

const ReportsManagement = ({ filters, setFilters, pagination, updatePagination }) => {
  const [reportsData, setReportsData] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = reportsManagementData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setReportsData(data);
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
    fetchUsers();
  }, [filters]);

  return (
    <DashboardLayout pageTitle="Reports Management">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="dashCard">
              <div className="row mb-4">
                <div className="col-12">
                  <h2 className="mainTitle mb-0">Reports Management</h2>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <CustomTable
                    filters={filters}
                    setFilters={setFilters}
                    headers={reportsManagementHeader}
                    pagination={pagination}
                    dateFilters={[
                      {
                        title: "Reported Date",
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
                    ]}
                  >
                    <tbody>
                      {reportsData?.map((item, index) => (
                        <tr key={item?.id}>
                          <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                          <td>{item?.bookingId}</td>
                          <td>{item?.userName}</td>
                          <td>{item?.reportedDate}</td>
                          <td>{item?.charges}</td>
                          <td
                            style={{
                              color: item.status === "Pending" ? "#B58D00" : item.status === "Resolved" ? "#197E00" : "",
                            }}
                          >
                            {item?.status}
                          </td>
                          <td>
                            <div className="d-flex cp gap-3 tableAction align-items-center justify-content-center">
                              <span className="tooltip-toggle" aria-label="View">
                                <Link to={`${item.id}`}>
                                  <FaEye size={20} color="#c5e4f6" />
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

export default withFilters(ReportsManagement);
