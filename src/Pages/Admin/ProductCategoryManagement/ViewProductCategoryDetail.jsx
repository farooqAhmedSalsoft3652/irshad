import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
// import { getDetails } from "../../../Services/Api";
import { FaEdit, FaEye } from "react-icons/fa";
import CustomTable from "../../../Components/CustomTable";
import { Select } from "../../../Components/Select";
import { productCategoryManagementData } from "../../../Config/data";
import { ProductsCategoryDetailHeader } from "../../../Config/TableHeaders";
import { normalStatus, statusOptions } from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters ";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { dateFormat, serialNum, statusClassMap } from "../../../Utils/helper";

const ViewProductCategoryDetail = ({ showModal, filters, setFilters, pagination, updatePagination }) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [products, setProducts] = useState([]);

  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  const fetchProductDetailTableData = async () => {
    try {
      startSubmitting(true);
      // const url = `/admin-api/users`;
      // const response = await getAll(url, filters);
      const response = productCategoryManagementData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setProducts(data.find((category) => category.id === Number(id)).products);
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

  useEffect(() => {
    const getProductCategoryDetail = async () => {
      const response = productCategoryManagementData.detail.data.find((e) => e.id === Number(id));

      // const response = await getDetails(`/admin-api/users/${id}`);
      if (response) {
        // setData(response.detail);
        setData(response);
      }
    };
    getProductCategoryDetail();
  }, [id]);
  useEffect(() => {
    fetchProductDetailTableData();
  }, [filters]);

  // Handle status change
  const handleStatusChange = (e, userId) => {
    const newStatusValue = e;
    // Open the modal for confirmation
    showModal(
      `${newStatusValue === "1" ? "Active" : "Inactive"} Category`,
      `Are you sure you want to change this Category to ${newStatusValue === "1" ? "Active" : "Inactive"}?`,
      () => onConfirmStatusChange(userId, newStatusValue)
    );
  };
  // Confirm status change and update the state
  const onConfirmStatusChange = async (userId, newStatusValue) => {
    // Update the status in the appointmentLogs state
    setData({ ...data, status_detail: newStatusValue });
    showModal("Successful", `Category status has been changed to ${newStatusValue === "1" ? "Active" : "Inactive"} successfully.`, null, true);
  };
  // Handle status change
  const handleStatusChangeTwo = (e, userId) => {
    const newStatusValue = e;
    // Open the modal for confirmation
    showModal(
      `Mark as ${newStatusValue === "1" ? "Active" : "Inactive"}`,
      `Are you sure you want to change this product status to ${newStatusValue === "1" ? "Active" : "Inactive"}?`,
      () => onConfirmStatusChangeTwo(userId, newStatusValue)
    );
  };

  // Confirm status change and update the state
  const onConfirmStatusChangeTwo = async (userId, newStatusValue) => {
    // Update the status in the productCategory state
    setProducts((prevData) => prevData.map((user) => (user.id === userId ? { ...user, status_detail: newStatusValue } : user)));
    showModal("Successful", `Product status has been changed to ${newStatusValue === "1" ? "Active" : "Inactive"} successfully.`, null, true);
  };
  const { category_title } = data;
  return (
    <DashboardLayout pageTitle="Product Category Detail">
      <div className="row my-3">
        <div className="col-12 ">
          <div className="d-flex justify-content-between align-items-center my-3 my-md-0 flex-wrap">
            <div className="flex-grow-1 d-flex my-3">
              <BackButton />
              <h2 className="mainTitle mb-0">View Product Category Detail</h2>
            </div>
            <div className="flex-shrink-0 ms-sm-0 ms-2">
              <Link to={`edit`} className="site-btn primary-btn">
                Edit category
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="dashCard ">
        <div className="row ">
          <div className="col-12">
            <div className="profile-status d-flex justify-content-between flex-wrap gap-3">
              <div>
                <h4 className="secondaryLabel">category title</h4>
                <p className="secondaryText wrapText mb-0">{category_title}</p>
              </div>
              <div className="status-action">
                <Select
                  className={`tabel-select status${data?.status_detail}`}
                  id={`status${data?.id}`}
                  name="status"
                  label="Status:"
                  value={data?.status_detail}
                  onChange={(e) => handleStatusChange(e, data?.id)}
                  isInputNeeded={false}
                >
                  {statusOptions}
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashCard mt-4">
        <div className="row mb-3">
          <div className="col-12">
            <h2 className="mainTitle">Products</h2>
          </div>
          <div className="col-12">
            <CustomTable
              filters={filters}
              setFilters={setFilters}
              loading={isSubmitting}
              headers={ProductsCategoryDetailHeader}
              pagination={pagination}
              // if you want multiple date filters
              dateFilters={[
                {
                  title: "date",
                  from: "fromDate",
                  to: "toDate"
                }
              ]}
              selectOptions={[
                {
                  title: "status",
                  options: normalStatus
                }
              ]}
            >
              <tbody>
                {products?.map((item, index) => (
                  <tr key={item?.id}>
                    <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                    <td>{item?.shop_name}</td>
                    <td>{item?.name}</td>
                    <td>{dateFormat(item?.added_on)}</td>
                    <td>
                      <Select
                        className={`tabel-select status${item?.status_detail}`}
                        required
                        id={`status${item?.id}`}
                        name="status"
                        value={item?.status_detail}
                        onChange={(e) => handleStatusChangeTwo(e, item?.id)}
                        isInputNeeded={false}
                      >
                        {statusOptions}
                      </Select>
                    </td>
                    <td>
                      <div className="d-flex cp gap-3 tableAction align-items-center justify-content-center">
                        <span className="tooltip-toggle" aria-label="View">
                          <Link to={`/admin/products/${item.id}`}>
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
    </DashboardLayout>
  );
};
export default withModal(withFilters(ViewProductCategoryDetail));
