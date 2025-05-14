import StepTwo from "../../../Components/ForgetPasswordComponents/StepTwo";
import { UserAuthLayout } from "../../../Components/Layouts/UserLayout/AuthLayout";
const UserForgetPassword2 = () => {
  return (
    <UserAuthLayout
      authTitle="Forgot Password"
      authPara="Enter an email address / Phone Number to receive a verification code"
      authLeftText="Your Journey to Emotional Wellness"
      backOption={true}
      authMain
    >
      <StepTwo
        apiEndpoint="/admin-api/password-recovery/verify-code"
        resendEndpoint="/admin-api/password-recovery/verify-email"
        navigateTo="/admin/forget-password3"
      />
    </UserAuthLayout>
  );
};

export default UserForgetPassword2;
