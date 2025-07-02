import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { Select } from "../../../Components/Select";
import ImageUpload from "../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import { serviceManagementData } from "../../../Config/data";
import { statusOptions } from "../../../Config/TableStatus";
import { addServiceSchema } from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";
import { isNullOrEmpty } from "../../../Utils/helper";

const EditServiceManagement = ({ showModal }) => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    const serviceupdateData = serviceManagementData?.detail?.data?.find(
      (e) => e.id == id
    );
    if (serviceupdateData) {
      setData(serviceupdateData);
    }
  }, [id]);
  // console.log(data, "serviceupdateData");
  const handleSubmit = async (values) => {
    showModal(``, `Are you sure you want to update Service?`, () =>
      onConfirmStatusChange()
    );
    const onConfirmStatusChange = async () => {
      // console.log("Service data:", values);
      showModal(
        "",
        `Service has been Updated successfully!`,
        () => navigate("/admin/service-management"),
        true
      );
    };
  };

  if (isNullOrEmpty(data)) {
    return (
      <DashboardLayout>
        <p>loading...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout pageTitle="Edit Service">
      <div className="dashCard mb-4">
        <div className="row my-3">
          <div className="col-12">
            <div className="d-flex align-items-center">
              <BackButton2 />
              <h2 className="mainTitle mb-0">Edit Service</h2>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-xl-4 col-lg-4">
            <Formik
              initialValues={{
                service_title: data?.service_title || "",
                status: data?.status_detail || "",
                category: data?.category || "",
                sub_category: data?.sub_category || "",
                photo: data?.photo || [],
              }}
              validationSchema={addServiceSchema}
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
              }) => (
                <form onSubmit={handleSubmit} className="category-wrap">
                  <div className="row my-4">
                    <div className="col-12 mb-md-4 mb-3">
                      <CustomInput
                        label="Service Title"
                        labelclass="mainLabel"
                        type="text"
                        required
                        placeholder="Enter Category Title"
                        inputclass="mainInput"
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
                          labelclass="mainLabel"
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
                    <div className="col-12 mb-3 mt-3">
                      <div className="image-upload-style">
                        <ImageUpload
                          id={`photo`}
                          placeholder="Upload Image"
                          onChange={(files) => setFieldValue(`photo`, files)}
                          numberOfFiles={1}
                          images={values.photo}
                          errorFromParent={
                            touched.photo &&
                            touched.photo &&
                            errors.photo &&
                            errors.photo
                          }
                          className="image-upload-style-2"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <CustomButton
                        variant="btn btn-primary"
                        className="px-5"
                        text="Update Service"
                        type="submit"
                      />
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

export default withModal(EditServiceManagement);
