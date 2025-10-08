import { Formik } from "formik";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../Config/Validations";
import { useFormStatus } from "../../Hooks/useFormStatus";
import { getCode, getEmail, usePageTitleUser } from "../../Utils/helper";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import CustomModal from "../CustomModal";
import Toast, { showToast } from "../Toast";
import "./style.css";
import { post } from "../../Services/Api";

const StepThree = ({ apiEndpoint, navigateTo }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [load, setLoad] = useState(false);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  usePageTitleUser("Forgot Password");

  const handleSubmit = async (values) => { 
    startSubmitting();
    let email = getEmail();
    let code = getCode();
    values.code = code.code;
    values.email = email.email;
    let response = await post(apiEndpoint, values);
    if (response?.status) {
      setLoad(false);
      // showToast(response?.data?.message, "success");
      setShowModal(true);
    } else {
      stopSubmitting();
      setLoad(false);
      showToast("Failed to update password", "error");
    }
    setShowModal(true);
    stopSubmitting();
  };

  const PageChange = () => {
    navigate(navigateTo);
  };

  return (
    <>
      <Formik
        initialValues={{
          password: "",
          confirm_password: "",
        }}
        validationSchema={forgotPassword}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className="mt-4">
            <Toast />
            <CustomInput
              label="New Password"
              id="password"
              type="password"
              required
              inputclass="mb-3"
              placeholder="Enter New Password"
              labelclass="mainLabel"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && errors.password}
            />

            <CustomInput
              label="Confirm Password"
              id="confirm_password"
              type="password"
              required
              placeholder="Enter Confirm Password"
              labelclass="mainLabel"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.confirm_password && errors.confirm_password
              }
            />
            <div className="mt-4 text-center">
              <CustomButton
                type="submit"
                variant="primary"
                className="w-100"
                text="Update"
                isPending={isSubmitting}
                pendingText="Loading..."
              />
            </div>
          </form>
        )}
      </Formik>
      <CustomModal
        show={showModal}
        close={() => setShowModal(false)}
        action={PageChange}
        success
        btnText="Ok"
        para="Your password has been updated. Please login to continue"
      />
    </>
  );
};

StepThree.propTypes = {
  apiEndpoint: PropTypes.string.isRequired,
  navigateTo: PropTypes.string.isRequired,
};

export default StepThree;
