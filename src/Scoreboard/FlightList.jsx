import React, { useEffect } from "react";
import Flight from "./Flight";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterFlightsDepartureSelector, filterFlightArrivalSelector } from "../flight/flight.selectors";
import { filterFlight } from "../flight/flight.actions";
import { useHistory, useLocation, useParams } from "react-router-dom";

const FlightList = ({ flightsD, flightsA, filterFlight, text, setSearch }) => {
  const history = useHistory();
  const location = useLocation();
  let flights;

  const { direction, searchText } = useParams();

  console.log(direction, searchText)

  if (direction === 'departure') {
    flights = flightsD;
  } else {
    flights = flightsA;
  }

  useEffect(() => {
    if (searchText) {
      setSearch(searchText);
      filterFlight(searchText);
    } else {
      text
        ? history.push(`${location.pathname}/${text}`)
        : history.push(`${location.pathname}`);
    }
  }, [filterFlight, history, location.pathname, searchText, setSearch, text]);

  if (!flights.length) return null;

  const flightList = flights.map((flight) => (
    <Flight key={flight.id} flight={flight} />
  ));
  if (flightList.length === 0) return <h1>No Flight</h1>;

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

const mapState = (state) => {
  return {
    flightsD: filterFlightsDepartureSelector(state),
    flightsA: filterFlightArrivalSelector(state),
  };
};

const mapDispatch = {
  filterFlight: filterFlight,
};

FlightList.propTypes = {
  flightsD: PropTypes.arrayOf(PropTypes.shape).isRequired,
  filterFlight: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(FlightList);
