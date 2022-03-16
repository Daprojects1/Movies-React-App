import React from "react";
import NavBar from "./Nav";
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import MoviePage from "./Movies";
import Rentals from "./rentals.jsx";
import Customers from "./customers";
import NotFound from "./notfound";
import Form from "./movieform";
import LoginForm from "./form";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterForm from "./RegisterForm";



class App extends React.Component {

    render() {
        return (
            <>
                <ToastContainer />
                <NavBar />
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
                </Routes>
            </>
        )
    }
}

export default App