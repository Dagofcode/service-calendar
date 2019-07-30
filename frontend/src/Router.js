import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Calendar from "./components/Calendar";
import WrappedNormalLoginForm from "./components/Auth/Login";
import WrappedRegistrationForm from "./components/Auth/Signup";
import PostEdit from "./components/Posts/PostEdit";
import axios from "axios";
import Profile from "./components/Profiles/Profile";
function Navbar(props) {
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  console.log("user in navbar", user);
  const Logout = () => {
    console.log("logginout");
    axios
      .get("http://localhost:3000/logout")
      .then(() => {
        localStorage.clear();
      })
      .catch(err => {
        console.log(err);
      });
  };
  //const loggedUser = localStorage.getItem("loggedUser");
  return (
    <div className="Navbar">
      <div className="nav-first">
        <NavLink to="/" activeClassName="nav-active">
          <div>LOGO</div>
        </NavLink>
        {user !== null ? (
          <NavLink to="/profile" activeClassName="nav-active">
            <div>PROFILE</div>
          </NavLink>
        ) : null}
      </div>

      <div>
        <NavLink to="/login" activeClassName="nav-active">
          <span>Login</span>
        </NavLink>
        <NavLink to="/" activeClassName="nav-active">
          <button onClick={Logout}>Logout</button>
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
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={WrappedNormalLoginForm} />
        <Route exact path="/signup" component={WrappedRegistrationForm} />
        <Route exact path="/posts/:id" component={PostEdit} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
