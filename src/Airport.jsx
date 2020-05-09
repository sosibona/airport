import React from "react";
import Header from './Header'
import Navigation from './Navigation';
import Scoreboard from './Scoreboard';
import { Component } from "react";
import moment from 'moment';

class Airport extends Component {
  state = {
    flights: [],
    departuesFlight: [],
    arrivalsFlight: [],
  }

  getFlightToday = () => {
    const today = moment(new Date()).format('DD-MM-YYYY'); 
    fetch(`https://api.iev.aero/api/flights/${today}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed flight');
    }).then(flightData => this.setState({
      departuesFlight: flightData.body.departure,
      arrivalsFlight: flightData.body.arrival,
    }))
  }
  
  render() {
    return (
      <div className="airport">
        <Header />
        <Navigation getFlightToday={this.getFlightToday}/>
        <Scoreboard flights={this.state.flights} departuesFlight={this.state.departuesFlight}/>
      </div>
    );
  }
}

export default Airport;
