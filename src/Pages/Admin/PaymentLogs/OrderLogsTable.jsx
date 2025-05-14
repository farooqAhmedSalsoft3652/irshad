import React, { useEffect, useState } from "react";
import CustomTable from "../../../Components/CustomTable";
import withFilters from "../../../HOC/withFilters ";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { serialNum } from "../../../Utils/helper";
import { paymentLogOrderHeaders } from "../../../Config/TableHeaders";
import { paymentLogsOrderData } from "../../../Config/data";
import { isNullOrEmpty } from "../../../Utils/helper";

const OrderLogsTable = ({ filters, setFilters, pagination, updatePagination }) => {
  const [orderLogs, setOrderLogs] = useState([]);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  const fetchOrders = async () => {
    try {
      startSubmitting(true);
      const response = paymentLogsOrderData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setOrderLogs(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page),
        });
      }
    } catch (error) {
      console.error("Error fetching Orders:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [filters]);

  if (isNullOrEmpty(orderLogs)) {
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
            headers={paymentLogOrderHeaders}
            pagination={pagination}
            dateFilters={[
              {
                title: "Order Date",
                from: "fromDate",
                to: "toDate",
              },
            ]}
          >
            <tbody>
              {orderLogs?.map((item, index) => (
                <tr key={item?.id}>
                  <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                  <td>{item?.orderId}</td>
                  <td>{item?.shopName}</td>
                  <td>{item?.customerName}</td>
                  <td>{item?.commission}</td>
                  <td>{item?.orderDate}</td>
                  <td>{item?.amount}</td>
                </tr>
              ))}
            </tbody>
          </CustomTable>
        </div>
      </div>
    </div>
  );
};

export default withFilters(OrderLogsTable);
