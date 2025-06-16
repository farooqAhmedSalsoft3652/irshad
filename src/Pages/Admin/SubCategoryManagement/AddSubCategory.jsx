import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { Select } from "../../../Components/Select";
import UploadAndDisplayImages from "../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import { categoryStatus, statusOptions } from "../../../Config/TableStatus";
import { addSubCategorySchema } from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";

const AddSubCategory = ({ showModal }) => {
  const navigate = useNavigate();
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [errorsData, setErrorsData] = useState({});

  const handleSubmit = async (values) => {
    console.log(values);
    startSubmitting();
    showModal("", `Sub-Category has been added successfully`, () => navigate(-1), true);
    stopSubmitting();
  };

  return (
    <DashboardLayout pageTitle="Add Sub-Category">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="dashCard mb-4">
              <div className="row">
                <div className="col-12 mb-4 d-flex">
                  <BackButton2 />
                  <h2 className="mainTitle mb-0">Add Sub-Category</h2>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <Formik
                    initialValues={{
                      categoryTitle: "",
                      status_detail: "",
                      category: "",
                      photo: "",
                    }}
                    validationSchema={addSubCategorySchema}
                    onSubmit={handleSubmit}
                  >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
                      <form onSubmit={handleSubmit} className="category-wrap">
                        <div className="row">
                          <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4 my-2">
                            <CustomInput
                              label="Sub-Category Title"
                              type="text"
                              required
                              placeholder="Enter Category Title"
                              id="categoryTitle"
                              value={values.categoryTitle}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.categoryTitle && errors.categoryTitle}
                            />
                          </div>
                          <div className="row mb-4">
                            <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                              <div className="select-inner-wrapper">
                                <Select
                                  className="mainInput selectInput w-100"
                                  required
                                  id="status_detail"
                                  name="status_detail"
                                  value={values?.status_detail}
                                  onChange={(e) => setFieldValue("status_detail", e)}
                                  label="Status"
                                  onBlur={handleBlur}
                                  error={touched.status_detail && errors.status_detail}
                                >
                                  {statusOptions}
                                </Select>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-4">
                            <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                              <div className="select-inner-wrapper">
                                <Select
                                  className="mainInput selectInput w-100"
                                  required
                                  id="category"
                                  name="category"
                                  value={values?.category}
                                  onChange={(e) => setFieldValue("category", e)}
                                  label="Category"
                                  onBlur={handleBlur}
                                  error={touched.category && errors.category}
                                >
                                  {categoryStatus}
                                </Select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-4">
                          <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                            <UploadAndDisplayImages
                              onChange={(files) => setFieldValue("photo", files)}
                              numberOfFiles={1}
                              errorFromParent={touched.photo && errors.photo}
                            />
                          </div>
                        </div>
                        <div className="row ">
                          <div className="col-12 mt-3">
                            <CustomButton
                              variant="btn btn-primary"
                              className="px-5"
                              text="Add Sub-Category"
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
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(AddSubCategory);
