import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import BackButton from "../../../Components/BackButton";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { Select } from "../../../Components/Select";
import { statusOptions } from "../../../Config/TableStatus";
import { serviceCategoryData } from "../../../Config/data";
import withModal from "../../../HOC/withModal";
import { isNullOrEmpty } from "../../../Utils/helper";

const ViewSubCategory = ({ showModal }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState({});
  useEffect(() => {
    setCategory(serviceCategoryData.detail.data.find((c) => c.id === id));
  }, [id]);

  if (isNullOrEmpty(category)) {
    return (
      <DashboardLayout pageTitle="Add Service Category">
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-12 my-4 d-flex">
              <BackButton />
              <h2 className="mainTitle mb-0">View Service Category</h2>
            </div>
            <div className="col-12">
              <div className="dashCard mb-4">loading...</div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }
  // Handle status change
  const handleStatusChange = (e, id) => {
    const newStatusValue = e;
    // Open the modal for confirmation
    showModal(
      `${newStatusValue === "1" ? "Active" : "Inactive"} Category`,
      `Are you sure you want to ${newStatusValue === "1" ? "Activate" : "Inactivate"} this category?`,
      () => onConfirmStatusChange(id, newStatusValue)
    );
  };

  // Confirm status change and update the state
  const onConfirmStatusChange = async (row, newStatusValue) => {
    // Update the status in the appointmentLogs state
    setCategory({ ...category, status_detail: newStatusValue });
    showModal("Successful", `This category has been ${newStatusValue === "1" ? "Activated" : "Inactivated"} successfully!`, null, true);
  };

  return (
    <DashboardLayout pageTitle="View Service Category">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="dashCard mb-4">
              <div className="row">
                <div className="col-12 mb-4 d-flex">
                  <BackButton2 />
                  <h2 className="mainTitle mb-0">View Sub Category Detail</h2>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12 col-sm-8">
                  <div className="detail-box">
                  <h6 className="">Sub-Category Title</h6>
                  <p className="mb-0">{category.categoryTitle}</p>
                  </div>
                </div>
                <div className="col-12 col-sm-8">
                  <div className="detail-box">
                  <h6 className="">Sub-Category Title</h6>
                  <p className="mb-0">{category.categoryTitle}</p>
                  </div>
                </div>
                <div className="col-12 col-sm-4 d-flex mt-3 mt-sm-0 justify-content-end">
                  <div className="status-action">
                  <Select
                    className={`tabel-select status${category?.status_detail}`}
                    id={`status${category?.id}`}
                    name="status"
                    label="Status:"
                    value={category?.status_detail}
                    onChange={(e) => handleStatusChange(e, category?.id)}
                    labelclass="me-2"
                  >
                    {statusOptions}
                  </Select>

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 my-4">{category?.photo && <img className="w-50 containedImg roundedBorders" src={category.photo} />}</div>
              </div>
              <div className="mt-4 mb-5">
                <Link className="btn btn-primary px-5" to={"edit"}>
                  Edit Sub-Category
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(ViewSubCategory);
