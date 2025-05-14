import {React, useState, useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { dateFormat, serialNum, usePageTitle } from "../../../Utils/helper";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import withFilters from "../../../HOC/withFilters ";
import { normalStatus } from "../../../Config/TableStatus";
import CustomTable from "../../../Components/CustomTable";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import {  subscriptionLogUserHeaders, } from "../../../Config/TableHeaders";
import { subscriptionLogsUserData, } from "../../../Config/data";

const SubscriptionLogsUser = ({filters, setFilters, pagination, updatePagination}) => {
  usePageTitle("Subscription Logs", true); 

  const [logsData, setLogsData] = useState([]);

  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  
  const fetchUsers = async () => {
    try {
      startSubmitting(true);
      const response = subscriptionLogsUserData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setLogsData(data);
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
  
  console.log("Data",logsData)

    
  return (
    <>
        <section className="page-content subscriptions-logs">
          <Container fluid>
            <Row>
              <Col xs={12} className="mb-3 mb-lg-4">
                <h2 className='fw-bold mb-0 page-title'><BackButton2 className="me-2" />Subscription Logs</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
              
                   <CustomTable
                      filters={filters}
                      setFilters={setFilters}
                      loading={isSubmitting}
                      headers={subscriptionLogUserHeaders}
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
                          options: normalStatus
                        }
                      ]}
                    >
                      <tbody>
                        {logsData?.map((item, index) => (
                          <tr key={item?.id}>
                            <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                            <td>{item?.planName}</td>
                            <td>${item?.price}</td>
                            <td>{dateFormat(item?.purchase_date)}</td>
                            <td>{dateFormat(item?.expiry_date)}</td>
                            <td className={`${item?.status_detail === "0" ? "text-danger" : "text-success"}`}>
                              {item?.status_detail === "0" ? "Expired" : "Active"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </CustomTable> 
              </Col>
            </Row>

          

            
          </Container>
        </section>

    </>
  );
};
// Additional Filters
// Additional Filters
// const additionalFilters = {
//   expiryFromDate: "",
//   expiryToDate: "",
// };

export default withFilters(SubscriptionLogsUser);