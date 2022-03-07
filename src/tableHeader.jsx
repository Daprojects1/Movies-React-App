import React from "react"
import "./app.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAsc, faSortDesc } from "@fortawesome/free-solid-svg-icons";

class TableHeader extends React.Component {
    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path) {
            sortColumn.order = (sortColumn.order === "asc") ? "desc" : "asc";
        } else {
            sortColumn.path = path
            sortColumn.order = "asc"
        }
        this.props.onSort(sortColumn)
    }
    renderSortIcon = (column) => {
        let { sortColumn } = this.props
        if (column.path) {
            if (column.path !== sortColumn.path) return null;
            if (sortColumn.order === "asc") return <FontAwesomeIcon icon={faSortAsc}></FontAwesomeIcon>
            return <FontAwesomeIcon icon={faSortDesc}></FontAwesomeIcon>
        }
    }
    render() {
        let { columns } = this.props
        return (
            <thead className="trone">
                <tr>
                    {columns.map((item, index) => {
                        return <th key={index} onClick={() => this.raiseSort(item.path)} className="clickable">{item.label} {this.renderSortIcon(item)}</th>
                    })}
                </tr>
            </thead>
        )
    }
}

export default TableHeader;