import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import {
  dateFormat,
  isNullOrEmpty,
  serialNum,
  statusClassMap,
} from "../../../../Utils/helper";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomTable from "../../../../Components/CustomTable";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import { Select } from "../../../../Components/Select";
import { serviceDetailsData } from "../../../../Config/data";
import { consultantAppointmentHeader } from "../../../../Config/TableHeaders";
import {
  appointmentStatus,
  AppointmentType,
  statusOptions,
} from "../../../../Config/TableStatus";
import withFilters from "../../../../HOC/withFilters";
import withModal from "../../../../HOC/withModal";
import { useFormStatus } from "../../../../Hooks/useFormStatus";

const ConsultantServicesDetails = ({
  showModal,
  filters,
  setFilters,
  pagination,
  updatePagination,
}) => {
  const { id, serviceId } = useParams();
  const [serviceDetails, setServiceDetails] = useState(null);

  const [appointmentLogs, setAppointmentLogs] = useState([]);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  useEffect(() => {
    const getServiceDetails = async () => {
      const response = serviceDetailsData.detail.data.find(
        (e) => e.id === serviceId
      );

      // const response = await getDetails(`/admin-api/users/${id}`);
      if (response) {
        // setServiceDetails(response.detail);
        setServiceDetails(response);
        setAppointmentLogs(response.appointmentLogs);
      }
    };
    getServiceDetails();
  }, [serviceId]);

  // Handle status change
  const handleStatusChange = (e, id) => {
    const newStatusValue = e;
    // Open the modal for confirmation
    showModal(
      `${newStatusValue === "1" ? "Active" : "Inactive"} Service`,
      `Are you sure you want to ${
        newStatusValue === "1" ? "Activate" : "Inactivate"
      } this Service?`,
      () => onConfirmStatusChange(id, newStatusValue)
    );
  };

  // Confirm status change and update the state
  const onConfirmStatusChange = async (row, newStatusValue) => {
    // Update the status in the appointmentLogs state
    setServiceDetails({ ...serviceDetails, status_detail: newStatusValue });
    showModal(
      "",
      `This Service has been ${
        newStatusValue === "1" ? "Activated" : "Inactivated"
      } successfully!`,
      null,
      true
    );
  };

  if (isNullOrEmpty(serviceDetails)) {
    return (
      <DashboardLayout pageTitle="Service Details">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 ">
              <div className="row my-4">
                <div className="col-12 d-flex">
                  <BackButton2 />
                  <h2 className="mainTitle mb-0">View Service</h2>
                </div>
              </div>
              <div className="dashCard ">
                <div className="row ">
                  <div className="col-12">Loading...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout pageTitle="View Service">
      <div className="container-fluid">
        <div className="dashCard">
          <Row>
            <Col xs={12} className="d-flex mb-3 mb-lg-4 gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">View Service</h2>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col xs={12} className="service-banner">
              <img className="img-fluid" src={serviceDetails?.photo} />
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              className="d-flex flex-column flex-sm-row mb-3 mb-lg-4 gap-3"
            >
              <div className="detail-box flex-grow-1">
                <h6>Service Name</h6>
                <p className="mb-0">{serviceDetails.name}</p>
              </div>
              <div className="status-action">
                <Select
                  className={`tabel-select status${serviceDetails?.status_detail}`}
                  id={`status${serviceDetails?.id}`}
                  name="status"
                  label="Status:"
                  value={serviceDetails?.status_detail}
                  onChange={(e) => handleStatusChange(e, serviceDetails?.id)}
                  isInputNeeded={false}
                >
                  {statusOptions}
                </Select>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={10} xl={8} xxl={6}>
              <div className="detail-box flex-grow-1 mb-3 mb-lg-4">
                <h6>Description</h6>
                <p className="mb-0">{serviceDetails.description}</p>
              </div>
            </Col>
          </Row>
          <Row className="service-charges">
            {serviceDetails.is_quick_service && (
              <Col xs={12}>
                <h3 className="section-title mb-3 fw-medium text-capitalize mb-3 mb-lg-4">
                  Quick
                  <span className="quick-icon ms-3">
                    <img
                      src="/irshad/src/Assets/images/check.png"
                      alt="check"
                      className=""
                    />
                  </span>
                </h3>
              </Col>
            )}
            <Col xs={12}>
              <Row>
                <Col xs={12} lg={5}>
                  <h3 className="section-title mb-3 text-capitalize">
                    Standard Service Charges
                  </h3>
                  <div className="d-flex">
                    {[
                      {
                        label: "Chat",
                        min: "standard_chat_min",
                        max: "standard_chat_max",
                      },
                      {
                        label: "Call",
                        min: "standard_call_min",
                        max: "standard_call_max",
                      },
                      {
                        label: "Video Call",
                        min: "standard_video_min",
                        max: "standard_video_max",
                      },
                    ].map(({ label, min, max }) => (
                      <div className="detail-box flex-grow-1 w-75" key={label}>
                        <h6>{label}</h6>
                        <p className="mb-0">
                          {serviceDetails[min] != null &&
                          serviceDetails[max] != null
                            ? `$${serviceDetails[min]} - $${serviceDetails[max]}`
                            : "-"}
                        </p>
                      </div>
                    ))}
                  </div>
                </Col>

                {serviceDetails.is_quick_service && (
                  <Col xs={12} lg={5}>
                    <h3 className="section-title mb-3 text-capitalize">
                      Quick Service Charges
                    </h3>
                    <div className="d-flex">
                      {[
                        {
                          label: "Chat",
                          min: "quick_chat_min",
                          max: "quick_chat_max",
                        },
                        {
                          label: "Call",
                          min: "quick_call_min",
                          max: "quick_call_max",
                        },
                        {
                          label: "Video Call",
                          min: "quick_video_min",
                          max: "quick_video_max",
                        },
                      ].map(({ label, min, max }) => (
                        <div
                          className="detail-box flex-grow-1 w-75"
                          key={label}
                        >
                          <h6>{label}</h6>
                          <p className="mb-0">
                            {serviceDetails[min] != null &&
                            serviceDetails[max] != null
                              ? `$${serviceDetails[min]} - $${serviceDetails[max]}`
                              : "-"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
          <Row className="mt-4 mt-lg-5">
            <Col xs={12}>
              <h2 className="mainTitle fw-medium text-secondary">
                Appointment Logs
              </h2>
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
                        {item?.status === "InProgress"
                          ? "In-Progress"
                          : item?.status}
                      </td>
                      <td>
                        <div className="d-flex cp gap-3 tableAction align-items-center justify-content-center">
                          <span className="tooltip-toggle" aria-label="View">
                            {/* <Link
                              to={`/admin/consultant-management/${id}/services/${item.id}/booking-logs`}
                            > */}
                            <Link
                              to={`/admin/consultant-management/${id}/services/${item.id}/booking-logs`}
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
    </DashboardLayout>
  );
};

export default withModal(withFilters(ConsultantServicesDetails));
