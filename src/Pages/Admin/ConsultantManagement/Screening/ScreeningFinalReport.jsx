import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomTable from "../../../../Components/CustomTable";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import { ScreeningReportData } from "../../../../Config/data";
import { ScreeningFinalReportHeaders } from "../../../../Config/TableHeaders";
import { normalStatus } from "../../../../Config/TableStatus";
import withFilters from "../../../../HOC/withFilters";
import withModal from "../../../../HOC/withModal";
import { useFormStatus } from "../../../../Hooks/useFormStatus";
import { dateFormat, serialNum, timeFormat2 } from "../../../../Utils/helper";
import "../style.css";
import TableDropdown from "../../../../Components/TableDropdown";

const ScreeningFinalReport = ({
  showModal,
  filters,
  setFilters,
  pagination,
  updatePagination,
}) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [userData, setUserData] = useState([]);

  const fetchConsultantScreening = async () => {
    try {
      startSubmitting(true);
      const response = ScreeningReportData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setUserData(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page),
        });
      }
    } catch (error) {
      console.error("Error fetching Service Providers:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    fetchConsultantScreening();
  }, [filters]);

  console.log(userData, "userData");
  return (
    <DashboardLayout pageTitle="Consultant Management">
      <div className="container-fluid consultant-management">
        <div className="dashCard">
          <Row className="mb-2 page-header">
            <Col xs={12} className="d-flex mb-4 mb-xl-4 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">Consultant Final Report</h2>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12}>
              <CustomTable
                filters={filters}
                setFilters={setFilters}
                loading={isSubmitting}
                headers={ScreeningFinalReportHeaders}
                pagination={pagination}
                dateFilters={[
                  {
                    title: "Registration Date",
                    from: "fromDate",
                    to: "toDate",
                  },
                ]}
                selectOptions={[
                  {
                    title: "Status",
                    options: normalStatus,
                  },
                ]}
              >
                <tbody>
                  {userData?.map((item, index) => (
                    <tr key={item?.id}>
                      <td>
                        {serialNum(
                          (filters.page - 1) * filters.per_page + index + 1
                        )}
                      </td>
                      <td>{item?.name}</td>
                      <td>{item?.category}</td>
                      <td>{dateFormat(item?.complete_date)}</td>
                      <td>
                        <span
                          className={`ms-0 status-tag text-capitalize
                                ${
                                  item.status_detail?.toLowerCase() == "pending"
                                    ? "upcoming_color"
                                    : item.status_detail?.toLowerCase() ==
                                      "reject"
                                    ? "text-danger"
                                    : ""
                                }`}
                        >
                          {item.status_detail}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex cp gap-3 tableAction align-items-center justify-content-center">
                          <span className="tooltip-toggle" aria-label="View">
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
            </Col>
          </Row>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(withFilters(ScreeningFinalReport));
