import {React, useState, useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { dateFormat, serialNum, usePageTitle } from "../../../Utils/helper";
import withFilters from "../../../HOC/withFilters ";
import { normalStatus } from "../../../Config/TableStatus";
import CustomTable from "../../../Components/CustomTable";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import {  blockUserHeaders, } from "../../../Config/TableHeaders";

import { blockUserData } from "../../../Config/Data";
import { Link } from "react-router-dom";
import "./style.css"
import withModal from "../../../HOC/withModal";

const BlockedUsers = ({filters, setFilters, pagination, updatePagination, showModal}) => {
  usePageTitle("Blocked users", true); 

  const [userData, setUserData] = useState([]);

  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  
  const fetchUsers = async () => {
    try {
      startSubmitting(true);
      const response = blockUserData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setUserData(data);
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
  

  const onUnblock = async (id) => {
    console.log("test")
    showModal(
      "Block User",
      "Are you sure you want to unblock this user",
      () => updateApprove(id),
      false 
    );
  };
  const updateApprove = async (status, id) => {
    showModal(
      `successful`,
      `User successfully unblocked.`,
      null,
      true
    );
  };

    
  return (
    <>
        <section className="page-content block-user">
          <Container fluid>
            <Row>
              <Col xs={12} className="mb-3 mb-lg-4">
                <h2 className='fw-bold mb-0 page-title'>Blocked users</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
              
                   <CustomTable
                      filters={filters}
                      setFilters={setFilters}
                      loading={isSubmitting}
                      headers={blockUserHeaders}
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
                        {userData?.map((item, index) => (
                          <tr key={item?.id}>
                            <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                            <td>{item?.type}</td>
                            <td>{item?.user_name}</td>
                            <td>
                              <Link className="" onClick={onUnblock}>Unblock</Link>
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

export default withModal(withFilters(BlockedUsers));