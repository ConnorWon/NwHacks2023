import React from "react";
import "../styles/LoginStyle.css";
import { useState } from "react";
import axios, * as others from "axios";

export default function Login() {
  const backendURL = "http://127.0.0.1:8000/";

  const [userVar, setUserVar] = useState();

  const handleLogin = async () => {
    const data = {
      username: userVar,
    };

    const info = await axios.post(backendURL + "login/", data);

    if (info.data.key) {
      localStorage.setItem("item", userVar);
      localStorage.setItem("key", info.data.pk);
      window.location.href = "http://localhost:3000/profile";
    }
  };

  const handleSignUp = async () => {
    const data = {
      username: userVar,
    };

    console.log(userVar);
    const info = await axios.post(backendURL + "signup/", data);
    console.log(info.data.pk);

    if (info.data.key) {
      localStorage.setItem("item", userVar);
      localStorage.setItem("key", info.data.pk);
      window.location.href = "http://localhost:3000/profile";
    }
  };

  return (
    <>
      <div id="mainDiv">
        <div className="title">Welcome to your closet</div>

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

          <div
            id="signUpButton"
            onClick={() => {
              console.log(userVar);
              handleSignUp();
            }}
          >
            Sign up
          </div>
        </div>
      </div>
    </>
  );
}
