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
import { useLocation } from "react-router-dom";
import { slotsData } from "../../../Config/data";

const EditSlot = () => {
  usePageTitleUser("New Slot");
  const location = useLocation();
  const service_name = location.state?.service_name;

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

  const getInitialSlotsFromData = () => {
    const slots = daysOfWeek.reduce((acc, day) => {
      acc[day] = {
        status: false,
        timeDuration: false,
        times: [initialSlot],
      };
      return acc;
    }, {});

    slotsData.detail.data.forEach((slotDay) => {
      const day = slotDay.day.toLowerCase();
      if (slots[day]) {
        slots[day].status = true;
        slots[day].times = slotDay.slots.map((slot) => ({
          start_time: slot.start_time,
          end_time: slot.end_time,
          timeDuration: "",
        }));
      }
    });

    return slots;
  };

  const initialValues = {
    slots: getInitialSlotsFromData(),
  };

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
                  <h5 className="">{service_name}</h5>
                </div>

                <Formik
                  initialValues={initialValues}
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
                </Formik>
              </Col>
              <Col xs={12} className="mt-4 d-flex gap-3">
                <CustomButton
                  variant="primary"
                  text="Save Slots"
                  className="px-4 min-width-220"
                />
                <CustomButton
                  variant="secondary"
                  text="Reduce working hours for next week"
                  className="px-4"
                  // onClick={RemoveModal}
                />
                <CustomButton
                  variant="secondary"
                  text="Booked All Next Week"
                  className="px-4 min-width-230"
                  // onClick={RemoveModal}
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
