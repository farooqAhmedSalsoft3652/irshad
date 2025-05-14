
import { usePageTitle } from "../../../Utils/helper.jsx";
import { Formik } from "formik";
import CustomInput from "../../../Components/CustomInput/index.jsx";
import CustomButton from "../../../Components/CustomButton/index.jsx";
import { UserAuthLayout } from "../../../Components/Layouts/UserLayout/AuthLayout/index.jsx";
import { loginValidationSchema } from "../../../Config/Validations.jsx";
// import { useFormStatus } from "../../../Hooks/useFormStatus.jsx";
import Toast, { showToast } from "../../../Components/Toast/index.jsx";
import "./style.css";

// const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus(); // use your custom hook
const handleSubmit = async (values) => {
  // startSubmitting();
  console.log("submit")
  // stopSubmitting();
};


const UserSignup = () => {
  usePageTitle("Admin Login");
  return (
    <>
      <UserAuthLayout authTitle="Sign up" authMain authPara="Create your account" authLeftText="Your Journey to Emotional Wellness">
      <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <form className="mt-3" onSubmit={handleSubmit}>
          {/* <Toast /> */}
          <CustomInput
            label="First Name"
            id="first_name"
            type="text"
            required
            placeholder="Enter First Name"
            labelclass="mainLabel"
            inputclass="mainInput mainInputLogIn"
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.first_name && errors.first_name}
          />
          <CustomInput
            label="Last Name"
            id="last_name"
            type="text"
            required
            placeholder="Enter Last Name"
            labelclass="mainLabel"
            inputclass="mainInput mainInputLogIn"
            value={values.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.last_name && errors.last_name}
          />
          <CustomInput
            label="User Name"
            id="user_name"
            type="text"
            required
            placeholder="Enter User Name"
            labelclass="mainLabel"
            inputclass="mainInput mainInputLogIn"
            value={values.user_name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.user_name && errors.user_name}
          />
          <CustomInput
            label="Language"
            id="language"
            type="text"
            required
            placeholder="Select language"
            labelclass="mainLabel"
            inputclass="mainInput mainInputLogIn"
            value={values.language}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.language && errors.language}
          />
          <CustomInput
            label="Relation with Patient"
            id="relation_patient"
            type="text"
            required
            placeholder="Enter your Relation with Patient"
            labelclass="mainLabel"
            inputclass="mainInput mainInputLogIn"
            value={values.relation_patient}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.relation_patient && errors.relation_patient}
          />
          <CustomInput
            label="Mobile Number"
            id="mobile_number"
            type="text"
            required
            placeholder="Enter Mobile Number"
            labelclass="mainLabel"
            inputclass="mainInput mainInputLogIn"
            value={values.mobile_number}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.mobile_number && errors.mobile_number}
          />
          <CustomInput
            label="Email"
            id="email"
            type="email"
            required
            placeholder="Enter your Email"
            labelclass="mainLabel"
            inputclass="mainInput mainInputLogIn"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
          />
          <CustomInput
            label="password"
            id="password"
            type="password"
            required
            placeholder="Enter password"
            labelclass="mainLabel"
            inputclass="mainInput mainInputLogIn"
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
            placeholder="Confirm Password"
            labelclass="mainLabel"
            inputclass="mainInput mainInputLogIn"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.confirm_password && errors.confirm_password}
          />

          <div className="mt-5 text-center">
            <CustomButton
              variant="site-btn primary-btn"
              className="px-5 w-100"
              text="Log In"
              pendingText="Loading..."
              // isPending={isSubmitting}
              type="submit"
            />
          </div>
        </form>
      )}
    </Formik>
      </UserAuthLayout>
    </>
  );
};

export default UserSignup;
