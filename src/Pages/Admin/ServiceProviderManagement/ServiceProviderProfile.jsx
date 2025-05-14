import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { images } from "../../../Assets";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import CustomButton from "../../../Components/CustomButton";
import { newRequestServiceProviderData } from "../../../Config/data";
import withModal from "../../../HOC/withModal";
import { getCountryFlag, statusClassMap } from "../../../Utils/helper";

const ServiceProviderProfile = ({ showModal, reasonModal }) => {
  const { id } = useParams();
  const [serviceProviderProfile, setServiceProviderProfile] = useState({});

  useEffect(() => {
    const getServiceProviderProfile = async () => {
      const response = newRequestServiceProviderData.detail.data.find((e) => e.id === id);

      // const response = await getDetails(`/admin-api/users/${id}`);
      if (response) {
        // setServiceProviderProfile(response.detail);
        setServiceProviderProfile(response);
      }
    };
    getServiceProviderProfile();
  }, [id]);

  // Handle status change
  const handleStatusChange = (e, id) => {
    const newStatusValue = e;
    console.log(newStatusValue);
    // Open the modal for confirmation
    if (newStatusValue === "Rejected") {
      reasonModal(
        "Reject Provider", //heading
        `Are you sure you want to Reject this Provider?`, //para
        (reason) => onConfirmStatusChange(id, newStatusValue, reason), //action
        false, //success
        true //reason
      );
    } else {
      showModal(`Approve Provider`, `Are you sure you want to Approve this Provider?`, () => onConfirmStatusChange(id, newStatusValue));
    }
  };

  // Confirm status change and update the state
  const onConfirmStatusChange = async (id, newStatusValue, reason = "") => {
    console.log({ reason });
    // Update the status in the appointmentLogs state
    if (reason) {
      setServiceProviderProfile({ ...serviceProviderProfile, status: newStatusValue, rejectionReason: reason });
    } else {
      setServiceProviderProfile({ ...serviceProviderProfile, status: newStatusValue });
    }
    showModal("Successful", `This Provider has been ${newStatusValue === "Approved" ? "Approved" : "Rejected"} successfully!`, null, true);
  };

  return (
    <DashboardLayout pageTitle="Service Provider Details">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 ">
            <div className="row my-4">
              <div className="col-12 d-flex">
                <BackButton />
                <h2 className="mainTitle mb-0">Service Provider Details</h2>
              </div>
            </div>
            <div className="dashCard ">
              <div className="row ">
                <div className="col-12">
                  <div className="col-12 d-flex flex-column flex-sm-row mb-4 col-12  gap-3">
                    <div className="profileImage">
                      <img src={serviceProviderProfile?.userImage ?? images.placeholder} alt="User" />
                    </div>
                    <div className="flex-grow-1 d-flex flex-column align-items-start align-items-sm-end justify-content-end justify-content-sm-start gap-3">
                      <div className="profile-status d-flex align-items-end flex-column gap-3">
                        <div>
                          <label className="fw-semibold">Status</label>
                          <span className={`ms-3 fw-semibold ${statusClassMap[serviceProviderProfile?.status]}`}>{serviceProviderProfile?.status}</span>
                        </div>
                      </div>
                      {serviceProviderProfile.status === "Pending" && (
                        <div className="d-flex flex-column gap-4 mt-3 mt-sm-4">
                          <CustomButton
                            onClick={() => handleStatusChange("Approved", serviceProviderProfile?.id)}
                            variant="site-btn primary-btn"
                            text="Approve"
                          />
                          <CustomButton
                            onClick={() => handleStatusChange("Rejected", serviceProviderProfile?.id)}
                            variant="site-btn secondary-btn"
                            text="Reject"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-10 col-lg-8">
                      <div className="row my-4">
                        {[
                          { label: "User Name", value: serviceProviderProfile.name },
                          { label: "Gender", value: serviceProviderProfile.gender },
                          { label: "Phone Number", value: serviceProviderProfile.phoneNo },
                          { label: "Email Address", value: serviceProviderProfile.email },
                          { label: "State", value: serviceProviderProfile.state },
                          { label: "City", value: serviceProviderProfile.city },
                        ].map(({ label, value }) => (
                          <div className="col-lg-6 col-xl-4 mb-3" key={label}>
                            <h4 className="secondaryLabel">{label}</h4>
                            <p className="secondaryText wrapText mb-0">
                              {label === "Phone Number" && <span>{getCountryFlag(value)}</span>} {value}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="mb-5">
                        <h4 className="secondaryLabel">Bio</h4>
                        <p className="secondaryText mb-0">{serviceProviderProfile.bio}</p>
                      </div>
                      <div className="mt-5 mb-4">
                        <h4 className="secondaryTitle">Certification Detail</h4>
                      </div>
                      <div className="row my-4">
                        {[
                          { label: "Institute Name", value: serviceProviderProfile.certification?.institute },
                          { label: "Certificate Title", value: serviceProviderProfile.certification?.certificateTitle },
                        ].map(({ label, value }) => (
                          <div className="col-lg-6 col-xl-4 mb-3" key={label}>
                            <h4 className="secondaryLabel">{label}</h4>
                            <p className="secondaryText  mb-0">{value}</p>
                          </div>
                        ))}
                      </div>
                      <div className="row my-4">
                        <div className="col-12  col-sm-6 col-lg-4 col-xl-3 mb-3">
                          <img className="img-fluid" src={serviceProviderProfile?.certification?.photo} />
                        </div>
                      </div>
                      {serviceProviderProfile?.rejectionReason && (
                        <div className="mb-5">
                          <h4 className="secondaryLabel">Rejection Reason</h4>
                          <p className="secondaryText mb-0">{serviceProviderProfile.rejectionReason}</p>
                        </div>
                      )}
                    </div>
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

export default withModal(ServiceProviderProfile);
