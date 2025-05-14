import { Form, Formik } from "formik";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import CustomButton from "../../../Components/CustomButton";
import FormikField from "../../../Components/FormikField";
import { Select } from "../../../Components/Select";
import { subcriptionType } from "../../../Config/TableStatus";
import { addNewPlaneSchema } from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import CustomInput from "../../../Components/CustomInput";
import { useNavigate } from "react-router-dom";

const NewPlan = ({ showModal }) => {
  const { startSubmitting, stopSubmitting } = useFormStatus();
  let navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    startSubmitting();
    // try {
    //   const response = await post("/admin-api/push-notifications", values);
    //   if (response.status) {
    // showModal("add category", "Notification Pushed Successfully", null, true);
    showModal(
      "Succesful",
      `New plan has been created successfully`,
      () => {
        navigate(-1);
      },
      true
    );
    resetForm();

    //   }
    // } catch (error) {
    //   console.error("Error pushing notification:", error);
    // }
    stopSubmitting();
  };

  return (
    <DashboardLayout pageTitle="New plan">
      <div className="row my-3">
        <div className="col-12">
          <h2 className="mainTitle">
            <BackButton />
            New plan
          </h2>
        </div>
      </div>
      <div className="dashCard mb-4">
        <div className="row mb-3">
          <div className="col-md-7 col-lg-5 col-xxl-4">
            <Formik
              initialValues={{ subscriptiontitle: "", subscriptiontype: "", amount: "", description: "" }}
              validationSchema={addNewPlaneSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, values, errors, touched, handleBlur, handleSubmit, setFieldValue, handleChange }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12 my-3">
                      <FormikField
                        name="subscriptiontitle"
                        required
                        label="Subscription title"
                        labelClass="mainLabel"
                        placeholder="Enter Subscription title"
                        className="mainInput"
                      />
                    </div>
                    <div className="col-12">
                      <Select
                        className="mainInput "
                        required
                        id="subscriptiontype"
                        name="subscriptiontype"
                        value={values.subscriptiontype}
                        onChange={(e) => {
                          setFieldValue("subscriptiontype", e);
                        }}
                        label="subscription type"
                        labelclass="secondaryLabel mainLabel"
                        wrapperClass="mb-3"
                        onBlur={handleBlur}
                        error={touched.subscriptiontype && errors.subscriptiontype}
                      >
                        {subcriptionType}
                      </Select>
                    </div>
                    <div className="col-12 my-3">
                      <FormikField
                        name="amount"
                        type={"number"}
                        min={0}
                        required
                        label="Amount"
                        labelClass="mainLabel"
                        placeholder="Enter Amount"
                        className="mainInput"
                        righticon
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <CustomInput
                        inputclass="mainInput"
                        label="description"
                        labelclass="mainLabel"
                        type="textarea"
                        wrapperClass="mb-3"
                        required
                        placeholder="Write description"
                        rows="5"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="description"
                        error={touched.description && errors.description}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <CustomButton
                        variant="site-btn primary-btn"
                        className="px-5"
                        text="create"
                        pendingText="Submitting..."
                        isPending={isSubmitting}
                        type="submit"
                      />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(NewPlan);
