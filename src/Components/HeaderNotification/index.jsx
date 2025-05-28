import React from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faBell as faBellNoti } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { dateFormat, humanReadable } from "../../Utils/helper";
import { useAuth } from "../../Hooks/useAuth";
import CustomButton from "../CustomButton";

const HeaderNotification = ({ notificationData, getNotification, viewAllLink }) => {
  const { role } = useAuth();
  const handleDropdownToggle = (e) => {
    e.preventDefault(); // Prevent default behavior to avoid unnecessary page reloads or navigation
    getNotification(); 
  };

  // const notificationsLink = viewAllLink || `${role}/notifications`;


  return (
    <Dropdown className="notiDropdown me-2 whiteColor" onClick={handleDropdownToggle}>
      <Dropdown.Toggle variant="transparent bellIconDropdown" className="notButton">
        <FontAwesomeIcon className="bellIcon whiteColor" icon={faBell} />
        {notificationData.length ? <span className="badge">{notificationData.length > 9 ? "9+" : notificationData.length}</span> : null}
      </Dropdown.Toggle>
      <Dropdown.Menu className="notiMenu" align="end">
        <div className="notificationsBodyHeader">
          <p className="mb-0 fw-bold">Notifications</p>
          <div className="newNotificationCount">
            <p className="mb-0">{notificationData.length} new</p>
          </div>
        </div>
        <div className="notificationsBody">
          {notificationData.slice(0, 5).map((notification) => (
            <div
              className={`singleNoti ${notification.read_at === null ? "unread" : ""}`}
              key={notification.id}
            >
              <div className="singleNotiIcon">
                <FontAwesomeIcon className="notiIcon" icon={faBellNoti} />
              </div>
              <div className="singleNotiContent w-100">
                <h5 className="notiHeading">{notification?.data?.title}</h5>
                <p className="notiText">{notification?.data?.body}</p>
                <div className="d-flex justify-content-between mt-2">
                  <p className="d-inline notiDateTime">
                    {dateFormat(notification?.created_at)} | {humanReadable(notification?.created_at)}
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                    style={{ fontSize: 12, color: '#333333' }}
                    className="notButton underlineOnHover"
                  >
                    {notification.read_at === null ? "Mark as Read" : "Mark as Unread"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="notiFooter text-end pe-4">
          <Link to={viewAllLink || `/${role}/notifications`} className="underlineOnHover">view all</Link>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

HeaderNotification.propTypes = {
  notificationData: PropTypes.array.isRequired,
  getNotification: PropTypes.func.isRequired,
};

export default HeaderNotification;
