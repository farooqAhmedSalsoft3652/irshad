import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../../Components/BackButton";
import CustomButton from "../../../../Components/CustomButton";
import CustomInput from "../../../../Components/CustomInput";
import { Select } from "../../../../Components/Select";
import UploadAndDisplayVideo from "../../../../Components/UploadAndDisplayVideo/UploadAndDisplayVideo";
import { statusOptions } from "../../../../Config/TableStatus";
import { addVideoSchema } from "../../../../Config/Validations";
import withModal from "../../../../HOC/withModal";
import { useFormStatus } from "../../../../Hooks/useFormStatus";

const AddVideo = ({ showModal }) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    startSubmitting();
    showModal(`Add Video`, `Are you sure you want to add this Video?`, () => onConfirmStatusChange(values));
  };
  const onConfirmStatusChange = async (values) => {
    console.log("Video data:", values);
    showModal("Successful", `Video has been added successfully!`, () => navigate(`/admin/content-management?tab=videos`), true);
    stopSubmitting();
  };

  return (
    <DashboardLayout pageTitle="Add Video">
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-12">
            <h2 className="mainTitle">
              <BackButton url={`/admin/content-management?tab=videos`}/>
              Add Video
            </h2>
          </div>
        </div>
        <div className="dashCard mb-4">
          <div className="row mb-3">
            <div className="col-12">
              <Formik
                initialValues={{
                  videoTitle: "",
                  status_detail: "1",
                  description: "",
                  video: "",
                  pricingOption: null,
                }}
                validationSchema={addVideoSchema}
                onSubmit={handleSubmit}
              >
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
                      onChange={(files) => setFieldValue("video", files)}
                      numberOfFiles={1}
                      errorFromParent={touched.video && errors.video}
                    />
                    <div className="row mb-2">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4 mb-3">
                        <div className="radio-checkbox-wrapper gap-3 gap-sm-5 mt-3">
                          <label className="radio-checkbox-container">
                            <input onChange={handleChange} type="radio" name="pricingOption" value="free" />
                            <span className="custom-checkbox"></span>
                            For Free
                          </label>
                          <label className="radio-checkbox-container">
                            <input onChange={handleChange} type="radio" name="pricingOption" value="premium" />
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
                          text="Add Video"
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

export default withModal(AddVideo);
