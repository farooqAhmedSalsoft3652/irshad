import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../../Components/BackButton";
import CustomButton from "../../../../Components/CustomButton";
import CustomInput from "../../../../Components/CustomInput";
import UploadAndDisplayFiles from "../../../../Components/UploadAndDisplayFiles/UploadAndDisplayFiles";
import UploadAndDisplayImage from "../../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import { addBlogSchema, addEBookSchema } from "../../../../Config/Validations";
import withModal from "../../../../HOC/withModal";
import { useFormStatus } from "../../../../Hooks/useFormStatus";
import { blogsData, eBooksData } from "../../../../Config/data";
import { isNullOrEmpty } from "../../../../Utils/helper";
import { Select } from "../../../../Components/Select";
import { statusOptions } from "../../../../Config/TableStatus";

const EditEBook = ({ showModal }) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const { id } = useParams();
  const [eBook, setEBook] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setEBook(eBooksData.detail.data.find((eb) => eb.id === id));
  }, [id]);

  const handleSubmit = async (values) => {
    console.log("E-Book data:", values);
    showModal(`Update E-Book`, `Are you sure you want to update this E-Book?`, () => onConfirmStatusChange(values));
  };
  const onConfirmStatusChange = async (values) => {
    startSubmitting();
    showModal("Successful", `This E-Book has been updated successfully!`, () => navigate(`/admin/content-management?tab=eBook`), true);
    stopSubmitting();
  };

  if (isNullOrEmpty(eBook)) {
    return (
      <DashboardLayout pageTitle="Edit E-Book">
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-12 my-4 d-flex">
              <BackButton url={`/admin/content-management?tab=eBook`} />
              <h2 className="mainTitle mb-0">Edit E-Book</h2>
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
    <DashboardLayout pageTitle="Edit E-Book">
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-12">
            <h2 className="mainTitle">
              <BackButton url={`/admin/content-management?tab=eBook`} />
              Edit E-Book
            </h2>
          </div>
        </div>
        <div className="dashCard mb-4">
          <div className="row mb-3">
            <div className="col-12">
              <Formik initialValues={eBook} validationSchema={addEBookSchema} onSubmit={handleSubmit}>
                {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
                  <Form className="category-wrap">
                    <div className="row mb-2">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <CustomInput
                          label="E-Book Title"
                          labelclass="mainLabel"
                          type="text"
                          required
                          placeholder="Enter E-Book Title"
                          inputclass="mainInput"
                          id="eBookTitle"
                          value={values.eBookTitle}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.eBookTitle && errors.eBookTitle}
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
                    <UploadAndDisplayImage
                      height={"320px"}
                      label={"Upload Banner Image"}
                      images={eBook.photo}
                      onChange={(files) => setFieldValue("photo", files)}
                      numberOfFiles={1}
                      errorFromParent={touched.photo && errors.photo}
                    />
                      <p className="mainLabel mb-4 ps-0">Limit: 1 File & 1 Image at a Time</p>
                    <CustomInput
                      label="Description"
                      labelclass="mainLabel"
                      type="textarea"
                      rows={6}
                      required
                      placeholder="Enter Description"
                      inputclass="mainInput"
                      id="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.description && errors.description}
                    />
                    <div className="row mb-2">
                      <div className="col-12 col-sm-6">
                        <UploadAndDisplayFiles
                          files={values.eBookFile}

                          label={"Upload E-Book"}
                          // required
                          onChange={(files) => setFieldValue("eBookFile", files)}
                          numberOfFiles={1}
                          errorFromParent={touched.eBookFile && errors.eBookFile}
                        />
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4 mb-3">
                        <div className="radio-checkbox-wrapper gap-3 gap-sm-5 mt-3">
                          <label className="radio-checkbox-container">
                            <input defaultChecked={eBook.pricingOption === "free"} onChange={handleChange} type="radio" name="pricingOption" value="free" />
                            <span className="custom-checkbox"></span>
                            For Free
                          </label>
                          <label className="radio-checkbox-container">
                            <input
                              defaultChecked={eBook.pricingOption === "premium"}
                              onChange={handleChange}
                              type="radio"
                              name="pricingOption"
                              value="premium"
                            />
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
                          text="Update Blog"
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

export default withModal(EditEBook);
