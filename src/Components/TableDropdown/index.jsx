import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TableDropdown = ({
  itemId,
  linkPath,
  view,
  edit
}) => {
  return (
    <Dropdown className="tableDropdown">
      <Dropdown.Toggle variant="transparent" className="notButton classicToggle">
        <FontAwesomeIcon icon={faEllipsisV} />
      </Dropdown.Toggle>
      <Dropdown.Menu align="end" className="tableDropdownMenu">
        {view && (
          <Link to={`${linkPath}/${itemId}`} className="tableAction">
            View
          </Link>
        )}
        {edit && (
          <Link to={`${linkPath}/edit/${itemId}`} className="tableAction">
            Edit
          </Link>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

TableDropdown.propTypes = {
  itemId: PropTypes.number.isRequired,
  linkPath: PropTypes.string.isRequired,
  view: PropTypes.bool,
  edit: PropTypes.bool
};

export default React.memo(TableDropdown);
