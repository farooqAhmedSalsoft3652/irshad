import { Card, Col, Container, FormCheck, Row } from "react-bootstrap";
import { Formik, Form, FieldArray, Field, ErrorMessage } from "formik";
import { useLocation, useNavigate, useParams } from "react-router";
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
import {
  isNullOrEmpty,
  usePageTitle,
  validateImage,
} from "../../../Utils/helper";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import "./style.css";
import { servicesData, slotsData } from "../../../Config/data";
import UploadAndDisplayImages from "../../../Components/UploadAndDisplayImage/UploadAndDisplayImage";
import { useEffect, useState } from "react";
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
import UploadIcon from "../../../Assets/images/svg/uploadIcon.svg?react";

const ServicesEdit = ({ showModal }) => {
  usePageTitle("Edit Profile", true);
  const navigate = useNavigate();
  const location = useLocation();
  const title = location.state?.title;
  const { id } = useParams();
  const [services, setServices] = useState();
  const [initialTimeSlots, setInitialTimeSlots] = useState({
    mondayTime: [{ startTime: "", endTime: "", isBooked: false }],
    tuesdayTime: [{ startTime: "", endTime: "", isBooked: false }],
    wednesdayTime: [{ startTime: "", endTime: "", isBooked: false }],
    thursdayTime: [{ startTime: "", endTime: "", isBooked: false }],
    fridayTime: [{ startTime: "", endTime: "", isBooked: false }],
    saturdayTime: [{ startTime: "", endTime: "", isBooked: false }],
    sundayTime: [{ startTime: "", endTime: "", isBooked: false }],
  });

  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [requestModal, setRequestModal] = useState(false);
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
  const sessionOptions = [
    { label: "Chat", value: "chat" },
    { label: "Call", value: "call" },
    { label: "Video Call", value: "video" },
  ];

  // Add this before initialValues declaration
  const populateSessionTypes = () => {
    const types = [];
    if (services?.chat && services.chat !== "$0.00") types.push("chat");
    if (services?.call && services.call !== "$0.00") types.push("call");
    if (services?.video_call && services.video_call !== "$0.00")
      types.push("video");
    return types;
  };

  const populateQuickSessionTypes = () => {
    if (!services?.quickSessionType) return [];

    const types = [];
    if (
      services?.quickSessionAmounts?.chat &&
      services.quickSessionAmounts.chat !== "$0.00"
    )
      types.push("chat");
    if (
      services?.quickSessionAmounts?.call &&
      services.quickSessionAmounts.call !== "$0.00"
    )
      types.push("call");
    if (
      services?.quickSessionAmounts?.video &&
      services.quickSessionAmounts.video !== "$0.00"
    )
      types.push("video");
    return types;
  };

  // Initial values for the form
  const initialValues = {
    service_name: services?.service_name || "",
    showQuickServices: services?.quickSessionType || false,
    sessionTypes: populateSessionTypes(),
    sessionAmounts: {
      chat: services?.chat
        ? services.chat.replace("$", "").replace(".00", "")
        : "",
      call: services?.call
        ? services.call.replace("$", "").replace(".00", "")
        : "",
      video: services?.video_call
        ? services.video_call.replace("$", "").replace(".00", "")
        : "",
    },
    quickSessionType: populateQuickSessionTypes(),
    quickSessionAmounts: {
      chat: services?.quickSessionAmounts?.chat
        ? services.quickSessionAmounts.chat.replace("$", "").replace(".00", "")
        : "",
      call: services?.quickSessionAmounts?.call
        ? services.quickSessionAmounts.call.replace("$", "").replace(".00", "")
        : "",
      video: services?.quickSessionAmounts?.video
        ? services.quickSessionAmounts.video.replace("$", "").replace(".00", "")
        : "",
    },
    descriptions: services?.description || "",
    banner_images: services?.image || [],
    ...initialTimeSlots, // Spread the populated time slots
  };

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    // Create a copy of the values to avoid modifying the original
    startSubmitting();
    const formData = { ...values };

    // Filter out days with empty time slots
    const timeSlotKeys = [
      "mondayTime",
      "tuesdayTime",
      "wednesdayTime",
      "thursdayTime",
      "fridayTime",
      "saturdayTime",
      "sundayTime",
    ];

    // Process each time slot key
    timeSlotKeys.forEach((key) => {
      const dayData = values[key];

      // Check if any time slot has valid data
      const hasValidTime = dayData.some(
        (item) =>
          (item.startTime && item.startTime.trim() !== "") ||
          (item.endTime && item.endTime.trim() !== "")
      );

      if (hasValidTime) {
        // Filter out empty time slots and preserve isBooked property
        formData[key] = dayData
          .filter(
            (item) =>
              (item.startTime && item.startTime.trim() !== "") ||
              (item.endTime && item.endTime.trim() !== "")
          )
          .map((item) => ({
            startTime: item.startTime,
            endTime: item.endTime,
            isBooked: item.isBooked || false, // Preserve isBooked property
          }));
      } else {
        // Remove the key entirely if no valid time slots
        delete formData[key];
      }
    });

    // Log the filtered form data
    console.log("Form Data with Filtered Time Slots:", formData);

    showModal(
      "Successful",
      `Service Updated Successfully`,
      () => navigate(`/services`),
      true
    );

    resetForm();
    stopSubmitting();
    // Here you would submit formData to your API
    // submitToAPI(formData)
  };

  const getServices = async () => {
    const response = servicesData?.detail?.data?.find(
      (item) => item.id === Number(id)
    );

    if (response) {
      setServices(response);

      // Get the slot_id from the service or use 974 as default
      const serviceSlotId = response.slot_id || 974;

      // Filter slots data by slot_id
      const serviceSlots = slotsData.detail.data.filter(
        (slot) => slot.slot_id === serviceSlotId
      );

      // Create a new time slots object
      const newTimeSlots = {
        mondayTime: [{ startTime: "", endTime: "", isBooked: false }],
        tuesdayTime: [{ startTime: "", endTime: "", isBooked: false }],
        wednesdayTime: [{ startTime: "", endTime: "", isBooked: false }],
        thursdayTime: [{ startTime: "", endTime: "", isBooked: false }],
        fridayTime: [{ startTime: "", endTime: "", isBooked: false }],
        saturdayTime: [{ startTime: "", endTime: "", isBooked: false }],
        sundayTime: [{ startTime: "", endTime: "", isBooked: false }],
      };

      // Create a new disabled state object
      const newDisabledState = { ...isDisabled };

      // Populate time slots for each day from the filtered slots data
      serviceSlots.forEach((daySlot) => {
        const day = daySlot.day.toLowerCase();
        const dayTimeKey = `${day}Time`;

        if (daySlot.slots && daySlot.slots.length > 0) {
          // Map the slots to the format expected by the form
          newTimeSlots[dayTimeKey] = daySlot.slots.map((slot) => ({
            startTime: slot.start_time.substring(0, 5), // Format: HH:MM
            endTime: slot.end_time.substring(0, 5), // Format: HH:MM
            isBooked: slot.isBooked || false, // Default to false if not specified
          }));

          // Enable the day in the UI if it has slots
          newDisabledState[day] = false;
        }
      });

      // Update the form's initial values with the populated time slots
      setInitialTimeSlots(newTimeSlots);

      // Update the disabled state
      setIsDisabled(newDisabledState);

      // console.log("Populated time slots:", newTimeSlots);
      // console.log("Updated disabled state:", newDisabledState);
    }
  };
  useEffect(() => {
    getServices();
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

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

  // console.log("data", services);
  if (isNullOrEmpty(services)) {
    return (
      <section className="page-content service-details-edit">
        <div className="page-header mb-4">
          <div className="page-title mb-0">loading...</div>
        </div>
      </section>
    );
  }

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
                  <h2 className="fw-bold mb-1  page-title">Edit {title}</h2>
                  <h3 className="fw-regular mb-0 page-title">Sub Category</h3>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Formik
                initialValues={initialValues}
                validationSchema={serviceValidationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                  setFieldTouched,
                  isSubmitting,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    {console.log("Errors", errors)}
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
                          images={values.banner_images}
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
                            <Card.Header className="py-3  d-flex align-items-center">
                              <Card.Title className="mb-0 text-capitalize fw-medium flex-grow-1">
                                <label>
                                  {day.charAt(0).toUpperCase() + day.slice(1)}
                                </label>
                              </Card.Title>
                              <FormCheck
                                type="switch"
                                className="flex-shrink-0"
                                label=""
                                onChange={(e) =>
                                  setIsDisabled((prev) => ({
                                    ...prev,
                                    [day]: !e.target.checked,
                                  }))
                                }
                                checked={!isDisabled[day]} // Disable by default
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
                                                disabled={isDisabled[day]}
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
                                                disabled={isDisabled[day]}
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

                                          {values[`${day}Time`].length > 1 && (
                                            <div className="d-flex flex-shrink-0 gap-2 mt-3">
                                              <button
                                                type="button"
                                                className="btn remove-btn"
                                                onClick={() => remove(index)}
                                                // disabled={isDisabled[day]}
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

                                      {!isDisabled[day] && ( // Only show "Add Time Slot" button when FormCheck is enabled
                                        <div className="d-flex flex-shrink-0 gap-2 mt-3">
                                          <button
                                            type="button"
                                            className="btn add-btn"
                                            onClick={() =>
                                              push({
                                                startTime: "",
                                                endTime: "",
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
                    </Row>
                    <Row>
                      {/* Submit Button */}
                      <Col xs={12} className="mt-4">
                        <CustomButton
                          variant="primary"
                          className="px-5"
                          text="Update"
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

export default withModal(ServicesEdit);
