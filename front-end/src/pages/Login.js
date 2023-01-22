import React from "react"
import "../styles/LoginStyle.css"

export default function Login() {

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
                    <input id="username" placeholder="Username"></input>
                    <div id="loginButton">
                        Login
                    </div>
                </div>
            </div>
        </>
    )
} 