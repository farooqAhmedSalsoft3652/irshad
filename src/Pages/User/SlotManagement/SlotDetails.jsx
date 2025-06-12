import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import CustomButton from "../../../Components/CustomButton";
import SlotCard from "../../../Components/SlotCard";
import { slotManagementHistoryData, slotsData } from "../../../Config/data";
import withFilters from "../../../HOC/withFilters ";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { usePageTitleUser } from "../../../Utils/helper";

const SlotDetails = ({
  filters,
  setFilters,
  pagination,
  updatePagination,
  showModal,
  reasonModal
}) => {
  usePageTitleUser("Slots Details");
  const { id } = useParams();
  const navigate = useNavigate();

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

   const BookedAll = () => {
    reasonModal(
      "",
      "Are you sure you want to Book Next week?",
      (reason, id) => {
        BookedAllSuucces(reason, id);
      },
      false,
      true
    );
  };
  const BookedAllSuucces = async (reason, id) => {
    reasonModal(
      ``,
      `Booked Request for next week has been send Sucessfully. Wait for the admin's Apporval`,
      null, //action
      true //success
    );
  };

   const ReduceHours = () => {
    reasonModal(
      "",
      "Are you sure you want to reduce working hour for Next week?",
      (reason, id) => {
        ReduceHoursSuccess(reason, id);
      },
      false,
      true
    );
  };
  const ReduceHoursSuccess = async (reason, id) => {
    reasonModal(
      ``,
      `Your working hour deduction Request for the next week has been send Successfully. Wait for the admin's Approval`,
      null, //action
      true //success
    );
  };

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
                <Row className="g-3 g-lg-4">
                  {daySlots?.map((daySlot, index) => (
                    <Col xs={12} lg={6} xl={3} key={index}>
                      <SlotCard
                        day={daySlot?.day}
                        date={daySlot.date}
                        slots={daySlot.slots}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs={12} className="mt-4 d-flex gap-3">
                <CustomButton
                  variant="primary"
                  text="Create same slots for next week"
                  className="px-4"
                  onClick={() => navigate("/slot-management/add")}
                />
                <CustomButton
                  variant="secondary"
                  text="Reduce working hours for next week"
                  className="px-4"
                  onClick={ReduceHours}
                />
                <CustomButton
                  variant="secondary"
                  text="Booked All Next Week"
                  className="px-4"
                  onClick={BookedAll}
                />
                <Link
                  to={`/slot-management/${id}/edit`}
                  className="btn btn-secondary min-width-180"
                  // state={{ service_name: item.title }}
                >
                  Edit Slot
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default withModal(withFilters(SlotDetails));
