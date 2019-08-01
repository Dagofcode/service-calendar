webpackHotUpdate("main",{

/***/ "./src/Router.js":
/*!***********************!*\
  !*** ./src/Router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Calendar */ "./src/components/Calendar.js");
/* harmony import */ var _components_Auth_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Auth/Login */ "./src/components/Auth/Login.js");
/* harmony import */ var _components_Auth_Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Auth/Signup */ "./src/components/Auth/Signup.js");
/* harmony import */ var _components_Profiles_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Profiles/Profile */ "./src/components/Profiles/Profile.js");
/* harmony import */ var _components_Posts_PostsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Posts/PostsList */ "./src/components/Posts/PostsList.js");
/* harmony import */ var _components_Posts_PostDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Posts/PostDetail */ "./src/components/Posts/PostDetail.js");
/* harmony import */ var _images_service_calendar_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/service-calendar.jpg */ "./src/images/service-calendar.jpg");
/* harmony import */ var _images_service_calendar_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_service_calendar_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./context */ "./src/context.js");
var _jsxFileName = "/Users/dagor/Desktop/Ironhack/week8/final_project/frontend/src/Router.js";




 //import axios from "axios";






 //const baseURL = "https://service-calendar.herokuapp.com";
//const baseURL = "http://localhost:3000";

function Navbar() {
  // const [user, setUser] = useState(
  //   JSON.parse(localStorage.getItem("loggedUser"))
  // );
  // state = {
  //   user: null
  // };
  //console.log("user in navbar", user);
  // componentWillMount() {
  //   // let user = JSON.parse(localStorage.getItem("loggedUser"));
  //   // if (!user) {
  //   //   //this.props.history.push("/login");
  //   // }
  //   // console.log(this.props.history);
  // }
  // const Logout = () => {
  //   console.log("logginout");
  //   axios
  //     .get(`${baseURL}/logout`)
  //     .then(() => {
  //       localStorage.clear();
  //       return <Redirect to="/" />;
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  // const Login = () => {
  //   console.log("is this called");
  //   this.setState(JSON.parse(localStorage.getItem("loggedUser")));
  // };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-first",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/",
    activeClassName: "nav-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_service_calendar_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    style: {
      width: "150px",
      height: "50px"
    },
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_10__["MyContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, context => {
    console.log(context.state.user);

    if (!context.state.user) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: "/login",
        activeClassName: "nav-active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, " Login ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: "/signup",
        activeClassName: "nav-active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Signup")));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: "/profile",
        activeClassName: "nav-active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "PROFILE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        onClick: () => {
          context.setUser({});
          localStorage.clear();
        },
        to: "/",
        activeClassName: "nav-active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Logout")));
    }
  }))) // <div className="Navbar">
  //   <div className="nav-first">
  //     <NavLink to="/" activeClassName="nav-active">
  //       <img src={logo} style={{ width: "150px", height: "50px" }} alt="" />
  //     </NavLink>
  //     {this.state.user !== null ? (
  //       <NavLink to="/profile" activeClassName="nav-active">
  //         <div>PROFILE</div>
  //       </NavLink>
  //     ) : null}
  //   </div>
  //   <div className="buttons">
  //     <NavLink
  //       onClick={this.Login}
  //       to="/login"
  //       activeClassName="nav-active"
  //     >
  //       <Button type="primary"> Login </Button>{" "}
  //     </NavLink>
  //     {this.state.user ? (
  //       <NavLink to="/" activeClassName="nav-active">
  //         <Button onClick={this.Logout}>Logout</Button>
  //       </NavLink>
  //     ) : null}
  //     <NavLink to="/signup" activeClassName="nav-active">
  //       <Button type="default">Signup</Button>
  //     </NavLink>
  //   </div>
  // </div>
  ;
}

function Router() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _components_Calendar__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/profile",
    component: _components_Profiles_Profile__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/login",
    component: _components_Auth_Login__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/signup",
    component: _components_Auth_Signup__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/posts/:day",
    component: _components_Posts_PostsList__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/posts/detail/:id",
    component: _components_Posts_PostDetail__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ })

})
//# sourceMappingURL=main.e56d07d444dd63f0f383.hot-update.js.map