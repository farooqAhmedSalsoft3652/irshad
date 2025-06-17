import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, FieldArray, Form, Formik } from "formik";
import { Card, Col, Container, FormCheck, Row } from "react-bootstrap";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import { Select } from "../../../Components/Select";
import { timeDuration } from "../../../Config/TableStatus";
import { slotValidationSchema } from "../../../Config/Validations";
import withModal from "../../../HOC/withModal";
import { usePageTitleUser } from "../../../Utils/helper";
import "./style.css";
import { useNavigate } from "react-router-dom";
import CustomModal from "../../../Components/CustomModal";
import CustomInput from "../../../Components/CustomInput";
import { useState } from "react";
import UploadIcon from "../../../Assets/images/svg/uploadIcon.svg?react";
import { modalReasonValidation } from "../../../Config/Validations";

const NewSlot = ({ reasonModal, showModal, closeModal }) => {
  usePageTitleUser("New Slot");
  const navigate = useNavigate();

  const [reasonBookModal, setReasonBookModal] = useState(false);
  const [reasonReduceHourModal, setReasonReduceHourModal] = useState(false);
  const initialSlot = { start_time: "", end_time: "", timeDuration: "" };

  const daysOfWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const create = async (values, { resetForm }) => {
    let transformedSlots = {}; // Initialize

    if (values.slots) {
      // Filter slots where status is true
      const filteredSlots = Object.fromEntries(
        Object.entries(values.slots).filter(
          ([_, slotData]) => slotData.status === true
        )
      );

      // Flatten slots structure
      Object.entries(filteredSlots).forEach(([day, slotData]) => {
        transformedSlots[`slots[${day}][status]`] = slotData.status ? 1 : 0;
        slotData.times.forEach((time, index) => {
          transformedSlots[`slots[${day}][times][${index}][start_time]`] =
            time.start_time;
          transformedSlots[`slots[${day}][times][${index}][end_time]`] =
            time.end_time;
          transformedSlots[`slots[${day}][times][${index}][timeDuration]`] =
            time.timeDuration;
        });
      });
    }
    // Now log finalData after it is assigned
    // mutation.mutate(transformedSlots);
    console.log("Transformed Slots:", transformedSlots);

    showModal(
      null,
      "Slots has been saved successfully",
      () => navigate("/slot-management/"),
      true
    );

    resetForm({
      values: {
        slots: daysOfWeek.reduce(
          (acc, day) => ({
            ...acc,
            [day]: {
              status: false,
              timeDuration: false,
              times: [initialSlot],
            },
          }),
          {}
        ),
      },
    });
  };

  const BookedNextWeek = () => {
    reasonModal(
      "", // heading
      "Are you sure you want to Book Next week?", // para
      () => {
        closeModal(); // ✅ now it works
        setTimeout(() => setReasonBookModal(true), 300);
      },
      null,
      false
    );
  };

  const handleReasonBookSubmit = (values, { resetForm }) => {
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
    }

    // Show success message
    showModal(
      "",
      "Booked Request for next week has been send Sucessfully. Wait for the admin's Apporval",
      null,
      true // success
    );

    // Close the modal and reset form
    setReasonBookModal(false);
    resetForm();
  };

  const ReduceHours = () => {
    reasonModal(
      "",
      "Are you sure you want to reduce working hour for Next week?",
      () => {
        closeModal(); // ✅ now it works
        setTimeout(() => setReasonReduceHourModal(true), 300);
      }
    );
  };

  const handleReduceHoursSubmit = (values, { resetForm }) => {
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
    }

    // Show success message
    showModal(
      "",
      "Your working hour deduction Request for the next week has been send Successfully. Wait for the admin's Approval",
      null,
      true // success
    );

    // Close the modal and reset form
    setReasonReduceHourModal(false);
    resetForm();
  };

  return (
    <>
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
                    <h2 className="fw-bold mb-1  page-title">
                      New Slot Management
                    </h2>
                  </div>
                </div>
                <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-between mb-3">
                  <h5 className="">Service ABC</h5>
                  <h5 className="">Working Hours: 19</h5>
                </div>

                <Formik
                  initialValues={{
                    slots: daysOfWeek.reduce(
                      (acc, day) => ({
                        ...acc,
                        [day]: {
                          status: false,
                          timeDuration: false,
                          times: [initialSlot],
                        },
                      }),
                      {}
                    ),
                  }}
                  onSubmit={create}
                  validationSchema={slotValidationSchema}
                >
                  {({
                    values,
                    setFieldValue,
                    handleChange,
                    errors,
                    touched,
                    handleBlur,
                  }) => (
                    <Form>
                      <Row className="g-3 g-lg-4 time-slotes">
                        {daysOfWeek.map((day) => (
                          <Col xs={12} lg={6} xl={4} key={day}>
                            <Card className="card-slot">
                              <Card.Header className="py-3  d-flex align-items-center">
                                <Card.Title className="mb-0 text-capitalize fw-medium flex-grow-1">
                                  {day}
                                </Card.Title>
                                <FormCheck
                                  className="flex-shrink-0"
                                  type="switch"
                                  checked={values.slots[day].status}
                                  onChange={(e) => {
                                    setFieldValue(
                                      `slots.${day}.status`,
                                      e.target.checked
                                    );
                                  }}
                                />
                              </Card.Header>

                              {values.slots[day].status && (
                                <Card.Body className="pt-0">
                                  <FieldArray name={`slots.${day}.times`}>
                                    {({ push, remove }) => (
                                      <>
                                        {values.slots[day].times.map(
                                          (time, index) => (
                                            <div
                                              key={index}
                                              className="slot-row"
                                            >
                                              <Select
                                                label="Slot Time"
                                                labelclass="fw-medium"
                                                required
                                                id={`slots.${day}.times.${index}.timeDuration`}
                                                name={`slots.${day}.times.${index}.timeDuration`}
                                                wrapperClass="d-block mb-3"
                                                value={
                                                  values.slots[day].times[index]
                                                    .timeDuration
                                                }
                                                onChange={(value) =>
                                                  setFieldValue(
                                                    `slots.${day}.times.${index}.timeDuration`,
                                                    value
                                                  )
                                                }
                                                onBlur={handleBlur}
                                                error={
                                                  touched?.slots?.[day]
                                                    ?.times?.[index]
                                                    ?.timeDuration &&
                                                  errors?.slots?.[day]?.times?.[
                                                    index
                                                  ]?.timeDuration
                                                }
                                              >
                                                {timeDuration}
                                              </Select>
                                              <div className="d-flex gap-3 flex-column flex-sm-row">
                                                <div className="flex-grow-1 w-100">
                                                  <Field
                                                    type="time"
                                                    name={`slots.${day}.times.${index}.start_time`}
                                                    className="form-control"
                                                  />
                                                </div>
                                                <div className="flex-grow-1 w-100">
                                                  <Field
                                                    type="time"
                                                    name={`slots.${day}.times.${index}.end_time`}
                                                    className="form-control"
                                                  />
                                                </div>
                                              </div>

                                              <div className="d-flex flex-shrink-0 gap-2 mt-3">
                                                {index > 0 && (
                                                  <button
                                                    type="button"
                                                    className="btn remove-btn"
                                                    onClick={() =>
                                                      remove(index)
                                                    }
                                                    // disabled={isDisabled[day]}
                                                  >
                                                    <span className="delete-icon">
                                                      <FontAwesomeIcon
                                                        icon={faTrash}
                                                      />
                                                    </span>
                                                    Delete
                                                  </button>
                                                )}

                                                {index ===
                                                  values.slots[day].times
                                                    .length -
                                                    1 && (
                                                  <button
                                                    type="button"
                                                    className="btn add-btn"
                                                    onClick={() =>
                                                      push(initialSlot)
                                                    }
                                                  >
                                                    <span className="add-icon">
                                                      <FontAwesomeIcon
                                                        icon={faPlus}
                                                      />
                                                    </span>
                                                    Add More
                                                  </button>
                                                )}
                                              </div>
                                            </div>
                                          )
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
                        <Col xs={12}>
                          {errors.slots ? (
                            <div className="errorText red-text mt-3">
                              {errors.slots}
                            </div>
                          ) : null}
                        </Col>
                        <Col xs={12} className="mt-4 d-flex gap-3">
                          <CustomButton
                            variant="primary"
                            className="px-4 min-width-220"
                            text="Save Slots"
                            type="submit"
                            // isPending={mutation.isPending}
                          />
                          <CustomButton
                            variant="secondary"
                            text="Reduce working hours for next week"
                            className="px-4"
                            onClick={ReduceHours}
                          />
                          <CustomButton
                            variant="secondary"
                            text="Booked All Next Week"
                            className="px-4 min-width-230"
                            onClick={BookedNextWeek}
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
          show={reasonBookModal}
          hideClose={false}
          close={() => {
            setReasonBookModal(false);
          }}
          className="rating-modal"
        >
          <Formik
            initialValues={{
              description: "",
              uploadFile: null, // Initialize as null
            }}
            validationSchema={modalReasonValidation}
            onSubmit={handleReasonBookSubmit}
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
                <h3 className="modalHeading">Provide Reason for booked week</h3>
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
                    onClick={() => setReasonBookModal(false)}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </CustomModal>
        <CustomModal
          show={reasonReduceHourModal}
          hideClose={false}
          close={() => {
            setReasonReduceHourModal(false);
          }}
          className="rating-modal"
        >
          <Formik
            initialValues={{
              description: "",
              uploadFile: null, // Initialize as null
            }}
            validationSchema={modalReasonValidation}
            onSubmit={handleReduceHoursSubmit}
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
                <h3 className="modalHeading">
                  Provide Reason for reduce hours
                </h3>
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
                    onClick={() => setReasonReduceHourModal(false)}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </CustomModal>
      </Container>
    </>
  );
};

export default withModal(NewSlot);
