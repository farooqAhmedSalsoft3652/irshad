import { useEffect, useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import CustomTable from "../../../Components/CustomTable";
import { Select } from "../../../Components/Select";
import { productCategoryManagementData } from "../../../Config/data";
import { productCategoryManagementHeaders } from "../../../Config/TableHeaders";
import { normalStatus, statusOptions } from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters ";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { dateFormat, serialNum } from "../../../Utils/helper";

const ProductCategoryManagement = ({ filters, setFilters, pagination, updatePagination, showModal }) => {
  const [productCategory, setProductCategory] = useState([]);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  const fetchProductCategory = async () => {
    try {
      startSubmitting(true);
      const response = productCategoryManagementData;
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
      `Mark as ${newStatusValue === "1" ? "Active" : "Inactive"}`,
      `Are you sure you want to change this Category status to ${newStatusValue === "1" ? "Active" : "Inactive"}?`,
      () => onConfirmStatusChange(userId, newStatusValue)
    );
  };

  // Confirm status change and update the state
  const onConfirmStatusChange = async (userId, newStatusValue) => {
    // Update the status in the productCategory state
    setProductCategory((prevData) => prevData.map((user) => (user.id === userId ? { ...user, status_detail: newStatusValue } : user)));
    showModal("Successful", `Category status has been changed to ${newStatusValue === "1" ? "Active" : "Inactive"} successfully.`, null, true);
  };

  useEffect(() => {
    fetchProductCategory();
  }, [filters]);

  return (
    <DashboardLayout pageTitle="Product Category Management">
      <div className="container-fluid">
        <>
          <div className="my-4 d-flex flex-wrap gap-3 gap-md-0 align-items-center justify-content-between">
            <h2 className="mainTitle mb-0">Product Category Management</h2>
            <Link to={"/admin/product-category-management/add-product"} className="site-btn primary-btn text-decoration-none">
              add category
            </Link>
          </div>
          <div className="dashCard">
            <div className="row mb-3">
              <div className="col-12">
                <CustomTable
                  filters={filters}
                  setFilters={setFilters}
                  loading={isSubmitting}
                  headers={productCategoryManagementHeaders}
                  pagination={pagination}
                  dateFilters={[
                    {
                      title: "Creation Date",
                      from: "fromDate",
                      to: "toDate"
                    }
                  ]}
                  selectOptions={[
                    {
                      title: "Status",
                      options: normalStatus
                    }
                  ]}
                >
                  <tbody>
                    {productCategory?.map((item, index) => (
                      <tr key={item?.id}>
                        <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                        <td>{item?.category_title}</td>
                        <td>{dateFormat(item?.creation_date)}</td>
                        <td>{item?.no_of_Products}</td>
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
                                <FaEye size={20} color="#1819ff" />
                              </Link>
                            </span>
                            <span className="tooltip-toggle" aria-label="Edit">
                              <Link to={`${item.id}/edit`}>
                                <FaEdit size={20} color="#1819ff" />
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

export default withModal(withFilters(ProductCategoryManagement));
