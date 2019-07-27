import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Calendar from "./components/Calendar";
import User from "./components/Profiles/User";
import Provider from "./components/Profiles/Provider";
import WrappedNormalLoginForm from "./components/Auth/Login";
import WrappedRegistrationForm from "./components/Auth/Signup";

function Navbar() {
  //const loggedUser = localStorage.getItem("loggedUser");
  return (
    <div className="Navbar">
      <div className="nav-first">
        <NavLink to="/" activeClassName="nav-active">
          <div>LOGO</div>
        </NavLink>

        <NavLink to="/profile" activeClassName="nav-active">
          <div>PROFILE</div>
        </NavLink>
        <NavLink to="/provider" activeClassName="nav-active">
          <div>PROVIDER</div>
        </NavLink>
        <NavLink to="" activeClassName="nav-active">
          <input type="text" placeholder="Search.." />
        </NavLink>
      </div>

      <div>
        <NavLink to="/login" activeClassName="nav-active">
          <span>Login</span>
        </NavLink>
        <NavLink to="/signup" activeClassName="nav-active">
          <span>Signup</span>
        </NavLink>
      </div>
    </div>
  );
}
function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Calendar} />
        <Route exact path="/profile" component={User} />
        <Route exact path="/provider" component={Provider} />
        <Route exact path="/login" component={WrappedNormalLoginForm} />
        <Route exact path="/signup" component={WrappedRegistrationForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
