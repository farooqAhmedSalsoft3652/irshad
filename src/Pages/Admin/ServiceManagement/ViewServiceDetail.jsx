import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
// import { getDetails } from "../../../Services/Api";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import { Select } from "../../../Components/Select";
import { serviceManagementData } from "../../../Config/data";
import { statusOptions } from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters";
import withModal from "../../../HOC/withModal";

const ViewServiceDetail = ({ showModal }) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductCategoryDetail = async () => {
      const response = serviceManagementData?.detail?.data?.find((e) => e.id === Number(id));

      // const response = await getDetails(`/admin-api/users/${id}`);
      if (response) {
        // setData(response.detail);
        setData(response);
      }
    };
    getProductCategoryDetail();
  }, [id]);

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
    // Update the status in the appointmentLogs state
    setData({ ...data, status_detail: newStatusValue });
    showModal("", `Service has been ${newStatusValue === "1" ? "Active" : "Inactive"} successfully.`, null, true);
  };
  const { service_title, category, sub_category, photo } = data;
  return (
    <DashboardLayout pageTitle="View Service Detail">
      <div className="dashCard ">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center mt-3">
              <BackButton2 />
              <h2 className="mainTitle mb-0">View Service Details</h2>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="profile-status d-flex justify-content-between flex-md-row flex-column  gap-3">
              <div className="flex-grow-1 order-md-0 order-1">
                <div className="row">
                  <div className="col-xxl-6 col-xl-8 col-lg-10">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="detail-box">
                          <h6 className="text-nowrap">Service Title</h6>
                          <p className="mb-0 text-nowrap">{service_title}</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="detail-box">
                          <h6 className="text-nowrap">Category</h6>
                          <p className="mb-0 text-nowrap">{category}</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="detail-box">
                          <h6 className="text-nowrap">Sub-Category</h6>
                          <p className="mb-0 text-nowrap">{sub_category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status-action">
                <Select
                  className={`tabel-select status${data?.status_detail}`}
                  id={`status${data?.id}`}
                  name="status"
                  label="Status:"
                  value={data?.status_detail}
                  onChange={(e) => handleStatusChange(e, data?.id)}
                  labelclass="me-2"
                >
                  {statusOptions}
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-xxl-5 col-xl-6 col-lg-8">
            <div className="detail-image">
            <img src={photo} alt="" className="img-fluid w-100 rounded-4" />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <Link to={`edit`} className="btn btn-primary px-5">
              Edit Service  
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default withModal(withFilters(ViewServiceDetail));
