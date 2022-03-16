import Joi from "joi-browser";
import React from "react";
import FormComponent from "./reusableForm";

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
    doSubmit = () => {
        // send data
        console.log("submitted2")
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

export default RegisterForm;