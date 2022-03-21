import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";


const NavBar = ({ user }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Vidly</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <NavLink className="nav-item nav-link" to="/movies">
                            Movies
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/customers">
                            Customers
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/rentals">
                            Rentals
                        </NavLink>
                        {!user && (
                            <>
                                <NavLink className="nav-item nav-link" to="/loginform">
                                    Login
                                </NavLink>
                                <NavLink className="nav-item nav-link" to="/signupform">
                                    Signup
                                </NavLink>
                            </>
                        )}
                        {user && (
                            <>
                                <NavLink className="nav-item nav-link" to="/profile">
                                    {user.name}
                                </NavLink>
                                <NavLink className="nav-item nav-link" to="/logout">
                                    Logout
                                </NavLink>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;

