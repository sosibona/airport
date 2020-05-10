import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="form">
      <i className="fas fa-search form__input-icon"></i>
      <input
        className="form__input"
        value={value}
        type="text"
        onChange={handleChange}
        placeholder="Airline, destination or flight #"
      />
      <button className="form__search-btn" onClick={() => onSearch(value)}>
        search
      </button>
    </div>
  );
};

export default SearchForm;
