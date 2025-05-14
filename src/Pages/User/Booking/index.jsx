import {React, useState, useEffect} from "react";
import { Col, Container, Row, Tab , Nav} from "react-bootstrap";
import { dateFormat, serialNum, usePageTitle } from "../../../Utils/helper";
import withFilters from "../../../HOC/withFilters ";
import { bookingStatus, bookingType, normalStatus } from "../../../Config/TableStatus";
import CustomTable from "../../../Components/CustomTable";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { bookingsHeaders  } from "../../../Config/TableHeaders";
import { bookingsData  } from "../../../Config/data";
import TableDropdownUser from "../../../Components/TableDropdown/TableDropdownUser";


const Bookings = ({filters, setFilters, pagination, updatePagination}) => {
  usePageTitle("Booking", true);

  const [bookingData, setBookingData] = useState([]);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  
  const fetchBookings = async () => {
    try {
      startSubmitting(true);
      const response = bookingsData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setBookingData(data);
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
  
  console.log("Data",bookingData)

    
  const [activeTab, setActiveTab] = useState("all-tab");

  const filteredData = bookingData.filter((item) => {
    if (activeTab === "all-tab") {
      return true;
    } else if (activeTab === "pending-tab") {
      return item.approval_status?.toLowerCase() === "pending";
    } else if (activeTab === "requested-tab") {
      return item.approval_status?.toLowerCase() === "requested";
    } else if (activeTab === "approved-tab") {
      return item.approval_status?.toLowerCase() === "approved";
    } else if (activeTab === "rejected-tab") {
      return item.approval_status?.toLowerCase() === "rejected";
    }
    return false; 
  });

  // console.log(activeTab)
  
  return (
    <>
        <section className="page-content booking-page">
          <Container fluid>
            <Row>
              <Col xs={12} className="mb-3 mb-lg-4">
                <h2 className='fw-bold mb-0 page-title'>  My Bookings</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12}> 
                <Tab.Container 
                  defaultActiveKey="all-tab" 
                  onSelect={(key) => setActiveTab(key)} // Update active tab
                >
                  <Nav variant="pills" className="mb-4 justify-content-center gap-3 gap-xl-4 gap-xxl-5">
                    <Nav.Item>
                      <Nav.Link eventKey="all-tab">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="pending-tab">Pending</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="requested-tab">Requested</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="approved-tab">Approved</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="rejected-tab">Rejected</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey={activeTab}>
                      {/* Render Single Table with Filtered Data */}
                      <CustomTable
                        filters={filters}
                        setFilters={setFilters}
                        loading={isSubmitting}
                        headers={bookingsHeaders}
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
                            options: bookingStatus
                          },
                          {
                            title: "Appointment Type",
                            options: bookingType
                          }
                        ]}
                      >
                        <tbody>
                          {filteredData?.map((item, index) => (
                            <tr key={item?.id}>
                              <td>{serialNum((filters.page - 1) * filters.per_page + index + 1)}</td>
                              <td>{item?.booking_id}</td>
                              <td>{dateFormat(item?.booking_date)}</td>
                              <td>${item?.charges}</td>
                              <td className="text-capitalize">
                                <span className={`ms-0 status-tag text-capitalize ${
                                  item.type?.toLowerCase() == "onsite" ? 'text-blue' :
                                  item.type?.toLowerCase() == "online" ? 'text-green' 
                                  : ''}`}
                                >
                                  {item.type}
                                </span>
                              </td>
                              <td>
                                <span className={`ms-0 status-tag text-capitalize ${
                                  item.approval_status?.toLowerCase() == "approved" ? 'text-green' :
                                  item.approval_status?.toLowerCase() == "pending" ? 'tag-yellow' :
                                  item.approval_status?.toLowerCase() == "requested" ? 'text-blue' :
                                  item.approval_status?.toLowerCase() == "rejected" ? 'tag-red'
                                  : ''}`}
                                >
                                  {item.approval_status}
                                </span>
                              </td>
                              <td>
                                <span className={`ms-0 status-tag text-capitalize ${
                                  item.status?.toLowerCase() == "upcoming" ? 'text-blue' :
                                  item.status?.toLowerCase() == "past" ? 'tag-red' :
                                  item.status?.toLowerCase() == "in-progress" ? 'text-yellowGreen'
                                  : ''}`}
                                >
                                  {item.status}
                                </span>
                              </td>
                              <td>
                                <TableDropdownUser
                                  view
                                  itemId={item.id}
                                  linkPath="/bookings"
                                  statusDetail={item.status_detail}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </CustomTable> 
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
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

export default withFilters(Bookings);