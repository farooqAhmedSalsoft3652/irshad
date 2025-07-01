import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { FaEye } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { images } from "../../../Assets";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import CustomTable from "../../../Components/CustomTable";
import { Select } from "../../../Components/Select";
import {
  consultantManagerData,
  consultantAppointmentLogsData,
} from "../../../Config/data";
import { consultantAppointmentHeader } from "../../../Config/TableHeaders";
import {
  appointmentStatus,
  AppointmentType,
  statusOptions,
  workingHoursOptions,
} from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import {
  dateFormat,
  getCountryFlag,
  serialNum,
  statusClassMap,
  statusClassMap2,
} from "../../../Utils/helper";
import ImageGallery from "../../../Components/ImageGallery/ImageGallery";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../Components/CustomButton";
import CustomModal from "../../../Components/CustomModal";
import { Form, Formik } from "formik";
import CustomInput from "../../../Components/CustomInput";
import { modalReasonValidation } from "../../../Config/Validations";

const ConsultantDetails = ({
  showModal,
  filters,
  setFilters,
  pagination,
  updatePagination,
}) => {
  const { id } = useParams();
  const [consultantData, setConsultantData] = useState({});

  const [appointmentLogs, setAppointmentLogs] = useState([]);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [reduceHourModal, setReduceHourModal] = useState(false);

  const fetchAppointmentLogs = async () => {
    try {
      startSubmitting(true);
      // const url = `/admin-api/users`;
      // const response = await getAll(url, filters);
      const response = consultantAppointmentLogsData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setAppointmentLogs(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page),
        });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    const getConsultantData = async () => {
      const response = consultantManagerData.detail.data.find(
        (e) => e.id === id
      );

      // const response = await getDetails(`/admin-api/users/${id}`);
      if (response) {
        // setConsultantData(response.detail);
        setConsultantData(response);
      }
    };
    getConsultantData();
  }, [id]);

  useEffect(() => {
    fetchAppointmentLogs();
  }, [filters]);

  // Handle status change
  const handleStatusChange = (e, id) => {
    const newStatusValue = e;
    // Open the modal for confirmation
    showModal(
      ``,
      `Are you sure you want to ${
        newStatusValue === "1" ? "Activate" : "Inactivate"
      } this Consultant?`,
      () => onConfirmStatusChange(id, newStatusValue)
    );
  };

  // Confirm status change and update the state
  const onConfirmStatusChange = async (row, newStatusValue) => {
    // Update the status in the appointmentLogs state
    setConsultantData({ ...consultantData, status_detail: newStatusValue });
    showModal(
      "",
      `Consultant Has Been ${
        newStatusValue === "1" ? "Activated" : "Inactivated"
      } Successfully!`,
      null,
      true
    );
  };

  const BookedNextWeek = () => {
    showModal(
      "", // heading
      "Are you sure you want to Book Next week?", // para
      () => onConfirmBooked(id),
      null,
      false
    );
  };

  const onConfirmBooked = async (id) => {
    showModal("", `Next week slot has been booked successfully!`, null, true);
  };

  const handleReduceHoursSubmit = async (
    values,
    { setSubmitting, resetForm }
  ) => {
    try {
      // your logic (e.g., API call)
      console.log("Form values:", values);

      // optional: reset form
      resetForm();

      // close modal
      setReduceHourModal(false);
      showModal(
        "",
        `Next week's working hours have been successfully reduced`,
        null,
        true
      );
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <DashboardLayout pageTitle="Consultant Management Details">
      <div className="container-fluid consultant-management">
        <div className="dashCard">
          <Row>
            <Col xs={12} className="d-flex mb-4 mb-xl-5 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">Consultant’s Details</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={12}>
                  <div className="d-flex flex-column flex-md-row align-items-center mb-3">
                    <div className="user-avater">
                      <img
                        src={consultantData?.userImage ?? images.placeholder}
                        alt="User"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="flex-grow-1 d-flex flex-column align-items-start align-items-sm-end justify-content-end justify-content-sm-start gap-3 mt-3 mt-md-0">
                      <div className="status-action mx-auto mx-md-0">
                        <Select
                          className={`tabel-select status${consultantData?.status_detail}`}
                          id={`status${consultantData?.id}`}
                          name="status"
                          label="Status:"
                          value={consultantData?.status_detail}
                          onChange={(e) =>
                            handleStatusChange(e, consultantData?.id)
                          }
                          isInputNeeded={false}
                        >
                          {statusOptions}
                        </Select>
                      </div>

                      <div className="d-flex flex-column gap-3">
                        <Link
                          className="btn btn-primary min-width-220 px-3"
                          to={"services"}
                        >
                          View Services
                        </Link>
                        <Link className="btn btn-outline-primary min-width-220 px-3">
                          Set Consultant Profile
                        </Link>
                        <CustomButton
                          variant="outline-primary"
                          className="min-width-220 px-3"
                          onClick={() => setReduceHourModal(true)}
                        >
                          Reduce Next Week Working Hours
                        </CustomButton>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

              {/* Basic Information */}
              <Row className="mb-4">
                <Col md={12} lg={12} xl={11} xxl={10}>
                  <Row>
                    {[
                      {
                        label: "First Name",
                        value: consultantData.name,
                      },
                      {
                        label: "Last Name",
                        value: consultantData.last_name,
                      },
                      {
                        label: "Email Address",
                        value: consultantData.email,
                      },
                      {
                        label: "Contact Number",
                        value: consultantData.phoneNo,
                      },
                      { label: "Gender", value: consultantData.gender },
                      {
                        label: "Language",
                        value: consultantData.language,
                      },
                      {
                        label: "Nationality",
                        value: consultantData.nationality,
                      },
                      {
                        label: "Category",
                        value: consultantData.category,
                      },
                    ].map(({ label, value }) => (
                      <Col
                        xs={12}
                        md={6}
                        lg={6}
                        xl={4}
                        xxl={3}
                        className="mb-3 mb-lg-4"
                        key={label}
                      >
                        <div className="detail-box">
                          <h6>{label}</h6>
                          <p className="mb-0">
                            {label === "Contact Number" && (
                              <span className="me-2 d-inline-block lh-1">
                                {getCountryFlag(value)}
                              </span>
                            )}
                            {value}
                          </p>
                        </div>
                      </Col>
                    ))}
                  </Row>

                  <Row>
                    <Col
                      xs={12}
                      className="d-flex gap-2 flex-column flex-sm-row"
                    >
                      <CustomButton
                        variant="primary"
                        className="min-width-220 px-3"
                        onClick={BookedNextWeek}
                      >
                        Book Next Week Slots
                      </CustomButton>
                      <Link className="btn btn-outline-primary min-width-220 px-3">
                        Show Report
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>

              {/* Quick Section */}
              <Row className="mb-4">
                <Col xs={12} className="mt-3 ">
                  <h3 className="section-title mb-3">
                    Quick
                    {consultantData?.is_quick && (
                      <span className="quick-icon ms-3">
                        <img src={images.Check} alt="check" className="" />
                      </span>
                    )}
                  </h3>
                </Col>
                <Col xs={12} md={6} lg={4} className="mb-3">
                  <div className="detail-box">
                    <h6>Set Commission</h6>
                    <p className="mb-0">By Default</p>
                  </div>
                </Col>
              </Row>

              {/* Set Amount */}
              <Row className="mb-4">
                <Col md={12} lg={10} xl={8} xxl={6}>
                  <Row>
                    <Col xs={12}>
                      <h5 className="section-title mb-3">Set Amount</h5>
                    </Col>

                    {[
                      {
                        label: "Chat",
                        min: consultantData.chat_min,
                        max: consultantData.chat_max,
                      },
                      {
                        label: "Call",
                        min: consultantData.call_min,
                        max: consultantData.call_max,
                      },
                      {
                        label: "Total Working Hours:",
                        value: consultantData.total_working_hurs, // ya jo bhi relevant ho
                      },
                    ].map(({ label, min, max, value }, index) => (
                      <Col xs={12} md={4} className="mb-3 mb-lg-4" key={index}>
                        <div className="detail-box">
                          <h6 className="">{label}</h6>
                          <p className="mb-0">
                            {min && max ? `$${min} - $${max}` : value || "-"}
                          </p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>

              {/* Personal Detail */}
              <Row className="mb-4">
                <Col md={12} lg={10} xl={8} xxl={6}>
                  <Row>
                    <Col xs={12}>
                      <h5 className="section-title mb-3">Personal Detail</h5>
                    </Col>

                    <Col xs={12} className="mb-2">
                      <div className="detail-box">
                        <h6 className="">About</h6>
                        <p className="mb-0">{consultantData.bio}</p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              {/* Educational Detail */}
              {consultantData.education &&
                consultantData.education.length > 0 && (
                  <Row className="mb-3">
                    <Col md={12} lg={10} xl={8} xxl={7}>
                      <Row>
                        <Col xs={12}>
                          <h5 className="section-title mb-3">
                            Educational Detail
                          </h5>
                        </Col>
                      </Row>
                      {consultantData.education.map((edu, index) => (
                        <Row key={index}>
                          {[
                            {
                              label: "Institute Name",
                              value: edu.institute_name,
                            },
                            {
                              label: "Degree Title",
                              value: edu.degree_title,
                            },
                            {
                              label: "Year",
                              value: `${edu.start_year} - ${edu.end_year}`,
                            },
                          ].map(({ label, value }) => (
                            <Col
                              xs={12}
                              md={4}
                              className="mb-3 mb-lg-4"
                              key={label}
                            >
                              <div className="detail-box">
                                <h6>{label}</h6>
                                <p className="mb-0">{value}</p>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      ))}
                    </Col>
                  </Row>
                )}

              {/* Work Experience */}
              {consultantData.work_experience &&
                consultantData.work_experience.length > 0 && (
                  <Row className="mb-3">
                    <Col md={12} lg={10} xl={8} xxl={7}>
                      <Row>
                        <Col xs={12}>
                          <h5 className="section-title mb-3">
                            Work Experience
                          </h5>
                        </Col>
                      </Row>

                      {consultantData.work_experience.map((work, index) => (
                        <Row key={index}>
                          {[
                            {
                              label: "Organization Name",
                              value: work.organization_name,
                            },
                            {
                              label: "Designation",
                              value: work.designation,
                            },
                            {
                              label: "Year",
                              value: `${work.start_year} - ${work.end_year}`,
                            },
                          ].map(({ label, value }) => (
                            <Col
                              xs={12}
                              md={4}
                              className="mb-3 mb-lg-4"
                              key={label}
                            >
                              <div className="detail-box">
                                <h6>{label}</h6>
                                <p className="mb-0">{value}</p>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      ))}
                    </Col>
                  </Row>
                )}

              {/* Certification Detail */}
              {consultantData.certification &&
                consultantData.certification.length > 0 && (
                  <Row className="">
                    <Col md={12} lg={10} xl={8} xxl={7}>
                      <Row>
                        <Col xs={12}>
                          <h5 className="section-title mb-3">
                            Certification Detail
                          </h5>
                        </Col>
                      </Row>
                      {consultantData.certification.map(
                        (certificate, index) => (
                          <Row key={index}>
                            {[
                              {
                                label: "Institute Name",
                                value: certificate.institute,
                              },
                              {
                                label: "Certificate Title",
                                value: certificate.certificateTitle,
                              },
                            ].map(({ label, value }) => (
                              <Col
                                xs={12}
                                md={4}
                                className="mb-3 mb-lg-4"
                                key={label}
                              >
                                <div className="detail-box">
                                  <h6 className="">Institute Name</h6>
                                  <p className="mb-0">
                                    {certificate.institute}
                                  </p>
                                </div>
                              </Col>
                            ))}
                            <Col xs={12} className="mb-3 mb-lg-4">
                              <ImageGallery
                                images={[certificate?.photo]}
                                maxWidth={300}
                                className="certificate-img"
                              />
                            </Col>
                          </Row>
                        )
                      )}
                    </Col>
                  </Row>
                )}
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12}>
              <h2 className="mainTitle fw-medium">Appointment Logs</h2>
            </Col>
            <Col xs={12}>
              <CustomTable
                filters={filters}
                setFilters={setFilters}
                loading={isSubmitting}
                headers={consultantAppointmentHeader}
                pagination={pagination}
                // if you want multiple date filters
                dateFilters={[
                  {
                    title: "date",
                    from: "fromDate",
                    to: "toDate",
                  },
                ]}
                selectOptions={[
                  {
                    title: "appointment type",
                    options: AppointmentType,
                  },
                  {
                    title: "status",
                    options: appointmentStatus,
                  },
                ]}
              >
                <tbody>
                  {appointmentLogs?.map((item, index) => (
                    <tr key={item?.id}>
                      <td>
                        {serialNum(
                          (filters.page - 1) * filters.per_page + index + 1
                        )}
                      </td>
                      <td>{item?.appointment_iD}</td>
                      <td>{item?.consultant_name}</td>
                      <td>{dateFormat(item?.booking_date)}</td>
                      <td>{dateFormat(item?.appointment_date)}</td>
                      <td>{item?.duration}</td>
                      <td className="text-capitalize">{item?.session_type}</td>
                      <td className="text-capitalize">
                        {item?.appointment_type}
                      </td>
                      <td>{item?.charges}</td>
                      <td
                        className={`text-capitalize ${
                          statusClassMap[item?.status]
                        }`}
                      >
                        {item?.status}
                      </td>
                      <td>
                        <div className="d-flex cp gap-3 tableAction align-items-center justify-content-center">
                          <span className="tooltip-toggle" aria-label="View">
                            <Link
                              to={`/admin/consultant-management/${item.id}/booking-logs`}
                            >
                              <FaEye size={20} />
                            </Link>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </CustomTable>
            </Col>
          </Row>
        </div>
      </div>
      <CustomModal
        show={reduceHourModal}
        hideClose={false}
        close={() => {
          setReduceHourModal(false);
        }}
        className="rating-modal"
      >
        <Formik
          initialValues={{
            working_hours: "",
          }}
          validationSchema={Yup.object().shape({
            working_hours: Yup.string().required("Working hours is required"),
          })}
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
              <h3 className="modalHeading fw-medium px-3 lh-sm">
                Reduce the consultant's working hours for the next week. After
                that, the system will display their fixed hours.
              </h3>
              {console.log("Errors", errors)}
              <div className="mb-3">
                <Select
                  id="working_hours"
                  name="working_hours"
                  required
                  wrapperClass="d-block"
                  value={values.working_hours}
                  onChange={(e) => {
                    setFieldValue("working_hours", e);
                    // console.log("onChange value:", e);
                  }}
                  onBlur={handleBlur}
                  label="Working Hours:"
                  error={touched.working_hours && errors.working_hours}
                >
                  {workingHoursOptions}
                </Select>
              </div>

              <div className="text-center d-flex justify-content-center gap-3">
                <CustomButton
                  variant="primary"
                  text="Update"
                  pendingText="Updating..."
                  isPending={isSubmitting}
                  type="submit"
                  disabled={isSubmitting}
                />
              </div>
            </Form>
          )}
        </Formik>
      </CustomModal>
    </DashboardLayout>
  );
};

export default withModal(withFilters(ConsultantDetails));
