import { Button, Col, ProgressBar, Row } from "react-bootstrap";
import BackButton2 from "../../../Components/BackButton/BackButton2";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { useState } from "react";
import { Graph } from "../../../Components/Graph";
import { dashboardChartDataOne } from "../../../Config/data";

const AppReport = () => {
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
    <DashboardLayout pageTitle="App Report">
      <div className="container-fluid dashCard app-report">
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex align-items-center gap-2">
              <BackButton2 />
              <h2 className="mainTitle mb-0">App Report</h2>
            </div>
          </div>
        </div>
        <Row className="mb-4">
          <Col lg={6} className="mb-3">
            <div className="statsCard">
              <h6 className="text-uppercase">Total Services Bought in (Month)</h6>
              <h3>100</h3>
            </div>
          </Col>
          <Col lg={6} className="mb-3">
            <div className="statsCard">
              <h6 className="text-uppercase">Total Revenue Generate This (Month)</h6>
              <h3>$100000</h3>
            </div>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col lg={6} className="mb-3">
            <div className="filterCard">
              <h3 className="fw-medium">Filter</h3>
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-flex flex-wrap gap-2">
                    {years.map((year) => (
                      <Button key={year} variant={year === selectedYear ? "primary" : "outline-primary"} onClick={() => handleYearClick(year)}>
                        {year}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mb-3">
            <div className="filterCard">
              <h3 className="fw-medium">Filter</h3>
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-flex flex-wrap gap-2">
                    {months.map((month) => (
                      <Button key={month} variant={month === selectedMonth ? "primary" : "outline-primary"} onClick={() => handleMonthClick(month)}>
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
          <Col lg={6} className="mb-3">
            <div className="progressCard">
              <h3>Top 10 Most Used Category</h3>
              <h5 className="text-muted">In (Month)</h5>
              {categoryData.map((value, index) => (
                <div key={index} className="mb-2">
                  <div className="d-flex justify-content-between">
                    <span style={{ color: "#666" }}>Abc</span>
                    <span>{value}%</span>
                  </div>
                  <ProgressBar style={{ borderRadius: "10px" }}>
                    <ProgressBar now={value} style={{ background: "#15355E" }} key={1} />
                    <ProgressBar now={100 - value} style={{ background: "#C5E4F6" }} key={2} />
                  </ProgressBar>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={6} className="mb-3">
            <div className="progressCard">
              <h3>Top 10 Consultant On The Platform</h3>
              <h5 className="text-muted">In (Month)</h5>
              {consultantData.map((value, index) => (
                <div key={index} className="mb-2">
                  <div className="d-flex justify-content-between">
                    <span>Abc</span>
                    <span>{value}%</span>
                  </div>
                  <ProgressBar>
                    <ProgressBar now={value} style={{ background: "#15355E" }} key={1} />
                    <ProgressBar now={100 - value} style={{ background: "#C5E4F6" }} key={2} />
                  </ProgressBar>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        {/* <Row>
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
        </Row> */}
      </div>
    </DashboardLayout>
  );
};

export default AppReport;
