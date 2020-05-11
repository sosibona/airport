import React, { useEffect } from "react";
import Header from "./Header";
import { Route, Link, Switch } from "react-router-dom";
import Departure from "./Departure";
import Arrival from "./Arrival";
import { connect } from "react-redux";
import { getFlightList } from "./flight/flight.actions";

const Airport = ({ getFlightList, match }) => {
  useEffect(() => {
    getFlightList();
  }, []);

  // const onSearch = (searchText) => {
  //   setSearchText(searchText);
  // };
  console.log('match')
  console.log(match)
  return (
    <div className="airport">
      <Header />
      <nav className="navigation">
        {/* <button className="btn navigation__departues">
          <Link to="/departure">departues</Link>
        </button>
        <button className="btn navigation__arrivals">
          <Link to="/arrival">arrivals</Link>
        </button> */}
      </nav>
      <Switch>
        <Route path="/departure/:searchText?" component={Departure} />
          {/* <Departure />
        </Route> */}
        <Route path="/arrival/:searchText?" component={Arrival} />
          {/* <Arrival />
        </Route> */}
      </Switch>
    </div>
  );
};

//

const mapDispatch = {
  getFlightList: getFlightList,
};

export default connect(null, mapDispatch)(Airport);

