import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Departure from "./Scoreboard/Departure";
import Arrival from "./Scoreboard/Arrival";
import { connect } from "react-redux";
import { getFlightList } from "./flight/flight.actions";
import PropTypes from 'prop-types';

const Airport = ({ getFlightList }) => {
  const [text, setText] = useState("");

  const setSearch = (text) => {
    setText(text);
  };

  useEffect(() => {
    getFlightList();
  }, [getFlightList]);

  return (
    <div className="airport">
      <Header setSearch={setSearch} text={text} />
      <nav className="navigation">
      <NavLink activeClassName="active-tab" to="/departure"><button className="btn navigation__departues ac">
          departues
        </button></NavLink>
        <NavLink activeClassName="active-tab" to="/arrival"><button className="btn navigation__arrivals ac">
          arrivals
        </button></NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Redirect to="/departure"></Redirect>
        </Route>
        <Route path="/departure/:searchText?">
          <Departure setSearch={setSearch} text={text} />
        </Route>
        <Route path="/arrival/:searchText?">
          <Arrival setSearch={setSearch} text={text} />
        </Route>
      </Switch>
    </div>
  );
};

//

const mapDispatch = {
  getFlightList: getFlightList,
};

Airport.propTypes = {
  getFlightList: PropTypes.func.isRequired,
}

export default connect(null, mapDispatch)(Airport);
