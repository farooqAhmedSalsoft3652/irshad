import { AuthLayout } from "../../../Components/Layouts/AdminLayout/Auth";
import "./style.css";
import { usePageTitle } from "../../../Utils/helper.jsx";
// import { loginValidationSchema } from "../../../Config/Validations.jsx";
import { loginValidationSchema } from "../../../Config/Validations.jsx";
import LoginForm from "../../../Components/LoginForm/index.jsx";
// import LoginForm from "../../../Components/LoginForm/index.jsx";

const AdminLogin = () => {
  usePageTitle("Login");
  return (
    <>
      <AuthLayout authTitle="admin login" authMain authPara="Enter your details to login your account">
        <LoginForm
          actor="admin"
          // apiEndpoint="/admin-api/auth/login"
          validationSchema={loginValidationSchema}
        />
      </AuthLayout>
    </>
  );
};

export default AdminLogin;
