import React from "react";

const Navigation = ({getFlightToday}) => {
  return (
    <nav className="navigation">
      <button className="btn navigation__departues" onClick={getFlightToday}>departues</button>
      <button className="btn navigation__arrivals" onClick={getFlightToday}>arrivals</button>
    </nav>
  );
};

export default Navigation;
