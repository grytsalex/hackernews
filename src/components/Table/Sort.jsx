import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../Button";

export const Sort = ({ onSort, sortKey, children, activeSortKey, isSortReverse }) => {
  const sortClass = classNames("button-inline", {
    "button-active": sortKey === activeSortKey,
  });

  return (
        <Button className={sortClass} onClick={() => onSort(sortKey)} style={{}}> 
          {children}
          {isSortReverse && sortKey === activeSortKey ? <FontAwesomeIcon icon={faSortUp} size="lg" /> : <FontAwesomeIcon icon={faSortDown} size="lg" />}
        </Button>
  );
};

Sort.propTypes = {
  children: PropTypes.node,
  sortKey: PropTypes.string,
  onSort: PropTypes.func,
  activeSortKey: PropTypes.string,
  isSortReverse: PropTypes.bool,
};
