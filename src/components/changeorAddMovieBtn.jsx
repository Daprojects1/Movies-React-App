import React from "react";
import { Link } from "react-router-dom";

const NewMovieBtn = () => {
    return (
        <div className="header-center">
            <button className="btn btn-primary">
                <Link to={{ pathname: "/movies/new" }} >New Movie</Link>
            </button>
        </div>
    )
}

export default NewMovieBtn;