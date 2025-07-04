import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../../Components/BackButton";
import CustomTable from "../../../../Components/CustomTable";
import { consultantRequestsData } from "../../../../Config/data";
import { consultantRequestHeaders } from "../../../../Config/TableHeaders";
import { consultantRequestsStatus } from "../../../../Config/TableStatus";
import withFilters from "../../../../HOC/withFilters";
import { useFormStatus } from "../../../../Hooks/useFormStatus";
import {
  dateFormat,
  serialNum,
  statusClassMap,
} from "../../../../Utils/helper";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import { Col, Row } from "react-bootstrap";

const ConsultantRequests = ({
  filters,
  setFilters,
  pagination,
  updatePagination,
}) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [consultantRequests, setConsultantRequests] = useState(
    consultantRequestsData.detail.data
  );

  const fetchServiceProvidersRequets = async () => {
    try {
      startSubmitting(true);
      const response = consultantRequestsData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setConsultantRequests(data);
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
    <DashboardLayout pageTitle="Consultant Requests">
      <div className="container-fluid">
        <div className="dashCard">
          <Row className="mb-2 page-header">
            <Col xs={12} className="">
              <div className="d-flex gap-2">
                <BackButton2 />
                <h2 className="align-self-start mainTitle mb-0">
                  Consultant Requests
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12}>
              <CustomTable
                filters={filters}
                setFilters={setFilters}
                loading={isSubmitting}
                headers={consultantRequestHeaders}
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
                    options: consultantRequestsStatus,
                  },
                ]}
              >
                <tbody>
                  {consultantRequests?.map((item, index) => (
                    <tr key={item?.id}>
                      <td>
                        {serialNum(
                          (filters.page - 1) * filters.per_page + index + 1
                        )}
                      </td>
                      <td>{item?.first_name}</td>
                      <td>{item?.last_name}</td>
                      <td>{item?.category}</td>
                      <td>{dateFormat(item?.requested_on)}</td>
                      <td className={statusClassMap[item?.status_detail]}>
                        {item?.status_detail}
                      </td>
                      <td>
                        <div className="d-flex cp gap-3 tableAction align-items-center justify-content-center">
                          <span className="tooltip-toggle" aria-label="View">
                            <Link to={`${item.id}`}>
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

export default withFilters(ConsultantRequests);
