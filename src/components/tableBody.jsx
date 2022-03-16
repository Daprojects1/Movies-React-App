import React from "react";
import _ from "lodash"
import { Link } from "react-router-dom";


class TableBody extends React.Component {

    showCell = (item, column) => {
        if (column.content) return column.content(item);
        return _.get(item, column.path)
    }
    showMoviesHere = () => {
        let { showMovies, columns } = this.props
        return showMovies.map((item, index) => <tr key={index}>{columns.map((column, index) => {
            if (column.label === "Title") {
                return (
                    < td key={index} >
                        <span className="moviesSpan">
                            <Link to={`/movies/${item._id}`}>{this.showCell(item, column)}</Link>
                        </span>
                    </td>
                )
            } else {

            }
            return <td key={index}>{this.showCell(item, column)}</td>
        })}
        </tr >)
    }
    render() {
        return (
            <tbody className="tbody">
                {this.showMoviesHere()}
            </tbody>
        )
    }
}

export default TableBody;

