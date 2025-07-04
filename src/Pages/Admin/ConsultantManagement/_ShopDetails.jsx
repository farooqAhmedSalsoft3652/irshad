import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import CustomTable from "../../../Components/CustomTable";
import { Select } from "../../../Components/Select";
import { shopDetailsData } from "../../../Config/data";
import { shopProductsHeaders } from "../../../Config/TableHeaders";
import { categoryStatus, normalStatus, statusOptions } from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { dateFormat, serialNum } from "../../../Utils/helper";

const ShopDetails = ({ showModal, filters, setFilters, pagination, updatePagination }) => {
  const { id } = useParams();
  const [shopDetails, setShopDetails] = useState({});
  const [products, setProducts] = useState([]);

  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  // const fetchShopProducts = async () => {
  //   try {
  //     startSubmitting(true);
  //     // const url = `/admin-api/users`;
  //     // const response = await getAll(url, filters);
  //     const response = shopProductsData;
  //     if (response.status) {
  //       const { data, total, per_page, current_page, to } = response.detail;
  //       setProducts(data);
  //       updatePagination({
  //         showData: to,
  //         currentPage: current_page,
  //         totalRecords: total,
  //         totalPages: Math.ceil(total / per_page),
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //   } finally {
  //     stopSubmitting(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchShopProducts();
  // }, [filters]);

  useEffect(() => {
    const getShopDetails = async () => {
      const response = shopDetailsData.detail.data.find((e) => e.id === id);

      // const response = await getDetails(`/admin-api/users/${id}`);
      if (response) {
        // setShopDetails(response.detail);
        setShopDetails(response);
        setProducts(response?.products);
      }
    };
    getShopDetails();
  }, []);

  // Handle status change
  const handleStatusChange = (e, id) => {
    const newStatusValue = e;
    // Open the modal for confirmation
    showModal(
      `${newStatusValue === "1" ? "Active" : "Inactive"} Product`,
      `Are you sure you want to ${newStatusValue === "1" ? "Activate" : "Inactivate"} this Product?`,
      () => onConfirmStatusChange(id, newStatusValue)
    );
  };

  // Confirm status change and update the state
  const onConfirmStatusChange = async (row, newStatusValue) => {
    // Update the status in the appointmentLogs state
    setProducts((prevData) => prevData.map((item) => (item.id === row ? { ...item, status_detail: newStatusValue } : item)));
    showModal("Successful", `This Product has been ${newStatusValue === "1" ? "Activated" : "Inactivated"} successfully!`, null, true);
  };
  return (
    <DashboardLayout pageTitle="Product Details">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 ">
            <div className="row my-4">
              <div className="col-12 d-flex">
                <BackButton />
                <h2 className="mainTitle mb-0">Shop's Details</h2>
              </div>
            </div>
            <div className="dashCard ">
              <div className="row ">
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-10 ">
                      <div className="row my-4">
                        {[
                          { label: "Shop Name", value: shopDetails?.shopName },
                          { label: "Delivery Fee", value: shopDetails?.deliveryFee },
                        ].map(({ label, value }) => (
                          <div className="col-lg-4 col-md-6 mb-3" key={label}>
                            <h4 className="secondaryLabel">{label}</h4>
                            <p className="secondaryText wrapText mb-0">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {shopDetails?.photo && (
                      <div className="col-12">
                        <h4 className="secondaryLabel">Banner Image</h4>
                        <img className="img-fluid rounded" src={shopDetails?.photo} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="dashCard mt-4">
              <div className="row mb-3">
                <div className="col-12">
                  <h2 className="mainTitle">Product Logs</h2>
                </div>
                <div className="col-12">
                  <CustomTable
                    filters={filters}
                    setFilters={setFilters}
                    loading={isSubmitting}
                    headers={shopProductsHeaders}
                    pagination={pagination}
                    // if you want multiple date filters
                    dateFilters={[
                      {
                        title: "Added On",
                        from: "fromDate",
                        to: "toDate",
                      },
                    ]}
                    selectOptions={[
                      {
                        title: "Status",
                        options: normalStatus,
                      },
                      {
                        title: "Category",
                        options: categoryStatus,
                      },
                    ]}
                  >
                    <tbody>
                      {products?.map((item, index) => (
                        <tr key={item?.id}>
                          <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                          <td>{item?.productName}</td>
                          <td>{item?.addedOn}</td>
                          <td>{item?.category}</td>
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
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(withFilters(ShopDetails));
