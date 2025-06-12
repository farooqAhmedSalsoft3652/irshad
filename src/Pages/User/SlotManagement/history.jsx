import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomTable from "../../../Components/CustomTable";
import {
  slotManagementData,
  slotManagementHistoryData,
} from "../../../Config/data";
import { slotHistoryHeaders } from "../../../Config/TableHeaders";
import withFilters from "../../../HOC/withFilters ";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { serialNum, usePageTitleUser } from "../../../Utils/helper";
import { Link, useParams } from "react-router-dom";
import BackButton2 from "../../../Components/BackButton/BackButton2";

const SlotsHistoryManagement = ({
  filters,
  setFilters,
  pagination,
  updatePagination,
  showModal,
}) => {
  usePageTitleUser("Slot History");
  const { id } = useParams();

  const [slotsData, setSlotsData] = useState([]);

  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  const fetchUsers = async () => {
    try {
      startSubmitting(true);

      const response = slotManagementData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;

        const getReferenceId = data?.find(
          (item) => item.reference_id == Number(id)
        );
        console.log(getReferenceId, "getReferenceId");
        const filteredSlots = slotManagementHistoryData?.detail?.data.filter(
          (item) => item.reference_id == getReferenceId?.reference_id
        );

        setSlotsData(filteredSlots || []);

        // console.log(filteredSlots, "filteredSlots 0.");

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
  }, [filters, slotManagementData, slotManagementHistoryData, id]);

  // console.log("slotsData", slotsData);

  // useEffect(() => {
  //   const response = postData?.data?.find((item) => item.id === Number(id));
  //   const matched = momentsData?.find((item) => item.user_id === response.user_id);
  //   setMatchedMoment(matched);
  // }, [id]);

  return (
    <>
      <Container fluid>
        <div className="py-sm-5 py-3 px-sm-0 px-1">
          <div className="site_card">
            <Row>
              <Col xs={12} className="mb-3 mb-lg-4">
                <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-between">
                  <div className="flex-shrink-0">
                    <BackButton2 />
                  </div>
                  <div className="flex-grow-1 text-center">
                    <h2 className="fw-bold mb-1  page-title">Slots History</h2>
                    <h3 className="fw-medium mb-0  page-title">Service ABC</h3>
                  </div>
                </div>
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
                  headers={slotHistoryHeaders}
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
                        <td>{slot?.reference_id}</td>
                        <td>
                          <Link
                            className="btn btn-link fw-medium"
                            to={`/slot-management/details/${slot?.id}`}
                            // state={{ service_name: item.title }}
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

export default withModal(withFilters(SlotsHistoryManagement));
