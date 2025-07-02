import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import { bannerAdsManagementData } from "../../../Config/data";
import withModal from "../../../HOC/withModal";
import { isNullOrEmpty, statusClassMap } from "../../../Utils/helper";
import { enableDisableOptions } from "../../../Config/TableStatus";
import { Select } from "../../../Components/Select";

const BannerAdDetails = ({ showModal }) => {
  const { id } = useParams();

  const [bannerAdDetails, setBannerAdDetails] = useState(bannerAdsManagementData.detail.data[0]);

  useEffect(() => {
    const getBannerAdDetails = async () => {
      const response = bannerAdsManagementData.detail.data.find((ad) => ad.id === id);

      // const response = await getDetails(`/admin-api/users/${id}`);
      if (response) {
        // setServiceProvider(response.detail);
        setBannerAdDetails(response);
      }
    };
    getBannerAdDetails();
  }, [id]);

  // Handle status change
  const handleStatusChange = (e) => {
    const newStatusValue = e;

    showModal(
      `${newStatusValue === "1" ? "Enable" : "Disable"} Banner Ads`,
      `Are you sure you want to ${newStatusValue === "1" ? "Enable" : "Disable"} this Banner?`,
      () => onConfirmStatusChange(newStatusValue)
    );
  };

  // Confirm status change and update the state
  const onConfirmStatusChange = async (newStatusValue) => {
    setBannerAdDetails({ ...bannerAdDetails, status_detail: newStatusValue });
    showModal("Successful", `Banner has been ${newStatusValue === "1" ? "Enabled" : "Disabled"}!`, null, true);
  };

  if (isNullOrEmpty(bannerAdDetails)) {
    return (
      <DashboardLayout pageTitle="Banner Ad Details">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 ">
              <div className="row my-4">
                <div className="col-12 d-flex">
                  <BackButton />
                  <h2 className="mainTitle mb-0">View Banner Ad Details</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="dashCard">loading...</div>
        </div>
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout pageTitle="Banner Ad Details">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 ">
            <div className="row my-4">
              <div className="col-12 d-flex">
                <BackButton />
                <h2 className="mainTitle mb-0">View Banner Ad Details</h2>
              </div>
            </div>
            <div className="dashCard mb-5">
              <div className="row ">
                <div className="col-12">
                  <div className="d-flex flex-column flex-sm-row mb-2 gap-3">
                    <div className="flex-grow-1 ">
                      <div className="row mb-2">
                        <div className="order-2 order-md-1 col-md-9">
                          <div className="row">
                            <div className="col-md-6 col-lg-4 mb-4">
                              <h4 className="secondaryLabel">Full Name of Brand::</h4>
                              <p className="secondaryText wrapText mb-0">{bannerAdDetails.brandName}</p>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                              <h4 className="secondaryLabel">Email Of Brand:</h4>
                              <p className="secondaryText wrapText mb-0">{bannerAdDetails.emailAddress}</p>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                              <h4 className="secondaryLabel">Brand URL:</h4>
                              <p className="secondaryText wrapText mb-0">{bannerAdDetails.brandUrl}</p>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                              <h4 className="secondaryLabel">Published On:</h4>
                              <p className="secondaryText wrapText mb-0">{bannerAdDetails.postedOn}</p>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                              <h4 className="secondaryLabel">Expiry Date:</h4>
                              <p className="secondaryText wrapText mb-0">{bannerAdDetails.expiryDate}</p>
                            </div>
                          </div>
                        </div>
                        <div className="order-1 order-md-2 col-md-3 mb-4 mb-md-0">
                          <div className="d-flex flex-column align-items-start align-items-md-end justify-content-end justify-content-sm-start gap-3">
                            <div>
                              <label className="fw-semibold">Status</label>
                              <Select
                                className={`tabel-select status${bannerAdDetails?.status_detail}`}
                                required
                                id={`status${bannerAdDetails?.id}`}
                                name="status"
                                value={bannerAdDetails?.status_detail}
                                onChange={(e) => handleStatusChange(e, bannerAdDetails?.id)}
                                isInputNeeded={false}
                              >
                                {enableDisableOptions}
                              </Select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {bannerAdDetails?.photo?.[0] && (
                    <>
                      <h4 className="secondaryLabel">Banner Image:</h4>
                      <img className="containedImg roundedBorders" src={bannerAdDetails.photo[0]} />
                    </>
                  )}

                  <div className="mt-5 mb-2 d-flex gap-3">
                    <Link style={{minWidth: 190}} className="site-btn primary-btn text-decoration-none" to={`edit`}>
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(BannerAdDetails);
