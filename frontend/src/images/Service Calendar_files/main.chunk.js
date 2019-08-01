(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300, 400, 700);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);
var urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./images/time-273857_1920.jpg */ "./src/images/time-273857_1920.jpg"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ./images/calendar-3045826_1920.jpg */ "./src/images/calendar-3045826_1920.jpg"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ./images/calendar-660670_1920.jpg */ "./src/images/calendar-660670_1920.jpg"));

// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\n.icon {\n  font-family: \"Material Icons\", serif;\n  font-style: normal;\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  -moz-osx-font-smoothing: grayscale;\n  font-feature-settings: \"liga\";\n}\n\n/* VARIABLES */\n\n:root {\n  --main-color: #1a8fff;\n  --text-color: #777;\n  --text-color-light: #ccc;\n  --border-color: #eee;\n  --bg-color: #f9f9f9;\n  --neutral-color: #fff;\n  --matching-color: #e2e1e1;\n}\n\n/* GENERAL */\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Open Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 1em;\n  font-weight: 300;\n  line-height: 1.5;\n  color: var(--text-color);\n  background: var(--bg-color);\n}\n\n.Navbar {\n  height: 10vh;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--neutral-color);\n  box-shadow: 0 4px 2px -2px gray;\n  font-weight: bold;\n}\n\n.nav-first {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-left: 50px;\n}\n.Navbar .buttons {\n  margin-right: 5vw;\n  width: 20vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n.nav-first div {\n  margin-right: 100px;\n}\n.nav-first input {\n  /* padding: 10px 50px 10px 5px; */\n  padding: 6px;\n  margin-top: 8px;\n  margin-right: 16px;\n  font-size: 17px;\n}\n.login-container {\n  width: 100vw;\n  height: 90vh;\n  border: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.login-content {\n  width: 30vw;\n  height: 50vh;\n}\na,\ninput {\n  text-decoration: none;\n  outline: none;\n}\n\n.header {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 1.75em 0;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--neutral-color);\n}\n\nmain {\n  width: 100vw;\n  height: 90vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n}\n/* GRID */\n\n.row {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.row-middle {\n  align-items: center;\n}\n\n.col {\n  flex-grow: 1;\n  flex-basis: 0;\n  max-width: 100%;\n}\n\n.col-start {\n  justify-content: flex-start;\n  text-align: left;\n}\n\n.col-center {\n  justify-content: center;\n  text-align: center;\n}\n\n.col-end {\n  justify-content: flex-end;\n  text-align: right;\n}\n\n/* Calendar */\n\n.calendar {\n  display: block;\n  position: relative;\n  width: 75vw;\n  background: var(--neutral-color);\n  border: 10px solid var(--border-color);\n  box-shadow: 0 4px 2px -2px gray;\n}\n\n.calendar .header {\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 115%;\n  padding: 1.5em 0;\n  border-bottom: 1px solid var(--border-color);\n}\n\n.calendar .header .icon {\n  cursor: pointer;\n  transition: 0.15s ease-out;\n}\n\n.calendar .header .icon:hover {\n  transform: scale(1.75);\n  transition: 0.25s ease-out;\n  color: var(--main-color);\n}\n\n.calendar .header .icon:first-of-type {\n  margin-left: 1em;\n}\n\n.calendar .header .icon:last-of-type {\n  margin-right: 1em;\n}\n\n.calendar .days {\n  text-transform: uppercase;\n  font-weight: 400;\n  color: var(--text-color-light);\n  font-size: 70%;\n  padding: 0.75em 0;\n  border-bottom: 1px solid var(--border-color);\n}\n\n.calendar .body .cell {\n  position: relative;\n  height: 12vh;\n  border-right: 1px solid var(--border-color);\n  overflow-y: scroll;\n  cursor: pointer;\n  background: var(--text-color-light);\n  transition: 0.25s ease-out;\n}\n.calendar .body .cell ul {\n  color: white;\n}\n\n.calendar .body .cell:hover {\n  background: var(--bg-color);\n  transition: 0.5s ease-out;\n}\n\n.calendar .body .selected {\n  border-left: 10px solid transparent;\n  border-image: linear-gradient(45deg, #1a8fff 0%, #53cbf1 40%);\n  border-image-slice: 1;\n}\n\n.calendar .body .row {\n  border-bottom: 1px solid var(--border-color);\n}\n\n.calendar .body .row:last-child {\n  border-bottom: none;\n}\n\n.calendar .body .cell:last-child {\n  border-right: none;\n}\n\n.calendar .body .cell .number {\n  position: absolute;\n  font-size: 82.5%;\n  line-height: 1;\n  top: 0.75em;\n  right: 0.75em;\n  font-weight: 700;\n}\n.calendar .body .cell .post-list {\n  position: absolute;\n  width: 100%;\n  top: 2.5em;\n  left: 0;\n}\n.calendar .body .cell .post-list li {\n  color: var(--main-color);\n  font-weight: bold;\n}\n.calendar .body .disabled {\n  color: var(--text-color-light);\n  pointer-events: none;\n}\n\n.calendar .body .cell .bg {\n  font-weight: 700;\n  line-height: 1;\n  color: var(--main-color);\n  opacity: 0;\n  font-size: 8em;\n  position: absolute;\n  top: -0.2em;\n  right: -0.05em;\n  transition: 0.25s ease-out;\n  letter-spacing: -0.07em;\n}\n\n.calendar .body .cell:hover .bg,\n.calendar .body .selected .bg {\n  opacity: 0.05;\n  transition: 0.5s ease-in;\n}\n\n.calendar .body .col {\n  flex-grow: 0;\n  flex-basis: calc(100% / 7);\n  width: calc(100% / 7);\n}\n.ScrollStyle {\n  max-height: 150px;\n  overflow-y: scroll;\n}\n\n.signup-container {\n  width: 100vw;\n  height: 90vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.signup-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 60vw;\n  height: 60vh;\n}\n.signup-content {\n  width: 70%;\n  height: 100%;\n  margin-right: 5vw;\n}\n\n/* PROFILES */\n.user-profile {\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n}\n.left-box,\n.right-box {\n  width: 50vw;\n  height: 90vh;\n}\n.left-box {\n  background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n  background-size: cover;\n  background-color: var(--main-color);\n}\n.overlay {\n  background: rgba(9, 136, 255, 0.82);\n  overflow: hidden;\n  height: 100%;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  color: var(--neutral-color);\n  font-weight: bold;\n}\n.overlay img {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n}\n\n.provider-container {\n  width: 100vw;\n  height: 90vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.provider-content {\n  width: 90vw;\n  height: 80vh;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n\n  background-color: white;\n  overflow-y: scroll;\n}\n.provider-img {\n  width: 100vw;\n  height: 12vh;\n  background-image: url(" + ___CSS_LOADER_URL___2___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.provider-sideBar {\n  width: 25vw;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 10vh;\n  margin-left: 5vw;\n  margin-right: 10vw;\n  margin-bottom: 5vh;\n  background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n  background-size: cover;\n}\n.overlay2 {\n  background: rgba(9, 136, 255, 0.4);\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  color: var(--neutral-color);\n  font-weight: bold;\n}\n.sideBar-img {\n  border-radius: 50%;\n}\n.provider-col {\n  width: 50vw;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#createPost {\n  margin-top: 10vh;\n\n  width: 80%;\n}\n#provider-profile {\n  margin-top: 10vh;\n  width: 80%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n#provider-events {\n  margin-top: 10vh;\n  overflow-y: scroll;\n}\n.tabs {\n  width: 100%;\n}\n.event-card {\n  width: 70%;\n  margin-bottom: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.profile-data {\n  border-bottom: 1px dashed var(--main-color);\n  width: 100%;\n  height: 10vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.posts-container {\n  width: 100vw;\n  height: 90vh;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.posts-content {\n  width: 55vw;\n  height: 85vh;\n  padding: 30px;\n  background-color: var(--matching-color);\n  opacity: 0.9;\n  box-shadow: 5px 0 5px -1px rgba(1, 1, 2, 0.8),\n    -12px 0 8px -4px rgba(128, 174, 231, 0.8);\n  overflow-y: scroll;\n}\n.post-card {\n  margin: 10px;\n  padding: 30px;\n  transition: 0.8s;\n  border-bottom: 1px solid black;\n}\n.post-card:hover {\n  box-shadow: 0px 5px 10px #888;\n  background-color: var(--neutral-color);\n}\n.detail-container {\n  width: 100vw;\n  height: 90vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n}\n.detail-header {\n  width: 100vw;\n  height: 90vh;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 5px solid #1c6ea4;\n}\n.detail-header h1 {\n  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.35);\n\n  padding: 20px 100px;\n  border-radius: 20px;\n  opacity: 0.8;\n  font-size: 2rem;\n}\n.detail-content {\n  width: 90vw;\n  height: 80vh;\n  border-radius: 40px 40px 40px 40px;\n\n  opacity: 0.9;\n  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.35);\n  background-color: var(--neutral-color);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.detail-image {\n  width: 40vw;\n  height: 50vh;\n  margin-left: 5vw;\n}\n.detail-image img {\n  width: 100%;\n  height: 100%;\n}\n.detail-info {\n  width: 60vw;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n}\n.detail-info-p {\n  font-weight: bold;\n  overflow-y: scroll;\n  margin-bottom: 10px;\n}\n.detail-info h1 {\n  color: var(--main-color);\n}\n", ""]);



/***/ }),

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

/***/ }),

/***/ "./src/components/Auth/Login.js":
/*!**************************************!*\
  !*** ./src/components/Auth/Login.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth */ "./src/services/auth.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ "./src/context.js");
var _jsxFileName = "/Users/dagor/Desktop/Ironhack/week8/final_project/frontend/src/components/Auth/Login.js";





class NormalLoginForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      authService: new _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"]() //context: MyContext

    };

    this.handleSubmit = (e, setUser) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.state.authService.login(values).then(response => {
            //aqui deberia de ir una notificacion o un swal o un toastr
            console.log(response);
            localStorage.setItem("loggedUser", JSON.stringify(response.data.user));
            setUser(response.data.user);
            this.props.history.push("/profile");
          }).catch(err => {
            console.log(err);
          });
        }
      });
    };
  }

  componentWillMount() {
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) return this.props.history.push("/profile");
  }

  render() {
    const getFieldDecorator = this.props.form.getFieldDecorator;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_3__["MyContext"].Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, ({
      setUser
    }) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        onSubmit: e => this.handleSubmit(e, setUser),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        label: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, getFieldDecorator("email", {
        rules: [{
          type: "email",
          message: "The input is not valid E-mail!"
        }, {
          required: true,
          message: "Please input your E-mail!"
        }]
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, getFieldDecorator("password", {
        rules: [{
          required: true,
          message: "Please input your Password!"
        }]
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        prefix: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          type: "lock",
          style: {
            color: "rgba(0,0,0,.25)"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }),
        type: "password",
        placeholder: "Password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        htmlType: "submit",
        className: "login-form-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Log in")))));
    });
  }

}

const WrappedNormalLoginForm = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].create({
  name: "normal_login"
})(NormalLoginForm);
/* harmony default export */ __webpack_exports__["default"] = (WrappedNormalLoginForm);

/***/ }),

/***/ "./src/components/Auth/Signup.js":
/*!***************************************!*\
  !*** ./src/components/Auth/Signup.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth */ "./src/services/auth.js");
var _jsxFileName = "/Users/dagor/Desktop/Ironhack/week8/final_project/frontend/src/components/Auth/Signup.js";




class RegistrationForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      authService: new _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"](),
      checked: false
    };

    this.handleSubmit = e => {
      e.preventDefault();
      let role = "USER";
      if (this.state.checked) role = "PROVIDER";
      this.props.form.validateFieldsAndScroll((err, values) => {
        values.role = role;
        console.log(values);

        if (!err) {
          this.state.authService.signup(values).then(response => {
            //aqui deberia de ir una notificacion o un swal o un toastr
            console.log(response);
            this.props.history.push("/login");
          }).catch(err => {
            console.log(err);
          });
        }
      });
    };
  }

  componentWillMount() {
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) return this.props.history.push("/profile");
  } //   useEffect(() => {
  //     const loggedUser = localStorage.getItem("loggedUser");
  //     if (loggedUser) return props.history.push("/profile");
  //   }, [props.history]);


  render() {
    const getFieldDecorator = this.props.form.getFieldDecorator;
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 8
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 16
        }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    const onChange = checked => {
      this.setState({
        checked
      });
      console.log("switch to ".concat(this.state.checked));
    };

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], Object.assign({}, formItemLayout, {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, getFieldDecorator("email", {
      rules: [{
        type: "email"
      }, {
        required: true,
        message: "Please input your E-mail!"
      }]
    })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: "password",
      hasFeedback: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, getFieldDecorator("password", {
      rules: [{
        required: true,
        message: "Please input your password!"
      }, {
        validator: this.validateToNextPassword
      }]
    })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }))), this.state.checked ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, Object.assign({}, formItemLayout, {
      label: "Comapny",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }), getFieldDecorator("company", {
      rules: [{
        required: true,
        message: "Please input your company name"
      }]
    })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Please input your company name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }))) : null, this.state.checked ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: "Phone Number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, getFieldDecorator("phone", {
      rules: [{
        required: true,
        message: "Please input your phone number!"
      }]
    })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        width: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }))) : null, this.state.checked ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, Object.assign({}, formItemLayout, {
      label: "address",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }), getFieldDecorator("address", {
      rules: [{
        required: true,
        message: "Please input your address"
      }]
    })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Please input your address",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }))) : null, this.state.checked ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: "Website",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, getFieldDecorator("website", {
      rules: [{
        required: false,
        message: "Please input website!"
      }]
    })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"], {
      onChange: this.handleWebsiteChange,
      placeholder: "website",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    })))) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, Object.assign({}, tailFormItemLayout, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      htmlType: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, "Register")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, "Are you a Provider? ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      defaultChecked: false,
      onChange: onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, " "))));
  }

}

const WrappedRegistrationForm = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].create({
  name: "register"
})(RegistrationForm);
/* harmony default export */ __webpack_exports__["default"] = (WrappedRegistrationForm);

/***/ }),

/***/ "./src/components/Calendar.js":
/*!************************************!*\
  !*** ./src/components/Calendar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


var _jsxFileName = "/Users/dagor/Desktop/Ironhack/week8/final_project/frontend/src/components/Calendar.js";

/* eslint-disable no-loop-func */



 //import { Modal } from "antd";
//const baseURL = "https://service-calendar2.herokuapp.com";

const baseURL = "http://localhost:3000";

class Calendar extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      posts: [],
      currentDay: "",
      cMonth: "",
      currentYear: ""
    };

    this.checkDate = (post, day, month, year) => {
      let _post$date$split = post.date.split(" "),
          _post$date$split2 = Object(_Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_post$date$split, 3),
          mm = _post$date$split2[0],
          dd = _post$date$split2[1],
          yy = _post$date$split2[2];

      if (dd === day && mm === month && yy === year) {
        return true;
      }

      return false;
    };

    this.changeDay = day => {
      this.setState({
        currentDay: day
      });
    };

    this.handleOk = e => {
      console.log(e);
      this.setState({
        visible: false
      });
    };

    this.handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false
      });
    };

    this.onDateClick = day => {
      this.setState({
        selectedDate: day
      });
      this.props.history.push("/posts/".concat(day));
    };

    this.nextMonth = () => {
      this.setState({
        currentMonth: date_fns__WEBPACK_IMPORTED_MODULE_3___default.a.addMonths(this.state.currentMonth, 1)
      });
    };

    this.prevMonth = () => {
      this.setState({
        currentMonth: date_fns__WEBPACK_IMPORTED_MODULE_3___default.a.subMonths(this.state.currentMonth, 1)
      });
    };
  }

  componentWillMount() {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(baseURL, "/posts")).then(({
      data
    }) => {
      //const { posts } = data;
      this.setState(prevState => Object(_Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
        posts: data.posts
      }));
    }).catch(err => {
      console.log(err);
    });
  }

  renderHeader() {
    const dateFormat = "MMMM YYYY";
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "header row flex-middle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "icon",
      onClick: this.prevMonth,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "chevron_left")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, date_fns__WEBPACK_IMPORTED_MODULE_3___default.a.format(this.state.currentMonth, dateFormat))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-end",
      onClick: this.nextMonth,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "chevron_right")));
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];
    let startDate = date_fns__WEBPACK_IMPORTED_MODULE_3___default.a.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "col col-center",
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, date_fns__WEBPACK_IMPORTED_MODULE_3___default.a.format(date_fns__WEBPACK_IMPORTED_MODULE_3___default.a.addDays(startDate, i), dateFormat)));
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "days row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, days);
  }

  renderCells() {
    const _this$state = this.state,
          currentMonth = _this$state.currentMonth,
          selectedDate = _this$state.selectedDate;
    const monthStart = date_fns__WEBPACK_IMPORTED_MODULE_3___default.a.startOfMonth(currentMonth);
    const monthEnd = date_fns__WEBPACK_IMPORTED_MODULE_3___default.a.endOfMonth(monthStart);
    const startDate = date_fns__WEBPACK_IMPORTED_MODULE_3___default.a.startOfWeek(monthStart);
    const endDate = date_fns__WEBPACK_IMPORTED_MODULE_3___default.a.endOfWeek(monthEnd);
    const currentYear = date_fns__WEBPACK_IMPORTED_MODULE_3___default.a.getYear(currentMonth).toString();
    const dateFormat = "D";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    let cMonth = date_fns__WEBPACK_IMPORTED_MODULE_3___default.a.getMonth(currentMonth).toString();

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = date_fns__WEBPACK_IMPORTED_MODULE_3___default.a.format(day, dateFormat);
        const cloneDay = day;
        days.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "col cell ".concat(!date_fns__WEBPACK_IMPORTED_MODULE_3___default.a.isSameMonth(day, monthStart) ? "disabled" : date_fns__WEBPACK_IMPORTED_MODULE_3___default.a.isSameDay(day, selectedDate) ? "selected" : ""),
          key: day,
          onClick: () => this.onDateClick(date_fns__WEBPACK_IMPORTED_MODULE_3___default.a.parse(cloneDay)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          className: "number",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, formattedDate), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          className: "bg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, formattedDate), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "post-list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, this.state.posts.map((post, i) => {
          return this.checkDate(post, formattedDate, cMonth, currentYear) ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            key: i,
            to: "/posts/".concat(post._id),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            },
            __self: this
          }, post.title)) : null;
        })))));
        day = date_fns__WEBPACK_IMPORTED_MODULE_3___default.a.addDays(day, 1);
      }

      rows.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "row",
        key: day,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, days));
      days = [];
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, rows, " ");
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "calendar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, this.renderHeader(), this.renderDays(), this.renderCells()));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "./src/components/Posts/PostDetail.js":
/*!********************************************!*\
  !*** ./src/components/Posts/PostDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostDetail; });
/* harmony import */ var _Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _images_calendar_660670_1920_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/calendar-660670_1920.jpg */ "./src/images/calendar-660670_1920.jpg");
/* harmony import */ var _images_calendar_660670_1920_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_calendar_660670_1920_jpg__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/dagor/Desktop/Ironhack/week8/final_project/frontend/src/components/Posts/PostDetail.js";



 //const baseURL = "https://service-calendar2.herokuapp.com";

const baseURL = "http://localhost:3000";
class PostDetail extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      post: [],
      user: ""
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    this.setState(prevState => Object(_Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
      user: JSON.parse(localStorage.getItem("loggedUser"))
    }));
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(baseURL, "/posts/").concat(id)).then(({
      data
    }) => {
      this.setState(prevState => Object(_Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
        post: data.post
      }));
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    if (this.state.post.length !== 0) {
      console.log(this.state.user);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "detail-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "detail-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "detail-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: this.state.post.photo ? this.state.post.photo : _images_calendar_660670_1920_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "detail-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          margin: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, " ", this.state.post.title, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        style: {
          color: "red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Description: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "detail-info-p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, " ", this.state.post.description, " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          margin: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, " I want to Volunteer ")))));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, " There isn't any posts to show ");
    }
  }

}

/***/ }),

/***/ "./src/components/Posts/PostsList.js":
/*!*******************************************!*\
  !*** ./src/components/Posts/PostsList.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _images_calendar_3045826_1920_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/calendar-3045826_1920.jpg */ "./src/images/calendar-3045826_1920.jpg");
/* harmony import */ var _images_calendar_3045826_1920_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_calendar_3045826_1920_jpg__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/Users/dagor/Desktop/Ironhack/week8/final_project/frontend/src/components/Posts/PostsList.js";

/* eslint-disable array-callback-return */





 //const baseURL = "https://service-calendar2.herokuapp.com";

const baseURL = "http://localhost:3000";
const listData = [];

for (let i = 0; i < 3; i++) {
  listData.push({
    href: "http://ant.design",
    title: "ant design part ".concat(i),
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description: "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

const IconText = ({
  type,
  text
}) => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
  type: type,
  style: {
    marginRight: 8
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), text);

class PostsList extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      loading: false,
      posts: [],
      day: "",
      month: "",
      year: ""
    };
  }

  componentWillMount() {
    const day = date_fns__WEBPACK_IMPORTED_MODULE_5___default.a.getDate(this.props.match.params.day).toString();
    const month = date_fns__WEBPACK_IMPORTED_MODULE_5___default.a.getMonth(this.props.match.params.day).toString();
    const year = date_fns__WEBPACK_IMPORTED_MODULE_5___default.a.getYear(this.props.match.params.day).toString();
    this.setState({
      day,
      month,
      year
    });
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(baseURL, "/posts")).then(({
      data
    }) => {
      let arr = this.updatePosts(data.posts);
      this.setState(prevState => Object(_Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState, {
        posts: arr
      }));
    }).catch(err => {
      console.log(err);
    });
  }

  updatePosts(posts) {
    let arr = [];
    posts.map(post => {
      let _post$date$split = post.date.split(" "),
          _post$date$split2 = Object(_Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_post$date$split, 3),
          mm = _post$date$split2[0],
          dd = _post$date$split2[1],
          yy = _post$date$split2[2];

      if (mm === this.state.month && dd === this.state.day && yy === this.state.year) {
        arr.push(post);
      }
    });
    return arr;
  }

  render() {
    const loading = this.state.loading;

    if (this.state.posts.length !== 0) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "posts-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "posts-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, this.state.posts.map((post, i) => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "post-card",
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/posts/detail/".concat(post._id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
        key: i,
        itemLayout: "vertical",
        size: "large",
        dataSource: "1",
        renderItem: item => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
          key: post.title,
          actions: !loading && [react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(IconText, {
            type: "star-o",
            text: "156",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(IconText, {
            type: "like-o",
            text: "156",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(IconText, {
            type: "message",
            text: "2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            },
            __self: this
          })],
          extra: !loading && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
            width: 272,
            alt: "logo",
            src: post.photo ? post.photo : _images_calendar_3045826_1920_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Skeleton"], {
          loading: loading,
          active: true,
          avatar: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          type: "calendar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, " ", post.date, " "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
          title: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
            href: item.href,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          }, post.title),
          description: "this event is sponsored by ".concat(post._id.name),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }))),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }))))));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "There are no posts to show"));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PostsList);

/***/ }),

/***/ "./src/components/Profiles/Profile.js":
/*!********************************************!*\
  !*** ./src/components/Profiles/Profile.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useForm */ "./src/hooks/useForm.js");
/* harmony import */ var _images_default_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/default.jpeg */ "./src/images/default.jpeg");
/* harmony import */ var _images_default_jpeg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_default_jpeg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/Users/dagor/Desktop/Ironhack/week8/final_project/frontend/src/components/Profiles/Profile.js";

/* eslint-disable array-callback-return */






 //const baseURL = "https://service-calendar2.herokuapp.com";

const baseURL = "http://localhost:3000";
const TabPane = antd__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane;

const Profile = props => {
  const _useForm = Object(_hooks_useForm__WEBPACK_IMPORTED_MODULE_6__["default"])(),
        _useForm2 = Object(_Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useForm, 3),
        form = _useForm2[0],
        handleInput = _useForm2[1],
        setForm = _useForm2[2]; //const [updateForm, editHandleInput] = useForm();


  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
        _useState2 = Object(_Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        photo = _useState2[0],
        setPhoto = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
        _useState4 = Object(_Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        posts = _useState4[0],
        setPosts = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(JSON.parse(localStorage.getItem("loggedUser"))),
        _useState6 = Object(_Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 1),
        user = _useState6[0];

  const id = user._id;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const loggedUser = localStorage.getItem("loggedUser");
    if (!loggedUser) return undefined.props.history.push("/");
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(baseURL, "/posts/author/").concat(id)).then(({
      data: {
        posts
      }
    }) => {
      setPosts(posts);
    }).catch(err => {
      console.log(err);
    });
  }, [id]);

  const onSelect = value => {
    const currentMonth = date_fns__WEBPACK_IMPORTED_MODULE_4___default.a.getMonth(value._d);
    const currentYear = date_fns__WEBPACK_IMPORTED_MODULE_4___default.a.getYear(value._d);
    const currentDay = date_fns__WEBPACK_IMPORTED_MODULE_4___default.a.getDate(value._d);
    const date = "".concat(currentMonth, " ").concat(currentDay, " ").concat(currentYear);
    setForm(prevState => Object(_Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
      date
    }));
  };

  const deletePost = id => {
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.delete("".concat(baseURL, "/posts/").concat(id)).then(({
      data
    }) => {
      // const arr = posts.filter(post => post._id !== data.post._id);
      // console.log(arr);
      // setPosts(arr);
      openNotificationWithIcon("warning", "Your event has been deleted.");
    }).catch(err => {
      console.log(err);
    }); // axios
    //   .delete(`http://localhost:3000/calendar/${id}`)
    //   .then(({ data }) => {
    //     console.log(data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  const openNotificationWithIcon = (type, message) => {
    antd__WEBPACK_IMPORTED_MODULE_3__["notification"][type]({
      message: "Notification Title",
      description: message
    });
  };

  const handleSubmit = value => {
    const author = user._id;
    const updatedForm = form;
    updatedForm.photo = photo;
    console.log(updatedForm);
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat(baseURL, "/posts"), {
      updatedForm,
      author
    }).then(({
      data: {
        post
      }
    }) => {
      //const arr = posts.filter(post => post._id === data.post._id)
      setPosts([...posts, post]);
      openNotificationWithIcon("success", "Your event has been created, check the calendar to see!");
    }).catch(err => {});
    posts.map((post, i) => {
      let _post$date$split = post.date.split(" "),
          _post$date$split2 = Object(_Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_post$date$split, 3),
          month = _post$date$split2[0],
          day = _post$date$split2[1],
          year = _post$date$split2[2];

      const obj = {
        day,
        month,
        year,
        post: post._id
      };
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("http://localhost:3000/calendar", Object(_Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, obj)).then(calendar => {}).catch(err => {
        console.log(err);
      });
    });
  };

  const updatePost = id => {
    console.log("inside update"); // const arr = posts;

    axios__WEBPACK_IMPORTED_MODULE_5___default.a.patch("".concat(baseURL, "/posts/").concat(id), {
      form
    }).then(({
      data: {
        post
      }
    }) => {
      // //arr.push(post);
      // arr.push(post);
      // console.log(arr);
      // setPosts(arr);
      openNotificationWithIcon("info", "Your event has been updated.");
    }).catch(err => {
      console.log(err);
    });
  };

  const imageProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text"
    },

    onChange(info) {
      if (info.file.status !== "uploading") {
        const afile = new FormData();
        afile.append("photo", info.file.originFileObj);
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("http://localhost:3000/upload", afile).then(({
          data: {
            img
          }
        }) => {
          setPhoto({
            photo: img
          });
        }).catch(err => {
          console.log("what", err);
        });
      }

      if (info.file.status === "done") {
        antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("".concat(info.file.name, " file uploaded successfully"));
      } else if (info.file.status === "error") {
        antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("".concat(info.file.name, " file upload failed."));
      }
    }

  };

  if (user.role === "PROVIDER") {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "provider-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "provider-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "provider-sideBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "overlay2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "provider-col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "tabs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
      defaultActiveKey: "1",
      type: "able-card",
      className: "tabs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TabPane, {
      tab: "Profile",
      key: "1",
      className: "tabPane",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "provider-profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "profile-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: undefined
    }, " EMAIL: "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: undefined
    }, user.email)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "profile-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: undefined
    }, " PASSWORD: "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: undefined
    }, user.password)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "profile-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: undefined
    }, " COMPANY NAME: "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: undefined
    }, user.company)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "profile-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: undefined
    }, " PHONE: "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: undefined
    }, user.phone)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "profile-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: undefined
    }, " ADDRESS: "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: undefined
    }, user.address)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "profile-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: undefined
    }, " WEBSITE: "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: undefined
    }, user.website)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TabPane, {
      tab: "Create an Event",
      key: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "createPost",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: undefined
    }, "Create an Event"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["DatePicker"], {
      fullscreen: false,
      onChange: onSelect,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
      action: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "text",
      name: "title",
      placeholder: "Name of the event",
      onChange: handleInput,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea, {
      rows: 8,
      name: "description",
      placeholder: "Event description",
      onChange: handleInput,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["TimePicker"], {
      placeholder: "Set a time",
      defaultValue: moment__WEBPACK_IMPORTED_MODULE_8___default()("12:08", "HH:mm"),
      format: "HH:mm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: undefined
    }), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Upload"], Object.assign({}, imageProps, {
      name: "photo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      type: "upload",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: undefined
    }), " Click to Upload")), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      type: "primary submit",
      onClick: handleSubmit,
      onSubmit: () => react__WEBPACK_IMPORTED_MODULE_2__["useEffect"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: undefined
    }, "Submit")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TabPane, {
      tab: "All your events",
      key: "3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "provider-events",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: undefined
    }, posts.length !== 0 ? posts.reverse().map((post, i) => {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "event-card",
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        type: "text",
        name: "title",
        onChange: handleInput,
        defaultValue: "".concat(post.title),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: undefined
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea, {
        style: {
          height: "200px"
        },
        name: "description",
        onChange: handleInput,
        defaultValue: "".concat(post.description),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: undefined
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["DatePicker"], {
        fullscreen: false,
        onChange: onSelect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: undefined
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "event-buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "danger",
        onClick: () => deletePost(post._id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: undefined
      }, "Delete"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: () => updatePost(post._id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: undefined
      }, " ", "Edit", " ")));
    }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: undefined
    }, "no posts"))))))));
  } else if (user.role === "USER") {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "user-profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "left-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "overlay",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: _images_default_jpeg__WEBPACK_IMPORTED_MODULE_7___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: undefined
    }, user.email), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: undefined
    }, "Name: ", user.name, " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: undefined
    }, "Password: ", user.password, " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: undefined
    }, "Email ", user.email, " ")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "right-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: undefined
    }, "Posts you saved.")));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Spin"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: undefined
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./src/context.js":
/*!************************!*\
  !*** ./src/context.js ***!
  \************************/
/*! exports provided: MyContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyContext", function() { return MyContext; });
/* harmony import */ var _Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/dagor/Desktop/Ironhack/week8/final_project/frontend/src/context.js";

const MyContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

function MyProvider(props) {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    user: null,
    isLogged: false
  }),
        _useState2 = Object(_Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        state = _useState2[0],
        setState = _useState2[1];

  const setUser = user => setState(user);

  const delUser = () => setState(null);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyContext.Provider, {
    value: {
      state,
      setUser,
      delUser
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (MyProvider);

/***/ }),

/***/ "./src/hooks/useForm.js":
/*!******************************!*\
  !*** ./src/hooks/useForm.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function useForm() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
        _useState2 = Object(_Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        form = _useState2[0],
        setForm = _useState2[1];

  const handleInput = e => {
    e.persist();
    setForm(prevState => Object(_Users_dagor_Desktop_Ironhack_week8_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
      [e.target.name]: e.target.value
    }));
  };

  return [form, handleInput, setForm];
}

/* harmony default export */ __webpack_exports__["default"] = (useForm);

/***/ }),

/***/ "./src/images/calendar-3045826_1920.jpg":
/*!**********************************************!*\
  !*** ./src/images/calendar-3045826_1920.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/calendar-3045826_1920.09774fe6.jpg";

/***/ }),

/***/ "./src/images/calendar-660670_1920.jpg":
/*!*********************************************!*\
  !*** ./src/images/calendar-660670_1920.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/calendar-660670_1920.9a1b1ec4.jpg";

/***/ }),

/***/ "./src/images/default.jpeg":
/*!*********************************!*\
  !*** ./src/images/default.jpeg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHERAQEhMPEhMQFQ8SFRASEA8PFRUVFREWFhYVExMYHSggGBwmGxYfITEiJSk3Li4uFx8zODMsOCgtMCsBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBBAUCA//EAD0QAAIBAQMIBQkHBQEAAAAAAAABAgMEBREGITFBUWFxgRIicpGhBxMUIzJCUrHBFTNigpLC0UNTg6KyRP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC3QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZSxPnOtGnplFcZJfMD2D5xrwnmUoPhKLPqBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIflJld5nGlZ2nJZpVszS3Q2vfo4gSC9b6o3UvWTXSeinHrTf5dS3vMRC8ct6tbFUYxpr4pYTl/CIvUqOq3KTcm87k22297PIG3arzr2v7yrVluc3h+lZjTwWxGQBjBbEbNmt9Wyfd1KkOzOSXdoNcASW78tK9nwVRRqrelCX6lm70S66MoaF64RjLoz/tz6svy6pcirAnhyAukEEycyvdFqlaW5R0KtplHt7Vv08SdRkppNNNNYprOmtTTAyAAAAAAAAAAAAAAAAAAAAAAHJynvb7JoOS+8n1ILfrlyWfuA4WWmULh0rLSefRVmn/AKJ/Pu2kJEm5Nt4tvO287b2sAAAAAAAAAAAAJRkflC7FJUKr9VJ9WT/pyf7X4EXMAXUCN5E3v6fS81N41KKSxemUNEXy0dxJAAAAAAAAAAAAAAAAAAAAFa5a3h6baZRT6tH1a7XvvvzflLFtVZWaE6j0QjKXcsSnJzdRuTzuTbb3t4sDAAAAAAAAAAAAAAAAOjk/eH2baKdTHq49GfYlmfdp5FsFLFsZO2r0yzUJvO3BJ8Y9V+KA6IAAAAAAAAAAAAAAAAAA5WVVTzdjtD2x6P6pJfUqstHLBY2Ovwg/94lXAAAAAAAAAAAAAAAAACxsganTsmHw1Ki78H9SuSwvJ9HCzTe2rL/mIEnAAAAAAAAAAAAAAAAAAGjflH0mzV4a3TnhxSxXiioy6sMSor4sf2fXq0vgk8Oy88fBoDTAAAAAAAAAAAAAAAALNyLo+ZsdL8bnPvk8PBIrWjSdeUYRzym1FLe3gi4bLQVlhCmtEIxiuSwA+oAAAAAAAAAAAAAAAAAAEN8oF2dJQtMV7OEKnDHqy73hzRMjxXoxtEZQksYzTi1tTApkHRv26pXRVdN4uLzwn8Uf52nOAAAAAAAAAAAAAbN3WGd41I0oLGUnyS1ye5ASDIK7PSKrryXVo5o75tfRZ+aLANW7LDG7aUKUNEVp1yeuT3tm0AAAAAAAAAAAAAAAAAAAAAAaV8XXC96bpz4xmtMZbV/GsrC9rrqXVNwqLsyXsyW2L+motw17dYqd4QdOpFSi9ulPanqYFPAk985HVbK3KjjVh8P9Rcve5Z9xGZwcG0001pTTTXFMDAAAAAAAjv3PknXvDCU06NP4pLrNfhh/IHHsNjnb5qnTi5SlqWpbW9S3lmZPXHC5oYZpVJYdOpt/DHYkbN1XVSuqHQpxwx9qTzyk9smboAAAAAAAAAAAAAAAAAAAAA3gAPFetGzpynKMYr3pNRXeyL37ljCzY07PhUmszqPPBcPifhxITbrdVt8ulVnKb3vMuEdC5AXBCSmk0000mmnimnrTMlXXFlFVujqrr09dOT0b4P3X4E/ui/KF7L1csJa6UurNcta3oDpGpbrso3gvW04T3tdZcJLObYAi9qyHoVPYnVp7urUXjg/E588gpaq8edJr5SJwAINHIKeuvDlSk/3G9ZshaMPbq1Z7oqNNfVkrAGhYLms93/d04p/E+tL9Tzm+AABp3lelG7I9KrNR2R0ylwjpZA7+yqq3ljCGNKk9SfWkvxS2bl4gWNSqKqsYtSW2LTXej0U/YLwq3dLpUpyg92h9qLzPmTe4ssYWtqnXSpzeZTXsSe/H2X4ASkAAAAAAAAAAAAAAAHmpUVJOUmkopttvBJLS2yvMp8p5Xk3SpNxo6G9Dqcdkd3ee8scoPTpOhSfqoPrSXvyX7V46dhGAAAACL6LTWKazprM1wAA7925XWmxYKTVaK1VMelyms/fiSOx5b2et95GpSfDzke+OfwK9AFs0L8s1o9mvR4OcYPulgbsa8Z6JQfCUWUyYwQFzurGOmUVxkkate+LPZ/ar0Vu85FvuTxKi6K3GQLGteWdmoex5yq/wxcV3ywI7eOWde1Yqmo0YvXHrT/U9HJEbAHqrUdZuUm5SemUm5N8WzyAAAAEmyYyold7VKs3KloUtLp8Nsd2rUWFCaqJNNNNJpp4pp6GmUuSnI3KD0OSs9V+rk+pJ+5JvQ38L8GBYAAAAAAAAAAAEZy2vr0Gn5iDwqVVna92Gh83o7yQ2q0RssJ1JPCME5N7kipLytsrwqzqz0zeOGxaorgswGqZAAAAAAAAAAAAAAAAAAAAAAAAAAsTIu+vT6fmZvGpSSwb0yhoT4rQ+RJSoLst0rtqwqx0weOHxLXF8UW3Zq8bVCNSLxjNKSe5rED6AAAAAAAAh/lBvHzcYWeLzz68+ynhFc3i/ykGN+/7d9o2irU1OTUezHMvljzNAAAAAAAAAAAAAAAAAAAAAAAAAAAABO/J/ePnITs7een14dlvrLk/+iCHQyft32daKVTUpdGXZlml88eQFsgAAAABzsorX6FZq01mfRcVxl1V8zokV8odfoUKcPjqYvhGL+rQFfmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAGDIAtjJ61+m2ajN6eiovjHqv5HRIt5Pa/ToVIf26mPKUV9UyUgAAAIZ5R9Fm41flAACEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmvk4/9P8Ah/eTQAAAAP/Z"

/***/ }),

/***/ "./src/images/service-calendar.jpg":
/*!*****************************************!*\
  !*** ./src/images/service-calendar.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/service-calendar.b140b4ac.jpg";

/***/ }),

/***/ "./src/images/time-273857_1920.jpg":
/*!*****************************************!*\
  !*** ./src/images/time-273857_1920.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/time-273857_1920.722dce64.jpg";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Router */ "./src/Router.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./src/context.js");
var _jsxFileName = "/Users/dagor/Desktop/Ironhack/week8/final_project/frontend/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/services/auth.js":
/*!******************************!*\
  !*** ./src/services/auth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseURL = "http://localhost:3000"; //const baseURL = "https://service-calendar2.herokuapp.com";

class AuthService {
  constructor() {
    this.service = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      baseURL,
      withCredentials: true
    });
  }

  signup(data) {
    return this.service.post("/signup", data);
  }

  login(data) {
    return this.service.post("/login", data);
  }

  logout() {
    return this.service.get("/logout");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AuthService);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/dagor/Desktop/Ironhack/week8/final_project/frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/dagor/Desktop/Ironhack/week8/final_project/frontend/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map