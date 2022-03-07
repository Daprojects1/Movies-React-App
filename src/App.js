import React from "react";
import NavBar from "./Nav";
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import MoviePage from "./Movies";
import Rentals from "./rentals.jsx";
import Customers from "./customers";
import NotFound from "./notfound";
import Form from "./movieform";

class App extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <Routes>
                    <Route path="/movies" element={<MoviePage />} />
                    <Route path="/" element={<Navigate replace to="/movies" />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/rentals" element={<Rentals />} />
                    <Route path="not-found" element={<NotFound />} />
                    <Route path="/movies/:index" element={<Form params={useParams} />} />
                    <Route path="*" element={<Navigate replace to="not-found" />} />
                </Routes>
            </>
        )
    }
}

export default App