import StepThree from "../../../Components/ForgetPasswordComponents/StepThree";
import { UserAuthLayout } from "../../../Components/Layouts/UserLayout/AuthLayout";
const UserForgetPassword3 = () => {
  return (
    <UserAuthLayout authTitle="Forgot Password" authPara="Enter your verification code that we send you on phone" authLeftText="Your Journey to Emotional Wellness" authMain backOption={true}>
      <StepThree
        apiEndpoint="/admin-api/password-recovery/update-password"
        navigateTo="/admin"
      />
    </UserAuthLayout>
  );
};

export default UserForgetPassword3;
