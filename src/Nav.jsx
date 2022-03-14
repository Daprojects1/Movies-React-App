import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className=" main-navs">
                <Link className="nav-item nav-link nav1" to="/">
                    Vidly
                </Link>
                <NavLink className="nav-item nav-link" to="/movies">
                    Movies
                </NavLink>
                <NavLink className="nav-item nav-link" to="/customers">
                    Customers
                </NavLink>
                <NavLink className="nav-item nav-link" to="/rentals">
                    Rentals
                </NavLink>
                <NavLink className="nav-item nav-link" to="/loginform">
                    Login
                </NavLink>
                <NavLink className="nav-item nav-link" to="/signupform">
                    Sign Up
                </NavLink>
            </div>
        </>
    )
}

export default NavBar;