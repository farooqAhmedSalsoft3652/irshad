import { Formik } from "formik";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotCode } from "../../Config/Validations";
import { useFormStatus } from "../../Hooks/useFormStatus";
import { post } from "../../Services/Api";
import { getEmail, setCode, usePageTitleUser } from "../../Utils/helper";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import Toast, { showToast } from "../Toast";
import "./style.css";

const StepTwo = ({ apiEndpoint, resendEndpoint, navigateTo }) => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [data, setForgotPasswordData] = useState({});
  const [timer, setTimer] = useState(60);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  usePageTitleUser("Forgot Password");

  // Timer effect
  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSubmit = async (values) => {
  startSubmitting();
  setCode(values);
  
  try {
    let email = getEmail();
    values.email = email.email;
    let response = await post(apiEndpoint, values);
    
    if (response?.status) {
      showToast(response?.data?.message, "success");
      setTimeout(() => {
        navigate(navigateTo);  // ✅ SUCCESS CASE MEIN HI NAVIGATE
      }, 1000);
    } else {
      showToast("Invalid verification code", "error");
      stopSubmitting();
    }
  } catch (error) {
    showToast("Something went wrong", "error");
    stopSubmitting();
  }
};

  const resendCode = async (e) => {
    e.preventDefault();
    setLoad(true);
    let email = getEmail();
    data.email = email.email;
    let response = await post(resendEndpoint, data);
    if (response.status) {
      showToast(response?.data?.message, "success");
      // Reset timer
      setTimer(60);
      setIsTimerActive(true);
      setLoad(false);
    } else {
      setLoad(false);
      showToast(response.message, "error");
    }
  };

  return (
    <Formik initialValues={{ code: "" }} validationSchema={forgotCode} onSubmit={handleSubmit}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="mt-4">
          <Toast />
          <CustomInput
            label="Verification Code"
            id="code"
            placeholder="Enter Verification Code"
            labelclass="mainLabel"
            value={values.code}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            error={touched.code && errors.code}
          />
          <div className="d-flex align-items-baseline justify-content-between mt-1">
            <p className="text-dark timer">{timer > 0 ? formatTime(timer) : ""}</p>
            <button
              type="button"
              className={`underlineOnHover notButton blueColor ${isTimerActive ? "disabledButton" : ""}`}
              onClick={resendCode}
              disabled={isTimerActive || load}
            >
              {load ? "Sending..." : timer > 0 ? "" : "Resend Code"}
            </button>
          </div>
          <div className="mt-4 text-center">
            <CustomButton type="submit" variant="primary" className="w-100" text="Continue" isPending={isSubmitting} pendingText="Loading..." />
          </div>
        </form>
      )}
    </Formik>
  );
};

StepTwo.propTypes = {
  apiEndpoint: PropTypes.string.isRequired,
  resendEndpoint: PropTypes.string.isRequired,
  navigateTo: PropTypes.string.isRequired,
};

export default StepTwo;
