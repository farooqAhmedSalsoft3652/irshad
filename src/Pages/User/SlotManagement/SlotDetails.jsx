import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomTable from "../../../Components/CustomTable";
import {
  slotManagementData,
  slotManagementHistoryData,
  slotsData,
} from "../../../Config/data";
import { slotHistoryHeaders } from "../../../Config/TableHeaders";
import withFilters from "../../../HOC/withFilters ";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { serialNum, usePageTitleUser } from "../../../Utils/helper";
import { Link, useParams } from "react-router-dom";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import SlotCard from "../../../Components/SlotCard";

const SlotDetails = ({
  filters,
  setFilters,
  pagination,
  updatePagination,
  showModal,
}) => {
  usePageTitleUser("Payment Logs");
  const { id } = useParams();

  const [daySlots, setDaySlots] = useState([]);

  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  const fetchUsers = async () => {
    try {
      startSubmitting(true);

      const response = slotManagementHistoryData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;

        const getSlotId = data?.find((item) => item.slot_id == Number(id));

        console.log(getSlotId, "getSlotId");

        const filteredSlots = slotsData?.detail?.data.filter(
          (item) => item.slot_id == getSlotId?.slot_id
        );

        setDaySlots(filteredSlots || []);

        console.log(filteredSlots, "filteredSlots 0.");

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
  }, [filters, slotsData, slotManagementHistoryData, id]);
  console.log(id, "id from params");

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
                      View History Slot
                    </h2>
                  </div>
                </div>
                <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-between">
                  <h5 className="">Week: 19 Oct-27 Oct 2024</h5>
                  <h5 className="">Working Hours: 19</h5>
                </div>
                <Row>
                  {daySlots?.map((daySlot, index) => (
                    <Col xs={12} lg={6} xl={3} key={index}>
                      <h2>{daySlot?.days?.day}</h2>
                      <SlotCard
                        day={daySlot?.day}
                        date={daySlot.date}
                        slots={daySlot.slots}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12}></Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default withModal(withFilters(SlotDetails));
