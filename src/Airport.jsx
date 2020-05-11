import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Departure from "./Departure";
import Arrival from "./Arrival";
import { connect } from "react-redux";
import { getFlightList } from "./flight/flight.actions";

const Airport = ({ getFlightList, match }) => {
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
        <button className="btn navigation__departues">
          <Link to="/departure">departues</Link>
        </button>
        <button className="btn navigation__arrivals">
          <Link to="/arrival">arrivals</Link>
        </button>
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

export default connect(null, mapDispatch)(Airport);
