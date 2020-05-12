import React from "react";
import PropTypes from 'prop-types';

const Flight = ({ flight }) => {
  let logoFlight = flight.airline ? (
    <>
      <img
        className="table__logo-airline"
        src={flight.airline.en.logoSmallName}
        alt="logo company"
      />
      {flight.airline.en.name}
    </>
  ) : (
    <>{flight["carrierID.code"]}</>
  );
  return (
    <tr>
      <td className={flight.term === 'A' ? "table__terminal-a" : "table__terminal-d"}>
        <span>{flight.term}</span>
      </td>
      <td>{flight.flightTime}</td>
      <td>{flight.destination}</td>
      <td>{flight.status === "CX" ? "Canceled" : `${flight.status}`}</td>
      <td className="table__airline">{logoFlight}</td>
      <td>{flight.flight}</td>
    </tr>
  );
};

Flight.propTypes ={
  flight: PropTypes.shape().isRequired,
}

export default Flight;
