import React, { useEffect, useState } from "react";
import { blogsData } from "../../../../Config/data";
import CustomTable from "../../../../Components/CustomTable";
import { contentManagementBlogsHeaders } from "../../../../Config/TableHeaders";
import { normalStatus, statusOptions } from "../../../../Config/TableStatus";
import { FaEdit, FaEye } from "react-icons/fa";
import { serialNum } from "../../../../Utils/helper";
import withFilters from "../../../../HOC/withFilters";
import { useFormStatus } from "../../../../Hooks/useFormStatus";
import { Select } from "../../../../Components/Select";
import { Link } from "react-router-dom";
import withModal from "../../../../HOC/withModal";

const BlogsTable = ({ showModal, filters, setFilters, pagination, updatePagination }) => {
  const [blogs, setBlogs] = useState([]);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const fetchBlogs = async () => {
    try {
      startSubmitting(true);
      const response = blogsData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setBlogs(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page),
        });
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [filters]);

  // Handle status change
  const handleStatusChange = (e, rowId) => {
    const newStatusValue = e;
    // Open the modal for confirmation
    showModal(
      `${newStatusValue === "1" ? "Active" : "Inactive"} Blog`,
      `Are you sure you want to ${newStatusValue === "1" ? "Activate" : "Inactivate"} this Blog?`,
      () => onConfirmStatusChange(rowId, newStatusValue)
    );
  };

  // Confirm status change and update the state
  const onConfirmStatusChange = async (rowId, newStatusValue) => {
    // Update the status in the blogs state
    setBlogs((prevData) => prevData.map((row) => (row.id === rowId ? { ...row, status_detail: newStatusValue } : row)));
    showModal("Successful", `This Blog has been ${newStatusValue === "1" ? "Activated" : "Inactivated"} successfully!`, null, true);
  };

  return (
    <div className="dashCard mt-4">
      <div className="row mb-3">
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="dashTitle d-inline">Blogs</h4>
            <Link to={"add-blog"} className="site-btn primary-btn text-decoration-none">
              Add Blog
            </Link>
          </div>
          <CustomTable
            filters={filters}
            setFilters={setFilters}
            loading={isSubmitting}
            headers={contentManagementBlogsHeaders}
            pagination={pagination}
            dateFilters={[
              {
                title: "Added Date",
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
              {blogs?.map((item, index) => (
                <tr key={item?.id}>
                  <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                  <td>{item?.blogTitle}</td>
                  <td>{item?.addedOn}</td>
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
                        <Link to={`blogs/${item.id}`}>
                          <FaEye size={20} color="#1819ff" />
                        </Link>
                      </span>
                      <span className="tooltip-toggle" aria-label="Edit">
                        <Link to={`blogs/${item.id}/edit`}>
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
  );
};

export default withModal(withFilters(BlogsTable));
