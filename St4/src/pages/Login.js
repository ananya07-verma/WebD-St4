import React, { useState } from "react";
import { Navbar } from "react-bootstrap-v5";
import ReactDOM from "react-dom";

import "./Login.css";

function Login() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "ananyaverma838@gmail.com",
            password: "pass1"
        },
        {
            username: "abc@yahoo.in",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
    // . The handleSubmit() function accesses the event object of the form element, event.preventDefault() code avoids default form submit action which includes reloading of the page.
    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label className="head">Email</label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label className="head">Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div id="page">
            <Navbar />
            <div className="app">
                <h1 id="label">Login To view ur Bookings</h1>
                <div className="login-form">

                    <div className="title">Login</div>
                    {isSubmitted ? <div id="res">User is successfully logged in</div> : renderForm}
                </div>
            </div>
        </div>
    );
}

export default Login;


