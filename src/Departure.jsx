import React from "react";
import Flight from "./Flight";

const Departure = ({ flights, searchText }) => {
  if (!flights) return null;
  let flightList;
  if (!searchText) {
    flightList = flights.departure.map((flight) => (
      <Flight key={flight.ID} flight={flight} />
    ));
  } else {
    flightList = flights.departure
      .filter((flight) => searchText.toLowerCase() === flight["airportToID.city_en"].toLowerCase())
      .map((flight) => <Flight key={flight.ID} flight={flight} />);
  }

  if (flightList.length === 0) return (
    <h1>No Flight</h1>
  )

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
};

export default Departure;
