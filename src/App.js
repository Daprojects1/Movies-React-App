import React from "react";
import { getMovies } from "./services/fakeMovieService";
import Header from "./Header"
import "./app.css"
import { getGenres } from "./services/fakeGenreService";
import PageChange from "./paginationComp";
import paginate from "./utilityFunctions/paginate";
import ListGroup from "./listGroup";
import Table from "./table";
import NoMoviesText from "./noMoviesText";
import _ from "lodash"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            genres: [],
            pageSize: 4,
            currentPage: 1,
            currentGenre: "All Genres",
            sortColumn: {
                path: "title",
                order: "asc"
            }
        }
    }
    stylesech1 = {
        margin: "30px",
    }
    componentDidMount() {
        let genres = [{ name: "All Genres", id: "a24B" }, ...getGenres()]
        this.setState({ movies: getMovies(), genres: genres })
    }
    clickLikes = (movie) => {
        const movies = [...this.state.movies]
        const indx = movies.indexOf(movie)
        movies[indx] = { ...movies[indx] }
        movies[indx].liked = !movies[indx].liked
        this.setState({ movies });
    }
    pageChange = (page) => {
        this.setState(() => {
            return {
                currentPage: page
            }
        })
    }
    isItGenre = (name) => {
        this.setState(() => {
            return {
                currentGenre: name
            }
        })
        this.setState({ currentPage: 1 })
    }
    check = (name, currentGenre) => {
        let classes = ""
        if (name === currentGenre) {
            classes += "active"
        }
        return classes;
    }
    // working on filter function
    filtered = (allMovies) => {
        let { currentGenre } = this.state
        return (currentGenre !== "All Genres") ? allMovies.filter(m => m.genre.name === currentGenre) : allMovies
    }
    sorted = (movies) => {
        let { sortColumn } = this.state
        return _.orderBy(movies, [sortColumn.path], [sortColumn.order])
    }
    showMovies = () => {
        let { movies: allMovies, pageSize, currentPage } = this.state;
        let sorted = this.sorted(this.filtered(allMovies))
        let movies = paginate(sorted, currentPage, pageSize)
        return movies;
    }
    sort = (sortColumn) => {
        this.setState({ sortColumn })
    }
    deleteMovie = (item) => {
        const movies = this.state.movies.filter(m => m._id !== item._id)
        this.setState({ movies })
    }
    render() {
        let { genres, currentGenre, movies, sortColumn, pageSize, currentPage } = this.state;
        if (movies.length > 0) {
            return (
                <div className="flexBod">
                    <ListGroup onSelect={this.isItGenre}
                        getGenres={genres}
                        currentGenre={currentGenre}
                        check={this.check} >
                    </ListGroup>
                    <div className="main-tbls">
                        <Header count={this.filtered(movies).length} />
                        <Table showMovies={this.showMovies()}
                            onSort={this.sort}
                            sortColumn={sortColumn}
                            clickLikes={this.clickLikes}
                            deleteMovie={this.deleteMovie}>
                        </Table>
                        <PageChange itemsCount={this.filtered(movies).length}
                            pageSize={pageSize}
                            onPageChange={this.pageChange}
                            currentPage={currentPage}
                            currentGenre={currentGenre} >
                        </PageChange>
                    </div>
                </div>
            )
        } else {
            return (
                <NoMoviesText style={this.stylesech1} />
            )
        }

    }
}

export default App;