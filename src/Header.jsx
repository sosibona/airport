import React from "react";
import SearchForm from './SearchForm'

const Header = ({onSearch}) => {
  return (
    <header className="header">
      <h1 className="header__title">Search flight</h1>
      <SearchForm onSearch={onSearch}/>
    </header>
  );
};

export default Header;
