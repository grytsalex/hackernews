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
    <div className='sort-wrapper' style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <div className='sort-button'>
        <Button className={sortClass} onClick={() => onSort(sortKey)} style={{}}>
          {children}
        </Button>
      </div>
      <div className='sort-icon' style={{marginBottom: '6px', marginLeft: '5px'}}>
          {isSortReverse ? <FontAwesomeIcon icon={faSortUp} size="lg" /> : <FontAwesomeIcon icon={faSortDown} size="lg" />}
       </div>   
     </div>
  );
};

Sort.propTypes = {
  children: PropTypes.node,
  sortKey: PropTypes.string,
  onSort: PropTypes.func,
  activeSortKey: PropTypes.string,
  isSortReverse: PropTypes.bool,
};
