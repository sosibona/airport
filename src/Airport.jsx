import React from "react";
import Header from "./Header";
import { Route, Link, Switch } from "react-router-dom";
import Departure from "./Departure";
import Arrival from "./Arrival";
import { Component } from "react";
import moment from "moment";

class Airport extends Component {
  state = {
    flights: null,
    searchText: "",
  };

  onSearch = (searchText) => {
    this.setState({
      searchText,
    });
  };

  componentDidMount() {
    const today = moment(new Date()).format("DD-MM-YYYY");
    fetch(`https://api.iev.aero/api/flights/${today}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed flight");
      })
      .then((flightData) => {
        const flightArrival = flightData.body.arrival.filter(
          (flight) => today === moment(flight.timeLandCalc).format("DD-MM-YYYY")
        );
        const flightDeparture = flightData.body.departure.filter(
          (flight) =>
            today === moment(flight.timeDepShedule).format("DD-MM-YYYY")
        );
        return this.setState({
          flights: {
            arrival: flightArrival,
            departure: flightDeparture,
          },
        });
      });
  }

  render() {
    return (
      <div className="airport">
        <Header onSearch={this.onSearch} />
        <nav className="navigation">
          <button className="btn navigation__departues">
            <Link to="/departure">departues</Link>
          </button>
          <button className="btn navigation__arrivals">
            <Link to="/arrival">arrivals</Link>
          </button>
        </nav>
        <Switch>
          <Route path="/departure">
            <Departure
              flights={this.state.flights}
              searchText={this.state.searchText}
            />
          </Route>
          <Route path="/arrival">
            <Arrival flights={this.state.flights} searchText={this.state.searchText} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Airport;
