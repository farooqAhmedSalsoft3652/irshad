import { useEffect, useState } from "react";
import CustomTable from "../../../Components/CustomTable";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { paymentLogsBookingData } from "../../../Config/data";
import { paymentLogsAdminHeaders } from "../../../Config/TableHeaders";
import withFilters from "../../../HOC/withFilters ";
import withModal from "../../../HOC/withModal";
import { dateFormat, serialNum } from "../../../Utils/helper";
import { appointmentTypeOptions } from "../../../Config/TableStatus";

const PaymentLogs = ({ filters, setFilters, pagination, updatePagination, isSubmitting }) => {
  const [payoutLogs, setPayoutLogs] = useState([]);

  const fetchPaymentLogs = async () => {
    try {
      const response = paymentLogsBookingData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setPayoutLogs(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page),
        });
      }
    } catch (error) {
      console.error("Error fetching payoutLogs:", error);
    }
  };

  useEffect(() => {
    fetchPaymentLogs();
  }, [filters]);


  return (
    <DashboardLayout pageTitle="Payment Logs">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {/* Table Section */}
            <div className="dashCard">
              <div className="row mb-4">
                <div className="col-12">
                  <h2 className="mainTitle mb-0">Payment Logs</h2>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <h4 className="dashTitle fw-medium">Total Earning: $200</h4>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <CustomTable
                    filters={filters}
                    setFilters={setFilters}
                    loading={isSubmitting}
                    headers={paymentLogsAdminHeaders}
                    pagination={pagination}
                    dateFilters={[
                      {
                        title: "Booking Date",
                        from: "fromDate",
                        to: "toDate",
                        fromTitle: "From",
                        toTitle: "To",
                      },
                    ]}
                    selectOptions={[
                      {
                        main_title: "Booking Type Status",
                        title: "Booking Type",
                        options: appointmentTypeOptions,
                      },
                    ]}
                  >
                    <tbody>
                      {payoutLogs.map((item, index) => (
                        <tr key={item?.id}>
                          <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                          <td>{item.bookingId}</td>
                          <td>{item.bookingCharges}</td>
                          <td>{item.commission}</td>
                          <td>{item.bookingType}</td>
                          <td>{item?.bookingDate}</td>
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

export default withModal(withFilters(PaymentLogs));
