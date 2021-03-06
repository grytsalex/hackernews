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

  // Todo fix icon position
  return (
        <Button className={sortClass} onClick={() => onSort(sortKey)} customStyles={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{ paddingRight: '5px'}}>{children}</div>
          {isSortReverse && sortKey === activeSortKey ? <FontAwesomeIcon icon={faSortUp} size="lg" style={{ paddingBottom: '5px'}}/> : <FontAwesomeIcon icon={faSortDown}  size="lg" style={{ paddingBottom: '5px'}}/>}
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
