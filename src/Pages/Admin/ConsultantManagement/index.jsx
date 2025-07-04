import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import CustomTable from "../../../Components/CustomTable";
import { Select } from "../../../Components/Select";
import { consultantManagerData } from "../../../Config/data";
import { consultantManagementHeaders } from "../../../Config/TableHeaders";
import { normalStatus, statusOptions } from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { dateFormat, serialNum } from "../../../Utils/helper";
import { Col, Row } from "react-bootstrap";
import "./style.css";

const ConsultantManagement = ({
  showModal,
  filters,
  setFilters,
  pagination,
  updatePagination,
}) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [userData, setUserData] = useState([]);

  const fetchConsultant = async () => {
    try {
      startSubmitting(true);
      const response = consultantManagerData;
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

  // Handle status change
  const handleStatusChange = (e, userId) => {
    const newStatusValue = e;
    // Open the modal for confirmation
    showModal(
      null,
      `Are you sure you want to ${
        newStatusValue === "1" ? "Activate" : "Inactivate"
      } this Consultant?`,
      () => onConfirmStatusChange(userId, newStatusValue)
    );
  };

  // Confirm status change and update the state
  const onConfirmStatusChange = async (userId, newStatusValue) => {
    // Update the status in the userData state
    setUserData((prevData) =>
      prevData.map((user) =>
        user.id === userId ? { ...user, status_detail: newStatusValue } : user
      )
    );
    showModal(
      null,
      `Consultant Has Been ${
        newStatusValue === "1" ? "Activated" : "Inactivated"
      } Successfully!`,
      null,
      true
    );
  };

  useEffect(() => {
    fetchConsultant();
  }, [filters]);

  return (
    <DashboardLayout pageTitle="Consultant Management">
      <div className="container-fluid consultant-management">
        <div className="dashCard">
          <Row className="mb-2 page-header">
            <Col
              xs={12}
              className="gap-2 d-flex flex-column flex-xl-row justify-content-between align-items-start align-items-xl-center flex-wrap"
            >
              <div className="flex-shrink-0">
                <h2 className="align-self-start mainTitle mb-0">
                  Consultant Management
                </h2>
              </div>
              <div className="ms-xl-auto d-flex gap-2 gap-xxl-3 flex-column flex-sm-row flex-xl-column flex-xxl-row">
                <Link to={"consultant-screening"} className="btn btn-primary">
                  Consultant screening
                </Link>
                <Link to={"requests"} className="btn btn-outline-primary">
                  New Consultants Request
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12}>
              <CustomTable
                filters={filters}
                setFilters={setFilters}
                loading={isSubmitting}
                headers={consultantManagementHeaders}
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
                      <td>{item?.last_name}</td>
                      <td>{item?.email}</td>
                      <td>{item?.category}</td>
                      <td>{dateFormat(item?.registrationDate)}</td>
                      {/* Status column with Select dropdown */}
                      <td>
                        <Select
                          className={`tabel-select status${item?.status_detail}`}
                          required
                          id={`status${item?.id}`}
                          name="status"
                          value={item?.status_detail}
                          onChange={(e) => handleStatusChange(e, item?.id)}
                          isInputNeeded={false}
                        >
                          {statusOptions}
                        </Select>
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

export default withModal(withFilters(ConsultantManagement));
