import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { Select } from "../../../Components/Select";
import ImageUpload from "../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import { statusOptions } from "../../../Config/TableStatus";
import { addServiceSchema } from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";

const AddService = ({ showModal }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    resetForm();
    showModal(``, `Are you sure you want to add service?`, () => onConfirmStatusChange());
    const onConfirmStatusChange = async () => {
      console.log("Service data:", values);
      showModal("", `Service has been added successfully!`, () => navigate("/admin/service-management"), true);
    };
    stopSubmitting();
  };

  return (
    <DashboardLayout pageTitle="Add Service">
      <div className="dashCard mb-4">
        <div className="row my-3">
          <div className="col-12">
            <div className="d-flex align-items-center">
              <BackButton2 />
              <h2 className="mainTitle mb-0">Add Service</h2>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-xl-4 col-lg-4">
            <Formik
              initialValues={{
                service_title: "",
                status: "",
                category: "",
                sub_category: "",
                photo: [],
              }}
              validationSchema={addServiceSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
                <form onSubmit={handleSubmit} className="category-wrap">
                  <div className="row my-4">
                    <div className="col-12 mb-md-4 mb-3">
                      <CustomInput
                        label="Service Title"
                        labelclass="mainLabel"
                        type="text"
                        required
                        placeholder="Enter Service Title"
                        id="service_title"
                        value={values.service_title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.service_title && errors.service_title}
                      />
                    </div>
                    <div className="col-12 mb-md-4 mb-3">
                      <div className="select-inner-wrapper">
                        <Select
                          className="mainInput selectInput w-100"
                          required
                          id="status"
                          name="status"
                          value={values?.status}
                          onChange={(e) => setFieldValue("status", e)}
                          label="Status"
                          onBlur={handleBlur}
                          error={touched.status && errors.status}
                        >
                          {statusOptions}
                        </Select>
                      </div>
                    </div>
                    <div className="col-12 mb-md-4 mb-3">
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
                          {statusOptions}
                        </Select>
                      </div>
                    </div>
                    <div className="col-12 mb-md-4 mb-3">
                      <div className="select-inner-wrapper">
                        <Select
                          className="mainInput selectInput w-100"
                          required
                          id="sub_category"
                          name="sub_category"
                          value={values?.sub_category}
                          onChange={(e) => setFieldValue("sub_category", e)}
                          label="Sub Category"
                          onBlur={handleBlur}
                          error={touched.sub_category && errors.sub_category}
                        >
                          {statusOptions}
                        </Select>
                      </div>
                    </div>
                    <div className="col-12 mb-md-4 mb-3 mt-2">
                      <div className="image-upload-style">
                        <ImageUpload
                          id={`photo`}
                          placeholder="Upload Image"
                          onChange={(files) => setFieldValue(`photo`, files)}
                          numberOfFiles={1}
                          errorFromParent={touched.photo && touched.photo && errors.photo && errors.photo}
                          className="image-upload-style-2"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-12">
                      <CustomButton variant="btn btn-primary" className="px-5" text="Add Service" pendingText="Submitting..." type="submit" />
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

export default withModal(AddService);
