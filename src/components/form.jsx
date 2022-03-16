import React from "react";
import Joi from "joi-browser";
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
    doSubmit = () => {
        console.log("submitted")
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