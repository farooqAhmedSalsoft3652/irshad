import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../../Components/BackButton";
import CustomButton from "../../../../Components/CustomButton";
import CustomInput from "../../../../Components/CustomInput";
import UploadAndDisplayFiles from "../../../../Components/UploadAndDisplayFiles/UploadAndDisplayFiles";
import UploadAndDisplayImage from "../../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import { addBlogSchema } from "../../../../Config/Validations";
import withModal from "../../../../HOC/withModal";
import { useFormStatus } from "../../../../Hooks/useFormStatus";
import { blogsData } from "../../../../Config/data";
import { isNullOrEmpty } from "../../../../Utils/helper";

const EditBlog = ({ showModal }) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setBlog(blogsData.detail.data.find((b) => b.id === id));
  }, [id]);

  const handleSubmit = async (values) => {
    console.log("Blog data:", values);
    showModal(`Update Blog`, `Are you sure you want to update this Blog?`, () => onConfirmStatusChange(values));
  };
  const onConfirmStatusChange = async (values) => {
    startSubmitting();
    showModal("Successful", `This Blog has been updated successfully!`, () => navigate(`/admin/content-management?tab-blogs`), true);
    stopSubmitting();
  };

  if (isNullOrEmpty(blog)) {
    return (
      <DashboardLayout pageTitle="Edit Blog">
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-12 my-4 d-flex">
              <BackButton url={`/admin/content-management?tab=blogs`} />
              <h2 className="mainTitle mb-0">Edit Blog</h2>
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
    <DashboardLayout pageTitle="Edit Blog">
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-12">
            <h2 className="mainTitle">
              <BackButton url={`/admin/content-management?tab=blogs`} />
              Edit Blog
            </h2>
          </div>
        </div>
        <div className="dashCard mb-4">
          <div className="row mb-3">
            <div className="col-12">
              <Formik initialValues={blog} validationSchema={addBlogSchema} onSubmit={handleSubmit}>
                {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
                  <Form className="category-wrap">
                    <div className="row mb-2">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <CustomInput
                          label="Blog Title"
                          labelclass="mainLabel"
                          type="text"
                          required
                          placeholder="Enter Blog Title"
                          inputclass="mainInput"
                          id="blogTitle"
                          value={values.blogTitle}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.blogTitle && errors.blogTitle}
                        />
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-12 col-sm-6">
                        <UploadAndDisplayImage
                          height="320px"
                          label={"Upload Banner Image"}
                          images={blog.photo}
                          onChange={(files) => setFieldValue("photo", files)}
                          numberOfFiles={1}
                          errorFromParent={touched.photo && errors.photo}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <UploadAndDisplayFiles
                          files={values.blogFile}
                          height="320px"
                          label={"Upload Blog File"}
                          // required
                          onChange={(files) => setFieldValue("blogFile", files)}
                          numberOfFiles={1}
                          errorFromParent={touched.blogFile && errors.blogFile}
                        />
                      </div>
                    </div>
                    <p className="mainLabel mb-4 ps-0">Limit: 1 File & 1 Image at a Time</p>
                    <div className="row mb-2">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4 mb-3">
                        <div className="radio-checkbox-wrapper gap-3 gap-sm-5">
                          <label className="radio-checkbox-container">
                            <input defaultChecked={blog.pricingOption === "free"} onChange={handleChange} type="radio" name="pricingOption" value="free" />
                            <span className="custom-checkbox"></span>
                            For Free
                          </label>
                          <label className="radio-checkbox-container">
                            <input
                              defaultChecked={blog.pricingOption === "premium"}
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

export default withModal(EditBlog);
