import React from "react";
import "../styles/LoginStyle.css";
import { useState } from "react";
import axios, * as others from "axios";

export default function Login() {
  const backendURL = "http://127.0.0.1:8000/";

  const [userVar, setUserVar] = useState();
  // todo:
  // add welcome header
  // add user: element
  // add box element that takes in the user input

  const handleLogin = async () => {
    const info = await axios.get(backendURL + "login/", userVar);

    console.log(info);
  };

  return (
    <>
      <div id="mainDiv">
        <div class="title">Welcome to your closet</div>

        <div id="user">
          <input
            id="username"
            placeholder="Username"
            onChange={(e) => {
              setUserVar(e.target.value);
            }}
          ></input>
          <div
            id="loginButton"
            onClick={() => {
              console.log(userVar);
              handleLogin();
            }}
          >
            Login
          </div>
        </div>
      </div>
    </>
  );
}
