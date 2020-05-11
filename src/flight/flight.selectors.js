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
  const fliterCity = arrivalFlights.filter(flight => searchText === flight["airportFromID.city_en"]);
  const filterAirline = arrivalFlights.filter(flight => searchText === flight.airline.en.name);
  const filterflight = arrivalFlights.filter(flight => searchText === flight["carrierID.IATA"] + flight.fltNo);
  return [...fliterCity, ...filterAirline, ...filterflight]
}

export const filterFlightsDepartureSelector = state => {
  const departureFlights = flightsDepartureSelector(state);
  const searchText = searctTextSelector(state);

  if (!searchText) return departureFlights;
  const fliterCity = departureFlights.filter(flight => searchText === flight["airportToID.city_en"]);
  const filterAirline = departureFlights.filter(flight => searchText === flight.airline.en.name);
  const filterflight = departureFlights.filter(flight => searchText === flight["carrierID.IATA"] + flight.fltNo);
  return [...fliterCity, ...filterAirline, ...filterflight]
}

