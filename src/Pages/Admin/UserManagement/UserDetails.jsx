import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
// import { getDetails } from "../../../Services/Api";
import { FaEye } from "react-icons/fa";
import { images } from "../../../Assets";
import CustomTable from "../../../Components/CustomTable";
import { Select } from "../../../Components/Select";
import { userAppointmentLogsData, userManagementData, userOrderLogsData } from "../../../Config/data";
import { appointmentHeader, orderLogsHeader } from "../../../Config/TableHeaders";
import { AppointmentType, appointmentStatus, orderStatus, statusOptions } from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters ";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { dateFormat, getCountryFlag, serialNum, statusClassMap, statusClassMap2 } from "../../../Utils/helper";

const UserDetails = ({ showModal, filters, setFilters, pagination, updatePagination }) => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState({});

  const [appointmentLogs, setAppointmentLogs] = useState([]);
  const [orderLogs, setOrderLogs] = useState([]);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  const fetchUsers = async () => {
    try {
      startSubmitting(true);
      // const url = `/admin-api/users`;
      // const response = await getAll(url, filters);
      const response = userAppointmentLogsData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setAppointmentLogs(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page)
        });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      stopSubmitting(false);
    }
  };
  const fetchOrders = async () => {
    try {
      startSubmitting(true);
      // const url = `/admin-api/users`;
      // const response = await getAll(url, filters);
      const response = userOrderLogsData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setOrderLogs(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page)
        });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const response = userManagementData.detail.data.find((e) => e.id === Number(id));

      // const response = await getDetails(`/admin-api/users/${id}`);
      if (response) {
        // setProfileData(response.detail);
        setProfileData(response);
      }
    };
    getUser();
  }, [id]);
  useEffect(() => {
    fetchUsers();
    fetchOrders();
  }, [filters]);

  // Handle status change
  const handleStatusChange = (e, userId) => {
    const newStatusValue = e;
    // Open the modal for confirmation
    showModal(
      `Mark as ${newStatusValue === "1" ? "Active" : "Inactive"}`,
      `Are you sure you want to change this user's status to ${newStatusValue === "1" ? "Active" : "Inactive"}?`,
      () => onConfirmStatusChange(userId, newStatusValue)
    );
  };

  // Confirm status change and update the state
  const onConfirmStatusChange = async (userId, newStatusValue) => {
    // Update the status in the appointmentLogs state
    setProfileData({ ...profileData, status_detail: newStatusValue });
    showModal("Successful", `User status has been changed to ${newStatusValue === "1" ? "Active" : "Inactive"} successfully.`, null, true);
  };

  const { email, phone_number, user_name, relationship, language } = profileData;
  return (
    <DashboardLayout pageTitle="User Details">
      <div className="row my-3">
        <div className="col-12">
          <div className="d-flex">
            <BackButton />
            <h2 className="mainTitle mb-0">User Details</h2>
          </div>
        </div>
      </div>
      <div className="dashCard ">
        <div className="row ">
          <div className="col-12">
            <div className="d-flex flex-column flex-sm-row mb-4  gap-3">
              <div className="profileImage">
                <img src={profileData?.UserImage ?? images.placeholder} alt="User" />
              </div>
              <div className="flex-grow-1 d-flex justify-content-start justify-content-sm-end">
                <div className="profile-status d-flex  align-items-end flex-column gap-3">
                  <div className="status-action">
                    <Select
                      className={`tabel-select status${profileData?.status_detail}`}
                      id={`status${profileData?.id}`}
                      name="status"
                      label="Status:"
                      value={profileData?.status_detail}
                      onChange={(e) => handleStatusChange(e, profileData?.id)}
                      isInputNeeded={false}
                    >
                      {statusOptions}
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10">
                <div className="row my-4">
                  {[
                    { label: "User Name", value: user_name },
                    { label: "Email Address", value: email },
                    { label: "Phone Number", value: phone_number },
                    { label: "Language", value: language },
                    { label: "relationship", value: relationship }
                  ].map(({ label, value }) => (
                    <div className="col-lg-4 col-md-6 mb-3" key={label}>
                      <h4 className="secondaryLabel">{label}</h4>
                      <p className="secondaryText wrapText mb-0">
                        {label === "Phone Number" && <span>{getCountryFlag(value)}</span>} {value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="row">
                  <div className="col-12">
                    <Link to={"/admin/posts"} className="site-btn primary-btn text-decoration-none">
                      View Posts
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashCard mt-4">
        <div className="row mb-3">
          <div className="col-12">
            <h2 className="mainTitle">appointment Logs</h2>
          </div>
          <div className="col-12">
            <CustomTable
              filters={filters}
              setFilters={setFilters}
              loading={isSubmitting}
              headers={appointmentHeader}
              pagination={pagination}
              // if you want multiple date filters
              dateFilters={[
                {
                  title: "date",
                  from: "fromDate",
                  to: "toDate"
                }
              ]}
              selectOptions={[
                {
                  title: "appointment type",
                  options: AppointmentType
                },
                {
                  title: "status",
                  options: appointmentStatus
                }
              ]}
            >
              <tbody>
                {appointmentLogs?.map((item, index) => (
                  <tr key={item?.id}>
                    <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                    <td>{item?.appointment_iD}</td>
                    <td>{item?.appointment_type}</td>
                    <td>{dateFormat(item?.date)}</td>
                    <td>{item?.charges}</td>
                    <td className={statusClassMap[item?.status]}>{item?.status}</td>
                    <td>
                      <div className="d-flex cp gap-3 tableAction align-items-center justify-content-center">
                        <span className="tooltip-toggle" aria-label="View">
                          <Link to={`/admin/appointments/${item.id}`}>
                            <FaEye size={20} color="#1819ff" />
                          </Link>
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </CustomTable>
          </div>
        </div>
      </div>
      <div className="dashCard mt-4">
        <div className="row mb-3">
          <div className="col-12">
            <h2 className="mainTitle">orders Logs</h2>
          </div>
          <div className="col-12">
            <CustomTable
              filters={filters}
              setFilters={setFilters}
              loading={isSubmitting}
              headers={orderLogsHeader}
              pagination={pagination}
              // if you want multiple date filters
              dateFilters={[
                {
                  title: "order date",
                  from: "fromDate",
                  to: "toDate"
                }
              ]}
              selectOptions={[
                {
                  title: "status",
                  options: orderStatus
                }
              ]}
            >
              <tbody>
                {orderLogs?.map((item, index) => (
                  <tr key={item?.id}>
                    <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                    <td>{item?.order_iD}</td>
                    <td>{dateFormat(item?.date)}</td>
                    <td>{item?.amount}</td>
                    <td className={statusClassMap2[item?.status]}>{item?.status}</td>
                    <td>
                      <div className="d-flex cp gap-3 tableAction align-items-center justify-content-center">
                        <span className="tooltip-toggle" aria-label="View">
                          <Link to={`/admin/order/${item.orderid}`}>
                            <FaEye size={20} color="#1819ff" />
                          </Link>
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </CustomTable>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
//Additional Filters
const additionalFilters = {
  type: "",
  expiryFromDate: "",
  expiryToDate: ""
};
export default withModal(withFilters(UserDetails, additionalFilters));
