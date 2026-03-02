import React from "react";
import "./login.css";
export default function Login() {
    return (
        <>
        <div className="main-div">
             <img src="./images/dec-login.png" alt="login decoration" className="dec-login" />
        <div className="login-container">
            <h2 className="login-heading">Login to Your Account</h2>
            <input type="email" placeholder="Email" className="login-input1">
            
            </input>
            <input type="password" placeholder="Password" className="login-input2"/>
            <input type="submit" value="Login" className="sub-button"/>
            
        </div>
        </div>
       
        </>
    );
}
