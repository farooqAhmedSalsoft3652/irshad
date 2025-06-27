import { useEffect, useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomTable from "../../../Components/CustomTable";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { Select } from "../../../Components/Select";
import { serviceManagementData } from "../../../Config/data";
import { ServiceManagementHeaders } from "../../../Config/TableHeaders";
import { normalStatus, statusOptions } from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { dateFormat, serialNum } from "../../../Utils/helper";

const ServiceManagement = ({ filters, setFilters, pagination, updatePagination, showModal }) => {
  const [productCategory, setProductCategory] = useState([]);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  const fetchProductCategory = async () => {
    try {
      startSubmitting(true);
      const response = serviceManagementData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setProductCategory(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page)
        });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  // Handle status change
  const handleStatusChange = (e, userId) => {
    const newStatusValue = e;
    // Open the modal for confirmation
    showModal(
      ``,
      `Are you sure you want to ${newStatusValue === "1" ? "Active" : "Inactive"} Service ABC?`,
      () => onConfirmStatusChange(userId, newStatusValue)
    );
  };

  // Confirm status change and update the state
  const onConfirmStatusChange = async (userId, newStatusValue) => {
    // Update the status in the productCategory state
    setProductCategory((prevData) => prevData.map((user) => (user.id === userId ? { ...user, status_detail: newStatusValue } : user)));
    showModal("", `Service has been ${newStatusValue === "1" ? "Active" : "Inactive"} successfully.`, null, true);
  };

  useEffect(() => {
    fetchProductCategory();
  }, [filters]);

  return (
    <DashboardLayout pageTitle="Service Management">
      <div className="container-fluid">
        <>
          <div className="dashCard">
          <div className="mb-4 d-flex flex-wrap gap-3 gap-md-0 align-items-center justify-content-between">
            <h2 className="mainTitle mb-0">Service Management</h2>
            <Link to={"/admin/service-management/add-service"} className="btn btn-primary">
              Add Service
            </Link>
          </div>
            <div className="row mb-3">
              <div className="col-12">
                <CustomTable
                  filters={filters}
                  setFilters={setFilters}
                  loading={isSubmitting}
                  headers={ServiceManagementHeaders}
                  pagination={pagination}
                  dateFilters={[
                    {
                      title: "Creation Date",
                      from: "fromDate",
                      to: "toDate",
                      fromTitle: "From",
                      toTitle: "To",
                    }
                  ]}
                  selectOptions={[
                    {
                      main_title: "Filter By Status",
                      title: "Status",
                      options: normalStatus
                    }
                  ]}
                >
                  <tbody>
                    {productCategory?.map((item, index) => (
                      <tr key={item?.id}>
                        <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                        <td>{item?.service_title}</td>
                        <td>{item?.sub_category}</td>
                        <td>{item?.category}</td>
                        <td>{dateFormat(item?.creation_date)}</td>
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
                                <FaEye size={20} color="#C5E4F6" />
                              </Link>
                            </span>
                            <span className="tooltip-toggle" aria-label="Edit">
                              <Link to={`${item.id}/edit`}>
                                <FaEdit size={20} color="#C5E4F6" />
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
        </>
      </div>
    </DashboardLayout>
  );
};

export default withModal(withFilters(ServiceManagement));
