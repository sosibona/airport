export const flightsSelector = state => {
  return state.flights.flightList;
}

export const flightsArrivalSelector = state => {
  if (!state.flights.flightList) return [];
  return state.flights.flightList.arrival;
}

export const flightsDepartureSelector = state => {
  if (!state.flights.flightList) return [];
  return state.flights.flightList.departure;
}

export const searctTextSelector = state => {
  return state.flights.searchText;
}

export const filterFlightArrivalSelector = state => {
  const arrivalFlights = flightsArrivalSelector(state);
  const searchText = searctTextSelector(state);

  if (!searchText) return arrivalFlights;
  const filterCity = arrivalFlights
    .filter(flight => searchText.toLowerCase() === flight.destination.toLowerCase());
  const filterAirline = arrivalFlights
    .filter(flight => flight.airline ? searchText.toLowerCase() === flight.airline.en.name.toLowerCase() : false);
  const filterflight = arrivalFlights
    .filter(flight => searchText.toLowerCase() === flight.flight.toLowerCase());
  return Array.from(new Set([...filterCity, ...filterAirline, ...filterflight]));
}

export const filterFlightsDepartureSelector = state => {
  const departureFlights = flightsDepartureSelector(state);
  const searchText = searctTextSelector(state);

  if (!searchText) return departureFlights;
  const filterCity = departureFlights.filter(flight => searchText.toLowerCase() === flight.destination.toLowerCase());
  const filterAirline = departureFlights.filter(flight => flight.airline ? searchText.toLowerCase() === flight.airline.en.name.toLowerCase() : false);
  const filterflight = departureFlights.filter(flight => searchText.toLowerCase() === flight.flight.toLowerCase());
  return Array.from(new Set([...filterCity, ...filterAirline, ...filterflight]));
}

