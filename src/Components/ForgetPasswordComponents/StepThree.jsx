import { Formik } from "formik";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../Config/Validations";
import { useFormStatus } from "../../Hooks/useFormStatus";
import { usePageTitle } from "../../Utils/helper";
import { AuthLayout } from "../Layouts/AdminLayout/Auth";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import CustomModal from "../CustomModal";
import Toast from "../Toast";
import "./style.css";

const StepThree = ({ apiEndpoint, navigateTo }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [load, setLoad] = useState(false);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  usePageTitle("Forgot Password");

  const handleSubmit = async (values) => {
    startSubmitting();
    // let email = getEmail();
    // let code = getCode();
    // values.code = code.code;
    // values.email = email.email;
    // let response = await post(apiEndpoint, values);
    // if (response.status) {
    //   setLoad(false);
    //   showToast(response.message, "success");
    //   setShowModal(true);
    // } else {
    //   stopSubmitting();
    //   setLoad(false);
    //   showToast(response.message, "error");
    // }
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
            password_confirmation: "",
          }}
          validationSchema={forgotPassword}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="mt-4">
              <Toast />
              <CustomInput
                label="New Password"
                id="password"
                type="password"
                required
                placeholder="Enter New Password"
                labelclass="mainLabel"
                inputclass="mainInput mainInputLogIn"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && errors.password}
              />

              <CustomInput
                label="Confirm Password"
                id="password_confirmation"
                type="password"
                required
                placeholder="Enter Confirm Password"
                labelclass="mainLabel"
                inputclass="mainInput mainInputLogIn"
                value={values.password_confirmation}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password_confirmation && errors.password_confirmation}
              />
              <div className="mt-4 text-center">
                <CustomButton
                  type="submit"
                  className="site-btn primary-btn px-5 w-100"
                  text="Update"
                  isPending={isSubmitting}
                  pendingText="Loading..."
                />
              </div>
            </form>
          )}
        </Formik>
      <CustomModal show={showModal} close={PageChange} success btnText="Login" heading="Password Updated" para="Your password has been updated. Please login to continue" />
    </>
  );
};

StepThree.propTypes = {
  apiEndpoint: PropTypes.string.isRequired,
  navigateTo: PropTypes.string.isRequired,
};

export default StepThree;
