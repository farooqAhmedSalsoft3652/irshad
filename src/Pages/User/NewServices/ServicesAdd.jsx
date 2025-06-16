import { Card, Col, Container, FormCheck, Row } from "react-bootstrap";
import { Formik, Form, FieldArray, Field, ErrorMessage } from "formik";
import { useLocation, useNavigate } from "react-router";
import { images } from "../../../Assets";
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
import {
  faCirclePlus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { Select } from "../../../Components/Select";
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

  // Add this state for the validation schema
  const [validationSchema, setValidationSchema] = useState(
    serviceValidationSchema(isDisabled)
  );

  // Initial values for the form
  const initialValues = {
    service_name: "",
    showQuickServices: false,
    sessionType: "",
    sessionAmounts: {
      chat: "",
      call: "",
      video: "",
    },
    quickSessionType: "",
    quickSessionAmounts: {
      chat: "",
      call: "",
      video: "",
    },
    descriptions: "",
    banner_images: [], // Image Upload Field
    mondayTime: [{ startTime: "", endTime: "" }],
    tuesdayTime: [{ startTime: "", endTime: "" }],
    wednesdayTime: [{ startTime: "", endTime: "" }],
    thursdayTime: [{ startTime: "", endTime: "" }],
    fridayTime: [{ startTime: "", endTime: "" }],
    saturdayTime: [{ startTime: "", endTime: "" }],
    sundayTime: [{ startTime: "", endTime: "" }],
  };

  const sessionOptions = [
    { label: "Chat", value: "chat" },
    { label: "Call", value: "call" },
    { label: "Video Call", value: "video" },
  ];

  // Handle form submission

  const requestCall = () => {
    reasonModal(
      "", // heading
      "Are you sure you want to Book Next week?", // para
      (reason, id) => {
        BookedAllSuucces(reason, id);
      },
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
        const timeSlots = values[day]?.filter(
          (slot) => slot.startTime && slot.endTime
        );

        if (timeSlots?.length) {
          payload[day] = timeSlots;
        }
      });

      return payload;
    };

    const payload = buildPayload(values);
    console.log("Final Payload:", payload);

    showModal(
      "",
      `New Service Added Successfully.`,
      // null,
      () => navigate(`/new-services`),
      true
    );
    // Filter out days with empty time slots

    // Process each time slot key
    /*
    const timeSlotKeys = [
      "mondayTime",
      "tuesdayTime",
      "wednesdayTime",
      "thursdayTime",
      "fridayTime",
      "saturdayTime",
      "sundayTime",
    ];
    timeSlotKeys.forEach((key) => {
      const dayData = values[key];

      // Check if any time slot has valid data
      const hasValidTime = dayData.some(
        (item) =>
          (item.startTime && item.startTime.trim() !== "") ||
          (item.endTime && item.endTime.trim() !== "")
      );

      if (hasValidTime) {
        // Filter out empty time slots
        formData[key] = dayData.filter(
          (item) =>
            (item.startTime && item.startTime.trim() !== "") ||
            (item.endTime && item.endTime.trim() !== "")
        );
      } else {
        // Remove the key entirely if no valid time slots
        delete formData[key];
      }
    });
*/
    // Log the filtered form data
    // resetForm();

    resetForm({
      payload: {
        ...values,
        banner_images: [], // 👈 preserve uploaded images
      },
    });
    // console.log("File:::::", values.banner_images);

    // resetForm({ payload: { ...values, banner_images: [] } });

    // console.log("Form Data with Filtered Time Slots:", formData);
    stopSubmitting();
    // Here you would submit formData to your API
    // submitToAPI(formData)
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
                    {title} {id}
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
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
                                      // Touch the amount field for this session type
                                      setFieldTouched(
                                        `sessionAmounts.${value}`,
                                        true
                                      );
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
                                  onClick={requestCall}
                                  type="button"
                                />
                              </div>
                              {/* Only show error for the current session type */}
                              {values.sessionType === value &&
                                errors.sessionAmounts &&
                                errors.sessionAmounts[value] && (
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
                                        id={`quickSessionType-${value}`} // unique id
                                        label={label}
                                        value={value}
                                        checked={
                                          values.quickSessionType === value
                                        }
                                        onChange={() =>
                                          setFieldValue(
                                            "quickSessionType",
                                            value
                                          )
                                        }
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
                                      disabled={values.sessionType !== value}
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
                                    />
                                  </div>
                                  {/* Only show error for the current session type */}
                                  {values.quickSessionType === value &&
                                    errors.quickSessionAmounts &&
                                    errors.quickSessionAmounts[value] && (
                                      <div className="error-message red-text mb-2">
                                        {errors.quickSessionAmounts[value]}
                                      </div>
                                    )}
                                </div>
                              ))}

                              {/* Display errors for quick session type */}
                              {/* {sessionOptions.map(({ value }) => (
                                <div key={`error-${value}`}>
                                  {values.quickSessionType === value &&
                                    errors.quickSessionAmounts &&
                                    errors.quickSessionAmounts[value] && (
                                      <div className="error-message red-text mb-2">
                                        {errors.quickSessionAmounts[value]}
                                      </div>
                                    )}
                                </div>
                              ))} */}

                              {/* Show error for quickSessionType if no option is selected */}
                              <ErrorMessage
                                name="quickSessionType"
                                component="div"
                                className="error-message red-text mb-2"
                              />
                              <CustomButton
                                variant="secondary"
                                type="submit"
                                className="min-width-250"
                                text="Request For Call"
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
                                  setIsDisabled((prev) => {
                                    const newState = {
                                      ...prev,
                                      [day]: !isEnabled,
                                    };

                                    // Update validation schema with new disabled state
                                    const newValidationSchema =
                                      serviceValidationSchema(newState);
                                    setValidationSchema(newValidationSchema);

                                    return newState;
                                  });

                                  // If disabling, clear existing values and errors for this day
                                  if (!isEnabled) {
                                    const dayTimeKey = `${day}Time`;

                                    // Clear values
                                    setFieldValue(dayTimeKey, [
                                      { startTime: "", endTime: "" },
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
                                                disabled={isDisabled[day]}
                                                value={
                                                  values[`${day}Time`][index]
                                                    .startTime
                                                }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                // error={
                                                //   touched[`${day}Time`]?.[index]
                                                //     ?.startTime &&
                                                //   errors[`${day}Time`]?.[index]
                                                //     ?.startTime
                                                // }
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
                                                // error={
                                                //   touched[`${day}Time`]?.[index]
                                                //     ?.endTime &&
                                                //   errors[`${day}Time`]?.[index]
                                                //     ?.endTime
                                                // }
                                              />
                                            </div>
                                          </div>

                                          {/* Display time range error if both times are entered but end time is not after start time */}
                                          {touched[`${day}Time`]?.[index]
                                            ?.endTime &&
                                            errors[`${day}Time`]?.[index]
                                              ?.endTime && (
                                              <div className="error-message red-text mt-2">
                                                {
                                                  errors[`${day}Time`][index]
                                                    .endTime
                                                }
                                              </div>
                                            )}

                                          {values[`${day}Time`].length > 1 && (
                                            <div className="d-flex flex-shrink-0 gap-2 mt-3">
                                              <button
                                                type="button"
                                                className="btn remove-btn"
                                                onClick={() => remove(index)}
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

                                      {!isDisabled[day] && (
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
    </Container>
  );
};

export default withModal(NewServicesAdd);
