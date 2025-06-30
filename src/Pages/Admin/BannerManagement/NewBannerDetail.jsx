import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
// import { getDetails } from "../../../Services/Api";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import { Select } from "../../../Components/Select";
import { bannerManagementData } from "../../../Config/data";
import { statusOptions } from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters";
import withModal from "../../../HOC/withModal";
import { dateFormat } from "../../../Utils/helper";
import CustomButton from "../../../Components/CustomButton";

const NewBannerDetail = ({ showModal }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    const getBannerDetail = async () => {
      const response = bannerManagementData?.detail?.data?.find(
        (e) => e.id === Number(id)
      );

      // const response = await getDetails(`/admin-api/users/${id}`);
      if (response) {
        // setData(response.detail);
        setData(response);
      }
    };
    getBannerDetail();
  }, [id]);

  const handleRemoveBanner = () => {
    showModal(``, `Are you sure you want to Remove Banner Abc?`, () =>
      onConfirmRemove()
    );
  };

  const onConfirmRemove = async () => {
    showModal(
      "",
      `Banner has been removed successfully.`,
      () => navigate("/admin/banner-management"),
      true
    );
  };
  const { banner_title, expiry_date, creation_date, photo } = data;
  return (
    <DashboardLayout pageTitle="Banner Detail">
      <div className="dashCard ">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center mt-3">
              <BackButton2 />
              <h2 className="mainTitle mb-0">Banner Detail</h2>
            </div>
          </div>
        </div>
        <div className="row mt-sm-4 mt-3">
          <div className="col-12">
            <div className="profile-status">
              <div className="row">
                <div className="col-xxl-6 col-xl-8 col-lg-10">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="detail-box">
                        <h6 className="text-nowrap">Banner Title</h6>
                        <p className="mb-0 text-nowrap">{banner_title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-sm-4 mt-3">
          <div className="col-xxl-5 col-xl-6 col-lg-8">
            <div className="detail-image">
              <img src={photo} alt="" className="img-fluid w-100 rounded-4" />
            </div>
          </div>
        </div>
        <div className="row mt-sm-4 mt-3">
          <div className="col-xxl-6 col-xl-8 col-lg-10">
            <div className="row">
              <div className="col-sm-4">
                <div className="detail-box">
                  <h6 className="text-nowrap">Published On</h6>
                  <p className="mb-0 text-nowrap">
                    {dateFormat(creation_date)}
                  </p>
                </div>
              </div>
              <div className="col-sm-4 mt-sm-0 mt-2">
                <div className="detail-box">
                  <h6 className="text-nowrap">Expiry Date</h6>
                  <p className="mb-0 text-nowrap">{dateFormat(expiry_date)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="d-flex gap-2 flex-wrap">
              <Link to={`edit`} className="btn btn-primary px-5">
                Edit Banner
              </Link>
              <CustomButton
                text="Remove Banner"
                className="btn btn-outline-primary"
                onClick={handleRemoveBanner}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default withModal(withFilters(NewBannerDetail));
