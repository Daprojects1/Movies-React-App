import React from "react";
import auth from "../services/authService";

class Logout extends React.Component {
    componentDidMount() {
        auth.logOut()
        window.location = "/"
    }
    render() {
        return null
    }
}

export default Logout;