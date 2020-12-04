import React from "react";

export const Search = ({ value, onChange }) => (
  <form>
    <input type="text" value={value} onChange={onChange} />
  </form>
);
