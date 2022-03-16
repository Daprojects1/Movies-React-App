import Joi, { errors } from "joi-browser";
import React from "react";
import FormComponent from "./reusableForm";
import * as userService from "../services/userService"
import { useNavigate } from "react-router";

class RegisterForm extends FormComponent {
    state = {
        data: {
            username: "",
            password: "",
            name: ""
        },
        errors: {}
    }
    schema = {
        username: Joi.string().email().required().label("Username"),
        password: Joi.string().alphanum().min(5).required().label("Password"),
        name: Joi.string().required().label("Name")
    }
    doSubmit = async () => {
        try {
            const response = await userService.registerUser(this.state.data);
            localStorage.setItem("token", response.headers["x-auth-token"])
            this.props.nav("/", { replace: "true" })
        } catch (error) {
            if (error.response && error.response.status === 400) {
                let errors = { ...this.state.errors }
                errors.username = "Looks like you already have an account!";
                this.setState({ errors })
            }
        }
    }
    render() {
        const { data } = this.state
        return (
            <form className="loginform" onSubmit={this.handleSubmit}>
                <h2>Register</h2>
                {this.renderInput("Username", "username", "email", data.username)}
                {this.renderInput("Password", "password", "password", data.password)}
                {this.renderInput("Name", "name", "text", data.name)}
                {this.renderBtn("Register")}
            </form>

        )
    }
}

function WithRoutes(props) {
    let navigate = useNavigate();
    return <RegisterForm nav={navigate} />;
}

export default WithRoutes;