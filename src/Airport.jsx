import React from "react";
import Header from "./Header";
import { Route, Link, Switch } from "react-router-dom";
import Departure from "./Departure";
import Arrival from "./Arrival";
import { Component } from "react";
import moment from "moment";

class Airport extends Component {
  state = {
    flights: [],
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
      .then((flightData) =>
        this.setState({
          flights: flightData.body,
        })
      );
  }

  render() {
    return (
      <div className="airport">
        <Header />
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
            <Departure flights={this.state.flights} />
          </Route>
          <Route path="/arrival">
            <Arrival flights={this.state.flights} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Airport;
