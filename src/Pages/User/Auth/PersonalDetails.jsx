import { FieldArray, Formik } from "formik";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AddIcon from "../../../Assets/images/svg/addIcon.svg?react";
import DeleteIcon from "../../../Assets/images/svg/deleteIcon.svg?react";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import CustomModal from "../../../Components/CustomModal";
import { showToast } from "../../../Components/Toast";
import ImageUpload from "../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import { personalDetailsValidationSchema } from "../../../Config/Validations";
import { getAll, post } from "../../../Services/Api";
import { usePageTitleUser } from "../../../Utils/helper";

const PersonalDetails = () => {
  const [modal, setModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  usePageTitleUser("Personal Details");
  const location = useLocation();

  // Location state se data get karein
  const signupData = location?.state?.formData;

  // console.log("Country Code:", signupData?.country_code);
  // console.log("Dial Code:", signupData?.dial_code);
  // console.log("Language:", signupData?.language);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await getAll("/categories");

      if (result.status && result.data) {
        setCategories(result.data); // Keep raw API data
      } else {
        setError("Categories not found");
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // ✅ Basic validation for work_experience date ranges
      const hasInvalidExperienceDates = values.work_experience.some((exp) => {
        return new Date(exp.to) < new Date(exp.from);
      });

      if (hasInvalidExperienceDates) {
        showToast("End date cannot be earlier than start date in work experience.");
        return;
      }

      // 🔁 Transform language[]
      const languageFields = {};
      values.language.forEach((lang, index) => {
        languageFields[`language[${index}]`] = lang.label; // or lang.value
      });

      // 🔁 Transform education[]
      const educationFields = {};
      values.education.forEach((edu, eduIndex) => {
        Object.entries(edu).forEach(([field, value]) => {
          educationFields[`education[${eduIndex}][${field}]`] = value;
        });
      });

      // 🔁 Transform work_experience[]
      const workExperienceFields = {};
      values.work_experience.forEach((exp, expIndex) => {
        Object.entries(exp).forEach(([field, value]) => {
          workExperienceFields[`work_experience[${expIndex}][${field}]`] = value;
        });
      });

      // 🧱 Build final payload
      const payload = {
        ...values,
        ...languageFields,
        ...educationFields,
        ...workExperienceFields,
      };

      // 🚫 Remove original arrays
      delete payload.language;
      delete payload.education;
      delete payload.work_experience;

      // 🚀 Submit form
      const response = await post("/consultant/signup", payload);

      // ✅ Check for success
      if (response?.status) {
        console.log("Signup successful:", response);
        setModal(true);
        resetForm();
      } else {
        // ❌ Handle API-side failure
        showToast(response?.data?.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      showToast(error.response?.data?.message || "Signup failed.");
    }
  };

  return (
    <section className={`user-login`}>
      <Container fluid>
        <Row>
          <Col xs={12} lg={12} xxl={10} className="mx-auto">
            <Row className="row justify-content-center authBox align-items-center">
              <div className="col-lg-8 col-md-10 col-xxl-6">
                <div className="authFormWrapper">
                  <div className="authForm">
                    <div className="d-flex flex-wrap">
                      <BackButton2 />
                      <h2 className="authTitle mb-0 mx-auto">Personal Details</h2>
                    </div>
                    <Formik
                      initialValues={{
                        ...signupData,
                        about: "",
                        category_id: "",
                        education: [
                          {
                            institute_name: "",
                            degree_title: "",
                            from: "",
                            to: "",
                          },
                        ],
                        work_experience: [
                          {
                            organization_name: "",
                            designation: "",
                            from: "",
                            to: "",
                          },
                        ],
                        certificates: [
                          {
                            institute_name: "",
                            certificate_title: "",
                            image: [],
                          },
                        ],
                      }}
                      validationSchema={personalDetailsValidationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldTouched, setFieldValue }) => (
                        console.log(errors, "errors"),
                        (
                          <form className="mt-3" onSubmit={handleSubmit}>
                            <div className="inputWrapper position-relative mb-3">
                              <label className="mainLabel">
                                Select Category <span className="text-danger">*</span>
                              </label>
                              <select
                                id="category_id"
                                name="category_id"
                                className="d-block form-select"
                                value={values.category_id}
                                onChange={(
                                  event // event parameter receive karein
                                ) =>
                                  handleChange({
                                    target: { name: "category_id", value: event.target.value }, // event.target.value use karein
                                  })
                                }
                                onBlur={handleBlur}
                              >
                                <option value="">Select Category</option>
                                {categories?.map((category_id) => (
                                  <option key={category_id.id} value={category_id.id}>
                                    {category_id.name}
                                  </option>
                                ))}
                              </select>
                              {touched.category && errors.category && <p className="red-text">{errors.category}</p>}
                            </div>
                            <div className="mb-3">
                              <CustomInput
                                label="About Yourself"
                                id="about"
                                type="textarea"
                                required
                                placeholder="Add About Yourself"
                                labelclass="mainLabel"
                                value={values.about}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.about && errors.about}
                              />
                            </div>
                            <FieldArray name="education">
                              {({ push, remove }) => (
                                <>
                                  {values.education.map((edu, index) => (
                                    <div key={index} className="mb-4">
                                      <h3 className="fw-bold">Educational Details {index + 1}</h3>
                                      {/* Delete button */}
                                      {values.education.length > 1 && (
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
                                      <div className="mb-3">
                                        <CustomInput
                                          label="Institution Name"
                                          id={`education.${index}.institute_name`}
                                          type="text"
                                          required
                                          placeholder="Enter Institution Name"
                                          labelclass="mainLabel"
                                          value={values.education[index].institute_name}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          error={
                                            touched.education &&
                                            touched.education[index]?.institute_name &&
                                            errors.education &&
                                            errors.education[index]?.institute_name
                                          }
                                        />
                                      </div>
                                      <div className="mb-3">
                                        <CustomInput
                                          label="Degree Title"
                                          id={`education.${index}.degree_title`}
                                          type="text"
                                          required
                                          placeholder="Enter Degree Title"
                                          labelclass="mainLabel"
                                          value={values.education[index].degree_title}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          error={
                                            touched.education &&
                                            touched.education[index]?.degree_title &&
                                            errors.education &&
                                            errors.education[index]?.degree_title
                                          }
                                        />
                                      </div>
                                      <div className="mb-3">
                                        <CustomInput
                                          label="From"
                                          id={`education.${index}.from`}
                                          type="date"
                                          required
                                          placeholder="Enter Date"
                                          labelclass="mainLabel"
                                          value={values.education[index].from}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          error={touched.education && touched.education[index]?.from && errors.education && errors.education[index]?.from}
                                        />
                                      </div>
                                      <div className="mb-3">
                                        <CustomInput
                                          label="To"
                                          id={`education.${index}.to`}
                                          type="date"
                                          required
                                          placeholder="Enter Date"
                                          labelclass="mainLabel"
                                          value={values.education[index].to}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          error={touched.education && touched.education[index]?.to && errors.education && errors.education[index]?.to}
                                        />
                                      </div>
                                    </div>
                                  ))}
                                  {/* Add More button */}
                                  <button
                                    type="button"
                                    className="bg-transparent border-0"
                                    onClick={() =>
                                      push({
                                        institute_name: "",
                                        degree_title: "",
                                        from: "",
                                        to: "",
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
                            <FieldArray name="work_experience">
                              {({ push, remove }) => (
                                <>
                                  {values.work_experience.map((edu, index) => (
                                    <div key={index} className="mb-4 mt-4">
                                      <h3 className="fw-bold">Work Experience {index + 1}</h3>
                                      {/* Delete button */}
                                      {values.work_experience.length > 1 && (
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
                                      <div className="mb-3">
                                        <CustomInput
                                          label="Organization Name"
                                          id={`work_experience.${index}.organization_name`}
                                          type="text"
                                          required
                                          placeholder="Enter Organization Name"
                                          labelclass="mainLabel"
                                          value={values.work_experience[index].organization_name}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          error={
                                            touched.work_experience &&
                                            touched.work_experience[index]?.organization_name &&
                                            errors.work_experience &&
                                            errors.work_experience[index]?.organization_name
                                          }
                                        />
                                      </div>
                                      <div className="mb-3">
                                        <CustomInput
                                          label="Designation"
                                          id={`work_experience.${index}.designation`}
                                          type="text"
                                          required
                                          placeholder="Enter Designation"
                                          labelclass="mainLabel"
                                          value={values.work_experience[index].designation}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          error={
                                            touched.work_experience &&
                                            touched.work_experience[index]?.designation &&
                                            errors.work_experience &&
                                            errors.work_experience[index]?.designation
                                          }
                                        />
                                      </div>
                                      <div className="mb-3">
                                        <CustomInput
                                          label="From"
                                          id={`work_experience.${index}.from`}
                                          type="date"
                                          required
                                          placeholder="Enter Date"
                                          labelclass="mainLabel"
                                          value={values.work_experience[index].from}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          error={
                                            touched.work_experience &&
                                            touched.work_experience[index]?.from &&
                                            errors.work_experience &&
                                            errors.work_experience[index]?.from
                                          }
                                        />
                                      </div>
                                      <div className="mb-3">
                                        <CustomInput
                                          label="To"
                                          id={`work_experience.${index}.to`}
                                          type="date"
                                          required
                                          placeholder="Enter Date"
                                          labelclass="mainLabel"
                                          value={values.work_experience[index].to}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          error={
                                            touched.work_experience &&
                                            touched.work_experience[index]?.to &&
                                            errors.work_experience &&
                                            errors.work_experience[index]?.to
                                          }
                                        />
                                      </div>
                                    </div>
                                  ))}
                                  {/* Add More button */}
                                  <button
                                    type="button"
                                    className="bg-transparent border-0"
                                    onClick={() =>
                                      push({
                                        organization_name: "",
                                        designation: "",
                                        from: "",
                                        to: "",
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
                            <FieldArray name="certificates">
                              {({ push, remove }) => (
                                <>
                                  {values.certificates.map((edu, index) => (
                                    <div key={index} className="mb-4 mt-4">
                                      <h3 className="fw-bold">Certification Detail {index + 1}</h3>
                                      {/* Delete button */}
                                      {values.certificates.length > 1 && (
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
                                      <div className="mb-3">
                                        <CustomInput
                                          label="Institution Name"
                                          id={`certificates.${index}.institute_name`}
                                          type="text"
                                          required
                                          placeholder="Enter Institution Name"
                                          labelclass="mainLabel"
                                          value={values.certificates[index].institute_name}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          error={
                                            touched.certificates &&
                                            touched.certificates[index]?.institute_name &&
                                            errors.certificates &&
                                            errors.certificates[index]?.institute_name
                                          }
                                        />
                                      </div>
                                      <div className="mb-3">
                                        <CustomInput
                                          label="Certificate Title"
                                          id={`certificates.${index}.certificate_title`}
                                          type="text"
                                          required
                                          placeholder="Enter Certificate Title"
                                          labelclass="mainLabel"
                                          value={values.certificates[index].certificate_title}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          error={
                                            touched.certificates &&
                                            touched.certificates[index]?.certificate_title &&
                                            errors.certificates &&
                                            errors.certificates[index]?.certificate_title
                                          }
                                        />
                                      </div>
                                      <div className="image-upload-style-2 mt-3">
                                        <ImageUpload
                                          id={`certificates.${index}.image`}
                                          placeholder="Upload Certificate Picture"
                                          label={`Certificate Picture`}
                                          onChange={(files) => setFieldValue(`certificates.${index}.image`, files)}
                                          numberOfFiles={1}
                                          errorFromParent={
                                            touched.certificates &&
                                            touched.certificates[index]?.image &&
                                            errors.certificates &&
                                            errors.certificates[index]?.image
                                          }
                                          className="image-upload-style-2"
                                          required
                                        />
                                      </div>
                                    </div>
                                  ))}
                                  {/* Add More button */}
                                  <button
                                    type="button"
                                    className="bg-transparent border-0"
                                    onClick={() =>
                                      push({
                                        institute_name: "",
                                        degree_title: "",
                                        image: [],
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
                            <CustomButton variant="primary" className="w-100 mt-4" text="Signup" type="submit" />
                            <p className="mt-4 fw-medium text-center text-capitalize grayLightColor">
                              Already have an account?
                              <Link to={"/login"} className="underlineOnHover text-dark ps-1">
                                Login
                              </Link>
                            </p>
                          </form>
                        )
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <CustomModal
        show={modal}
        action={() => {
          setModal(false);
          // navigate("/screening");
        }}
        close={() => setModal(false)}
        success
        para="Profile has been created successfully. Please wait for the admin approval."
        btnText="Ok"
      />
    </section>
  );
};

export default PersonalDetails;
