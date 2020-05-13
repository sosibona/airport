import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { setFilterText } from "../flight/flight.actions";
import PropTypes from "prop-types";

const SearchForm = ({ filterFlight, text, setSearch }) => {
  const [value, setValue] = useState("");
  const history = useHistory();
  const location = useLocation();

  const handleChange = event => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === value) return;
    filterFlight(value);
    setSearch(value);
    if (text && value) {
      history.push(`${value}`);
      return;
    }
    if (value) {
      history.push(`${location.pathname}/${value}`);
    } else {
      history.push(``);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <i className="fas fa-search form__input-icon"></i>
      <input
        className="form__input"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Airline, destination or flight #"
      />
      <button className="form__search-btn" type="submit">
        search
      </button>
    </form>
  );
};

const mmapDispatch = {
  filterFlight: setFilterText,
};

SearchForm.propTypes = {
  filterFlight: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default connect(null, mmapDispatch)(SearchForm);
