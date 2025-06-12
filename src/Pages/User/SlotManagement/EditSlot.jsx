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
import { useLocation, useParams } from "react-router-dom";
import { slotManagementHistoryData, slotsData } from "../../../Config/Data";
import { useEffect, useState } from "react";
import { useFormStatus } from "../../../Hooks/useFormStatus";

const EditSlot = () => {
  usePageTitleUser("New Slot");

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

  const [slotData, setSlotData] = useState([]);
  const [daySlots, setDaySlots] = useState([]);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const { id } = useParams();
  const fetchData = async () => {
    try {
      startSubmitting(true);

      const response = slotManagementHistoryData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;

        const getSlotId = data?.find((item) => item.slot_id == Number(id));

        console.log(getSlotId, "getSlotId");

        const filteredSlots = slotsData?.detail?.data.filter(
          (item) => item.slot_id == getSlotId?.reference_id
        );

        setDaySlots(filteredSlots || []);

        console.log(filteredSlots, "filteredSlots");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [slotsData, id]);

  console.log(slotData, "Data");

  // Transform slot data for Formik's initial values
  const transformSlotsForFormik = (slots) => {
    let formattedSlots = {};

    slots.forEach((slot) => {
      const day = slot.day_name.toLowerCase();
      if (!formattedSlots[day]) {
        formattedSlots[day] = { status: false, times: [] };
      }
      formattedSlots[day].status = slot.status === 1;
      formattedSlots[day].times.push({
        start_time: slot.start_time,
        end_time: slot.end_time,
        isBooked: slot.isBooked,
      });
    });

    return formattedSlots;
  };

  const update = async (values) => {
    let transformedSlots = {};
    Object.entries(values.slots).forEach(([day, slotData]) => {
      transformedSlots[`slots[${day}][status]`] = slotData.status ? 1 : 0;
      slotData.times.forEach((time, index) => {
        const formatTime = (timeStr) => (timeStr ? timeStr.slice(0, 5) : ""); // Removes seconds
        transformedSlots[`slots[${day}][times][${index}][start_time]`] =
          formatTime(time.start_time);
        transformedSlots[`slots[${day}][times][${index}][end_time]`] =
          formatTime(time.end_time);
      });
    });

    let finalData = {
      ...transformedSlots,
    };
    mutation.mutate({ id, data: finalData });
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
                      Edit Slot Management
                    </h2>
                  </div>
                </div>
                <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-between mb-3">
                  <h5 className="">Service ABC</h5>
                </div>

                {/* <Formik
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
                      {errors.slots ? (
                        <div className="errorText red-text mt-3">
                          {errors.slots}
                        </div>
                      ) : null}

                      <div className="col-12 mt-4">
                        <CustomButton
                          variant="primary"
                          className="px-5"
                          text="Add"
                          type="submit"
                          // isPending={mutation.isPending}
                        />
                      </div>
                    </Form>
                  )}
                </Formik> */}
                {Object.keys(slotData).length > 0 && (
                  <Formik
                    initialValues={{
                      slots: slotData
                        ? transformSlotsForFormik(slotData)
                        : daysOfWeek.reduce(
                            (acc, day) => ({
                              ...acc,
                              [day.toLowerCase()]: {
                                status: false,
                                times: [initialSlot],
                              },
                            }),
                            {}
                          ),
                    }}
                    onSubmit={update}
                    validationSchema={slotValidationSchema}
                  >
                    {({ values, errors, touched, setFieldValue }) => (
                      <Form>
                        <div className="details-wrapper">
                          <div className="row">
                            <div className="col-12 mt-4">
                              <h3 className="mainTitle">Edit Slot*</h3>
                              {daysOfWeek.map((day) => (
                                <div key={day} className="mt-3">
                                  <div className="d-flex align-items-center justify-content-between gap-3">
                                    <h4 className="mainLabel mb-0">{day}</h4>
                                    <BootstrapForm.Check
                                      type="switch"
                                      checked={
                                        values.slots[day.toLowerCase()]
                                          ?.status || false
                                      }
                                      onChange={(e) => {
                                        const isChecked = e.target.checked;
                                        const slot =
                                          values.slots[day.toLowerCase()];
                                        const isAnyBooked =
                                          slot?.times?.some(
                                            (time) => time.isBooked
                                          ) ?? false;

                                        // Prevent unchecking if any slot is booked
                                        if (!isChecked && isAnyBooked) {
                                          // Optional: You could show a warning or toast here
                                          return;
                                        }

                                        setFieldValue(
                                          `slots.${day.toLowerCase()}.status`,
                                          isChecked
                                        );

                                        if (
                                          isChecked &&
                                          (!slot?.times ||
                                            slot.times.length === 0)
                                        ) {
                                          setFieldValue(
                                            `slots.${day.toLowerCase()}.times`,
                                            [initialSlot]
                                          );
                                        }
                                      }}
                                    />

                                    {/* <BootstrapForm.Check
                              type="switch"
                              checked={
                                values.slots[day.toLowerCase()]?.status || false
                              }
                              onChange={(e) => {
                                setFieldValue(
                                  `slots.${day.toLowerCase()}.status`,
                                  e.target.checked
                                );
                                if (
                                  e.target.checked &&
                                  (!values.slots[day.toLowerCase()]?.times ||
                                    values.slots[day.toLowerCase()].times
                                      .length === 0)
                                ) {
                                  setFieldValue(
                                    `slots.${day.toLowerCase()}.times`,
                                    [initialSlot]
                                  );
                                }
                              }}
                            /> */}
                                  </div>

                                  {values.slots[day.toLowerCase()]?.status && (
                                    <div className="mt-2">
                                      {values.slots[
                                        day.toLowerCase()
                                      ].times.map((_, index) => (
                                        <div className="d-flex justify-content-between align-items-center mt-2 gap-3 flex-wrap flex-md-nowrap">
                                          <div
                                            key={index}
                                            className="d-flex gap-3 align-items-center flex-grow-1 flex-wrap flex-md-nowrap"
                                          >
                                            <input
                                              disabled={
                                                values.slots[day.toLowerCase()]
                                                  .times[index].isBooked
                                              }
                                              type="time"
                                              className="form-control"
                                              style={{
                                                flex: "1",
                                                minWidth: "140px",
                                              }}
                                              value={
                                                values.slots[day.toLowerCase()]
                                                  .times[index].start_time
                                              }
                                              onChange={(e) =>
                                                setFieldValue(
                                                  `slots.${day.toLowerCase()}.times.${index}.start_time`,
                                                  e.target.value
                                                )
                                              }
                                            />
                                            <input
                                              disabled={
                                                values.slots[day.toLowerCase()]
                                                  .times[index].isBooked
                                              }
                                              type="time"
                                              className="form-control"
                                              style={{
                                                flex: "1",
                                                minWidth: "140px",
                                              }}
                                              value={
                                                values.slots[day.toLowerCase()]
                                                  .times[index].end_time
                                              }
                                              onChange={(e) =>
                                                setFieldValue(
                                                  `slots.${day.toLowerCase()}.times.${index}.end_time`,
                                                  e.target.value
                                                )
                                              }
                                            />
                                          </div>

                                          {/* Button wrapper to keep spacing consistent */}
                                          <div
                                            className="d-flex flex-shrink-0 gap-2"
                                            style={{ width: "90px" }}
                                          >
                                            {index > 0 ? (
                                              <button
                                                type="button"
                                                className="remove-btn btn btn-danger"
                                                onClick={() => {
                                                  const newTimes = values.slots[
                                                    day.toLowerCase()
                                                  ].times.filter(
                                                    (_, i) => i !== index
                                                  );
                                                  setFieldValue(
                                                    `slots.${day.toLowerCase()}.times`,
                                                    newTimes
                                                  );
                                                }}
                                              >
                                                <FontAwesomeIcon
                                                  icon={faTrash}
                                                />
                                              </button>
                                            ) : (
                                              <div
                                                style={{ width: "40px" }}
                                              ></div> // keeps space
                                            )}

                                            {index ===
                                            values.slots[day.toLowerCase()]
                                              .times.length -
                                              1 ? (
                                              <button
                                                type="button"
                                                className="add-btn btn btn-dark"
                                                onClick={() => {
                                                  setFieldValue(
                                                    `slots.${day.toLowerCase()}.times`,
                                                    [
                                                      ...values.slots[
                                                        day.toLowerCase()
                                                      ].times,
                                                      initialSlot,
                                                    ]
                                                  );
                                                }}
                                              >
                                                <FontAwesomeIcon
                                                  icon={faPlus}
                                                />
                                              </button>
                                            ) : (
                                              <div
                                                style={{ width: "40px" }}
                                              ></div> // keeps space
                                            )}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                              {errors.slots ? (
                                <div className="errorText red-text mt-3">
                                  {errors.slots}
                                </div>
                              ) : null}
                            </div>

                            <div className="col-12 mt-4">
                              <CustomButton
                                variant="btnBlueBG"
                                className="px-5"
                                text="Update"
                                type="submit"
                                isPending={mutation.isPending}
                              />
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                )}
              </Col>
              <Col xs={12} className="mt-4 d-flex gap-3">
                <CustomButton
                  variant="primary"
                  text="Update Slots"
                  className="px-4 min-width-220"
                />
              </Col>
            </Row>
            <Row></Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default withModal(EditSlot);
