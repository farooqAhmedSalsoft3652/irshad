import { Button, Col, ProgressBar, Row } from "react-bootstrap";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { useState } from "react";
import { dashboardChartDataOne } from "../../../Config/data";
import { Graph } from "../../../Components/Graph";

const ShowReport = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [yearData, setYearData] = useState();
  const [chartdata, setChartData] = useState(dashboardChartDataOne);
  const getCurrentYear = () => new Date().getFullYear();
  const [selectedValue, setSelectedValue] = useState(getCurrentYear());

  const years = [2019, 2020, 2021, 2022, 2023, 2024];
  const months = ["Jan", "Feb", "Mar", "Jun", "Aug", "Jul", "Sep", "Dec"];

  const categoryData = [90, 80, 70, 60, 50, 40, 30, 20, 10, 5];
  const consultantData = [90, 80, 70, 60, 50, 40, 30, 20, 10, 5];

  const handleYearClick = (year) => {
    setSelectedYear(year);
    console.log("Selected Year:", year);
  };

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
    console.log("Selected Month:", month);
  };

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    fetchOrderChart(value);
  };
  const handleSelectYear = (value) => {
    const newValue = `&further_type=${value}`;
    setYearData(newValue);
    fetchRevenueChart(selectedValueTwo, newValue);
  };

  const yearlyChartStatus = [
    {
      value: "2023",
      text: "2023",
    },
    {
      value: "2024",
      text: "2024",
    },
    {
      value: "2025",
      text: "2025",
    },
  ];

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
                              : "outline-primary"
                          }
                          onClick={() => handleYearClick(year)}
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
                              : "outline-primary"
                          }
                          onClick={() => handleMonthClick(month)}
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
                    <ProgressBar style={{ borderRadius: "10px" }}>
                      <ProgressBar
                        now={value}
                        style={{ background: "#15355E" }}
                        key={1}
                      />
                      <ProgressBar
                        now={100 - value}
                        style={{ background: "#C5E4F6" }}
                        key={2}
                      />
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
                      <ProgressBar
                        now={value}
                        style={{ background: "#15355E" }}
                        key={1}
                      />
                      <ProgressBar
                        now={100 - value}
                        style={{ background: "#C5E4F6" }}
                        key={2}
                      />
                  </ProgressBar>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Graph
                type="line"
                item={chartdata}
                selectedValue={selectedValue}
                onSelectChange={handleSelectChange}
                options={yearlyChartStatus}
                onSelectYear={handleSelectYear}
                text="Reviews Analytics"
                backgroundColor="#C5E4F6"
              />
            </Col>
          </Row>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ShowReport;
