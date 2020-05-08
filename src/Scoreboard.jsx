import React from "react";
import Flight from './Flight'

const Scoreboard = () => {
  const flightList = <Flight />
  return (
    <div className="flight-scoreboard">
      <table className="table">
        <thead>
          <tr>
            <th>Terminal</th>
            <th>Local time</th>
            <th>Destination</th>
            <th>status</th>
            <th>Airlane</th>
            <th>Flight</th>
          </tr>
        </thead>
        {flightList}
      </table>
    </div>
  );
};

export default Scoreboard;
