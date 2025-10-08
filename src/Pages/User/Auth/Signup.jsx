import { Formik } from "formik";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../../Components/CustomButton/index.jsx";
import CustomInput from "../../../Components/CustomInput/index.jsx";
import { UserAuthLayout } from "../../../Components/Layouts/UserLayout/AuthLayout/index.jsx";
import { Select } from "../../../Components/Select/index.jsx";
import ImageUpload from "../../../Components/UploadAndDisplayImage/UploadAndDisplayImage.jsx";
import { language } from "../../../Config/TableStatus.jsx";
import { signUpUserValidationSchema } from "../../../Config/Validations.jsx";
import { usePageTitleUser } from "../../../Utils/helper.jsx";
import "./style.css";

import ReactSelect from "react-select";

const UserSignup = () => {
  usePageTitleUser("Sign Up");
  const navigate = useNavigate();

  // Convert language options to format required by ReactSelect
  const languageOptions = language
    .filter((option) => option.value !== "") // Remove the "Select language" option
    .map((option) => ({
      value: option.value,
      label: option.text,
    }));

  // const handleSubmit = async (values, { resetForm }) => {
  //   console.log("registered", values);
  //   resetForm();
  //   navigate("/personal-details");
  // };

  const handleSubmit = async (values, { resetForm }) => {
    console.log("registered", values);

    // Extract additional data that's not in form values
    const formDataWithExtras = {
      ...values,
      country_code: values.country_code || "", // Ensure these exist
      dial_code: values.dial_code || "",
    };

    // LocalStorage mein bhi save karein (optional)
    localStorage.setItem("signupData", JSON.stringify(formDataWithExtras));

    navigate("/personal-details", {
      state: {
        formData: formDataWithExtras, // ✅ Now all data will be passed
      },
    });

    resetForm();
  };

  return (
    <>
      <UserAuthLayout authTitle="Sign up">
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            language: [], // Changed from language to language (array)
            nationality: "",
            gender: "",
            phone: "",
            email: "",
            password: "",
            confirm_password: "",
            profile_image: [],
            cover_image: [],
          }}
          validationSchema={signUpUserValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldTouched, setFieldValue, setFieldError }) => (
            <form className="mt-3" onSubmit={handleSubmit}>
              <div className="mb-3">
                <CustomInput
                  label="First Name"
                  id="first_name"
                  type="text"
                  required
                  placeholder="Enter First Name"
                  labelclass="mainLabel"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.first_name && errors.first_name}
                />
              </div>
              <div className="mb-3">
                <CustomInput
                  label="Last Name"
                  id="last_name"
                  type="text"
                  required
                  placeholder="Enter Last Name"
                  labelclass="mainLabel"
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.last_name && errors.last_name}
                />
              </div>
              <div className="inputWrapper position-relative mb-3">
                <label htmlFor="language" className="mainLabel">
                  language<span className="text-danger">*</span>
                </label>
                <ReactSelect
                  isMulti
                  id="language"
                  name="language"
                  className="multi-select"
                  classNamePrefix="select"
                  value={values.language}
                  onChange={(selectedOptions) => {
                    setFieldValue("language", selectedOptions);
                  }}
                  onBlur={() => setFieldTouched("language", true)}
                  isClearable={true}
                  isSearchable={true}
                  options={languageOptions}
                  placeholder="Select language"
                />
                {touched.language && errors.language && (
                  <div className="error-message">
                    <p>{errors.language}</p>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <CustomInput
                  label="Nationality"
                  id="nationality"
                  type="text"
                  required
                  placeholder="Enter Nationality"
                  labelclass="mainLabel"
                  value={values.nationality}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.nationality && errors.nationality}
                />
              </div>
              <div className="inputWrapper position-relative">
                <Select
                  label="gender"
                  labelclass="mainLabel"
                  required
                  id="gender"
                  name="gender"
                  wrapperClass="d-block mb-3"
                  mainLabel="Select Gender"
                  value={values.gender}
                  onChange={(value) => handleChange({ target: { name: "gender", value } })} // Adapting to Formik
                  onBlur={handleBlur}
                  error={touched.gender && errors.gender}
                >
                  {[
                    {
                      value: "male",
                      text: "Male",
                    },
                    {
                      value: "female",
                      text: "Female",
                    },
                  ]}
                </Select>
              </div>
              <div className="inputWrapper position-relative mb-3">
                <label htmlFor="phoneInput" className="mainLabel">
                  {" "}
                  Contact Number<span className="text-danger">*</span>
                </label>
                <div className={`phone-input-wrapper ${touched.phone && errors.phone ? "is-invalid" : ""}`}>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    placeholder="Enter Contact Number"
                    value={values.phone}
                    onChange={(phone) => {
                      console.log("📞 Phone Input:", phone);
                      setFieldValue("phone", phone);

                      // Simple and reliable extraction
                      if (phone && phone.startsWith("+")) {
                        const dialCodeMatch = phone.match(/^\+\d+/);
                        if (dialCodeMatch) {
                          const dial_code = dialCodeMatch[0];

                          // Expanded country mapping
                          const countryMap = {
                            "+1": "US",
                            "+1": "CA",
                            "+1": "PR", // North America
                            "+44": "GB",
                            "+33": "FR",
                            "+49": "DE",
                            "+39": "IT",
                            "+34": "ES",
                            "+31": "NL",
                            "+32": "BE",
                            "+41": "CH",
                            "+43": "AT",
                            "+46": "SE",
                            "+45": "DK",
                            "+47": "NO",
                            "+358": "FI",
                            "+353": "IE",
                            "+351": "PT",
                            "+30": "GR",
                            "+48": "PL",
                            "+36": "HU",
                            "+40": "RO",
                            "+420": "CZ",
                            "+421": "SK",
                            "+385": "HR",
                            "+386": "SI",
                            "+387": "BA",
                            "+389": "MK",
                            "+370": "LT",
                            "+371": "LV",
                            "+372": "EE",
                            "+373": "MD",
                            "+374": "AM",
                            "+375": "BY",
                            "+376": "AD",
                            "+377": "MC",
                            "+378": "SM",
                            "+379": "VA",
                            "+380": "UA",
                            "+381": "RS",
                            "+382": "ME",
                            "+383": "XK",
                            "+385": "HR",
                            "+386": "SI",
                            "+387": "BA",
                            "+389": "MK",
                            "+7": "RU",
                            "+7": "KZ", // Russia & Kazakhstan
                            "+20": "EG",
                            "+212": "MA",
                            "+213": "DZ",
                            "+216": "TN",
                            "+218": "LY",
                            "+220": "GM",
                            "+221": "SN",
                            "+222": "MR",
                            "+223": "ML",
                            "+224": "GN",
                            "+225": "CI",
                            "+226": "BF",
                            "+227": "NE",
                            "+228": "TG",
                            "+229": "BJ",
                            "+230": "MU",
                            "+231": "LR",
                            "+232": "SL",
                            "+233": "GH",
                            "+234": "NG",
                            "+235": "TD",
                            "+236": "CF",
                            "+237": "CM",
                            "+238": "CV",
                            "+239": "ST",
                            "+240": "GQ",
                            "+241": "GA",
                            "+242": "CG",
                            "+243": "CD",
                            "+244": "AO",
                            "+245": "GW",
                            "+246": "IO",
                            "+247": "AC",
                            "+248": "SC",
                            "+249": "SD",
                            "+250": "RW",
                            "+251": "ET",
                            "+252": "SO",
                            "+253": "DJ",
                            "+254": "KE",
                            "+255": "TZ",
                            "+256": "UG",
                            "+257": "BI",
                            "+258": "MZ",
                            "+260": "ZM",
                            "+261": "MG",
                            "+262": "RE",
                            "+263": "ZW",
                            "+264": "NA",
                            "+265": "MW",
                            "+266": "LS",
                            "+267": "BW",
                            "+268": "SZ",
                            "+269": "KM",
                            "+27": "ZA",
                            "+30": "GR",
                            "+31": "NL",
                            "+32": "BE",
                            "+33": "FR",
                            "+34": "ES",
                            "+36": "HU",
                            "+39": "IT",
                            "+40": "RO",
                            "+41": "CH",
                            "+43": "AT",
                            "+44": "GB",
                            "+45": "DK",
                            "+46": "SE",
                            "+47": "NO",
                            "+48": "PL",
                            "+49": "DE",
                            "+51": "PE",
                            "+52": "MX",
                            "+53": "CU",
                            "+54": "AR",
                            "+55": "BR",
                            "+56": "CL",
                            "+57": "CO",
                            "+58": "VE",
                            "+59": "GY",
                            "+501": "BZ",
                            "+502": "GT",
                            "+503": "SV",
                            "+504": "HN",
                            "+505": "NI",
                            "+506": "CR",
                            "+507": "PA",
                            "+508": "PM",
                            "+509": "HT",
                            "+590": "GP",
                            "+591": "BO",
                            "+592": "GY",
                            "+593": "EC",
                            "+594": "GF",
                            "+595": "PY",
                            "+596": "MQ",
                            "+597": "SR",
                            "+598": "UY",
                            "+599": "CW",
                            "+60": "MY",
                            "+61": "AU",
                            "+62": "ID",
                            "+63": "PH",
                            "+64": "NZ",
                            "+65": "SG",
                            "+66": "TH",
                            "+81": "JP",
                            "+82": "KR",
                            "+84": "VN",
                            "+86": "CN",
                            "+90": "TR",
                            "+91": "IN",
                            "+92": "PK",
                            "+93": "AF",
                            "+94": "LK",
                            "+95": "MM",
                            "+98": "IR",
                            "+960": "MV",
                            "+961": "LB",
                            "+962": "JO",
                            "+963": "SY",
                            "+964": "IQ",
                            "+965": "KW",
                            "+966": "SA",
                            "+967": "YE",
                            "+968": "OM",
                            "+970": "PS",
                            "+971": "AE",
                            "+972": "IL",
                            "+973": "BH",
                            "+974": "QA",
                            "+975": "BT",
                            "+976": "MN",
                            "+977": "NP",
                            "+992": "TJ",
                            "+993": "TM",
                            "+994": "AZ",
                            "+995": "GE",
                            "+996": "KG",
                            "+998": "UZ",
                          };

                          const country_code = countryMap[dial_code] || "US";

                          console.log("✅ Extracted - Dial Code:", dial_code, "Country:", country_code);

                          setFieldValue("country_code", country_code);
                          setFieldValue("dial_code", dial_code);
                        }
                      } else {
                        // Clear values if no phone number
                        setFieldValue("country_code", "");
                        setFieldValue("dial_code", "");
                      }

                      // Error clear logic
                      if (phone && touched.phone) {
                        const digitsOnly = phone.replace(/\D/g, "");
                        if (digitsOnly.length >= 10) {
                          setFieldError("phone", "");
                        }
                      }
                    }}
                    onBlur={() => {
                      setFieldTouched("phone", true);
                      console.log("📋 Final Form Values:", {
                        phone: values.phone,
                        country_code: values.country_code,
                        dial_code: values.dial_code,
                      });
                    }}
                    className="form-control"
                  />
                </div>
                {touched.phone && errors.phone ? (
                  <div className="error-message">
                    <p>{errors.phone}</p>
                  </div>
                ) : null}
              </div>
              <div className="mb-3">
                <CustomInput
                  label="Email Address"
                  id="email"
                  type="email"
                  required
                  placeholder="Enter Email Address"
                  labelclass="mainLabel"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email}
                />
              </div>
              <div className="mb-3">
                <CustomInput
                  label="password"
                  id="password"
                  type="password"
                  required
                  placeholder="Enter Password"
                  labelclass="mainLabel"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && errors.password}
                />
              </div>
              <div className="mb-3">
                <CustomInput
                  label="Confirm Password"
                  id="confirm_password"
                  type="password"
                  required
                  placeholder="Confirm Password"
                  labelclass="mainLabel"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.confirm_password && errors.confirm_password}
                />
              </div>
              <div className="image-upload-style-2 mb-3">
                <ImageUpload
                  id="profile_image"
                  label="Profile Picture"
                  placeholder="Upload Profile Picture"
                  onChange={(files) => setFieldValue("profile_image", files)}
                  numberOfFiles={1}
                  required
                  errorFromParent={touched.profile_image && errors.profile_image}
                  className="image-upload-style-2"
                />
              </div>
              <div className="image-upload-style-2">
                <ImageUpload
                  id="cover_image"
                  label="Cover Picture"
                  placeholder="Upload Cover Picture"
                  onChange={(files) => setFieldValue("cover_image", files)}
                  numberOfFiles={1}
                  // required
                  errorFromParent={touched.cover_image && errors.cover_image}
                  className="image-upload-style-2"
                />
              </div>

              <div className="mt-5 text-center">
                <CustomButton variant="primary" className="w-100" text="Next" pendingText="Loading..." type="submit" />
              </div>

              <p className="mt-4 mb-0 fw-medium text-center text-capitalize grayLightColor">
                Already have an account?
                <Link to={"/login"} className="underlineOnHover text-dark ps-1">
                  Login
                </Link>
              </p>
            </form>
          )}
        </Formik>
      </UserAuthLayout>
    </>
  );
};

export default UserSignup;
