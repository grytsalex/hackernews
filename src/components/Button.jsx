import React from "react";
import PropTypes from "prop-types";

export const Button = ({ onClick, className, children, customStyles }) => (
  <button onClick={onClick} className={className} type="button" style={{...customStyles}}>
    {children}
  </button>
);

Button.defaultProps = {
  className: "",
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
