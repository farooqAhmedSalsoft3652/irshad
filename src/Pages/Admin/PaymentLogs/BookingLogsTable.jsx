import React, { useEffect, useState } from "react";
import { serialNum } from "../../../Utils/helper";
import { paymentLogsBookingData } from "../../../Config/data";
import { isNullOrEmpty } from "../../../Utils/helper";
import { paymentLogBookingHeaders } from "../../../Config/TableHeaders";
import CustomTable from "../../../Components/CustomTable";
import withFilters from "../../../HOC/withFilters ";
import { useFormStatus } from "../../../Hooks/useFormStatus";

const BookingLogsTable = ({ filters, setFilters, pagination, updatePagination }) => {
  const [bookingLogs, setBookingLogs] = useState([]);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  const fetchBookingLogs = async () => {
    try {
      startSubmitting(true);
      const response = paymentLogsBookingData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setBookingLogs(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page),
        });
      }
    } catch (error) {
      console.error("Error fetching Booking Logs:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    fetchBookingLogs();
  }, [filters]);

  if (isNullOrEmpty(bookingLogs)) {
    return (
      <div className="dashCard mt-4">
        <div className="row mb-3">
          <div className="col-12">loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashCard mt-4">
      <div className="row mb-3">
        <div className="col-12">
          <CustomTable
            filters={filters}
            setFilters={setFilters}
            loading={isSubmitting}
            headers={paymentLogBookingHeaders}
            pagination={pagination}
            dateFilters={[
              {
                title: "Booking Date",
                from: "fromDate",
                to: "toDate",
              },
            ]}
          >
            <tbody>
              {bookingLogs?.map((item, index) => (
                <tr key={item?.id}>
                  <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                  <td>{item?.bookingId}</td>
                  <td>{item?.bookingCharges}</td>
                  <td>{item?.commission}</td>
                  <td>{item?.bookingDate}</td>
                  <td>{item?.paymentDate}</td>
                </tr>
              ))}
            </tbody>
          </CustomTable>
        </div>
      </div>
    </div>
  );
};

export default withFilters(BookingLogsTable);
