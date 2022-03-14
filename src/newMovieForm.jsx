import React from "react";
import FormComponent from "./reusableForm";
import Joi from "joi-browser";

class NewMovieForm extends FormComponent {
    state = {
        data: {
            title: "",
            genre: "",
            numberInStock: "",
            rate: "",
        },
        errors: {}
    }
    schema = {
        title: Joi.string().required().label("Title"),
        genre: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().min(0).max(100).label("NummberInStock"),
        rate: Joi.number().required().min(0).max(10).label("Rate")
    }
    doSubmit = () => {
        let { data } = this.state
        const { addMovies } = this.props;
        let title = data.title
        let genre = { name: data.genre }
        let numberInStock = data.numberInStock
        let dailyRentalRate = data.rate
        let movie = { title, genre, numberInStock, dailyRentalRate };
        addMovies(movie)
    }

    render() {
        const { data } = this.state
        return (
            <form noValidate className="loginform" onSubmit={this.handleSubmit}>
                <h2>New Movie Form</h2>
                {this.renderInput("Title", "title", "text", data.title)}
                {this.renderInput("Genre", "genre", "text", data.genres)}
                {this.renderInput("Number in stock", "numberInStock", "text", data.numberInStock)}
                {this.renderInput("Rate", "rate", "text", data.rate)}
                {this.renderBtn("Save")}
            </form>

        )
    }
}

export default NewMovieForm;