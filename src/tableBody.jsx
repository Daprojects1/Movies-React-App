import React from "react";
import _ from "lodash"
import "./app.css"

class TableBody extends React.Component {

    showCell = (item, column) => {
        if (column.content) return column.content(item);
        return _.get(item, column.path)
    }
    showMoviesHere = () => {
        let { showMovies, columns } = this.props
        return showMovies.map((item, index) => <tr key={index}>{columns.map((column, index) => <td key={index}>{this.showCell(item, column)}</td>)}
        </tr>)
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

