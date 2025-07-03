import { Form, Formik } from "formik";
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

const AddSubCategory = ({ showModal }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      // 5 second delay with await
      // const response = await axios.post("/api/add-sub-category", values);
      await new Promise((resolve) => setTimeout(resolve, 5000)); // remove this when call Api

      console.log(values);

      showModal(
        "",
        `Sub-Category has been added successfully`,
        () => navigate(-1),
        true
      );

      resetForm();
    } catch (error) {
      console.error("API error:", error);
    } finally {
      setSubmitting(false); // ✅
    }
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
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      setFieldValue,
                      isSubmitting,
                    }) => (
                      <Form className="category-wrap">
                        {console.log("isSubmitting:", isSubmitting)}
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
                              error={
                                touched.categoryTitle && errors.categoryTitle
                              }
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
                                  onChange={(e) =>
                                    setFieldValue("status_detail", e)
                                  }
                                  label="Status"
                                  onBlur={handleBlur}
                                  error={
                                    touched.status_detail &&
                                    errors.status_detail
                                  }
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
                              onChange={(files) =>
                                setFieldValue("photo", files)
                              }
                              numberOfFiles={1}
                              errorFromParent={touched.photo && errors.photo}
                            />
                          </div>
                        </div>
                        <div className="row ">
                          <div className="col-12 mt-3">
                            <CustomButton
                              variant="primary"
                              type="submit"
                              className="btn-primary px-5"
                              isPending={isSubmitting}
                              loadingText="Submitting..."
                              text="Add Sub-Category"
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
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(AddSubCategory);
