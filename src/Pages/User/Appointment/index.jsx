import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomTable from "../../../Components/CustomTable";
import { appointmentsHeaders } from "../../../Config/TableHeaders";
import {
  appointmentsStatus,
  bookingStatus,
  bookingType,
  sessionTypeStatus,
} from "../../../Config/TableStatus";
import { appointmentsData } from "../../../Config/data";
import withFilters from "../../../HOC/withFilters ";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { dateFormat, serialNum, usePageTitleUser } from "../../../Utils/helper";

const Appointment = ({ filters, setFilters, pagination, updatePagination }) => {
  usePageTitleUser("Appointments");

  const [appointmentData, setAppointmentData] = useState([]);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  const fetchBookings = async () => {
    try {
      startSubmitting(true);
      const response = appointmentsData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setAppointmentData(data);
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
    fetchBookings();
  }, [filters]);

  // console.log("Data",bookingData)

  return (
    <Container fluid>
      <div className="py-sm-5 py-3 px-sm-0 px-1">
        <div className="site_card">
          <Row>
            <Col xs={12} className="mb-3 mb-lg-4 col-12">
              <h2 className="text-center fw-bold mb-0 page-title">
                Appointments
              </h2>
            </Col>
            <Col xs={12}>
              <CustomTable
                filters={filters}
                setFilters={setFilters}
                loading={isSubmitting}
                headers={appointmentsHeaders}
                pagination={pagination}
                dateFilters={[
                  {
                    title: "Date",
                    toTitle: "To",
                    fromTitle: "From",
                    from: "fromDate",
                    to: "toDate",
                  },
                ]}
                selectOptions={[
                  {
                    title: "Status",
                    options: appointmentsStatus,
                  },
                  {
                    title: "Filter By Session Type",
                    options: sessionTypeStatus,
                  },
                ]}
              >
                <tbody>
                  {appointmentData?.map((item, index) => (
                    <tr key={item?.id}>
                      <td>
                        {serialNum(
                          (filters.page - 1) * filters.per_page + index + 1
                        )}
                      </td>
                      <td>{item?.booking_id}</td>
                      <td>{dateFormat(item?.booking_date)}</td>
                      <td>{item?.appointment_type}</td>
                      <td>{item?.appointment_date}</td>
                      <td>{item?.session_type}</td>
                      <td>{item?.amount}</td>
                      <td
                        className={`text-capitalize`}
                        style={{
                          color:
                            item.status === "upcoming"
                              ? "#FDB332"
                              : item.status === "past"
                              ? "#0DCF38"
                              : item.status === "in-progress"
                              ? "#D27231"
                              : item.status === "cancelled"
                              ? "#FC0000"
                              : "black",
                        }}
                      >
                        {item.status}
                      </td>
                      <td>
                        <Link
                          className="underlineOnHover"
                          style={{ color: "#333" }}
                          to={`/appointments/${item?.id}`}
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
  );
};
// Additional Filters
// Additional Filters
// const additionalFilters = {
//   expiryFromDate: "",
//   expiryToDate: "",
// };

export default withFilters(Appointment);
