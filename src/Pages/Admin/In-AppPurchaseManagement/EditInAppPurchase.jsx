import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import UploadAndDisplayFiles from "../../../Components/UploadAndDisplayFiles/UploadAndDisplayFiles";
import { inAppPurchaseManagementData } from "../../../Config/data";
import { addInAppProductSchema } from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { isNullOrEmpty } from "../../../Utils/helper";
import { FaDollarSign } from "react-icons/fa";

const EditInAppPurchase = ({ showModal }) => {
  const { isSubmitting, startSubmitting } = useFormStatus();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const productEditData = inAppPurchaseManagementData?.detail?.data?.find((e) => e.id == Number(id));
    if (productEditData) {
      setData(productEditData);
    }
  }, [id]);
  const handleSubmit = async (values) => {
    startSubmitting();
    showModal("Successful", `product has been updated successfully!`, () => navigate(-1), true);
  };
  if (isNullOrEmpty(data)) {
    return (
      <DashboardLayout>
        <p>loading...</p>
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout pageTitle="Edit Product">
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-12">
            <h2 className="mainTitle">
              <BackButton />
              Edit Product
            </h2>
          </div>
        </div>
        <div className=" mb-4">
          <div className="row mb-3">
            <div className="col-12">
              <Formik
                initialValues={{
                  productTitle: data?.productTitle || "",
                  price: data?.price || "",
                  description: data?.description || "",
                  productFiles: data?.fileUrl || "",
                }}
                validationSchema={addInAppProductSchema}
                onSubmit={handleSubmit}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
                  <form onSubmit={handleSubmit} className="category-wrap">
                    <div className="row">
                      <div className="col-12">
                        <UploadAndDisplayFiles
                          files={[values.productFiles]}
                          label={"Upload File"}
                          required
                          onChange={(files) => setFieldValue("productFiles", files)}
                          numberOfFiles={1}
                          errorFromParent={touched.productFiles && errors.productFiles}
                        />
                      </div>
                    </div>

                    <div className=" dashCard">
                      <div className="row">
                        <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                          <div className="row">
                            <div className="col-12">
                              <CustomInput
                                label="product Title"
                                labelclass="mainLabel"
                                type="text"
                                required
                                placeholder="Enter product Title"
                                inputclass="mainInput"
                                id="productTitle"
                                value={values.productTitle}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.productTitle && errors.productTitle}
                              />
                            </div>
                            <div className="col-12 ">
                              <CustomInput
                                label="Price"
                                wrapperClass=" flex-grow-1 position-relative"
                                type="number"
                                required
                                placeholder="Enter Price"
                                inputclass="mainInput"
                                id="price"
                                rightIcon={FaDollarSign}
                                value={values.price}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.price && errors.price}
                              />
                            </div>
                            <div className="col-12">
                              <CustomInput
                                label="Description"
                                labelclass="mainLabel"
                                type="textarea"
                                rows={4}
                                required
                                placeholder="Enter Description"
                                inputclass="mainInput"
                                id="description"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.description && errors.description}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <CustomButton
                            variant="site-btn primary-btn"
                            className="px-5"
                            text="Update"
                            pendingText="Submitting..."
                            isPending={isSubmitting}
                            type="submit"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(EditInAppPurchase);
