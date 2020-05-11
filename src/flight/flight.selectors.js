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

  console.log('searchText')
  console.log(searchText)

  if (!searchText) return arrivalFlights;
  return arrivalFlights.filter(flight => searchText === flight["airportFromID.city_en"]);
}

export const filterFlightsDepartureSelector = state => {
  const departureFlights = flightsDepartureSelector(state);
  const searchText = searctTextSelector(state);

  console.log('searchText')
  console.log(searchText)

  if (!searchText) return departureFlights;
  return departureFlights.filter(flight => searchText === flight["airportToID.city_en"]);
}

