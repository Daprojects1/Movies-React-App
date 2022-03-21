import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import jwtDecode from "jwt-decode"
import { ToastContainer } from 'react-toastify';
import NavBar from "./components/Nav";
import MoviePage from "./components/Movies";
import Rentals from "./components/rentals.jsx";
import Customers from "./components/customers";
import NotFound from "./components/notfound";
import Form from "./components/movieform";
import LoginForm from "./components/form";
import RegisterForm from "./components/RegisterForm";
import Logout from "./components/logout";
import "./app.css"


class App extends React.Component {
    state = {}
    componentDidMount() {
        try {
            const jwt = localStorage.getItem("token");
            const user = jwtDecode(jwt);
            this.setState({ user })
        } catch (error) { }
    }
    render() {
        return (
            <>
                <ToastContainer />
                <NavBar user={this.state.user} />
                <Routes>
                    <Route path="/movies" element={<MoviePage />} />
                    <Route path="/" element={<Navigate replace to="/movies" />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/rentals" element={<Rentals />} />
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="/movies/:index" exact element={<Form params={useParams} />} />
                    <Route path="*" element={<Navigate replace to="/not-found" />} />
                    <Route path="/loginform" element={<LoginForm />} />
                    <Route path="/signupform" element={<RegisterForm />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </>
        )
    }
}

export default App