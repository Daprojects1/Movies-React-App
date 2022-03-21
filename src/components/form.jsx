import React from "react";
import Joi from "joi-browser";
import FormComponent from "./reusableForm";
import auth from "../services/authService";


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
        const { data } = this.state;
        try {
            await auth.login(data.username, data.password)
            window.location = "/"
        } catch (error) {
            if (error.response && error.response.status === 404) {
                let errors = { ...this.state.errors }
                errors.username = "Invalid email or password";
                this.setState({ errors })
            }
        }
    }
    render() {
        const { data } = this.state
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