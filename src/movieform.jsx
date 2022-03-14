import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FormComponent from "./reusableForm";
import Joi from "joi-browser";
import { getGenres } from "./services/fakeGenreService";
import { getMovie, saveMovie } from "./services/fakeMovieService";




class Form extends FormComponent {
    state = {
        data: {
            _id: "",
            title: "",
            genre: "",
            numberInStock: "",
            dailyRentalRate: "",
        },
        genres: [],
        errors: {}
    }
    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label("Title"),
        genre: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().min(0).max(100).label("Number In Stock"),
        dailyRentalRate: Joi.number().required().min(0).max(10).label("Daily Rental Rate")
    }
    componentDidMount() {
        const genres = getGenres()
        this.setState({ genres })
        const movieId = this.props.searchParams
        this.checkMovies(movieId)
    }
    checkMovies = (movieId) => {
        if (movieId === "new") return;
        const movie = getMovie(movieId);
        console.log(movie);
        if (!movie) return this.changeNavigate();
        console.log("already have this one")
        this.setState({ data: this.addMovies(movie) })
    }
    addMovies = (movie) => {
        return {
            _id: movie._id,
            genre: movie.genre.name,
            title: movie.title,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
    }
    changeNavigate = () => {
        this.props.navigate("/not-found", { replace: "true" })
    }
    doSubmit = () => {
        saveMovie(this.state.data);
        this.props.navigate("/", { replace: "true" })
    }

    render() {
        const { data } = this.state
        return (
            <form noValidate className="loginform" onSubmit={this.handleSubmit}>
                <h2>Movie Form</h2>
                {this.renderInput("Title", "title", "text", data.title)}
                {this.renderInput("Genre", "genre", "text", data.genre)}
                {this.renderInput("Number in stock", "numberInStock", "text", data.numberInStock)}
                {this.renderInput("Rate", "dailyRentalRate", "text", data.dailyRentalRate)}
                {this.renderBtn("Save")}
            </form>

        )
    }
}

const WithNavigate = (props) => {
    let location = useLocation();
    let navigate = useNavigate()
    let params = props.params().index
    return <Form navigate={navigate} searchParams={params} location={location} />
}

export default WithNavigate