import { Card, Col, Container, FormCheck, Row } from "react-bootstrap";
import {
  Formik,
  Form,
  FieldArray,
  Field,
  ErrorMessage,
  useField,
  useFormikContext,
} from "formik";
import { useLocation, useNavigate } from "react-router";
import { images } from "../../../Assets";
import CustomButton from "../../../Components/CustomButton";
import "react-phone-number-input/style.css";
import CustomInput from "../../../Components/CustomInput";
import {
  modalReasonValidation,
  serviceValidationSchema,
} from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";
import { useAuth } from "../../../Hooks/useAuth";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { usePageTitle, validateImage } from "../../../Utils/helper";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import "./style.css";

import UploadAndDisplayImages from "../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { Select } from "../../../Components/Select";
import { servicesOptions } from "../../../Config/TableStatus";
import CustomModal from "../../../Components/CustomModal";
import * as Yup from "yup";
import UploadAndDisplayFiles from "../../../Components/UploadAndDisplayFiles/UploadAndDisplayFiles";
import { FaUpload } from "react-icons/fa6";
import UploadIcon from "../../../Assets/images/svg/uploadIcon.svg?react";
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
    sessionType: "chat",
    sessionAmounts: {
      chat: "",
      call: "",
      video: "",
    },
    quickSessionType: "chat",
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

  const requestCall = () => {
    reasonModal(
      null, // heading
      null, // para
      null,
      false, // success
      true, // showReason
      "Provide Reason for booked week",
      "Description" // ✅ reasonLabel
    );
  };

  const BookedAllSuucces = async (reason, id) => {
    reasonModal(
      ``,
      `Booked Request for next week has been send Sucessfully. Wait for the admin's Apporval`,
      null, //action
      true //success
    );
  };

  const handleSubmit = (values, { resetForm }) => {
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

      // Session Amount (if selected and non-empty)
      if (values.sessionType && values.sessionAmounts?.[values.sessionType]) {
        payload.sessionType = values.sessionType;
        payload.sessionAmounts = {
          [values.sessionType]: values.sessionAmounts[values.sessionType],
        };
      }

      // Quick Session Amount (if selected and non-empty)
      if (
        values.quickSessionType &&
        values.quickSessionAmounts?.[values.quickSessionType]
      ) {
        payload.quickSessionType = values.quickSessionType;
        payload.quickSessionAmounts = {
          [values.quickSessionType]:
            values.quickSessionAmounts[values.quickSessionType],
        };
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

  // const handleRequestModal = () => {
  //   setRequestModal(true);
  // };

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

  // const [field, meta] = useField(name);
  // const { setFieldValue } = useFormikContext();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFieldValue(name, file);
    console.log("Selected file:", file);
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
                      <Col xs={12} lg={6} xxl={8} className="mb-3">
                        <div className="session-type mb-2">
                          <label className="form-label mb-2">
                            Select Session Type:
                            <span className="text-danger">*</span>
                          </label>

                          {sessionOptions.map(({ label, value }) => (
                            <div key={value}>
                              <div
                                className={`d-flex align-items-center gap-3 mb-3`}
                              >
                                <label
                                  key={value}
                                  className={`btn btn-primary btn-radio ${
                                    values.sessionType === value ? "" : ""
                                  }`}
                                >
                                  <FormCheck
                                    type="radio"
                                    name="sessionType"
                                    id={`sessionType-${value}`}
                                    label={label}
                                    value={value}
                                    checked={values.sessionType === value}
                                    onChange={() => {
                                      setFieldValue("sessionType", value);
                                      setFieldTouched("sessionType", true);
                                    }}
                                  />
                                </label>
                                <Field
                                  name={`sessionAmounts.${value}`}
                                  value={values.sessionAmounts?.[value] || ""}
                                  type="number"
                                  className="form-control w-auto"
                                  disabled={values.sessionType !== value}
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
                                    // Only touch the field when user interacts with it
                                    setFieldTouched(
                                      `sessionAmounts.${value}`,
                                      true
                                    );
                                  }}
                                  onClick={() => {
                                    // Touch the field when clicked
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
                              {/* Only show error for the current session type and only if touched */}
                              {values.sessionType === value &&
                                touched.sessionAmounts?.[value] &&
                                errors.sessionAmounts?.[value] && (
                                  <div className="error-message red-text mb-2">
                                    {errors.sessionAmounts[value]}
                                  </div>
                                )}
                            </div>
                          ))}
                          <ErrorMessage
                            name="sessionType"
                            component="div"
                            className="error-message red-text mb-2"
                          />
                          <CustomButton
                            variant="secondary"
                            className="min-width-250"
                            text="Request For Call"
                          />
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
                      <Col xs={12} lg={6} xxl={8} className="mb-3">
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
                                // checked={showQuickServices}
                                checked={values.showQuickServices}
                                onChange={(e) =>
                                  setFieldValue(
                                    "showQuickServices",
                                    e.target.checked
                                  )
                                }
                              />
                            </div>
                          </div>
                          {values.showQuickServices && (
                            <div className="mt-3 p-3">
                              {sessionOptions.map(({ label, value }) => (
                                <div key={value}>
                                  <div
                                    className={`d-flex align-items-center gap-3 mb-3`}
                                  >
                                    <label
                                      key={value}
                                      className={`btn btn-primary btn-radio ${
                                        values.quickSessionType === value
                                          ? ""
                                          : ""
                                      }`}
                                    >
                                      <FormCheck
                                        type="radio"
                                        name="quickSessionType"
                                        id={`quickSessionType-${value}`}
                                        label={label}
                                        value={value}
                                        checked={
                                          values.quickSessionType === value
                                        }
                                        onChange={() => {
                                          setFieldValue(
                                            "quickSessionType",
                                            value
                                          );
                                          setFieldTouched(
                                            "quickSessionType",
                                            true
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
                                        values.quickSessionType !== value
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
                                      onClick={requestCall}
                                      type="button"
                                    />
                                  </div>
                                  {/* Only show error for the current session type and only if touched */}
                                  {values.quickSessionType === value &&
                                    touched.quickSessionAmounts?.[value] &&
                                    errors.quickSessionAmounts?.[value] && (
                                      <div className="error-message red-text mb-2">
                                        {errors.quickSessionAmounts[value]}
                                      </div>
                                    )}
                                </div>
                              ))}
                              <ErrorMessage
                                name="quickSessionType"
                                component="div"
                                className="error-message red-text mb-2"
                              />
                              <CustomButton
                                variant="secondary"
                                className="min-width-250"
                                text="Request For Call"
                                onClick={requestCall}
                                type="button"
                              />
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
