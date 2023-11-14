import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const MainNavigation = () => {
  return (
    <Fragment>
      <nav className="main-navigation">
        <NavLink to="/quotes" className="nav-link" activeClassName="active">
          All Quotes
        </NavLink>
        <NavLink to="/new-quotes" className="nav-link" activeClassName="active">
          Add Quotes
        </NavLink>
      </nav>
    </Fragment>
  );
};

export default MainNavigation;
