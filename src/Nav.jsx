import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className=" main-navs">
                <NavLink className="nav-item nav-link nav1" to="/">
                    NavBar
                </NavLink>
                <NavLink className="nav-item nav-link" to="/movies">
                    Movies
                </NavLink>
                <NavLink className="nav-item nav-link" to="/customers">
                    Customers
                </NavLink>
                <NavLink className="nav-item nav-link" to="/rentals">
                    Rentals
                </NavLink>
            </div>
        </>
    )
}

export default NavBar;