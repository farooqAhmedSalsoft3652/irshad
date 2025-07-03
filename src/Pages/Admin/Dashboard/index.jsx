import { useState, useEffect } from "react";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import StatCard from "../../../Components/StatsCard/index";
import "./style.css";
import { cardLinks, generateNextFiveYears, getIcon, getText } from "../../../Utils/helper";
import { getAll } from "../../../Services/Api";
import { Graph } from "../../../Components/Graph";
import { chartStatus } from "../../../Config/TableStatus";
import { dashboardChartDataOne, dashboardChartDataTwo, dashboardChartDataThree, dashboardChartDatafour, statsData } from "../../../Config/data";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [selectedValueTwo, setSelectedValueTwo] = useState("weekly");
  const [chartdata, setChartData] = useState(dashboardChartDataOne); // Default to first chart data
  const [revenueChartdata, setRevenueChartData] = useState(dashboardChartDataTwo); // Default to second chart data
  const [userdata, setNewUsersData] = useState(dashboardChartDataThree); // Default to third chart data
  const [consultantData, setConsultantData] = useState(dashboardChartDataThree); // Default to fourth chart data
  const [labels, setLabels] = useState([]);
  const [yearData, setYearData] = useState();
  const getCurrentYear = () => new Date().getFullYear();
  const [selectedValue, setSelectedValue] = useState(getCurrentYear());

  const fetchHomeData = async () => {
    // Fetch and set data (uncomment if fetching from API)
    // try {
    //   const response = await getAll("/admin-api/account/home");
    //   if (response && response.status) {
    //     setData(
    //       Object.entries(response?.detail).map(([key, value]) => ({
    //         id: key,
    //         image: getIcon(key),
    //         text: getText(key),
    //         change: value.total,
    //         increase: value.trend,
    //         sinceWeek: "since last week",
    //         link: cardLinks(key),
    //       }))
    //     );
    //   }
    // } catch (error) {
    //   console.error("Error fetching home data:", error);
    // }

    // Set static data for demonstration
    setData(statsData);
  };

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    fetchOrderChart(value);
  };

  const handleSelectChangeTwo = (value) => {
    setSelectedValueTwo(value);
    setYearData("");
    fetchRevenueChart(value, "");
  };

  const handleSelectYear = (value) => {
    const newValue = `&further_type=${value}`;
    setYearData(newValue);
    fetchRevenueChart(selectedValueTwo, newValue);
  };

  const fetchOrderChart = async (value) => {
    // Fetch order chart data (uncomment if fetching from API)
    // try {
    //   const response = await getAll("/admin-api/charts/user?year=" + value);
    //   if (response && response.status) {
    //     setChartData({
    //       data: response.detail,
    //       label: "users",
    //       heading: "Users",
    //     });
    //   }
    // } catch (error) {
    //   console.error("Error fetching order chart data:", error);
    // }

    setChartData(dashboardChartDataOne); // Use predefined data
  };

  const fetchRevenueChart = async (value, newValue = "") => {
    // Fetch revenue chart data (uncomment if fetching from API)
    // try {
    //   const response = await getAll(
    //     `/admin-api/charts/payment?type=${value}${newValue}`
    //   );
    //   if (response && response.status) {
    //     setRevenueChartData({
    //       data: response.detail,
    //       label: "revenue",
    //       heading: "Revenue",
    //     });
    //     const dates = response.detail.map((item) => item[0]);
    //     setLabels(dates);
    //   }
    // } catch (error) {
    //   console.error("Error fetching revenue chart data:", error);
    // }

    setRevenueChartData(dashboardChartDataTwo); // Use predefined data
  };

  const fetchNewUsers = async (value, newValue = "") => {
    // Fetch new users data (uncomment if fetching from API)
    // try {
    //   const response = await getAll(
    //     `/admin-api/charts/payment?type=${value}${newValue}`
    //   );
    //   if (response && response.status) {
    //     setNewUsersData({
    //       data: response.detail,
    //       label: "new_users",
    //       heading: "New Users Registered",
    //     });
    //     const dates = response.detail.map((item) => item[0]);
    //     setLabels(dates);
    //   }
    // } catch (error) {
    //   console.error("Error fetching new users data:", error);
    // }

    setNewUsersData(dashboardChartDataThree); // Use predefined data
  };

  const fetchNewConsultant = async (value, newValue = "") => {
    // Fetch new users data (uncomment if fetching from API)
    // try {
    //   const response = await getAll(
    //     `/admin-api/charts/payment?type=${value}${newValue}`
    //   );
    //   if (response && response.status) {
    //     setNewUsersData({
    //       data: response.detail,
    //       label: "new_users",
    //       heading: "New Users Registered",
    //     });
    //     const dates = response.detail.map((item) => item[0]);
    //     setLabels(dates);
    //   }
    // } catch (error) {
    //   console.error("Error fetching new users data:", error);
    // }

    setConsultantData(dashboardChartDatafour); // Use predefined data
  };

  const years = generateNextFiveYears();

  useEffect(() => {
    fetchHomeData();
    fetchOrderChart(selectedValue);
    fetchRevenueChart(selectedValueTwo, yearData);
    fetchNewUsers(userdata, yearData);
    fetchNewConsultant(consultantData, yearData);
  }, []);

  return (
    <>
      <DashboardLayout pageTitle="Dashboard">
        <div className="container-fluid dashCard pt-1">
          <div className="row">
            <div className="col-12">
              <div className="">
                <div className="row my-4">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <h2 className="mainTitle mb-0">Dashboard</h2>
                    <Link to={'/admin/dashboard/app-report'} className="btn btn-primary min-width-180">Report</Link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {data?.map((stats, index) => (
                    <div className="col-xxl-3 col-xl-6 mb-xl-4 mb-3" key={stats.id}>
                      <StatCard item={stats} index={index + 1} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <Graph
                type="line"
                item={chartdata}
                selectedValue={selectedValue}
                onSelectChange={handleSelectChange}
                options={chartStatus}
                onSelectYear={handleSelectYear}
                text="Total Earning"
                backgroundColor="rgba(218, 206, 228, 0.50)"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <Graph
                type="line"
                item={revenueChartdata}
                selectedValueTwo={selectedValueTwo}
                onSelectChange={handleSelectChangeTwo}
                options={chartStatus}
                onSelectYear={handleSelectYear}
                text="New Bookings Received"
                backgroundColor="rgba(209, 230, 225, 0.50)"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <Graph
                type="line"
                item={userdata} // Use user data for New Users Registered
                selectedValueTwo={selectedValueTwo}
                onSelectChange={handleSelectChangeTwo}
                options={chartStatus}
                onSelectYear={handleSelectYear}
                text="New Users Registered"
                backgroundColor="rgba(197, 228, 246, 0.50)"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <Graph
                type="line"
                item={consultantData} // Use fourth data for New Consultant Registered
                selectedValueTwo={selectedValueTwo}
                onSelectChange={handleSelectChangeTwo}
                options={chartStatus}
                onSelectYear={handleSelectYear}
                text="New Consultant Registered"
                backgroundColor="rgba(255, 240, 159, 0.50)"
              />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
