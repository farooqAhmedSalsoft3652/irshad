import { Col, Container, FormCheck, Row } from "react-bootstrap";
import { Formik, Form, FieldArray, Field } from "formik";
import { useNavigate } from "react-router";
import { images } from '../../../Assets'
import CustomButton from "../../../Components/CustomButton";
import "react-phone-number-input/style.css";
import CustomInput from "../../../Components/CustomInput";
import { serviceValidationSchema } from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";
import { useAuth } from "../../../Hooks/useAuth";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { usePageTitle, validateImage } from "../../../Utils/helper";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import "./style.css";

import UploadAndDisplayImages from "../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const SelectServicesAdd = ({ showModal }) => {
  usePageTitle("Edit Profile", true);
  const navigate = useNavigate();
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const { user } = useAuth();
  const [isDisabled, setIsDisabled] = useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: true,
  });

// Initial values for the form
const initialValues = {
  service_type: "",
  service_name: "",
  online_charges: "",
  onsite_charges: "",
  descriptions : "",
  banner_images: [], // Image Upload Field
  add_address: "", // Online, Offline, Both
  maplink: "", // For 'Add your address'
  mondayTime: [{ startTime: "", endTime: "" }],
  tuesdayTime: [{ startTime: "", endTime: "" }],
  wednesdayTime: [{ startTime: "", endTime: "" }],
  thursdayTime: [{ startTime: "", endTime: "" }],
  fridayTime: [{ startTime: "", endTime: "" }],
  saturdayTime: [{ startTime: "", endTime: "" }],
  sundayTime: [{ startTime: "", endTime: "" }],
}

// Handle form submission
const handleSubmit = (values, { resetForm }) => {
  // Create a copy of the values to avoid modifying the original
  startSubmitting();
  const formData = { ...values }
  // values.image = imageObject;
  showModal(
    "Succesful",
    `New Service Added Successfully`,
    // null,
    () => navigate(`/provider/select-services`),
    true
  );
  // Filter out days with empty time slots
  const timeSlotKeys = [
    "mondayTime",
    "tuesdayTime",
    "wednesdayTime",
    "thursdayTime",
    "fridayTime",
    "saturdayTime",
    "sundayTime",
  ]

  // Process each time slot key
  timeSlotKeys.forEach((key) => {
    const dayData = values[key]

    // Check if any time slot has valid data
    const hasValidTime = dayData.some(
      (item) => (item.startTime && item.startTime.trim() !== "") || (item.endTime && item.endTime.trim() !== ""),
    )

    if (hasValidTime) {
      // Filter out empty time slots
      formData[key] = dayData.filter(
        (item) => (item.startTime && item.startTime.trim() !== "") || (item.endTime && item.endTime.trim() !== ""),
      )
    } else {
      // Remove the key entirely if no valid time slots
      delete formData[key]
    }
  })

  // Log the filtered form data
  resetForm();
  console.log("Form Data with Filtered Time Slots:", formData)
  stopSubmitting();
  // Here you would submit formData to your API
  // submitToAPI(formData)
}



  // console.log(user)
  return (
    <section className="page-content profile">
      <Container fluid>
        <Row>
            <Col sm={12} className="gap-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 mb-lg-4 mb-xl-5">
              <h2 className="page-title fw-bold"><BackButton2 />Service Category</h2>
            </Col>
        </Row>
        {/* <Row>
            <Col sm={12} className="gap-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 mb-lg-4">
            <CustomButton
              variant="btn btn-primary min-width-auto"
              className="px-4"
              text="Manage Slots For this Service"
              pendingText="Submitting..."
              isPending={isSubmitting}
              type="submit"
            />
            </Col>
        </Row> */}
        <Row>
          <Col xs={12} lg={12}>
              <Row>
                <Col xs={12} lg={12} xxl={10}>
                  <Formik
                  initialValues={initialValues}
                  // initialValues={{
                  //   service_type: "",
                  //   service_name: "",
                  //   online_charges: "",
                  //   onsite_charges: "",
                  //   descriptions : "",
                  //   banner_images: [], // Image Upload Field
                  //   add_address: "", // Online, Offline, Both
                  //   maplink: "", // For 'Add your address'
                  //   mondayTime: [{ startTime: "", endTime: "" }],
                  //   tuesdayTime: [{ startTime: "", endTime: "" }],
                  //   wednesdayTime: [{ startTime: "", endTime: "" }],
                  //   thursdayTime: [{ startTime: "", endTime: "" }],
                  //   fridayTime: [{ startTime: "", endTime: "" }],
                  //   saturdayTime: [{ startTime: "", endTime: "" }],
                  //   sundayTime: [{ startTime: "", endTime: "" }]
                  // }}
                  validationSchema={serviceValidationSchema}
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
                      isSubmitting,
                    }) => (
                      <Form onSubmit={handleSubmit}>
                        {console.log(errors)}
                        <Row>
                          {/* Service Selection */}
                          <Col xs={12} className="mb-3">
                            <h5 className="mb-3">Service Is</h5>
                            <FormCheck
                              type="radio"
                              id="online"
                              name="service_type"
                              label="Online"
                              value="online"
                              checked={values.service_type === "online"}
                              onChange={handleChange}
                              className={`mb-3 ${errors.service_type && touched.service_type ? "is-invalid" : ""}`}
                            />
                            <FormCheck
                              type="radio"
                              id="offline"
                              name="service_type"
                              label="Offline"
                              value="offline"
                              checked={values.service_type === "offline"}
                              onChange={handleChange}
                              className={`mb-3 ${errors.service_type && touched.service_type ? "is-invalid" : ""}`}
                            />
                            <FormCheck
                              type="radio"
                              id="both"
                              name="service_type"
                              label="Both"
                              value="both"
                              checked={values.service_type === "both"}
                              onChange={handleChange}
                              className={`mb-3 ${errors.service_type && touched.service_type ? "is-invalid" : ""}`}
                            />
                            {errors.service_type && touched.service_type && (
                              <div className="error-message red-text">{errors.service_type}</div>
                            )}
                          </Col>
                  
                          {/* Service Name */}
                          <Col xs={12} lg={6} xxl={6} className="mb-3">
                            <CustomInput
                              label="Service Name"
                              labelclass="mainLabel"
                              type="text"
                              required
                              placeholder="Enter Service Name"
                              inputclass="mainInput"
                              id="service_name"
                              name="service_name"
                              value={values.service_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.service_name && errors.service_name}
                            />
                          </Col>
                  
                          {/* Online Charges */}
                          {(values.service_type === "online" || values.service_type === "both") && (
                            <Col xs={12} lg={6} xxl={6} className="mb-3">
                              <CustomInput
                                label="Online Charges"
                                labelclass="mainLabel"
                                type="number"
                                required
                                placeholder="Enter Online Charges"
                                inputclass="mainInput"
                                id="online_charges"
                                name="online_charges"
                                value={values.online_charges}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.online_charges && errors.online_charges}
                              />
                            </Col>
                          )}
                  
                          {/* Onsite Charges */}
                          {(values.service_type === "offline" || values.service_type === "both") && (
                            <Col xs={12} lg={6} xxl={6} className="mb-3">
                              <CustomInput
                                label="Onsite Charges"
                                labelclass="mainLabel"
                                type="number"
                                required
                                placeholder="Enter Onsite Charges"
                                inputclass="mainInput"
                                id="onsite_charges"
                                name="onsite_charges"
                                value={values.onsite_charges}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.onsite_charges && errors.onsite_charges}
                              />
                            </Col>
                          )}
                  
                          {/* Description */}
                          <Col xs={12} lg={12} xxl={12} className="mb-3">
                            <CustomInput
                              label="Descriptions"
                              labelclass="mainLabel"
                              type="textarea"
                              required
                              placeholder="Enter Descriptions"
                              inputclass="mainInput"
                              id="descriptions"
                              name="descriptions"
                              rows="4"
                              value={values.descriptions}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.descriptions && errors.descriptions}
                            />
                          </Col>
                  
                          {/* Image Upload */}
                          <Col xs={12} className="d-flex image-upload-style-2 mb-3">
                            <UploadAndDisplayImages
                              label="Upload Image"
                              onChange={(files) => setFieldValue("banner_images", files)}
                              numberOfFiles={1}
                              required
                              errorFromParent={touched.banner_images && errors.banner_images}
                            />
                          </Col>
                          <Col xs={12} lg={6} xxl={6} className="mb-3">
                            <FormCheck
                              type="radio"
                              id="address"
                              name="add_address"
                              label="Add your address"
                              value="map_address"
                              checked={values.add_address === "map_address"}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="mb-3"
                            />
                            {values.add_address === "map_address" && (
                              <CustomInput
                                type="text"
                                required
                                placeholder="Enter Maplink"
                                inputclass="mainInput"
                                id="maplink"
                                name="maplink"
                                value={values.maplink}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.maplink && errors.maplink}
                              />
                            )}
                            <FormCheck
                              type="radio"
                              id="visit_user"
                              name="add_address"
                              label="Visit user's place"
                              value="visit_user"
                              checked={values.add_address === "visit_user"}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="mb-3"
                            />
                            {errors.add_address && touched.add_address && (
                              <div className="error-message red-text">{errors.add_address}</div>
                            )}
                          </Col>
                        </Row>
                        <Row className="time-slotes-switch">
                          <Col xs={12}>
                            <h5 className="mb-3">Manage Service Slots</h5>
                          </Col>
                          {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
                            <Col xs={12} md={6} xxl={3} className="mb-3" key={day}>
                              <div className="d-flex justify-content-between mb-2">
                                <label>
                                  <strong className="fw-semibold">{day.charAt(0).toUpperCase() + day.slice(1)}</strong>
                                </label>
                                <FormCheck
                                  type="switch"
                                  label=""
                                  onChange={(e) => setIsDisabled((prev) => ({ ...prev, [day]: !e.target.checked }))}
                                  checked={!isDisabled[day]} // Disable by default
                                />
                              </div>

                              <FieldArray name={`${day}Time`}>
                                {({ push, remove }) => (
                                  <div>
                                    {values[`${day}Time`].map((_, index) => (
                                      <div key={index} className="d-flex gap-3 mb-2">
                                        <CustomInput
                                          name={`${day}Time.${index}.startTime`}
                                          inputclass="mainInput"
                                          type="time"
                                          disabled={isDisabled[day]}
                                          value={values[`${day}Time`][index].startTime}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          error={touched[`${day}Time`]?.[index]?.startTime && errors[`${day}Time`]?.[index]?.startTime}
                                        />

                                        <CustomInput
                                          name={`${day}Time.${index}.endTime`}
                                          inputclass="mainInput"
                                          type="time"
                                          disabled={isDisabled[day]}
                                          value={values[`${day}Time`][index].endTime}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          error={touched[`${day}Time`]?.[index]?.endTime && errors[`${day}Time`]?.[index]?.endTime}
                                        />

                                        {values[`${day}Time`].length > 1 && (
                                          <button
                                            type="button"
                                            className="btn remove-btn"
                                            onClick={() => remove(index)}
                                            disabled={isDisabled[day]}
                                          >
                                            <FontAwesomeIcon icon={faTrash} />
                                          </button>
                                        )}
                                      </div>
                                    ))}

                                    {!isDisabled[day] && ( // Only show "Add Time Slot" button when FormCheck is enabled
                                      <button
                                        type="button"
                                        className="btn add-btn"
                                        onClick={() => push({ startTime: "", endTime: "" })}
                                      >
                                        <FontAwesomeIcon icon={faCirclePlus} />
                                      </button>
                                    )}
                                  </div>
                                )}
                              </FieldArray>
                            </Col>
                          ))}
                        </Row>
                        <Row>
                          {/* Submit Button */}
                          <Col xs={12} className="mt-4">
                            <CustomButton
                              variant="btn btn-primary min-width-auto"
                              className="px-5"
                              text="Save"
                              pendingText="Submitting..."
                              isPending={isSubmitting}
                              type="submit"
                            />
                          </Col>
                        </Row>
                      </Form>
                    )}
                  </Formik>
                </Col>
              </Row>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default withModal(SelectServicesAdd)
