import React, { Component } from "react";
import './ErrorComponent.css'

class Error extends Component {

    render() {
        return (
            <div className="error-main">
                <img className="error-img" src={require("../../assests/images/error.svg")}></img>
                <h1 className="error-heading">Error</h1>
                <p>This page could not be found!</p>
                <p>Let's go 🔙 <a className="error-url" href="/">home</a>.</p>
            </div>
        )
    }
}

export default Error;