import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import CustomInput from "../../../Components/CustomInput";
import { Select } from "../../../Components/Select";
import { statusOptions } from "../../../Config/TableStatus";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import CustomButton from "../../../Components/CustomButton";
import { addServiceCategorySchema } from "../../../Config/Validations";
import UploadAndDisplayImages from "../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";

const AddServiceCategory = ({ showModal }) => {
  const navigate = useNavigate();
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [errorsData, setErrorsData] = useState({});

  const handleSubmit = async (values) => {
    console.log(values)
    startSubmitting();
    showModal("Successful", `Category has been added successfully`, () => navigate(-1), true);
    stopSubmitting();
  };

  return (
    <DashboardLayout pageTitle="Add Service Category">
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-12 my-4 d-flex">
            <BackButton />
            <h2 className="mainTitle mb-0">Add Service Category</h2>
          </div>
          <div className="col-12">
            <div className="dashCard mb-4">
              <div className="row mb-3">
                <div className="col-12">
                  <Formik
                    initialValues={{
                      categoryTitle: "",
                      status_detail: "1",
                      photo: "",
                    }}
                    validationSchema={addServiceCategorySchema}
                    onSubmit={handleSubmit}
                  >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
                      <form onSubmit={handleSubmit} className="category-wrap">
                        <div className="row">
                          <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4 my-2">
                            <CustomInput
                              label="Category Title"
                              labelclass="mainLabel"
                              type="text"
                              required
                              placeholder="Enter Category Title"
                              inputclass="mainInput"
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
                        </div>
                        <UploadAndDisplayImages
                          height={"400px"}
                          onChange={(files) => setFieldValue("photo", files)}
                          numberOfFiles={1}
                          errorFromParent={touched.photo && errors.photo}
                        />
                        <div className="row ">
                          <div className="col-12 mt-3">
                            <CustomButton
                              variant="site-btn primary-btn"
                              className="px-5"
                              text="Add Category"
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

export default withModal(AddServiceCategory);
