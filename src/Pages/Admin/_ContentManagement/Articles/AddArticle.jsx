import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../../Components/BackButton";
import CustomButton from "../../../../Components/CustomButton";
import CustomInput from "../../../../Components/CustomInput";
import UploadAndDisplayFiles from "../../../../Components/UploadAndDisplayFiles/UploadAndDisplayFiles";
import UploadAndDisplayImage from "../../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import { addArticleSchema } from "../../../../Config/Validations";
import withModal from "../../../../HOC/withModal";
import { useFormStatus } from "../../../../Hooks/useFormStatus";

const AddArticle = ({ showModal }) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    console.log("Article data:", values);
    startSubmitting();
    showModal("Successful", `This Article has been added successfully!`, () => navigate(`/admin/content-management?tab=blogs`), true);
    stopSubmitting();
    // showModal(`Add Article`, `Are you sure you want to add this Article?`, () => onConfirmStatusChange(values));
  };
  //   const onConfirmStatusChange = async (values) => {
  //     showModal("Successful", `This Article has been added successfully!`, ()=>navigate(-1), true);
  //     stopSubmitting();
  //   };

  return (
    <DashboardLayout pageTitle="Add Article">
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-12">
            <h2 className="mainTitle">
              <BackButton url={`/admin/content-management?tab=blogs`} />
              Add Article
            </h2>
          </div>
        </div>
        <div className="dashCard mb-4">
          <div className="row mb-3">
            <div className="col-12">
              <Formik
                initialValues={{
                  articleTitle: "",
                  pricingOption: null,
                  photo: "",
                  articleFile: "",
                }}
                validationSchema={addArticleSchema}
                onSubmit={handleSubmit}
              >
                {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
                  <Form className="category-wrap">
                    <div className="row mb-2">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <CustomInput
                          label="Article Title"
                          labelclass="mainLabel"
                          type="text"
                          required
                          placeholder="Enter Article Title"
                          inputclass="mainInput"
                          id="articleTitle"
                          value={values.articleTitle}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.articleTitle && errors.articleTitle}
                        />
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-12 col-sm-6">
                        <UploadAndDisplayImage
                          label={"Upload Banner Image"}
                          required
                          onChange={(files) => setFieldValue("photo", files)}
                          numberOfFiles={1}
                          errorFromParent={touched.photo && errors.photo}
                          />
                      </div>
                      <div className="col-12 col-sm-6">
                        <UploadAndDisplayFiles
                          label={"Upload Article File"}
                          required
                          onChange={(files) => setFieldValue("articleFile", files)}
                          numberOfFiles={1}
                          errorFromParent={touched.articleFile && errors.articleFile}
                        />
                      </div>
                    </div>
                    <p className="mainLabel mb-4 ps-0">Limit: 1 File & 1 Image at a Time</p>
                    <div className="row mb-2">
                      <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4 mb-3">
                        <div className="radio-checkbox-wrapper gap-3 gap-sm-5">
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
                          text="Add Article"
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

export default withModal(AddArticle);
