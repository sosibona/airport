import React from "react";
import Header from './Header'
import Navigation from './Navigation';
import Scoreboard from './Scoreboard';
import { Component } from "react";
import moment from 'moment';

class Airport extends Component {
  state = {
    flights: [],
  }
  
  render() {
    return (
      <div className="airport">
        <Header />
        <Navigation />
        <Scoreboard flights={this.state.flights}/>
      </div>
    );
  }
}

export default Airport;
