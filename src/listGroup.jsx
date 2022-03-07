import React from "react";

const ListGroup = ({ onSelect, getGenres, currentGenre, check }) => {
    return (
        <ul className="list-group">
            {getGenres.map((genre) => {
                return <li className={`list-group-item ${check(genre.name, currentGenre)} clickable`} key={genre.name} onClick={() => onSelect(genre.name, currentGenre)}>{genre.name}</li>
            })}
        </ul>
    )
}

export default ListGroup;