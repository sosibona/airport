import React from "react";

// import moment from 'moment';
import Departure from './Departure';
import Arrival from './Arrival';

// const today = moment(new Date()).format('DD-MM-YYYY');

const Scoreboard = ({flights}) => {
  if (flights.length === 0) return null;
  return (
    <nav className="navigation">
      <Departure departure={flights.departure}/>
      <Arrival arrival={flights.arrival}/>
    </nav>
  )
}

// const Scoreboard = ({ flights }) => {
//   if (flights.length === 0) return null;
//   const flightList = flights.departure.filter(flight => today === moment(flight.timeDepShedule).format('DD-MM-YYYY')).map((flight) => (
//     <Flight key={flight.ID} flight={flight} />
//   ));
//   return (
//     <div className="flight-scoreboard">
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Terminal</th>
//             <th>Local time</th>
//             <th>Destination</th>
//             <th>Status</th>
//             <th>Airlane</th>
//             <th>Flight</th>
//           </tr>
//         </thead>
//         <tbody>{flightList}</tbody>
//       </table>
//     </div>
//   );
// };

export default Scoreboard;
