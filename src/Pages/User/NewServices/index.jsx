import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CustomFilters from "../../../Components/CustomFilters";
import { newServicesData } from "../../../Config/data";
import withFilters from "../../../HOC/withFilters ";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import CustomPagination from "../../../Components/CustomPagination";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { usePageTitle } from "../../../Utils/helper";
import CustomButton from "../../../Components/CustomButton";

const NewServices = ({ filters, setFilters, pagination, updatePagination }) => {
  usePageTitle("New Services", true);

  const [services, setServices] = useState([]); // Initialize as an array
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [selectedService, setSelectedService] = useState(null);

  const navigate = useNavigate();

  const fetchBookings = async () => {
    try {
      startSubmitting(true);
      const response = newServicesData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setServices(data.map((service) => ({ ...service, selected: false })));
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

  // Handle card selection
  const handleCardSelect = (item) => {
    // Toggle selection for the clicked card
    const updatedServices = services.map((service) => ({
      ...service,
      selected: service.id === item.id ? !service.selected : false,
    }));

    setServices(updatedServices);

    // Update selectedService state
    const selected = updatedServices.find((s) => s.selected);
    setSelectedService(selected || null);
  };

  // Handle next button click
  const handleNextClick = () => {
    if (selectedService) {
      navigate("/new-services/add", {
        state: {
          title: selectedService.title,
          id: selectedService.id,
        },
      });
    }
  };

  return (
    <>
      <section className="page-content add-services">
        <Container fluid>
          <Row>
            <Col xs={12} className="text-center mb-3">
              <h2 className="fw-bold mb-1 mb-md-0 page-title">New Services</h2>
              <h3 className="fw-regular mb-1 mb-md-0 page-title">
                Category Name
              </h3>
            </Col>
            <Col xs={12}>
              <div className="d-flex flex-column flex-md-row service-header mb-2">
                <div className="flex-grow-1 align-self-center">
                  <h4 className="fw-bold mb-2 mb-md-0">Choose Sub Category</h4>
                </div>
                <div className="flex-shrink-0 d-flex justify-content-end gap-3">
                  <div className="searchWrapper">
                    <input
                      type="text"
                      placeholder="Search..."
                      name="search"
                      className="site-input filterInput searchInput form-control"
                    />
                    <button className="searchButton notButton">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="magnifying-glass"
                        className="svg-inline--fa fa-magnifying-glass "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  {/* <CustomFilters
                    className="w-100"
                    filters={filters}
                    setFilters={setFilters}
                    showEntries={false}
                    showFilter={false}
                  /> */}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            {services?.map((item, index) => (
              <Col
                xs={12}
                md={6}
                lg={4}
                xl={4}
                xxl={3}
                key={index}
                className="mb-3 mb-xl-4 mb-xxl-5"
              >
                <Card
                  className={`new-service-card ${
                    item.selected ? "selected" : ""
                  }`}
                  role="button"
                  onClick={() => handleCardSelect(item)}
                >
                  <div className={item.selected ? "selected-card" : ""}>
                    <Card.Header className="position-relative p-0 bg-transparent border-0">
                      <Card.Img
                        variant="top"
                        src={item.image}
                        alt={item.title}
                      />
                      {item.selected && (
                        <div className="selected-overlay">
                          <span className="selected-icon">✓</span>
                        </div>
                      )}
                    </Card.Header>
                    <Card.Title className="mb-0 py-3 px-4 fw-medium position-absolute">
                      {item.title}
                    </Card.Title>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Next button - only show when a card is selected */}
          {selectedService && (
            <Row>
              <Col className="text-center">
                <CustomButton
                  variant="primary"
                  className="min-width-200"
                  text="Next"
                  type="button"
                  onClick={handleNextClick}
                />
              </Col>
            </Row>
          )}

          {/* <CustomPagination
            pagination={pagination}
            setFilters={setFilters}
          /> */}
        </Container>
      </section>
    </>
  );
};

export default withFilters(NewServices);
