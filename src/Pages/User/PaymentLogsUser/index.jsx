import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomTable from "../../../Components/CustomTable";
import { paymentLogsData } from "../../../Config/Data";
import { paymentLogsHeaders } from "../../../Config/TableHeaders";
import withFilters from "../../../HOC/withFilters ";
import withModal from "../../../HOC/withModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { usePageTitleUser } from "../../../Utils/helper";

const PaymentLogsUser = ({ filters, setFilters, pagination, updatePagination, showModal }) => {
  usePageTitleUser("Payment Logs");

  const [paymentData, setPaymentData] = useState([]);

  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  const fetchUsers = async () => {
    try {
      startSubmitting(true);
      const response = paymentLogsData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setPaymentData(data);
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
                <h2 className="fw-bold mb-0 page-title text-center">Payment Logs</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <CustomTable
                  filters={filters}
                  setFilters={setFilters}
                  loading={isSubmitting}
                  headers={paymentLogsHeaders}
                  showEntries={false}
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
                //   selectOptions={[
                //     {
                //       title: "Status",
                //       options: normalStatus,
                //     },
                //   ]}
                >
                  <tbody>
                    {paymentData?.map((item) => (
                      <tr key={item?.id}>
                        <td >{item.id}</td>
                        <td >{item?.booking_id}</td>
                        <td >{item?.payment_date}</td>
                        <td >{item?.total_amount}</td>
                        <td >{item?.recieved_amount}</td>
                        <td >{item?.commision}</td>
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

export default withModal(withFilters(PaymentLogsUser));
