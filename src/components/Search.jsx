import React from "react";

export const Search = ({ value, onChange, onSubmit, children }) => (
  <form onSubmit={onChange}>
    <input type="text" value={value} onChange={onChange} />
    <button type="submit" onClick={onSubmit}>{children}</button>
  </form>
);
