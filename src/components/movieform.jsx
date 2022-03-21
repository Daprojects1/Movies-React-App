import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FormComponent from "./reusableForm";
import Joi from "joi-browser";
import { getSGenres } from "../services/genreServer";
import { getSMovie, saveMovie } from "../services/movieServer";
import NotFound from "./notfound";

class Form extends FormComponent {
    state = {
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: "",
        },
        genres: [],
        errors: {},
        isMovies: true
    }
    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().min(0).max(100).label("Number In Stock"),
        dailyRentalRate: Joi.number().required().min(0).max(10).label("Daily Rental Rate")
    }
    async componentDidMount() {
        const genres = await getSGenres()
        this.setState({ genres })
        const movieId = this.props.searchParams
        this.checkMovies(movieId)
    }
    checkMovies = async (movieId) => {
        if (movieId === "new") return;
        const movie = await getSMovie(movieId);
        if (!movie) return this.setState({ isMovies: false });
        this.setState({ data: this.addMovies(movie) })
    }

    addMovies = (movie) => {
        return {
            _id: movie._id,
            genreId: movie.genre._id,
            title: movie.title,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
    }
    doSubmit = async () => {
        await saveMovie(this.state.data);
        this.props.navigate("/", { replace: "true" })
    }

    render() {
        const { data, genres } = this.state
        if (this.state.isMovies === false) return (<NotFound />)
        else return (
            <form noValidate className="loginform" onSubmit={this.handleSubmit}>
                <h2>Movie Form</h2>
                {this.renderInput("Title", "title", "text", data.title)}
                {this.renderSelect("Genre", "genreId", genres)}
                {this.renderInput("Number in stock", "numberInStock", "text", data.numberInStock)}
                {this.renderInput("Rate", "dailyRentalRate", "text", data.dailyRentalRate)}
                {this.renderBtn("Save")}
            </form>
        )
    }
}

const WithNavigate = (props) => {
    console.log(props)
    let navigate = useNavigate()
    let params = props.useParams().index
    return <Form navigate={navigate} searchParams={params} />
}

export default WithNavigate;