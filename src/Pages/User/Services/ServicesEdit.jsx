import { Card, Col, Container, FormCheck, Row } from "react-bootstrap";
import { Formik, Form, FieldArray, Field, ErrorMessage } from "formik";
import { useLocation, useNavigate, useParams } from "react-router";
import { images } from "../../../Assets";
import CustomButton from "../../../Components/CustomButton";
import "react-phone-number-input/style.css";
import CustomInput from "../../../Components/CustomInput";
import { serviceValidationSchema } from "../../../Config/Validations";
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
import { servicesData } from "../../../Config/data";
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

const ServicesEdit = ({ showModal }) => {
  usePageTitle("Edit Profile", true);
  const navigate = useNavigate();
  const location = useLocation();
  const title = location.state?.title;
  const { id } = useParams();
  const [services, setServices] = useState();

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
  const sessionOptions = [
    { label: "Chat", value: "chat" },
    { label: "Call", value: "call" },
    { label: "Video Call", value: "video" },
  ];

  // Initial values for the form
  const initialValues = {
    service_name: services?.service_name || "",
    showQuickServices: false,
    sessionType: "child",
    sessionAmounts: {
      chat: "",
      call: "",
      video: "",
    },
    quickSessionType: "child",
    quickSessionAmounts: {
      chat: "",
      call: "",
      video: "",
    },
    descriptions: services?.description || "",
    banner_images: services?.image || [],
    mondayTime: [{ startTime: "", endTime: "" }],
    tuesdayTime: [{ startTime: "", endTime: "" }],
    wednesdayTime: [{ startTime: "", endTime: "" }],
    thursdayTime: [{ startTime: "", endTime: "" }],
    fridayTime: [{ startTime: "", endTime: "" }],
    saturdayTime: [{ startTime: "", endTime: "" }],
    sundayTime: [{ startTime: "", endTime: "" }],
  };

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    // Create a copy of the values to avoid modifying the original
    startSubmitting();
    const formData = { ...values };
    // values.image = imageObject;
    showModal(
      "Succesful",
      `New Service Added Successfully`,
      // null,
      () => navigate(`/services`),
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

    // Log the filtered form data
    resetForm();
    console.log("Form Data with Filtered Time Slots:", formData);
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

      // Update disabled state based on existing time slots
      // const newDisabledState = {
      //   monday: !response.mondayTime || response.mondayTime.length === 0,
      //   tuesday: !response.tuesdayTime || response.tuesdayTime.length === 0,
      //   wednesday:
      //     !response.wednesdayTime || response.wednesdayTime.length === 0,
      //   thursday: !response.thursdayTime || response.thursdayTime.length === 0,
      //   friday: !response.fridayTime || response.fridayTime.length === 0,
      //   saturday: !response.saturdayTime || response.saturdayTime.length === 0,
      //   sunday: !response.sundayTime || response.sundayTime.length === 0,
      // };
      // setIsDisabled(newDisabledState);
    }
  };
  useEffect(() => {
    getServices();
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  console.log("data", services);
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
                    {console.log(errors)}
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
                                className={`d-flex align-items-center gap-3 ${
                                  errors.sessionAmounts ? "mb-3" : "mb-3"
                                }`}
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
                                    id={`sessionType-${value}`} // unique id
                                    label={label}
                                    value={value}
                                    checked={values.sessionType === value}
                                    onChange={() => {
                                      setFieldValue("sessionType", value);
                                      setFieldTouched("sessionType", true); // 🔥 this ensures touch is triggered
                                    }}
                                    onBlur={() =>
                                      setFieldTouched("sessionType", true)
                                    }
                                  />
                                </label>
                                <Field
                                  name={`sessionAmounts.${value}`}
                                  value={values.sessionAmounts?.[value] || ""}
                                  // value={values.amounts[value]}
                                  type="number"
                                  className="form-control w-auto"
                                  disabled={values.sessionType !== value}
                                  placeholder="Enter Amount"
                                  min={0}
                                  max={100}
                                />

                                <span className="badge">Range $0-$100</span>
                                <CustomButton
                                  variant="secondary"
                                  className=""
                                  text="Request More"
                                />
                              </div>
                              <div className="">
                                <ErrorMessage
                                  name={`sessionAmounts.${value}`}
                                  component="div"
                                  className="error-message red-text mb-2"
                                />
                              </div>
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
                                <div
                                  key={value}
                                  className="d-flex align-items-center gap-3 mb-3"
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
                                        setFieldValue("quickSessionType", value)
                                      }
                                    />
                                  </label>
                                  <Field
                                    name={`quickSessionAmounts.${value}`}
                                    value={
                                      values.quickSessionAmounts?.[value] || ""
                                    }
                                    type="number"
                                    className="form-control w-auto"
                                    disabled={values.quickSessionType !== value}
                                    min={0}
                                    max={100}
                                  />

                                  <span className="badge">Range $0-$100</span>
                                  <CustomButton
                                    variant="secondary"
                                    className=""
                                    text="Request More"
                                  />
                                </div>
                              ))}

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

export default withModal(ServicesEdit);
