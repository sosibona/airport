import { FLIGHT_LIST_RECIEVED, FILTER_FLIGHT } from "./flight.actions";


const initialState = {
  flightList: null,
  searchText: ""
};

export const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_LIST_RECIEVED: {
      return {
        ...state,
        flightList: action.payload.flightList,
      }
    }
    case FILTER_FLIGHT: {
      return {
        ...state,
        searchText: action.payload.text,  
      }
    }
    default:
      return state;
  }
}