import React from "react";

import { faArrowDown, faArrowDownLong, faArrowUp, faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";

const StatsCard = (props) => {
  const Icon = props.item.image;
  return (
    <>
      <div className="stats_card px-xxl-4 px-3 px-sm-4 px-lg-2" style={{background: props.item.backgroundColor}}>
          <div className="statsData">
            <div className="d-flex align-items-center gap-2">
              <div className={`statsIcons flex-shrink-0 statsImg-${props.index}`}>
                <Icon />
              </div>
              <div className="flex-grow-1">
                <p className="statsText">{props.item.text}</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 mt-xl-3 mt-1 ps-xl-0 ps-3">
              <div >
                <h3 className="statsNumber">{props.item.change}</h3>
              </div>
              <>
                {props?.item.arrowIcon && (
                  <p className="mb-0">
                    {props.item.increase ? (
                      <FontAwesomeIcon size="2x" color="#15355E" icon={faArrowUpLong} className=""/>
                    ) : (
                      <FontAwesomeIcon size="2x" color="#15355E" icon={faArrowDownLong} className="" />
                      
                    )}
                  </p>
                )}
              </>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
