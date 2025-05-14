import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import CustomTable from "../../../Components/CustomTable";
import { serviceProvidersData } from "../../../Config/data";
import { serviceProviderServicesHeaders } from "../../../Config/TableHeaders";
import { normalStatus, statusOptions } from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters ";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { dateFormat, serialNum } from "../../../Utils/helper";
import { Select } from "../../../Components/Select";
import { FaEye } from "react-icons/fa";

const ServiceProviderServices = ({ showModal, filters, setFilters, pagination, updatePagination }) => {
  const { id } = useParams();
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [services, setServices] = useState([]);

  const fetchServiceProvidersServices = async () => {
    try {
      startSubmitting(true);
      const response = serviceProvidersData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setServices(data.find((provider) => provider.id === id)?.services);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page),
        });
      }
    } catch (error) {
      console.error("Error fetching Services:", error);
    } finally {
      stopSubmitting(false);
    }
  };
  // Handle status change
  const handleStatusChange = (e, id) => {
    const newStatusValue = e;
    // Open the modal for confirmation
    showModal(
      `${newStatusValue === "1" ? "Active" : "Inactive"} service`,
      `Are you sure you want to ${newStatusValue === "1" ? "Activate" : "Inactivate"} this service?`,
      () => onConfirmStatusChange(id, newStatusValue)
    );
  };

  // Confirm status change and update the state
  const onConfirmStatusChange = async (row, newStatusValue) => {
    // Update the status in the Services state
    setServices((prevData) => prevData.map((item) => (item.id === row ? { ...item, status_detail: newStatusValue } : item)));
    showModal("Successful", `This Service has been ${newStatusValue === "1" ? "Activated" : "Inactivated"} successfully!`, null, true);
  };

  useEffect(() => {
    fetchServiceProvidersServices();
  }, [filters]);

  return (
    <DashboardLayout pageTitle="All Services">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 ">
            <div className="d-flex my-4">
              <BackButton />
              <h2 className="mainTitle mb-0">All Services</h2>
            </div>
            <div className="dashCard">
              <div className="row mb-3">
                <div className="col-12">
                  <CustomTable
                    filters={filters}
                    setFilters={setFilters}
                    loading={isSubmitting}
                    headers={serviceProviderServicesHeaders}
                    pagination={pagination}
                    dateFilters={[
                      {
                        title: "Creation Date",
                        from: "fromDate",
                        to: "toDate",
                      },
                    ]}
                    selectOptions={[
                      {
                        title: "Status",
                        options: normalStatus,
                      },
                    ]}
                  >
                    <tbody>
                      {services?.map((item, index) => (
                        <tr key={item?.id}>
                          <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                          <td>{item?.serviceName}</td>
                          <td>{item?.serviceCategory}</td>
                          <td>{dateFormat(item?.creationDate)}</td>
                          <td>{item?.serviceCharges}</td>
                          <td>{item?.serviceType}</td>
                          {/* Status column with Select dropdown */}
                          <td>
                            <Select
                              className={`tabel-select status${item?.status_detail}`}
                              required
                              id={`status${item?.id}`}
                              name="status"
                              value={item?.status_detail}
                              onChange={(e) => handleStatusChange(e, item?.id)}
                              isInputNeeded={false}
                            >
                              {statusOptions}
                            </Select>
                          </td>
                          <td>
                            <div className="d-flex cp gap-3 tableAction align-items-center justify-content-center">
                              <span className="tooltip-toggle" aria-label="View">
                                <Link to={`${item.id}`}>
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
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(withFilters(ServiceProviderServices));
