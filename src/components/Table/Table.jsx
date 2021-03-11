import React from "react";
import PropTypes from "prop-types";

import { Sort } from "./Sort";
import { Button } from "../Button";
import { SORT } from "../../helpers";

export const Table = ({ list, onDismiss, sortKey, onSort, isSortReverse }) => {
  const sortedList = SORT[sortKey](list);

  const reverseSortedList = isSortReverse ? sortedList.reverse() : sortedList;

  return (
    <div className="table">
      <div className="table-header">
        <span style={{ width: "40%" }}>
          <Sort sortKey={"TITLE"} onSort={onSort} activeSortKey={sortKey}  isSortReverse={isSortReverse}>
            Title
          </Sort>
        </span>
        <span style={{ width: "30%" }}>
          <Sort sortKey={"AUTHOR"} onSort={onSort} activeSortKey={sortKey} isSortReverse={isSortReverse}>
            Author
          </Sort>
        </span>
        <span style={{ width: "10%" }}>
          <Sort sortKey={"COMMENTS"} onSort={onSort} activeSortKey={sortKey} isSortReverse={isSortReverse}>
            Comments
          </Sort>
        </span>
        <span style={{ width: "10%" }}>
          <Sort sortKey={"POINTS"} onSort={onSort} activeSortKey={sortKey} isSortReverse={isSortReverse}>
            Points
          </Sort>
        </span>
        <span style={{ width: "10%", display: 'table', margin: "auto" }}>Archive</span>
      </div>
      {reverseSortedList.map((item) => (
        <div key={item.objectID} className="table-row">
          <span style={{ width: "40%" }}>
            <a href={item.url}>{item.title}</a>
          </span>
          <span style={{ width: "30%" }}>{item.author}</span>
          <span style={{ width: "10%" }}>{item.num_comments}</span>
          <span style={{ width: "10%" }}>{item.points}</span>
          <span style={{ width: "10%" }}>
            <Button
              onClick={() => onDismiss(item.objectID)}
              className="button-inline"
            >
              Delete
            </Button>
          </span>
        </div>
      ))}
    </div>
  );
};

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number,
    })
  ).isRequired,
  onDismiss: PropTypes.func.isRequired,
  sortKey: PropTypes.string,
  onSort: PropTypes.func,
};
