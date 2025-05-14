import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import CustomTable from "../../../Components/CustomTable";
import { serviceProvidersRequestsData } from "../../../Config/data";
import { serviceProvidersRequestHeaders } from "../../../Config/TableHeaders";
import { serviceProvidersRequestsStatus } from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters ";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { dateFormat, serialNum, statusClassMap } from "../../../Utils/helper";

const ServiceProviderRequests = ({ filters, setFilters, pagination, updatePagination }) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [serviceProvidersRequests, setServiceProvidersRequests] = useState(serviceProvidersRequestsData.detail.data);

  const fetchServiceProvidersRequets = async () => {
    try {
      startSubmitting(true);
      const response = serviceProvidersRequestsData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setServiceProvidersRequests(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page),
        });
      }
    } catch (error) {
      console.error("Error fetching requests:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    fetchServiceProvidersRequets();
  }, [filters]);

  return (
    <DashboardLayout pageTitle="Service Provider's Requests">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 ">
            <div className="d-flex my-4">
              <BackButton />
              <h2 className="mainTitle mb-0">Service Provider's Requests</h2>
            </div>
            <div className="dashCard">
              <div className="row mb-3">
                <div className="col-12">
                  <CustomTable
                    filters={filters}
                    setFilters={setFilters}
                    loading={isSubmitting}
                    headers={serviceProvidersRequestHeaders}
                    pagination={pagination}
                    dateFilters={[
                      {
                        title: "Requested Date",
                        from: "fromDate",
                        to: "toDate",
                      },
                    ]}
                    selectOptions={[
                      {
                        title: "Status",
                        options: serviceProvidersRequestsStatus,
                      },
                    ]}
                  >
                    <tbody>
                      {serviceProvidersRequests?.map((item, index) => (
                        <tr key={item?.id}>
                          <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                          <td>{item?.serviceProviderName}</td>
                          <td>{dateFormat(item?.requestedOn)}</td>
                          <td className={statusClassMap[item?.status_detail]}>{item?.status_detail}</td>
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

export default withFilters(ServiceProviderRequests);
