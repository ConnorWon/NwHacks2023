import React from "react"
import "../styles/LoginStyle.css"
import { useState } from 'react';

export default function Login() {

    const [userVar, setUserVar] = useState()
    // todo: 
    // add welcome header
    // add user: element 
    // add box element that takes in the user input 


    return (
        <>
            <div id="mainDiv">
                <div class="title">
                    Welcome to your closet
                </div>

                <div id="user">
                    <input id="username" placeholder="Username" onChange={(e) => {
                        setUserVar(e.target.value)
                    }}></input>
                    <div id="loginButton" onClick={() => {
                        console.log(userVar)
                    }}>
                        Login
                    </div>
                </div>
            </div>
        </>
    )
} 