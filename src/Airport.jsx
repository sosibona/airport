import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Route, Link, Switch, useHistory, useLocation } from "react-router-dom";
import Departure from "./Departure";
import Arrival from "./Arrival";
import { connect } from "react-redux";
import { getFlightList } from "./flight/flight.actions";

const Airport = ({ getFlightList, match }) => {
  const [search, setS] = useState("");

  const setSearch = text => {
    setS(text);
  }

  useEffect(() => {
    getFlightList();
  }, []);

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
        <Route path="/departure/:searchText?" >
          <Departure setS={setSearch} search={search}/>
        </Route>
        <Route path="/arrival/:searchText?" >
          <Arrival setS={setSearch} search={search}/>
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

