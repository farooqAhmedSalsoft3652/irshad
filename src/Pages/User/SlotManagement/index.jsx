import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomTable from "../../../Components/CustomTable";
import { slotManagementData } from "../../../Config/data";
import { slotManagementHeaders } from "../../../Config/TableHeaders";
import withFilters from "../../../HOC/withFilters ";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { serialNum, usePageTitleUser } from "../../../Utils/helper";
import { Link } from "react-router-dom";

const SlotManagement = ({
  filters,
  setFilters,
  pagination,
  updatePagination,
  showModal,
}) => {
  usePageTitleUser("Payment Logs");

  const [slotsData, setSlotsData] = useState([]);

  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  const fetchUsers = async () => {
    try {
      startSubmitting(true);
      const response = slotManagementData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setSlotsData(data);
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
    fetchUsers();
  }, [filters]);

  return (
    <>
      <Container fluid>
        <div className="py-sm-5 py-3 px-sm-0 px-1">
          <div className="site_card">
            <Row>
              <Col xs={12} className="mb-3 mb-lg-4">
                <h2 className="fw-bold mb-0 page-title text-center">
                  Slots Management
                </h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <CustomTable
                  // filters={filters}
                  // setFilters={setFilters}
                  showFilter={false}
                  // showEntries={false}
                  showSearch={false}
                  loading={isSubmitting}
                  headers={slotManagementHeaders}
                  pagination={pagination}
                >
                  <tbody>
                    {slotsData?.map((slot, index) => (
                      <tr key={slot?.id}>
                        <td>
                          {serialNum(
                            (filters.page - 1) * filters.per_page + index + 1
                          )}
                        </td>
                        <td>{slot?.reference?.name}</td>
                        <td>{slot?.reference?.category_name}</td>
                        <td>
                          <Link
                            className="btn btn-link fw-medium"
                            to={`/slot-management/history/${slot?.reference?.id}`}
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </CustomTable>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default withModal(withFilters(SlotManagement));
