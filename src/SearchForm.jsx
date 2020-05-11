import React from "react";
import {connect} from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
import { filterFlight } from "./flight/flight.actions";

const SearchForm = ({ filterFlight, setS }) => {  
  const history = useHistory();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.elements[0].value;
    filterFlight(value);
    setS(value);
    history.push(`${location.pathname}${value}`)
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <i className="fas fa-search form__input-icon"></i>
      <input
        className="form__input"
        type="text"
        placeholder="Airline, destination or flight #"
      />
      <button className="form__search-btn" type="submit">
        search
      </button>
    </form>
  );
};

const mmapDispatch = {
  filterFlight: filterFlight
}

export default connect(null, mmapDispatch)(SearchForm);
