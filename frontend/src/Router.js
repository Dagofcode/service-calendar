import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Calendar from "./components/Calendar";
import WrappedNormalLoginForm from "./components/Auth/Login";
import WrappedRegistrationForm from "./components/Auth/Signup";
import Profile from "./components/Profiles/Profile";
import PostsList from "./components/Posts/PostsList";
import PostDetail from "./components/Posts/PostDetail";
import logo from "./images/service-calendar.jpg";
import { Button } from "antd";
import { MyContext } from "./context";
import Logout from "./components/Auth/Logout";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-first">
        <NavLink to="/" activeClassName="nav-active">
          <img src={logo} style={{ width: "150px", height: "50px" }} alt="" />
        </NavLink>
      </div>
      <div className="buttons">
        <MyContext.Consumer>
          {context => {
            if (context.state.user === null) {
              return (
                <>
                  <NavLink to="/login" activeClassName="nav-active">
                    <Button type="primary"> Login </Button>
                  </NavLink>
                  <NavLink to="/signup" activeClassName="nav-active">
                    <Button type="default">Signup</Button>
                  </NavLink>
                </>
              );
            } else {
              return (
                <>
                  <NavLink to="/profile" activeClassName="nav-active">
                    <div>PROFILE</div>
                  </NavLink>
                  <NavLink
                    onClick={() => {
                      context.delUser();
                      localStorage.clear();
                    }}
                    to="/"
                    activeClassName="nav-active"
                  >
                    <Button>Logout</Button>
                  </NavLink>
                </>
              );
            }
          }}
        </MyContext.Consumer>
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
        <Route exact path="/posts/:day" component={PostsList} />
        <Route exact path="/posts/detail/:id" component={PostDetail} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
