import React from "react";
import SearchForm from './SearchForm'

const Header = ({onSearch, setSearch, text}) => {
  return (
    <header className="header">
      <h1 className="header__title">Search flight</h1>
      <SearchForm onSearch={onSearch} setSearch={setSearch} text={text}/>
    </header>
  );
};

export default Header;
