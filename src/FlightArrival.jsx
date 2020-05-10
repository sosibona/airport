import React from "react";
import moment from "moment";

const FlightArrival = ({ flight }) => {
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
  const flightTime = moment(flight.timeLandCalc).format("HH:mm");
  return (
    <tr>
      <td
        className={
          flight.term === "A" ? "table__terminal-a" : "table__terminal-d"
        }
      >
        <span>{flight.term}</span>
      </td>
      <td>{flightTime}</td>
      <td>{flight["airportFromID.city_en"]}</td>
      <td>{flight.status === "CX" ? "Canceled" : `${flight.status}`}</td>
      <td className="table__airline">{logoFlight}</td>
      <td>{flight["carrierID.IATA"] + flight.fltNo}</td>
    </tr>
  );
};

export default FlightArrival;
