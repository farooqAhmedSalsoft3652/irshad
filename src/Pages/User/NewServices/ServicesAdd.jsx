import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { Card, Col, Container, FormCheck, Row } from "react-bootstrap";
import "react-phone-number-input/style.css";
import { useLocation, useNavigate } from "react-router";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import {
  modalReasonValidation,
  serviceValidationSchema,
} from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";
import { useAuth } from "../../../Hooks/useAuth";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { usePageTitle } from "../../../Utils/helper";
import "./style.css";

import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import UploadIcon from "../../../Assets/images/svg/uploadIcon.svg?react";
import CustomModal from "../../../Components/CustomModal";
import { Select } from "../../../Components/Select";
import UploadAndDisplayImages from "../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import { servicesOptions } from "../../../Config/TableStatus";
const NewServicesAdd = ({ showModal, reasonModal }) => {
  usePageTitle("Edit Profile", true);
  const navigate = useNavigate();
  const location = useLocation();
  const { title, id } = location.state || {};

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

  // Add this function to book a specific day
  /*
  const bookDay = (day) => {
    reasonModal(
      "", // heading
      `Are you sure you want to book ${
        day.charAt(0).toUpperCase() + day.slice(1)
      }?`, // para
      (reason) => {
        // On confirmation, update the day's booking status
        const dayTimeKey = `${day}Time`;
        const currentTimeSlots = [...formikRef.current.values[dayTimeKey]];

        // Update all time slots for this day to be booked
        const updatedTimeSlots = currentTimeSlots.map((slot) => ({
          ...slot,
          isBooked: true,
        }));

        // Set the updated time slots
        formikRef.current.setFieldValue(dayTimeKey, updatedTimeSlots);

        // Disable the day
        setIsDisabled((prev) => ({
          ...prev,
          [day]: true,
        }));

        // Show success message
        reasonModal(
          ``,
          `${
            day.charAt(0).toUpperCase() + day.slice(1)
          } has been booked successfully.`,
          null, //action
          true //success
        );
      },
      false, // success
      true, // showReason
      "Provide reason for booking this day",
      "Description" // reasonLabel
    );
  };
*/

  // Add this useEffect to ensure validation schema is updated when isDisabled changes
  useEffect(() => {
    // This will force Formik to re-validate with the updated isDisabled state
    // You can add this if you're having issues with validation not updating
    if (formikRef.current) {
      formikRef.current.validateForm();
    }
  }, [isDisabled]);

  // Create a ref to access Formik instance
  const formikRef = useRef(null);

  // Track if form has been submitted
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [requestModal, setRequestModal] = useState(false);

  // Initial values for the form
  const initialValues = {
    service_name: "",
    showQuickServices: false,
    sessionTypes: [], // Changed from sessionType to sessionTypes (array)
    sessionAmounts: {
      chat: "",
      call: "",
      video: "",
    },
    quickSessionType: [],
    quickSessionAmounts: {
      chat: "",
      call: "",
      video: "",
    },
    descriptions: "",
    banner_images: [], // Image Upload Field
    mondayTime: [{ startTime: "", endTime: "", isBooked: false }],
    tuesdayTime: [{ startTime: "", endTime: "", isBooked: false }],
    wednesdayTime: [{ startTime: "", endTime: "", isBooked: false }],
    thursdayTime: [{ startTime: "", endTime: "", isBooked: false }],
    fridayTime: [{ startTime: "", endTime: "", isBooked: false }],
    saturdayTime: [{ startTime: "", endTime: "", isBooked: false }],
    sundayTime: [{ startTime: "", endTime: "", isBooked: false }],
  };

  const sessionOptions = [
    { label: "Chat", value: "chat" },
    { label: "Call", value: "call" },
    { label: "Video Call", value: "video" },
  ];

  // Handle form submission

  const handleSubmit = async (values, { resetForm, setTouched }) => {
    // Mark all fields as touched to show validation errors
    setHasSubmitted(true);

    // Mark all fields as touched to trigger validation
    setTouched(
      {
        service_name: true,
        descriptions: true,
        banner_images: true,
        sessionTypes: true,
        sessionAmounts: {
          chat: true,
          call: true,
          video: true,
        },
        quickSessionType: values.showQuickServices ? true : false,
        quickSessionAmounts: values.showQuickServices
          ? {
              chat: true,
              call: true,
              video: true,
            }
          : undefined,
        // Add other fields as needed
      },
      true
    );

    // Create a copy of the values to avoid modifying the original
    startSubmitting();
    const formData = { ...values };
    const buildPayload = (values) => {
      const payload = {
        service_name: values.service_name,
        showQuickServices: values.showQuickServices,
        descriptions: values.descriptions,
        banner_images: values.banner_images,
      };

      // Session Types and Amounts (handle multiple selected types)
      if (values.sessionTypes && values.sessionTypes.length > 0) {
        payload.sessionTypes = values.sessionTypes;

        // Add amounts for each selected session type
        payload.sessionAmounts = {};
        values.sessionTypes.forEach((type) => {
          if (values.sessionAmounts?.[type]) {
            payload.sessionAmounts[type] = values.sessionAmounts[type];
          }
        });
      }

      // Quick Session Types and Amounts (if enabled and selected)
      if (
        values.showQuickServices &&
        values.quickSessionType &&
        values.quickSessionType.length > 0
      ) {
        payload.quickSessionType = values.quickSessionType;

        // Add amounts for each selected quick session type
        payload.quickSessionAmounts = {};
        values.quickSessionType.forEach((type) => {
          if (values.quickSessionAmounts?.[type]) {
            payload.quickSessionAmounts[type] =
              values.quickSessionAmounts[type];
          }
        });
      }

      // Days timing (filter out empty time slots)
      const days = [
        "mondayTime",
        "tuesdayTime",
        "wednesdayTime",
        "thursdayTime",
        "fridayTime",
        "saturdayTime",
        "sundayTime",
      ];

      days.forEach((day) => {
        // Filter out empty time slots
        const timeSlots = values[day]?.filter(
          (slot) => slot.startTime && slot.endTime
        );

        if (timeSlots?.length) {
          // For time slots with start and end times, set isBooked to true
          payload[day] = timeSlots.map((slot) => ({
            startTime: slot.startTime,
            endTime: slot.endTime,
            isBooked: true, // Set isBooked to true for all time slots with times
          }));
        } else {
          // Even if there are no time slots, add an entry with isBooked status
          payload[day] = [
            {
              startTime: "",
              endTime: "",
              isBooked: false,
            },
          ];
        }
      });

      return payload;
    };

    const payload = buildPayload(values);
    console.log("Final Payload:", payload);

    showModal(
      "",
      `New Service Added Successfully.`,
      () => navigate(`/new-services`),
      true
    );

    resetForm({
      payload: {
        ...values,
        banner_images: [], // preserve uploaded images
      },
    });

    stopSubmitting();
  };

  const handleRequestSubmit = (values, { resetForm }) => {
    console.log("Request submitted with values:", values);

    // Create FormData for file upload if needed
    if (values.documents && values.documents.length > 0) {
      const formData = new FormData();
      formData.append("description", values.description);

      // Append each document to the FormData
      values.documents.forEach((file, index) => {
        formData.append(`document_${index}`, file);
      });

      console.log("FormData created with files for upload");

      // Here you would typically make an API call to upload the files
      // For example: await api.uploadRequestDocuments(formData);
    }

    // Show success message
    showModal(
      "",
      "Your request has been submitted successfully. We will review it shortly.",
      null,
      true // success
    );

    // Close the modal and reset form
    setRequestModal(false);
    resetForm();
  };

  const handleRequestCall = () => {
    showModal(
      "",
      `Request reason for call sent sucessfully wait for the admin's approval`,
      false,
      true
    );
  };

  // console.log(user)
  return (
    <Container fluid>
      <div className="py-sm-5 py-3 px-sm-0 px-1">
        <div className="site_card">
          <Row>
            <Col xs={12} className="mb-3 mb-lg-4">
              <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-between mb-3">
                <div className="flex-shrink-0">
                  <BackButton2 />
                </div>
                <div className="flex-grow-1 text-center">
                  <h2 className="fw-bold mb-1  page-title">Sub Category</h2>
                  <h3 className="fw-regular mb-0 page-title">
                    {title} {/*{id} */}
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Formik
                initialValues={initialValues}
                validationSchema={serviceValidationSchema(isDisabled)}
                onSubmit={handleSubmit}
                enableReinitialize
                innerRef={formikRef}
                validateOnMount={true}
                validateOnChange={true}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  setFieldValue,
                  setErrors,
                  setTouched,
                  handleSubmit,
                  setFieldTouched,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    {console.log("Errors:", errors)}
                    <Row>
                      {/* Service Name */}
                      <Col xs={12} lg={6} xxl={5} className="mb-3">
                        <Select
                          wrapperClass="d-block mb-3"
                          required
                          id="service_name"
                          name="service_name"
                          value={values.service_name}
                          // mainLabel="Select Service"
                          onChange={(e) => {
                            setFieldValue("service_name", e);
                          }}
                          label="Select Service"
                          onBlur={handleBlur}
                          error={touched.service_name && errors.service_name}
                        >
                          {servicesOptions}
                        </Select>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} lg={10} xxl={8} className="mb-3">
                        <div className="session-type mb-2">
                          <label className="form-label mb-2">
                            Select Session Type:
                            <span className="text-danger">*</span>
                          </label>

                          {sessionOptions.map(({ label, value }) => (
                            <div key={value}>
                              <div
                                className={`d-flex align-items-center gap-3 mb-4 mb-sm-3 flex-wrap`}
                              >
                                <label
                                  key={value}
                                  className={`btn btn-primary btn-checkbox ${
                                    values.sessionTypes?.includes(value)
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <FormCheck
                                    type="checkbox"
                                    name={`sessionTypes`}
                                    id={`sessionType-${value}`}
                                    label={label}
                                    checked={values.sessionTypes?.includes(
                                      value
                                    )}
                                    onChange={(e) => {
                                      // Get current session types array or initialize empty array
                                      const currentTypes =
                                        values.sessionTypes || [];

                                      // Add or remove the value based on checkbox state
                                      let newTypes;
                                      if (e.target.checked) {
                                        newTypes = [...currentTypes, value];
                                      } else {
                                        newTypes = currentTypes.filter(
                                          (type) => type !== value
                                        );
                                      }

                                      // Update the form values
                                      setFieldValue("sessionTypes", newTypes);

                                      // Mark as touched when user interacts with checkboxes
                                      setFieldTouched("sessionTypes", true);
                                    }}
                                  />
                                </label>
                                <Field
                                  name={`sessionAmounts.${value}`}
                                  value={values.sessionAmounts?.[value] || ""}
                                  type="number"
                                  className="form-control w-auto"
                                  disabled={
                                    !values.sessionTypes?.includes(value)
                                  }
                                  placeholder="Enter Amount"
                                  min={0}
                                  max={100}
                                  onChange={(e) => {
                                    setFieldValue(
                                      `sessionAmounts.${value}`,
                                      e.target.value
                                    );
                                  }}
                                  onBlur={() => {
                                    setFieldTouched(
                                      `sessionAmounts.${value}`,
                                      true
                                    );
                                  }}
                                />

                                <span className="badge">Range $0-$100</span>
                                <CustomButton
                                  variant="secondary"
                                  className=""
                                  text="Request More"
                                  onClick={() => setRequestModal(true)}
                                  type="button"
                                />
                              </div>
                              {/* Show error for this session type if it's selected and touched */}
                              {values.sessionTypes?.includes(value) &&
                                touched.sessionAmounts?.[value] &&
                                errors.sessionAmounts &&
                                typeof errors.sessionAmounts === "string" && (
                                  <div className="error-message red-text mb-2">
                                    {(() => {
                                      try {
                                        const parsedErrors = JSON.parse(
                                          errors.sessionAmounts
                                        );
                                        return parsedErrors[value] || "";
                                      } catch (e) {
                                        return "";
                                      }
                                    })()}
                                  </div>
                                )}
                            </div>
                          ))}
                          <CustomButton
                            variant="secondary"
                            className="min-width-250"
                            text="Request For Call"
                            type="button"
                            onClick={handleRequestCall}
                          />

                          {/* Show general session types error */}
                          {(touched.sessionTypes || hasSubmitted) &&
                            errors.sessionTypes && (
                              <div className="error-message red-text mt-2">
                                {errors.sessionTypes}
                              </div>
                            )}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      {/* Description */}
                      <Col xs={12} lg={12} xxl={5} className="mb-3">
                        <CustomInput
                          label="Descriptions"
                          labelclass="mainLabel"
                          type="textarea"
                          required
                          placeholder="Enter Descriptions"
                          id="descriptions"
                          name="descriptions"
                          rows="4"
                          value={values.descriptions}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.descriptions && errors.descriptions}
                        />
                      </Col>
                    </Row>
                    <Row>
                      {/* Image Upload */}
                      <Col xs={12} lg={12} xxl={5} className="mb-4">
                        <UploadAndDisplayImages
                          label="Upload Image"
                          placeholder="Upload your picture"
                          onChange={(files) =>
                            setFieldValue("banner_images", files)
                          }
                          numberOfFiles={1}
                          required
                          errorFromParent={
                            touched.banner_images && errors.banner_images
                          }
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} lg={10} xxl={8} className="mb-3">
                        <div className="session-type mb-3">
                          <div className="d-flex gap-3">
                            <div className="flex-shrink-0">
                              <label className="form-label mb-2">
                                Slots Doesnt work on the quick service
                              </label>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing
                              </p>
                            </div>
                            <div className="flex-shrink-0 align-self-end">
                              <FormCheck
                                type="switch"
                                id="quick-service-switch"
                                className="flex-shrink-0"
                                checked={values.showQuickServices}
                                onChange={(e) => {
                                  const isChecked = e.target.checked;
                                  setFieldValue("showQuickServices", isChecked);

                                  // If turning off quick services, reset the quick session fields
                                  if (!isChecked) {
                                    setFieldValue("quickSessionType", []);
                                    setFieldValue("quickSessionAmounts", {
                                      chat: "",
                                      call: "",
                                      video: "",
                                    });
                                  }
                                }}
                              />
                            </div>
                          </div>
                          {values.showQuickServices && (
                            <div className="mt-3 p-3">
                              <label className="form-label mb-2">
                                Select Quick Session Type:
                                <span className="text-danger">*</span>
                              </label>

                              {sessionOptions.map(({ label, value }) => (
                                <div key={value}>
                                  <div
                                    className={`d-flex align-items-center gap-3 mb-4 mb-sm-3 flex-wrap`}
                                  >
                                    <label
                                      key={value}
                                      className={`btn btn-primary btn-checkbox ${
                                        values.quickSessionType?.includes(value)
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                      <FormCheck
                                        type="checkbox"
                                        name={`quickSessionType`}
                                        id={`quickSessionType-${value}`}
                                        label={label}
                                        checked={values.quickSessionType?.includes(
                                          value
                                        )}
                                        onChange={(e) => {
                                          // Get current session types array or initialize empty array
                                          const currentTypes =
                                            values.quickSessionType || [];

                                          // Add or remove the value based on checkbox state
                                          let newTypes;
                                          if (e.target.checked) {
                                            newTypes = [...currentTypes, value];
                                          } else {
                                            newTypes = currentTypes.filter(
                                              (type) => type !== value
                                            );
                                          }

                                          // Update the form values
                                          setFieldValue(
                                            "quickSessionType",
                                            newTypes
                                          );
                                        }}
                                      />
                                    </label>
                                    <Field
                                      name={`quickSessionAmounts.${value}`}
                                      value={
                                        values.quickSessionAmounts?.[value] ||
                                        ""
                                      }
                                      type="number"
                                      className="form-control w-auto"
                                      disabled={
                                        !values.quickSessionType?.includes(
                                          value
                                        )
                                      }
                                      placeholder="Enter Amount"
                                      min={0}
                                      max={100}
                                      onChange={(e) => {
                                        setFieldValue(
                                          `quickSessionAmounts.${value}`,
                                          e.target.value
                                        );
                                      }}
                                      onBlur={() => {
                                        setFieldTouched(
                                          `quickSessionAmounts.${value}`,
                                          true
                                        );
                                      }}
                                    />

                                    <span className="badge">Range $0-$100</span>
                                    <CustomButton
                                      variant="secondary"
                                      className=""
                                      text="Request More"
                                      onClick={() => setRequestModal(true)}
                                      type="button"
                                    />
                                  </div>
                                  {/* Show error for this quick session type if it's selected and touched */}
                                  {values.quickSessionType?.includes(value) &&
                                    touched.quickSessionAmounts?.[value] &&
                                    errors.quickSessionAmounts &&
                                    typeof errors.quickSessionAmounts ===
                                      "string" && (
                                      <div className="error-message red-text mb-2">
                                        {(() => {
                                          try {
                                            const parsedErrors = JSON.parse(
                                              errors.quickSessionAmounts
                                            );
                                            return parsedErrors[value] || "";
                                          } catch (e) {
                                            return "";
                                          }
                                        })()}
                                      </div>
                                    )}
                                </div>
                              ))}

                              {/* Show general quick session types error only on submit */}
                              {/* {hasSubmitted && errors.quickSessionType && (
                                <div className="error-message red-text mb-2">
                                  {errors.quickSessionType}
                                </div>
                              )} */}

                              <CustomButton
                                variant="secondary"
                                className="min-width-250"
                                text="Request For Call"
                                type="button"
                                onClick={handleRequestCall}
                              />
                              {(touched.quickSessionType || hasSubmitted) &&
                                errors.quickSessionType && (
                                  <div className="error-message red-text mt-2">
                                    {errors.quickSessionType}
                                  </div>
                                )}
                            </div>
                          )}
                        </div>
                      </Col>
                    </Row>

                    <Row className="time-slotes add-service">
                      <Col xs={12}>
                        <h5 className="mb-3">Manage Service Slots</h5>
                      </Col>
                      {[
                        "monday",
                        "tuesday",
                        "wednesday",
                        "thursday",
                        "friday",
                        "saturday",
                        "sunday",
                      ].map((day) => (
                        <Col xs={12} md={6} xxl={3} className="mb-3" key={day}>
                          <Card className="card-slot">
                            <Card.Header className="py-3 d-flex align-items-center">
                              <Card.Title className="mb-0 text-capitalize fw-medium flex-grow-1">
                                <label>
                                  {day.charAt(0).toUpperCase() + day.slice(1)}
                                </label>
                              </Card.Title>
                              <FormCheck
                                type="switch"
                                className="flex-shrink-0"
                                label=""
                                onChange={(e) => {
                                  const isEnabled = e.target.checked;

                                  // Update the disabled state
                                  setIsDisabled((prev) => ({
                                    ...prev,
                                    [day]: !isEnabled,
                                  }));

                                  // Update the day's booking status in the form values
                                  const dayTimeKey = `${day}Time`;
                                  const currentTimeSlots = [
                                    ...values[dayTimeKey],
                                  ];

                                  // We don't change isBooked here - it should only be changed when explicitly booking a day

                                  // If enabling, touch the fields to trigger validation
                                  if (isEnabled) {
                                    // Touch all fields in the first time slot to trigger validation
                                    setFieldTouched(
                                      `${dayTimeKey}.0.startTime`,
                                      true
                                    );
                                    setFieldTouched(
                                      `${dayTimeKey}.0.endTime`,
                                      true
                                    );
                                  }
                                  // If disabling, clear existing values and errors for this day
                                  else {
                                    // Clear values but keep isBooked property unchanged
                                    setFieldValue(dayTimeKey, [
                                      {
                                        startTime: "",
                                        endTime: "",
                                        isBooked:
                                          currentTimeSlots[0]?.isBooked ||
                                          false,
                                      },
                                    ]);

                                    // Clear errors
                                    if (errors[dayTimeKey]) {
                                      setErrors((prev) => ({
                                        ...prev,
                                        [dayTimeKey]: undefined,
                                      }));
                                    }

                                    // Clear touched state
                                    if (touched[dayTimeKey]) {
                                      setTouched((prev) => ({
                                        ...prev,
                                        [dayTimeKey]: undefined,
                                      }));
                                    }
                                  }
                                }}
                                checked={!isDisabled[day]}
                              />
                            </Card.Header>
                            {!isDisabled[day] && (
                              <Card.Body className="pt-0">
                                <FieldArray name={`${day}Time`}>
                                  {({ push, remove }) => (
                                    <>
                                      {values[`${day}Time`].map((_, index) => (
                                        <div key={index} className="slot-row">
                                          <div className="d-flex gap-3 flex-column flex-sm-row">
                                            <div className="flex-grow-1 w-100">
                                              <CustomInput
                                                name={`${day}Time.${index}.startTime`}
                                                type="time"
                                                disabled={
                                                  isDisabled[day] ||
                                                  values[`${day}Time`][index]
                                                    .isBooked
                                                }
                                                value={
                                                  values[`${day}Time`][index]
                                                    .startTime
                                                }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={
                                                  touched[`${day}Time`]?.[index]
                                                    ?.startTime &&
                                                  errors[`${day}Time`]?.[index]
                                                    ?.startTime
                                                }
                                              />
                                            </div>
                                            <div className="flex-grow-1 w-100">
                                              <CustomInput
                                                name={`${day}Time.${index}.endTime`}
                                                type="time"
                                                disabled={
                                                  isDisabled[day] ||
                                                  values[`${day}Time`][index]
                                                    .isBooked
                                                }
                                                value={
                                                  values[`${day}Time`][index]
                                                    .endTime
                                                }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={
                                                  touched[`${day}Time`]?.[index]
                                                    ?.endTime &&
                                                  errors[`${day}Time`]?.[index]
                                                    ?.endTime
                                                }
                                              />
                                            </div>
                                          </div>

                                          {/* Delete button */}
                                          {values[`${day}Time`].length > 1 && (
                                            <div className="d-flex flex-shrink-0 gap-2 mt-3">
                                              <button
                                                type="button"
                                                className="btn remove-btn"
                                                onClick={() => remove(index)}
                                                disabled={
                                                  values[`${day}Time`][index]
                                                    .isBooked
                                                }
                                              >
                                                <span className="delete-icon">
                                                  <FontAwesomeIcon
                                                    icon={faTrash}
                                                  />
                                                </span>
                                                Delete
                                              </button>
                                            </div>
                                          )}
                                        </div>
                                      ))}

                                      {/* Add More button */}
                                      {!isDisabled[day] && (
                                        <div className="d-flex flex-shrink-0 gap-2 mt-3">
                                          <button
                                            type="button"
                                            className="btn add-btn"
                                            onClick={() =>
                                              push({
                                                startTime: "",
                                                endTime: "",
                                                isBooked: false, // New time slots are not booked by default
                                              })
                                            }
                                          >
                                            <span className="add-icon">
                                              <FontAwesomeIcon icon={faPlus} />
                                            </span>
                                            Add More
                                          </button>
                                        </div>
                                      )}
                                    </>
                                  )}
                                </FieldArray>
                              </Card.Body>
                            )}
                          </Card>
                        </Col>
                      ))}
                      <Col xs={12}>
                        {/* Display the "at least one day" error if it exists */}
                        {errors.mondayTime &&
                          typeof errors.mondayTime === "string" && (
                            <div className="error-message red-text mb-3">
                              {errors.mondayTime}
                            </div>
                          )}
                      </Col>
                    </Row>
                    <Row>
                      {/* Submit Button */}
                      <Col xs={12} className="mt-4">
                        <CustomButton
                          variant="primary"
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
        </div>
      </div>
      <CustomModal
        show={requestModal}
        hideClose={false}
        close={() => {
          setRequestModal(false);
        }}
        className="rating-modal"
      >
        <Formik
          initialValues={{
            description: "",
            uploadFile: null, // Initialize as null
          }}
          validationSchema={modalReasonValidation}
          onSubmit={handleRequestSubmit}
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
            <Form>
              <h3 className="modalHeading">Amount Request Reason</h3>
              {console.log("Errors", errors)}
              <div className="mb-3">
                <CustomInput
                  type="textarea"
                  required
                  label="Description:"
                  placeholder="Enter Description"
                  id="description"
                  name="description"
                  rows="4"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.description && errors.description}
                />
              </div>

              <div className="modal-file-uploader mb-3">
                <label className="upload-label" htmlFor="uploadFile">
                  <UploadIcon /> <span>Upload Files (PDF, Docx, JPG)</span>
                </label>

                <input
                  id="uploadFile"
                  name="uploadFile"
                  type="file"
                  accept=".pdf,.docx,.jpg,.jpeg"
                  onChange={(event) =>
                    setFieldValue("uploadFile", event.currentTarget.files[0])
                  }
                  className="d-none"
                />

                {touched.uploadFile && errors.uploadFile && (
                  <div className="error-message red-text">
                    {errors.uploadFile}
                  </div>
                )}

                {values.uploadFile && (
                  <div className="upload-file">
                    <strong>{values.uploadFile.name}</strong>
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => setFieldValue("uploadFile", null)}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              <div className="text-center d-flex justify-content-center gap-3">
                <CustomButton
                  variant="primary"
                  text="Post"
                  pendingText="Submitting..."
                  isPending={isSubmitting}
                  type="submit"
                  disabled={isSubmitting}
                />
                <CustomButton
                  variant="secondary"
                  text="Cancel"
                  onClick={() => setRequestModal(false)}
                />
              </div>
            </Form>
          )}
        </Formik>
      </CustomModal>
    </Container>
  );
};

export default withModal(NewServicesAdd);
