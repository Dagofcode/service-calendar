import React, { useState } from "react";
import imgDefault from "../../images/default.jpeg";
//import { Link } from "react-router-dom";
import axios from "axios";
const User = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("loggedUser")));
  console.log(user);

  const Logout = () => {
    console.log("logginout");
    axios
      .get("http://localhost:3000/logout")
      .then(() => {
        localStorage.clear();
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="user-profile">
      <div className="left-box">
        <div className="overlay">
          <img src={imgDefault} alt="" />
          <div>
            <h1>{user.email}</h1>

            <p>Name: {user.name} </p>
            <p>Password: {user.password} </p>
            <p>Email {user.email} </p>
          </div>
          <button onClick={Logout}>Logout</button>
        </div>
      </div>
      <div className="right-box">
        <h1>Posts you saved.</h1>
      </div>
    </div>
  );
};

export default User;
