import React from "react";
import propTypes from 'prop-types';
import createPagesArr from "./utilityFunctions/createPagesArr";
import classCheck from "./utilityFunctions/classCheck";
import "./app.css"

const PageChange = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
    let pagesCount = Math.ceil(itemsCount / pageSize)
    if (pagesCount === 1) return null
    let pages = createPagesArr(1, pagesCount);
    return (
        <nav aria-label="Page navigation" className="Page">
            <ul className="pagination" >
                {pages.map(page => {
                    return <li key={page} className={`page-item ${classCheck(page, currentPage)} clickable`} ><a className="page-link" onClick={() => onPageChange(page)}>{page}</a></li >
                })
                }

            </ul >
        </nav >
    )
}

PageChange.propTypes = {
    itemsCount: propTypes.number.isRequired,
    pageSize: propTypes.number.isRequired,
    currentPage: propTypes.number.isRequired,
    onPageChange: propTypes.func.isRequired
}
export default PageChange;