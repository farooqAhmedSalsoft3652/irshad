import { React } from "react";
import CustomButton from "../CustomButton";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";


const NotificationCard = (props) => {
  const handleClick = () => {
    props.onClick(props?.id); 
  };

  return (
    <div className={`notificationWrapper ${props.read === null ? "unread" : ""}`}>
      <div className={`d-sm-flex justify-content-between align-items-center gap-3 `} key={props.id}>
        <div className="d-flex gap-3 align-items-center">
          <div className="notificationImageIcon">
            <FontAwesomeIcon icon={faBell} color="#fff" size="xl" />
          </div>
          <div className="d-flex flex-column gap-1 flex-grow-1">
            <div className="d-flex gap-3">
              {/* <h5 className="notificationHeading">{props?.name}</h5> */}
              <p className="notificationText ps-0">{props?.text}</p>
            </div>
            <div className="dateTime">
              <p className="p-sm l-grey-text mb-0">
                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                {props?.date}
                <span className="dateTimeSeparator">|</span>
              </p>
              <p className="p-sm l-grey-text mb-0"><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>{props?.time}</p>
            </div>
          </div>
        </div>
        {props.read === null ? (
          <div className="flex-shrink-0 text-end">
            <CustomButton onClick={handleClick} variant={`notButton text-decoration-underline fw-medium ${true ? "blueColor" : "grayColor"}`} text={props.read === null ? "Mark as Read" : "Mark as Unread"} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NotificationCard;
