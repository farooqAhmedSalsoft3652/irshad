import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import UploadAndDisplayImage from "../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { Select } from "../../../Components/Select";
import { enableDisableOptions } from "../../../Config/TableStatus";
import { addBannerSchema } from "../../../Config/Validations";

const AddBanner = ({ showModal }) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    console.log("Banner data:", values);
    startSubmitting();
    showModal("Successful", `This Banner has been added successfully!`, () => navigate(-1), true);
    stopSubmitting();
    // showModal(`Add Banner`, `Are you sure you want to add this Banner?`, () => onConfirmStatusChange(values));
  };
  //   const onConfirmStatusChange = async (values) => {
  //     showModal("Successful", `This Banner has been added successfully!`, ()=>navigate(-1), true);
  //     stopSubmitting();
  //   };

  return (
    <DashboardLayout pageTitle="Add Banner Details">
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-12">
            <h2 className="mainTitle">
              <BackButton />
              Add Banner Details
            </h2>
          </div>
        </div>
        <div className="dashCard mb-4">
          <div className="row mb-3">
            <div className="col-12">
              <Formik
                initialValues={{
                  brandName: "",
                  emailAddress: "",
                  brandUrl: "",
                  status_detail: "1",
                  expiryDate: "",
                  photo: "",
                }}
                validationSchema={addBannerSchema}
                onSubmit={handleSubmit}
              >
                {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
                  <Form className="category-wrap">
                    <div className="row mb-2">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <CustomInput
                          label="Full Name of Brand"
                          labelclass="mainLabel"
                          type="text"
                          required
                          placeholder="Enter Full Name of Brand"
                          inputclass="mainInput"
                          id="brandName"
                          value={values.brandName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.brandName && errors.brandName}
                        />
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <CustomInput
                          label="Email of Brand"
                          labelclass="mainLabel"
                          type="text"
                          required
                          placeholder="Enter Email of Brand"
                          inputclass="mainInput"
                          id="emailAddress"
                          value={values.emailAddress}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.emailAddress && errors.emailAddress}
                        />
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <CustomInput
                          label="Brand URL"
                          labelclass="mainLabel"
                          type="text"
                          required
                          placeholder="Enter Brand URL"
                          inputclass="mainInput"
                          id="brandUrl"
                          value={values.brandUrl}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.brandUrl && errors.brandUrl}
                        />
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
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
                            {enableDisableOptions}
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <CustomInput
                          label="Expiry Date"
                          labelclass="mainLabel"
                          type="date"
                          required
                          placeholder="Enter Expiry Date"
                          inputclass="mainInput"
                          id="expiryDate"
                          value={values.expiryDate}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.expiryDate && errors.expiryDate}
                        />
                      </div>
                    </div>

                    <UploadAndDisplayImage
                      height="320px"
                      label={"Banner Picture"}
                      required
                      onChange={(files) => setFieldValue("photo", files)}
                      numberOfFiles={1}
                      errorFromParent={touched.photo && errors.photo}
                    />

                    <div className="row ">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4 mt-3">
                        <CustomButton
                          variant="site-btn primary-btn"
                          className="px-5"
                          text="Add"
                          pendingText="Submitting..."
                          isPending={isSubmitting}
                          type="submit"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(AddBanner);
