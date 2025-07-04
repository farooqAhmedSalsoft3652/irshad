import { Button, Col, ProgressBar, Row } from "react-bootstrap";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { useState } from "react";

const ShowReport = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState("Jan");

  const years = [2019, 2020, 2021, 2022, 2023, 2024];
  const months = ["Jan", "Feb", "Mar", "Jun", "Aug", "Jul", "Sep", "Dec"];

  const categoryData = [90, 80, 70, 60, 50, 40, 30, 20, 10, 5];
  const consultantData = [90, 80, 70, 60, 50, 40, 30, 20, 10, 5];
  return (
    <DashboardLayout pageTitle="Show Report">
      <div className="container-fluid app-report">
        <div className="dashCard">
          <Row className="mb-4 page-header">
            <Col xs={12} className="">
              <div className="d-flex gap-2">
                <BackButton2 />
                <h2 className="align-self-start mainTitle mb-0">Show Report</h2>
              </div>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={6} className="mb-3">
              <div className="statsCard">
                <h6 className="text-uppercase">
                  Total Services Bought in (Month)
                </h6>
                <h3>100</h3>
              </div>
            </Col>
            <Col md={6} className="mb-3">
              <div className="statsCard">
                <h6 className="text-uppercase">
                  Total Revenue Generate This (Month)
                </h6>
                <h3>$100000</h3>
              </div>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col md={6} className="mb-3">
              <div className="filterCard">
                <h3 className="fw-medium">Filter</h3>
                <div className="row">
                  <div className="col-xxl-8 col-xl-6 col-lg-8 col-md-10">
                    <div className="d-flex flex-wrap gap-2">
                      {years.map((year) => (
                        <Button
                          key={year}
                          variant={
                            year === selectedYear
                              ? "primary"
                              : "outline-secondary"
                          }
                          onClick={() => setSelectedYear(year)}
                          className="rounded-pill"
                        >
                          {year}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={6} className="mb-3">
              <div className="filterCard">
                <h3 className="fw-medium">Filter</h3>
                <div className="row">
                  <div className="col-xxl-8 col-xl-6 col-lg-8 col-md-10">
                    <div className="d-flex flex-wrap gap-2">
                      {months.map((month) => (
                        <Button
                          key={month}
                          variant={
                            month === selectedMonth
                              ? "primary"
                              : "outline-secondary"
                          }
                          onClick={() => setSelectedMonth(month)}
                          className="rounded-pill"
                        >
                          {month}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <div className="p-3 bg-white rounded shadow-sm">
                <h6>Top 10 Most Used Category</h6>
                <p className="text-muted">In (Month)</p>
                {categoryData.map((value, index) => (
                  <div key={index} className="mb-2">
                    <div className="d-flex justify-content-between">
                      <span>Abc</span>
                      <span>{value}%</span>
                    </div>
                    <ProgressBar>
                      <ProgressBar now={value} variant="dark" key={1} />
                      <ProgressBar now={100 - value} variant="light" key={2} />
                    </ProgressBar>
                  </div>
                ))}
              </div>
            </Col>

            <Col md={6} className="mb-3">
              <div className="p-3 bg-white rounded shadow-sm">
                <h6>Top 10 Consultant On The Platform</h6>
                <p className="text-muted">In (Month)</p>
                {consultantData.map((value, index) => (
                  <div key={index} className="mb-2">
                    <div className="d-flex justify-content-between">
                      <span>Abc</span>
                      <span>{value}%</span>
                    </div>
                    <ProgressBar>
                      <ProgressBar now={value} variant="dark" key={1} />
                      <ProgressBar now={100 - value} variant="light" key={2} />
                    </ProgressBar>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ShowReport;
