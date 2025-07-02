import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../../Components/BackButton";
import CustomButton from "../../../../Components/CustomButton";
import CustomInput from "../../../../Components/CustomInput";
import { Select } from "../../../../Components/Select";
import UploadAndDisplayVideo from "../../../../Components/UploadAndDisplayVideo/UploadAndDisplayVideo";
import { videosData } from "../../../../Config/data";
import { statusOptions } from "../../../../Config/TableStatus";
import { addVideoSchema } from "../../../../Config/Validations";
import withModal from "../../../../HOC/withModal";
import { useFormStatus } from "../../../../Hooks/useFormStatus";
import { isNullOrEmpty } from "../../../../Utils/helper";

const EditVideo = ({ showModal }) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setVideo(videosData.detail.data.find((v) => v.id === id));
  }, [id]);

  const handleSubmit = async (values) => {
    // console.log(values)
    startSubmitting();
    showModal("Successful", `Video has been updated successfully!`, () => navigate(`/admin/content-management?tab=videos`), true);
    stopSubmitting();
    // showModal(`Add Video`, `Are you sure you want to add this Video?`, () => onConfirmStatusChange(values));
  };
  const onConfirmStatusChange = async (values) => {
    console.log("Video data:", values);
    showModal("Successful", `Video has been updated successfully!`, () => navigate(-1), true);
    stopSubmitting();
  };

  if (isNullOrEmpty(video)) {
    return (
      <DashboardLayout pageTitle="Edit Video">
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-12 my-4 d-flex">
              <BackButton />
              <h2 className="mainTitle mb-0">Edit Video</h2>
            </div>
            <div className="col-12">
              <div className="dashCard mb-4">loading...</div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout pageTitle="Edit Video">
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-12">
            <h2 className="mainTitle">
              <BackButton />
              Edit Video
            </h2>
          </div>
        </div>
        <div className="dashCard mb-4">
          <div className="row mb-3">
            <div className="col-12">
              <Formik initialValues={video} validationSchema={addVideoSchema} onSubmit={handleSubmit}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
                  <form onSubmit={handleSubmit} className="category-wrap">
                    <div className="row mb-2">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <CustomInput
                          label="Video Title"
                          labelclass="mainLabel"
                          type="text"
                          required
                          placeholder="Enter Video Title"
                          inputclass="mainInput"
                          id="videoTitle"
                          value={values.videoTitle}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.videoTitle && errors.videoTitle}
                        />
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4 ">
                        <div className="select-inner-wrapper mb-3">
                          <Select
                            className="mainInput selectInput w-100"
                            required
                            id="status_detail"
                            name="status_detail"
                            value={values?.status_detail}
                            onChange={(e) => setFieldValue("status_detail", e)}
                            label="Status"
                            labelclass="mainLabel"
                            onBlur={handleBlur}
                            isInputNeeded={false}
                            error={touched.status_detail && errors.status_detail}
                          >
                            {statusOptions}
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <CustomInput
                          label="Description"
                          labelclass="mainLabel"
                          type="textarea"
                          rows={4}
                          required
                          placeholder="Enter Description"
                          inputclass="mainInput"
                          id="description"
                          value={values.description}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.description && errors.description}
                        />
                      </div>
                    </div>

                    <UploadAndDisplayVideo
                      label={"Upload Video"}
                      videos={[values.video]}
                      onChange={(files) => setFieldValue("video", files)}
                      numberOfFiles={1}
                      errorFromParent={touched.video && errors.video}
                    />
                    <div className="row mb-2">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4 mb-3">
                        <div className="radio-checkbox-wrapper gap-3 gap-sm-5">
                          <label className="radio-checkbox-container">
                            <input defaultChecked={video.pricingOption === "free"} onChange={handleChange} type="radio" name="pricingOption" value="free" />
                            <span className="custom-checkbox"></span>
                            For Free
                          </label>
                          <label className="radio-checkbox-container">
                            <input defaultChecked={video.pricingOption === "premium"} onChange={handleChange} type="radio" name="pricingOption" value="premium" />
                            <span className="custom-checkbox"></span>
                            For Premium
                          </label>
                        </div>
                        <p style={{ color: "red" }} className="mb-0">
                          {touched.pricingOption && errors.pricingOption}
                        </p>
                      </div>
                    </div>

                    <div className="row ">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4 mt-3">
                        <CustomButton
                          variant="site-btn primary-btn"
                          className="px-5"
                          text="Update Video"
                          pendingText="Submitting..."
                          isPending={isSubmitting}
                          type="submit"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(EditVideo);
