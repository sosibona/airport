import { fetchFlightList } from './flightGateway'
import moment from 'moment';

export const FLIGHT_LIST_RECIEVED = "FLYGHT_LIST_RECIEVED";
export const FILTER_FLIGHT = "FILTER_FLIGHT";

const today = moment(new Date()).format("DD-MM-YYYY");

export const flightListRecieved = flightList => {
  return {
    type: FLIGHT_LIST_RECIEVED,
    payload: {
      flightList,
    }
  }
}

export const filterFlight = text => {
  return {
    type: FILTER_FLIGHT,
    payload: {
      text,
    }
  }
}

export const getFlightList = () => {
  return function (dispatch) {
    fetchFlightList().then(flightList => {
      const flightArrival = flightList.body.arrival.filter(
        (flight) => today === moment(flight.timeLandCalc).format("DD-MM-YYYY")
      );
      const flightDeparture = flightList.body.departure.filter(
        (flight) =>
          today === moment(flight.timeDepShedule).format("DD-MM-YYYY")
      );
      const flights = {
        arrival: flightArrival,
        departure: flightDeparture,
      };
      return dispatch(flightListRecieved(flights))
    })
  }
}
