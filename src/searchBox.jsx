import React from "react"

const SearchBox = ({ value, reFilterMovies }) => {
    return (
        <div className="inputHome">
            <input type="text" name="query" value={value} placeholder="Search..." onChange={reFilterMovies} />
        </div>
    )
}

export default SearchBox;