import React from "react";
import Flight from "./Flight";
import moment from 'moment';

const today = moment(new Date()).format('DD-MM-YYYY');

const Scoreboard = ({ departuesFlight }) => {
  const flightList = departuesFlight.filter(flight => today === moment(flight.timeDepShedule).format('DD-MM-YYYY')).map((flight) => (
    <Flight key={flight.ID} flight={flight} />
  ));
  return (
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
  );
};

export default Scoreboard;
