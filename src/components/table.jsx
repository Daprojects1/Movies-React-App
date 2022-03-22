import React from "react"
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Likes from "./likeComp";
import FullTable from "./tableWhole";
import auth from "../services/authService"

class Table extends React.Component {
    constructor() {
        super();
        const user = auth.getUser()
        if (user && user.isAdmin) this.columns.push(this.deleteColumn)
    }
    stylebtn = {
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "5px"
    }
    deleteColumn = { content: (movie) => <button onClick={() => this.props.deleteMovie(movie)} style={this.stylebtn} className="btn clickable">Delete</button> }

    columns = [
        { path: "title", label: "Title" },
        { path: "genre.name", label: "Genre" },
        { path: "numberInStock", label: "Stock" },
        { path: "dailyRentalRate", label: "Rate" },
        { content: (movie) => <Likes liked={movie.liked} click={() => this.props.clickLikes(movie)}></Likes> },
    ]

    render() {

        let { sortColumn, onSort, showMovies, clickLikes, deleteMovie } = this.props;
        return (
            <FullTable>
                <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
                <TableBody showMovies={showMovies} clickLikes={clickLikes} deleteMovie={deleteMovie} columns={this.columns} />
            </FullTable>
        )
    }
}

export default Table;