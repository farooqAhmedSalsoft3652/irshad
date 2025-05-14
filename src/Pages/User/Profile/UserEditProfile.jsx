import { Col, Container, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { images } from '../../../Assets'
import CustomButton from "../../../Components/CustomButton";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import CustomInput from "../../../Components/CustomInput";
import { adminProfileValidation } from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";
import { useAuth } from "../../../Hooks/useAuth";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { usePageTitle, validateImage } from "../../../Utils/helper";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import "./style.css";

const UserEditProfile = ({ showModal }) => {
  usePageTitle("Edit Profile", true);
  const navigate = useNavigate();
  const [imageObject, setImageObject] = useState({});
  const [profileData, setProfileData] = useState({});
  const [profilePic, setProfilePic] = useState();
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const { user } = useAuth();

  useEffect(() => {
    setProfileData(user);
    setProfilePic(user.photo_path || images.userImage);
  }, []);

  const handleImageChange = (e, setFieldValue, setFieldError) => {
    const file = e.target.files[0];
    if (validateImage(file)) {
      setFieldError("image", validateImage(file));
    } else {
      setFieldError("image", "");
      setProfilePic(URL.createObjectURL(file));
      setImageObject(file);
    }
  };

  const handleSubmit = async (values) => {
    startSubmitting();
    values.image = imageObject;
    showModal(
      "Succesful",
      `profile Has Been updated Successfully!`,
      // null,
      () => navigate(`/profile`),
      true
    );
    console.log(values)
    // let response = await post("/admin-api/account", values);
    // if (response.status) {
    //   showModal(
    //     `Profile updated successfully`,
    //     null,
    //     true,
    //     () => navigate(`/admin/profile`)
    //   );
    //   dispatch(setData(response.detail));
    // } else {
    //   console.log("error");
    // }
    stopSubmitting();
  };

  // console.log(user)
  return (
    <section className="page-content profile">
      <Container fluid>
        <Row>
            <Col sm={12} className="gap-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 mb-lg-4">
              <h2 className="page-title fw-bold"><BackButton2 />Edit Profile</h2>
            </Col>
        </Row>
        <Row>
          <Col xs={12} lg={10}>
            <div className="profile-card">
              <Row>
                <Col xs={12} lg={8} xxl={7}>
                  {profileData && Object.keys(profileData).length > 0 ? (
                    <Formik
                      initialValues={{
                        first_name: profileData.first_name || "",
                        last_name: profileData.last_name || "",
                        user_name: profileData.user_name || "",
                        language: profileData.language || "",
                        relationship: profileData.relationship || "",
                        phone: profileData.phone || "",
                      }}
                      validationSchema={adminProfileValidation}
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
                        setFieldError,
                        setFieldTouched,
                        isSubmitting,
                      }) => {
                        return (
                          <Form onSubmit={handleSubmit}>
                            {/* {console.log(errors)} */}
                            <Row >
                              <Col xs={12} className="mb-4">
                                <div className="profile-image">
                                  <img src={profilePic ?? images.userImage} alt="User" />
                                  <input
                                    type="file"
                                    accept="image/*"
                                    className="d-none"
                                    id="profileImage"
                                    onChange={(event) => handleImageChange(event, setFieldValue, setFieldError)}
                                  />
                                  <label htmlFor="profileImage" className="upload-btn">
                                    <images.CameraIconOutline />
                                  </label>
                                </div>
                                {errors.image && <div className="errorText red-text">{errors.image}</div>}
                              </Col>
                              <Col xs={12} className="mb-3">
                                <CustomInput
                                  label="First Name"
                                  labelclass="mainLabel"
                                  type="text"
                                  required
                                  placeholder="Enter First Name"
                                  inputclass="mainInput"
                                  id="first_name"
                                  value={values.first_name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={touched.first_name && errors.first_name ? errors.first_name : null}
                                />
                              </Col>
                              <Col xs={12} className="mb-3">
                                <CustomInput
                                  label="Last Name"
                                  labelclass="mainLabel"
                                  type="text"
                                  required
                                  placeholder="Enter Last Name"
                                  inputclass="mainInput"
                                  id="last_name"
                                  value={values.last_name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={touched.last_name && errors.last_name}
                                />
                              </Col>
                              <Col xs={12} className="mb-3">
                                <CustomInput
                                  label="User Name"
                                  labelclass="mainLabel"
                                  type="text"
                                  required
                                  placeholder="Enter Last Name"
                                  inputclass="mainInput"
                                  id="user_name"
                                  value={values.user_name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={touched.user_name && errors.user_name}
                                />
                              </Col>
                              <Col xs={12} className="mb-3">
                                <label htmlFor="phoneInput" className="mainLabel">
                                  Phone number<span className="text-danger">*</span>
                                </label>
                                <PhoneInput
                                  defaultCountry="US"
                                  placeholder="Enter phone number"
                                  value={values.phone}
                                  onChange={(phone) => setFieldValue("phone", phone)}
                                  onBlur={() => setFieldTouched("phone", true)}
                                  className="mainInput"
                                />
                                {touched.phone && errors.phone ? <div className="text-danger">{errors.phone}</div> : null}
                              </Col>
                              <Col xs={12} className="mb-3">
                                <CustomInput
                                  label="Your Relationship"
                                  labelclass="mainLabel"
                                  type="text"
                                  required
                                  placeholder="Enter Last Name"
                                  inputclass="mainInput"
                                  id="relationship"
                                  value={values.relationship}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={touched.relationship && errors.relationship}
                                />
                              </Col>
                              <Col xs={12} className="mb-3">
                                <CustomInput
                                  label="Language"
                                  labelclass="mainLabel"
                                  type="text"
                                  required
                                  placeholder="Enter Last Name"
                                  inputclass="mainInput"
                                  id="language"
                                  value={values.language}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={touched.language && errors.language}
                                />
                              </Col>
                              <Col xs={12}>
                                <CustomButton
                                  variant="btn btn-primary min-width-auto"
                                  className="px-5"
                                  text="Update"
                                  pendingText="Submitting..."
                                  isPending={isSubmitting}
                                  type="submit"
                                />
                              </Col>
                            </Row>
                          </Form>
                        );
                      }}
                    </Formik>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default withModal(UserEditProfile)
