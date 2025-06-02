import { FieldArray, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router";
import { images } from "../../../Assets";
import AddIcon from "../../../Assets/images/addIcon.svg?react";
import DeleteIcon from "../../../Assets/images/deleteIcon.svg?react";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import { Select } from "../../../Components/Select";
import UploadAndDisplayImages from "../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import { genderOptions, language } from "../../../Config/TableStatus";
import { editProviderValidation } from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";
import { useAuth } from "../../../Hooks/useAuth";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { usePageTitleUser, validateImage } from "../../../Utils/helper";
import "./style.css";

const UserEditProfile = ({ showModal }) => {
  usePageTitleUser("Edit Profile");
  const navigate = useNavigate();
  const [imageObject, setImageObject] = useState({});
  const [profileData, setProfileData] = useState({});
  const [profilePic, setProfilePic] = useState();
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const { user } = useAuth();
  const [uploadKey, setUploadKey] = useState(Date.now());

  useEffect(() => {
    setProfileData(user);
    setProfilePic(user.photo_path || images.UserImage);
  }, []);

  const handleImageChange = (e, setFieldValue, setFieldError) => {
    const file = e.target.files[0];
    if (validateImage(file)) {
      setFieldError("profile_image", validateImage(file));
    } else {
      setFieldError("profile_image", "");
      setProfilePic(URL.createObjectURL(file));
      setImageObject(file);
    }
  };

  const handleSubmit = async (values) => {
    values.image = imageObject;
    showModal(
      "Succesful",
      `profile Has Been updated Successfully!`,
      () => navigate(`/profile`),
      true
    );
    // console.log(values);
  };

  return (
    <Container fluid>
      <div className="py-sm-5 py-3">
        <div className="site_card">
          <Row>
            <Col sm={12} className="d-flex flex-wrap mb-3 mb-lg-4">
              <BackButton2 />
              <h2 className="page-title fw-bold mx-auto">Edit Profile</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={10}>
              <div className="">
                <Row>
                  <Col xs={12} lg={12} xxl={11}>
                    {/* {console.log(profileData, "Profile Data")} */}
                    {profileData && Object.keys(profileData).length > 0 ? (
                      <Formik
                        initialValues={{
                          profile_image: profileData.photo_path || "",
                          first_name: profileData.first_name || "",
                          last_name: profileData.last_name || "",
                          email: profileData.email || "",
                          gender: profileData.gender || "",
                          nationality: profileData.nationality || "",
                          phone: profileData.phone || "",
                          bio: profileData.about || "",
                          language: profileData.language || "",
                          certificate_image: profileData.certificate_image || "",
                          institution_name: profileData.institution_name || "",
                          certificate_title: profileData.certificate_title || "",

                          educationDetails: [
                            {
                              institution_name: profileData.institution_name || "",
                              degree_title: profileData?.degree_title || "",
                              edu_details_from: profileData?.edu_details_from || "",
                              edu_details_to: profileData?.edu_details_to || "",
                            },
                          ],

                          workExperience: [
                            {
                              organization_name: profileData?.organization_name || "",
                              designation: profileData?.designation || "",
                              wokr_exp_from: profileData?.wokr_exp_from || "",
                              wokr_exp_to: profileData?.wokr_exp_to || "",
                            },
                          ],

                          certificates: [
                            {
                              institution_name: profileData.institution_name || "",
                              certificate_title: profileData.certificate_title || "",
                              certificate_from: profileData.certificate_from || "",
                              certificate_to: profileData.certificate_to || "",
                              certificate_image: profileData.certificate_image || [],
                            },
                          ],
                        }}
                        validationSchema={editProviderValidation}
                        onSubmit={handleSubmit}
                      >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, setFieldError, setFieldTouched, isSubmitting }) => {
                          return (
                            <Form onSubmit={handleSubmit}>
                              {/* {console.log(errors)} */}
                              <Row>
                                <Col xs={12} className="mb-4">
                                  <div className="edit_profile_img">
                                    <img src={profilePic ?? images.UserImage} alt="User" />
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
                                  {errors.profile_image && touched.profile_image && (
                                    <div className="errorText red-text text-center">{errors.profile_image}</div>
                                  )}
                                </Col>
                                <Col xs={12} lg={6} xxl={6} className="mb-3">
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
                                <Col xs={12} lg={6} xxl={6} className="mb-3">
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
                                <Col xs={12} lg={6} xxl={6} className="mb-3">
                                  <label htmlFor="phoneInput" className="mainLabel">
                                    Contact number
                                    <span className="text-danger">*</span>
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
                                <Col xs={12} lg={6} xxl={6} className="mb-3">
                                  <CustomInput
                                    label="Email Address"
                                    labelclass="mainLabel"
                                    readOnly
                                    type="text"
                                    required
                                    placeholder="Enter Last Name"
                                    inputclass="mainInput"
                                    id="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.email && errors.email}
                                  />
                                </Col>
                                <Col xs={12} lg={6} xxl={6} className="mb-3">
                                  <Select
                                    className="mainInput selectInput w-100"
                                    label="Language"
                                    labelclass="mainLabel"
                                    required
                                    id="language"
                                    name="language"
                                    wrapperClass="d-block mb-3"
                                    value={values.language}
                                    onChange={(value) =>
                                      handleChange({
                                        target: { name: "language", value },
                                      })
                                    } // Adapting to Formik
                                    onBlur={handleBlur}
                                    error={touched.language && errors.language}
                                  >
                                    {language}
                                  </Select>
                                </Col>
                                <Col xs={12} lg={6} xxl={6} className="mb-3">
                                  <Select
                                    className="mainInput selectInput w-100"
                                    label="Gender"
                                    labelclass="mainLabel"
                                    required
                                    id="gender"
                                    name="gender"
                                    wrapperClass="d-block mb-3"
                                    mainLabel="Select Gender"
                                    value={values.gender}
                                    onChange={(value) =>
                                      handleChange({
                                        target: { name: "gender", value },
                                      })
                                    } // Adapting to Formik
                                    onBlur={handleBlur}
                                    error={touched.gender && errors.gender}
                                  >
                                    {genderOptions}
                                  </Select>
                                </Col>
                                <Col xs={12} lg={6} xxl={6} className="mb-3">
                                  <CustomInput
                                    label="nationality"
                                    labelclass="mainLabel"
                                    type="text"
                                    required
                                    placeholder="Enter Bio"
                                    inputclass="mainInput"
                                    id="nationality"
                                    value={values.nationality}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.nationality && errors.nationality}
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <h3 className="fw-bold">Personal Detail</h3>
                                <Col xs={12} lg={6} xxl={6} className="mb-3">
                                  <CustomInput
                                    label="About Yourself"
                                    labelclass="mainLabel"
                                    type="textarea"
                                    required
                                    placeholder="Enter About Yourself..."
                                    inputclass="mainInput rounded-4"
                                    id="bio"
                                    rows="7"
                                    value={values.bio}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.bio && errors.bio}
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <Col xs={12} className="mb-4">
                                  <h3 className="fw-bold mb-0">Eduactional Detail</h3>
                                </Col>
                                <FieldArray name="educationDetails">
                                  {({ push, remove }) => (
                                    <>
                                      {values.educationDetails.map((edu, index) => (
                                        <Row key={index} className="mb-0">
                                          {/* Delete button */}
                                          {values.educationDetails.length > 1 && (
                                            <div className="text-end">
                                              <button type="button" className="bg-transparent border-0" onClick={() => remove(index)}>
                                                <div className="d-flex align-items-center gap-1">
                                                  <span>
                                                    <DeleteIcon />
                                                  </span>
                                                  <span className="mt-1">Delete</span>
                                                </div>
                                              </button>
                                            </div>
                                          )}
                                          <Col xs={12} lg={6} xxl={6} className="mb-3">
                                            <CustomInput
                                              label="Institution Name"
                                              id={`educationDetails.${index}.institution_name`}
                                              type="text"
                                              required
                                              placeholder="Enter Institution Name"
                                              labelclass="mainLabel"
                                              inputclass="mainInput mainInputLogIn"
                                              value={values.educationDetails[index].institution_name}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              error={
                                                touched.educationDetails &&
                                                touched.educationDetails[index]?.institution_name &&
                                                errors.educationDetails &&
                                                errors.educationDetails[index]?.institution_name
                                              }
                                            />
                                          </Col>
                                          <Col xs={12} lg={6} xxl={6} className="mb-3">
                                            <CustomInput
                                              label="Degree Title"
                                              id={`educationDetails.${index}.degree_title`}
                                              type="text"
                                              required
                                              placeholder="Enter Degree Title"
                                              labelclass="mainLabel"
                                              inputclass="mainInput mainInputLogIn"
                                              value={values.educationDetails[index].degree_title}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              error={
                                                touched.educationDetails &&
                                                touched.educationDetails[index]?.degree_title &&
                                                errors.educationDetails &&
                                                errors.educationDetails[index]?.degree_title
                                              }
                                            />
                                          </Col>
                                          <Col xs={12} lg={6} xxl={6} className="mb-lg-0 mb-3">
                                            <CustomInput
                                              label="From"
                                              id={`educationDetails.${index}.edu_details_from`}
                                              type="date"
                                              required
                                              placeholder="Enter Date"
                                              labelclass="mainLabel"
                                              inputclass="mainInput mainInputLogIn"
                                              value={values.educationDetails[index].edu_details_from}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              error={
                                                touched.educationDetails &&
                                                touched.educationDetails[index]?.edu_details_from &&
                                                errors.educationDetails &&
                                                errors.educationDetails[index]?.edu_details_from
                                              }
                                            />
                                          </Col>
                                          <Col xs={12} lg={6} xxl={6} className="mb-lg-0 mb-3">
                                            <CustomInput
                                              label="To"
                                              id={`educationDetails.${index}.edu_details_to`}
                                              type="date"
                                              required
                                              placeholder="Enter Date"
                                              labelclass="mainLabel"
                                              inputclass="mainInput mainInputLogIn"
                                              value={values.educationDetails[index].edu_details_to}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              error={
                                                touched.educationDetails &&
                                                touched.educationDetails[index]?.edu_details_to &&
                                                errors.educationDetails &&
                                                errors.educationDetails[index]?.edu_details_to
                                              }
                                            />
                                          </Col>
                                        </Row>
                                      ))}
                                      {/* Add More button */}
                                      <button
                                        type="button"
                                        className="bg-transparent border-0 mb-4"
                                        onClick={() =>
                                          push({
                                            institution_name: "",
                                            degree_title: "",
                                            edu_details_from: "",
                                            edu_details_to: "",
                                          })
                                        }
                                      >
                                        <div className="d-flex align-items-center gap-1">
                                          <span>
                                            <AddIcon />
                                          </span>
                                          <span className="mt-1">Add More</span>
                                        </div>
                                      </button>
                                    </>
                                  )}
                                </FieldArray>
                              </Row>
                              <Row>
                                <Col xs={12} className="mb-4">
                                  <h3 className="fw-bold mb-0">Work Experience</h3>
                                </Col>
                                <FieldArray name="workExperience">
                                  {({ push, remove }) => (
                                    <>
                                      {values.workExperience.map((edu, index) => (
                                        <Row key={index} className="">
                                          {/* Delete button */}
                                          {values.workExperience.length > 1 && (
                                            <div className="text-end">
                                              <button type="button" className="bg-transparent border-0" onClick={() => remove(index)}>
                                                <div className="d-flex align-items-center gap-1">
                                                  <span>
                                                    <DeleteIcon />
                                                  </span>
                                                  <span className="mt-1">Delete</span>
                                                </div>
                                              </button>
                                            </div>
                                          )}
                                          <Col xs={12} lg={6} xxl={6} className="mb-3">
                                            <CustomInput
                                              label="Organization Name"
                                              id={`workExperience.${index}.organization_name`}
                                              type="text"
                                              required
                                              placeholder="Enter Organization Name"
                                              labelclass="mainLabel"
                                              inputclass="mainInput mainInputLogIn"
                                              value={values.workExperience[index].organization_name}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              error={
                                                touched.workExperience &&
                                                touched.workExperience[index]?.organization_name &&
                                                errors.workExperience &&
                                                errors.workExperience[index]?.organization_name
                                              }
                                            />
                                          </Col>
                                          <Col xs={12} lg={6} xxl={6} className="mb-3">
                                            <CustomInput
                                              label="Designation"
                                              id={`workExperience.${index}.designation`}
                                              type="text"
                                              required
                                              placeholder="Enter Designation"
                                              labelclass="mainLabel"
                                              inputclass="mainInput mainInputLogIn"
                                              value={values.workExperience[index].designation}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              error={
                                                touched.workExperience &&
                                                touched.workExperience[index]?.designation &&
                                                errors.workExperience &&
                                                errors.workExperience[index]?.designation
                                              }
                                            />
                                          </Col>
                                          <Col xs={12} lg={6} xxl={6} className="mb-lg-0 mb-3">
                                            <CustomInput
                                              label="From"
                                              id={`workExperience.${index}.wokr_exp_from`}
                                              type="date"
                                              required
                                              placeholder="Enter Date"
                                              labelclass="mainLabel"
                                              inputclass="mainInput mainInputLogIn"
                                              value={values.workExperience[index].wokr_exp_from}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              error={
                                                touched.workExperience &&
                                                touched.workExperience[index]?.wokr_exp_from &&
                                                errors.workExperience &&
                                                errors.workExperience[index]?.wokr_exp_from
                                              }
                                            />
                                          </Col>
                                          <Col xs={12} lg={6} xxl={6} className="mb-lg-0 mb-3">
                                            <CustomInput
                                              label="To"
                                              id={`workExperience.${index}.wokr_exp_to`}
                                              type="date"
                                              required
                                              placeholder="Enter Date"
                                              labelclass="mainLabel"
                                              inputclass="mainInput mainInputLogIn"
                                              value={values.workExperience[index].wokr_exp_to}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              error={
                                                touched.workExperience &&
                                                touched.workExperience[index]?.wokr_exp_to &&
                                                errors.workExperience &&
                                                errors.workExperience[index]?.wokr_exp_to
                                              }
                                            />
                                          </Col>
                                        </Row>
                                      ))}
                                      {/* Add More button */}
                                      <button
                                        type="button"
                                        className="bg-transparent border-0 mb-4"
                                        onClick={() =>
                                          push({
                                            organization_name: "",
                                            designation: "",
                                            wokr_exp_from: "",
                                            wokr_exp_to: "",
                                          })
                                        }
                                      >
                                        <div className="d-flex align-items-center gap-1">
                                          <span>
                                            <AddIcon />
                                          </span>
                                          <span className="mt-1">Add More</span>
                                        </div>
                                      </button>
                                    </>
                                  )}
                                </FieldArray>
                              </Row>
                              <Row className="">
                                <Col xs={12} className="mb-4">
                                  <h3 className="fw-bold mb-0">Certification Detail</h3>
                                </Col>
                                <FieldArray name="certificates">
                                  {({ push, remove }) => (
                                    <>
                                      {values.certificates.map((certificate, index) => (
                                        <Row
                                          key={index}
                                          className={`certificate-clone ${values.certificates.length > 1 ? "mb-4" : "mb-0 pb-0 border-bottom-0"}`}
                                        >
                                          {/* Remove Button */}
                                          {values.certificates.length > 1 && (
                                            <Col xs={12} className="text-end">
                                              <button
                                                type="button"
                                                className="bg-transparent border-0"
                                                onClick={() => {
                                                  // Clear image first
                                                  setFieldValue(`certificates.${index}.certificate_image`, []);
                                                  // Then remove after small delay
                                                  setTimeout(() => remove(index), 50);
                                                }}
                                              >
                                                <div className="d-flex align-items-center gap-1">
                                                  <span>Delete</span>{" "}
                                                  <span>
                                                    <images.DeleteIcon />
                                                  </span>
                                                </div>
                                              </button>
                                            </Col>
                                          )}
                                          {/* Institution Name */}
                                          <Col xs={12} lg={6} xxl={6} className="mb-3">
                                            <CustomInput
                                              label="Institution Name"
                                              labelclass="mainLabel"
                                              type="text"
                                              required
                                              placeholder="Enter Institution Name"
                                              inputclass="mainInput"
                                              id={`certificates.${index}.institution_name`}
                                              value={certificate.institution_name}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              error={
                                                errors.certificates?.[index]?.institution_name && touched.certificates?.[index]?.institution_name
                                                  ? errors.certificates[index].institution_name // Ensure it's a string
                                                  : ""
                                              }
                                            />
                                          </Col>

                                          {/* Certificate Title */}
                                          <Col xs={12} lg={6} xxl={6} className="mb-3">
                                            <CustomInput
                                              label="Certificate Title"
                                              labelclass="mainLabel"
                                              type="text"
                                              required
                                              placeholder="Enter Certificate Title"
                                              inputclass="mainInput"
                                              id={`certificates.${index}.certificate_title`}
                                              value={certificate.certificate_title}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              error={
                                                errors.certificates?.[index]?.certificate_title && touched.certificates?.[index]?.certificate_title
                                                  ? errors.certificates[index].certificate_title // Ensure it's a string
                                                  : ""
                                              }
                                            />
                                          </Col>
                                          {/* Certificate Detail From */}
                                          <Col xs={12} lg={6} xxl={6} className="mb-3">
                                            <CustomInput
                                              label="From"
                                              labelclass="mainLabel"
                                              type="date"
                                              required
                                              placeholder="Enter Certificate Title"
                                              inputclass="mainInput"
                                              id={`certificates.${index}.certificate_from`}
                                              value={certificate.certificate_from}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              error={
                                                errors.certificates?.[index]?.certificate_from && touched.certificates?.[index]?.certificate_from
                                                  ? errors.certificates[index].certificate_from // Ensure it's a string
                                                  : ""
                                              }
                                            />
                                          </Col>
                                          {/* Certificate Detail TO */}
                                          <Col xs={12} lg={6} xxl={6} className="mb-3">
                                            <CustomInput
                                              label="To"
                                              labelclass="mainLabel"
                                              type="date"
                                              required
                                              placeholder="Enter Certificate Title"
                                              inputclass="mainInput"
                                              id={`certificates.${index}.certificate_to`}
                                              value={certificate.certificate_to}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              error={
                                                errors.certificates?.[index]?.certificate_to && touched.certificates?.[index]?.certificate_to
                                                  ? errors.certificates[index].certificate_to // Ensure it's a string
                                                  : ""
                                              }
                                            />
                                          </Col>
                                          {/* {console.log(errors)} */}
                                          {/* Certificate Image Upload */}
                                          <Col xs={12} lg={6} xxl={6} className="certificates-images image-upload-style-2">
                                            <UploadAndDisplayImages
                                              id={`certi.${index}.certificate_image`}
                                              images={certificate.certificate_image}
                                              // key={index} // Ensures re-mounting on removal
                                              key={`cert-${index}-${certificate.certificate_image?.length || 0}`}
                                              label="Upload Certificate Picture"
                                              onChange={(files) => setFieldValue(`certificates.${index}.certificate_image`, files)}
                                              numberOfFiles={1}
                                              errorFromParent={
                                                errors.certificates?.[index]?.certificate_image && touched.certificates?.[index]?.certificate_image
                                                  ? errors.certificates[index].certificate_image // Ensure it's a string
                                                  : ""
                                              }
                                              required
                                            />
                                          </Col>
                                        </Row>
                                      ))}

                                      {/* Add Button */}
                                      <Col xs={12} className="">
                                        <button
                                          type="button"
                                          onClick={() =>
                                            push({
                                              institution_name: "",
                                              certificate_title: "",
                                              certificate_image: [],
                                            })
                                          }
                                          className="bg-transparent border-0"
                                        >
                                          <div className="d-flex align-items-center gap-1">
                                            <span>
                                              <images.AddIcon />
                                            </span>{" "}
                                            <span className="mt-1">Add More</span>
                                          </div>
                                        </button>
                                      </Col>
                                    </>
                                  )}
                                </FieldArray>
                              </Row>
                              <Row>
                                <Col xs={12}>
                                  <CustomButton
                                    variant="btn btn-primary min-width-auto mt-4"
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
        </div>
      </div>
    </Container>
  );
};

export default withModal(UserEditProfile);
