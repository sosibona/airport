import React from "react";
import Departure from './Departure';
import Arrival from './Arrival';


const Navigation = () => {
  return (
    <nav className="navigation">
      <Departure />
      <Arrival />
    </nav>
  );
};

export default Navigation;
