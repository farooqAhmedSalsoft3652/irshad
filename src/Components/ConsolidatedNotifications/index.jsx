import React, { useState, useEffect } from "react";
import "./style.css";
import { DashboardLayout } from "../Layouts/AdminLayout/DashboardLayout";
import NotificationCard from "../NotificationCard";
import CustomPagination from "../CustomPagination";
import { getAll, post } from "../../Services/Api";
import { dateFormat, humanReadable } from "../../Utils/helper";
import { images } from "../../Assets";
import { Select } from "../Select";
import { notificationOptions } from "../../Config/TableStatus";
import LoadingSpinner from "../Loader";
import withPagination from "../../HOC/withPagination";
import { notificationsData } from "../../Config/data";
import CustomButton from "../CustomButton";
import { Row, Col } from "react-bootstrap";

const ConsolidatedNotifications = ({ apiEndpoint, filters, setFilters, pagination, updatePagination }) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState("");

  const fetchNotifications = async () => {
    try {
      const responses = notificationsData;

      // const responses = await getAll(`${apiEndpoint}${selectedStatus ? `?status=${selectedStatus}` : ""}`, filters);
      const { data, total, per_page, current_page, to } = responses?.detail?.notifications;
      setNotifications(data);
      updatePagination({
        showData: to,
        currentPage: current_page,
        totalRecords: total,
        totalPages: Math.ceil(total / per_page),
      });
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, selectedStatus]);

  const handleNotificationAction = async (val) => {
    try {
      // const response = await post(`${apiEndpoint}/${val}`);
      // const  {data} = notificationsData?.detail?.notifications;

      setNotifications((prevData) =>
        prevData.map((notification) => (notification.id === val ? { ...notification, read_at: "2024-06-14T10:42:45.000000Z" } : notification))
      );

      // if (response) {
      //   fetchNotifications();
      // }
    } catch (error) {
      console.error("Error handling notification action:", error);
    }
  };

  // console.log(notifications)

  return (
   <>
      
        <Row className="mb-4">
          <Col xs={12}>
            <div className="d-flex align-items-center">
              <Select className="slimSelect" value={selectedStatus} onChange={setSelectedStatus} label="Show" labelclass="pe-3">
                {notificationOptions}
              </Select>
              <CustomButton
                className="m-auto me-0"
                onClick={() => {
                  console.log("mark all clicked");
                }}
                variant={`notButton fw-bold text-decoration-underline ${true ? "greenbtn" : "grayColor"}`}
                text={"Mark All as Read"}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
          {loading ? (
            <LoadingSpinner />
          ) : (
            notifications.map((notification) => (
              <React.Fragment key={notification.id}>
                <NotificationCard
                  id={notification.id}
                  text={notification?.data?.body}
                  name={notification?.data?.title}
                  date={dateFormat(notification?.created_at)}
                  time={humanReadable(notification?.created_at)}
                  read={notification?.read_at}
                  notiRead={notification?.read_at}
                  onClick={handleNotificationAction}
                />
                </React.Fragment>
            ))
          )}
          </Col>
        </Row>
        <CustomPagination pagination={pagination} setFilters={setFilters} />
      </>
   
  );
};

export default withPagination(ConsolidatedNotifications);
