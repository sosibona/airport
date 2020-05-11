import React, { useEffect } from "react";
import FlightArrival from "./FlightArrival";
import { connect } from "react-redux";
import { filterFlightArrivalSelector } from "./flight/flight.selectors";
import { filterFlight } from "./flight/flight.actions";

const Arrival = ({ flights, filterFlight, match }) => {

  useEffect(() => {
    console.log("arr", match);
    const {searchText} = match.params;
    console.log(searchText);
    if (searchText) {
      filterFlight(searchText)
    }
  }, [])
  

  if (!flights.length) return null;

  const flightList = flights.map((flight) => (
    <FlightArrival key={flight.ID} flight={flight} />
  ));

  if (flightList.length === 0) return <h1>No Flight</h1>;

  // const flightList = flights.arrival
  //   .filter(
  //     (flight) => today === moment(flight.timeLandCalc).format("DD-MM-YYYY")
  //   )
  //   .map((flight) => <FlightArrival key={flight.ID} flight={flight} />);
  return (
    <div>
      <button className="btn navigation__arrivals"></button>
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

const mapState = (state) => {
  return {
    flights: filterFlightArrivalSelector(state),
  };
};

const mapDispatch = {
  filterFlight: filterFlight
}

export default connect(mapState, mapDispatch)(Arrival);
