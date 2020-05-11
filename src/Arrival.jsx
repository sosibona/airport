import React from "react";
import FlightArrival from "./FlightArrival";
import {connect} from 'react-redux';
import { filterFlightArrivalSelector } from "./flight/flight.selectors";

const Arrival = ({ flights, searchText }) => {
  console.log(flights)
  if (!flights.length) return null;

  let flightList;
  if (!searchText) {
    flightList = flights.map((flight) => (
      <FlightArrival key={flight.ID} flight={flight} />
    ));
  } else {
    flightList = flights.arrival
      .filter(
        (flight) =>
          searchText.toLowerCase() ===
          flight["airportFromID.city_en"].toLowerCase()
      )
      .map((flight) => <FlightArrival key={flight.ID} flight={flight} />);
  }

  if (flightList.length === 0) return <h1>No Flight</h1>;

  // const flightList = flights.arrival
  //   .filter(
  //     (flight) => today === moment(flight.timeLandCalc).format("DD-MM-YYYY")
  //   )
  //   .map((flight) => <FlightArrival key={flight.ID} flight={flight} />);
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

const mapState = state => {
  return {
    flights: filterFlightArrivalSelector(state),
  }
}

export default connect(mapState)(Arrival);
