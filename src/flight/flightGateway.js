import moment from "moment";

const url = "https://api.iev.aero/api/flights";

export const fetchFlightList = () => {
  const today = moment(new Date()).format("DD-MM-YYYY");
  return fetch(`${url}/${today}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed flight");
    }).then(flightList => flightList)
}