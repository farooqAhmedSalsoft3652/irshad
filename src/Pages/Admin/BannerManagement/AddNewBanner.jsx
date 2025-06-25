import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { Select } from "../../../Components/Select";
import ImageUpload from "../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import { statusOptions } from "../../../Config/TableStatus";
import { addNewBannerSchema, addServiceSchema } from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";

const AddNewBanner= ({ showModal }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    resetForm();
    showModal("", `banner has been added successfully!`, () => navigate("/admin/banner-management"), true);
    stopSubmitting();
  };

  return (
    <DashboardLayout pageTitle="Add New Banner">
      <div className="dashCard mb-4">
        <div className="row my-3">
          <div className="col-12">
            <div className="d-flex align-items-center">
              <BackButton2 />
              <h2 className="mainTitle mb-0">Add New Banner</h2>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-xl-4 col-lg-4">
            <Formik
              initialValues={{
                banner_title: "",
                photo: [],
                expiry_date: "",
              }}
              validationSchema={addNewBannerSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
                <form onSubmit={handleSubmit} className="category-wrap">
                  <div className="row my-4">
                    <div className="col-12 mb-md-4 mb-3">
                      <CustomInput
                        label="Banner Title"
                        labelclass="mainLabel"
                        type="text"
                        required
                        placeholder="Enter Banner Title"
                        id="banner_title"
                        value={values.banner_title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.banner_title && errors.banner_title}
                      />
                    </div>
                    <div className="col-12 mb-md-4 mb-3 mt-2">
                      <div className="image-upload-style">
                        <ImageUpload
                          id={`photo`}
                          placeholder="Upload Cover Image Of A Banner"
                          onChange={(files) => setFieldValue(`photo`, files)}
                          numberOfFiles={1}
                          errorFromParent={touched.photo && touched.photo && errors.photo && errors.photo}
                          className="image-upload-style-2"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-md-4 mb-3">
                      <CustomInput
                        label="Expiry Date"
                        labelclass="mainLabel"
                        type="date"
                        required
                        placeholder="Enter Expiry Date"
                        id="expiry_date"
                        value={values.expiry_date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.expiry_date && errors.expiry_date}
                      />
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-12">
                      <CustomButton variant="btn btn-primary" className="px-5" text="Add Banner" pendingText="Submitting..." type="submit" />
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(AddNewBanner);
