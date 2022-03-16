import React from "react";


const Header = ({ count, addMovies }) => {
    return (
        <h2 className="headermain">Showing {count} movies in the database</h2>
    )
}

export default Header;