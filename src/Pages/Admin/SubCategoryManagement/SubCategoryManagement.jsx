import { useEffect, useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomTable from "../../../Components/CustomTable";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { Select } from "../../../Components/Select";
import { serviceCategoryData } from "../../../Config/data";
import { subCategoryHeaders } from "../../../Config/TableHeaders";
import { normalStatus, statusOptions } from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { dateFormat, serialNum } from "../../../Utils/helper";

const SubCategoryManagement = ({ showModal, filters, setFilters, pagination, updatePagination }) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [categories, setCategories] = useState(serviceCategoryData.detail.data);

  const fetchServiceCategories = async () => {
    try {
      startSubmitting(true);
      const response = serviceCategoryData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setCategories(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page),
        });
      }
    } catch (error) {
      console.error("Error fetching Service Ctageories:", error);
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
      `Are you sure you want to ${newStatusValue === "1" ? "Activate" : "Inactivate"} this Sub-Category?`,
      () => onConfirmStatusChange(userId, newStatusValue)
    );
  };

  // Confirm status change and update the state
  const onConfirmStatusChange = async (categoryId, newStatusValue) => {
    // Update the status in the categories state
    setCategories((prevData) => prevData.map((category) => (category.id === categoryId ? { ...category, status_detail: newStatusValue } : category)));
    showModal("", `This Sub-Category has been ${newStatusValue === "1" ? "Activated" : "Inactivated"} successfully!`, null, true);
  };

  useEffect(() => {
    fetchServiceCategories();
  }, [filters]);

  return (
    <DashboardLayout pageTitle="Sub Category Management">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 ">
            <div className="dashCard">
              <div className="mb-4 d-flex flex-wrap gap-3 gap-md-0 align-items-center justify-content-between">
                <h2 className="mainTitle mb-0">Sub-Category Management</h2>
                <Link to={"add"} className="btn btn-primary">
                  Add Category
                </Link>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <CustomTable
                    filters={filters}
                    setFilters={setFilters}
                    loading={isSubmitting}
                    headers={subCategoryHeaders}
                    pagination={pagination}
                    dateFilters={[
                      {
                        title: "Creation Date",
                        from: "fromDate",
                        to: "toDate",
                        fromTitle: "From",
                        toTitle: "To",
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
                      {categories?.map((item, index) => (
                        <tr key={item?.id}>
                          <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                          <td>{item?.categoryTitle}</td>
                          <td>{dateFormat(item?.creationDate)}</td>
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
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(withFilters(SubCategoryManagement));
