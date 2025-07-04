import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton from "../../../../Components/BackButton";
import CustomTable from "../../../../Components/CustomTable";
import { consultantCategoryData } from "../../../../Config/data";
import { consultantCategoryHeaders } from "../../../../Config/TableHeaders";
import { consultantRequestsStatus } from "../../../../Config/TableStatus";
import withFilters from "../../../../HOC/withFilters";
import { useFormStatus } from "../../../../Hooks/useFormStatus";
import {
  dateFormat,
  serialNum,
  statusClassMap,
  timeFormat2,
} from "../../../../Utils/helper";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import { Col, Row } from "react-bootstrap";
import TableDropdown from "../../../../Components/TableDropdown";

const ScreeningCategory = ({
  filters,
  setFilters,
  pagination,
  updatePagination,
}) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [consultantcategory, setCategory] = useState(
    consultantCategoryData.detail.data
  );

  const fetchCategory = async () => {
    try {
      startSubmitting(true);
      const response = consultantCategoryData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setCategory(data);
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
    fetchCategory();
  }, [filters]);

  return (
    <DashboardLayout pageTitle="Consultant Requests">
      <div className="container-fluid">
        <div className="dashCard">
          <Row className="mb-2 page-header">
            <Col xs={12} className="">
              <div className="d-flex gap-2">
                <BackButton2 />
                <h2 className="align-self-start mainTitle mb-0">Category</h2>
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12}>
              <CustomTable
                filters={filters}
                setFilters={setFilters}
                loading={isSubmitting}
                headers={consultantCategoryHeaders}
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
                  {consultantcategory?.map((item, index) => (
                    <tr key={item?.id}>
                      <td>
                        {serialNum(
                          (filters.page - 1) * filters.per_page + index + 1
                        )}
                      </td>
                      <td>{item?.category}</td>
                      <td>{timeFormat2(item?.update_on)}</td>
                      <td>
                        <TableDropdown
                          view
                          itemId={Number(item?.id)}
                          linkPath="/admin/subscription-management/"
                          add
                        />
                        {/* <div className="d-flex cp gap-3 tableAction align-items-center justify-content-center">
                          <span className="tooltip-toggle" aria-label="View">
                            <Link to={`${item.id}`}>
                              <FaEye size={20} />
                            </Link>
                          </span>
                        </div> */}
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

export default withFilters(ScreeningCategory);
