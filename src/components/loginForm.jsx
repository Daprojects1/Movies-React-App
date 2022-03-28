import React from "react";
import Joi from "joi-browser";
import auth from "../services/authService";
import { Navigate } from "react-router-dom";
import FormComponent from "./reusableForm";




class LoginForm extends FormComponent {
    state = {
        data: {
            username: "",
            password: ""
        },
        errors: {}
    }
    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }
    doSubmit = async () => {
        const { pathname } = this.props.location
        const { data } = this.state;
        try {
            await auth.login(data.username, data.password)
            window.location = (pathname) ? pathname : "/"
        } catch (error) {
            if (error.response && error.response.status === 400) {
                let errors = { ...this.state.errors }
                errors.username = "Invalid email or password";
                this.setState({ errors })
            }
        }
    }
    render() {
        const { data } = this.state
        if (this.props.user) return <Navigate replace to="/" />
        return (
            <form noValidate className="loginform" onSubmit={this.handleSubmit}>
                <h2>Log In</h2>
                {this.renderInput("Enter Email", "username", "email", data.username)}
                {this.renderInput("Enter Password", "password", "password", data.password)}
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                {this.renderBtn("Login")}
            </form>
        )
    }
}

export default LoginForm;