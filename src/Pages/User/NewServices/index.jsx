import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { images } from "../../../Assets";
import "./style.css";
import CustomFilters from "../../../Components/CustomFilters";
import CustomButton from "../../../Components/CustomButton";
import { newServicesData } from "../../../Config/data";
import { normalStatus, serviceCategories } from "../../../Config/TableStatus";
import withFilters from "../../../HOC/withFilters ";
import ServicesCard from "../../../Components/UserComponents/ServicesCard";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import CustomPagination from "../../../Components/CustomPagination";
import { usePageTitle } from "../../../Utils/helper";
import GeneralCard from "../../../Components/UserComponents/GeneralCard";
import { Link } from "react-router-dom";

const NewServices = ({ filters, setFilters, pagination, updatePagination }) => {
  usePageTitle("New Services", true);

  const [services, setServices] = useState([]); // Initialize as an array
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();

  const fetchBookings = async () => {
    try {
      startSubmitting(true);
      const response = newServicesData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setServices(data);
        // updatePagination({
        //   showData: to,
        //   currentPage: current_page,
        //   totalRecords: total,
        //   totalPages: Math.ceil(total / per_page),
        // });
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

  return (
    <>
      <section className="page-content all-services">
        <Container fluid>
          <Row>
            <Col xs={12} className="text-center mb-3">
              <h2 className="fw-bold mb-0 page-title">New Services</h2>
              <h3 className="fw-regular mb-0 page-title">Category Name</h3>
            </Col>
            <Col xs={12}>
              <div className="d-flex service-header mb-2">
                <div className="flex-shrink-0 align-self-center">
                  <h4 className="fw-bold mb-0">Choose sub Category</h4>
                </div>
                <div className="flex-grow-1 d-flex justify-content-end gap-3">
                  <CustomFilters
                    filters={filters}
                    setFilters={setFilters}
                    showEntries={false}
                    showFilter={false}
                    // selectOptions={props?.selectOptions}
                    // dateFilters={props?.dateFilters}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            {services?.map((item, index) => (
              <Col
                xs={12}
                lg={3}
                xl={3}
                key={index}
                className="mb-3 mb-xl-4 mb-xxl-5"
              >
                <Card className={`new-service-card`}>
                  <Link to={`/provider/select-services/add`}>
                    <Card.Header className="position-relative p-0 bg-transparent border-0">
                      <Card.Img
                        variant="top"
                        src={item.image}
                        alt={item.title}
                      />
                    </Card.Header>
                    <Card.Title className="mb-0 py-3 px-4 fw-medium position-absolute">
                      {item.title}
                    </Card.Title>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
          <CustomPagination
            pagination={pagination}
            setFilters={setFilters}

            // showingItem={props.showingItem}
            // totalItems={props.totalItems}
            // currentPage={props.currentPage}
            // totalPages={props.totalPages}
            // setCurrentPage={props.setCurrentPage}
          />
        </Container>
      </section>
    </>
  );
};

// export default Services
export default withFilters(NewServices);
