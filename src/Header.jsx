import React from "react";
import SearchForm from './SearchForm'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Search flight</h1>
      <SearchForm />
    </header>
  );
};

export default Header;
