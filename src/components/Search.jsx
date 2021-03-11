import React from "react";
import PropTypes from "prop-types";

export class Search extends React.Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  render() {
    const { value, onChange, onSubmit, children } = this.props;

    return (
      <form onSubmit={onChange}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          ref={(node) => {
            this.input = node;
          }}
        />
        <button type="submit" onClick={onSubmit}>
          {children}
        </button>
      </form>
    );
  }
}

export default Search;

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};
