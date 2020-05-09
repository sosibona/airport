import React from "react";
import FlightArrival from "./FlightArrival";
import moment from "moment";

const today = moment(new Date()).format("DD-MM-YYYY");

const Arrival = ({ flights }) => {
  if (flights.length === 0) return null;
  const flightList = flights.arrival
    .filter(
      (flight) => today === moment(flight.timeLandCalc).format("DD-MM-YYYY")
    )
    .map((flight) => <FlightArrival key={flight.ID} flight={flight} />);
  return (
    <div>
      <div className="flight-scoreboard">
        <table className="table">
          <thead>
            <tr>
              <th>Terminal</th>
              <th>Local time</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Airlane</th>
              <th>Flight</th>
            </tr>
          </thead>
          <tbody>{flightList}</tbody>
        </table>
      </div>
    </div>
  );
  // return (
  //   <button className="btn navigation__arrivals">arrivals</button>
  // )
};

export default Arrival;
