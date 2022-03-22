import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, Navigate, useParams } from "react-router-dom";
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
import auth from "./services/authService"
import "./app.css"


class App extends React.Component {
    state = {}
    componentDidMount() {
        const user = auth.getUser();
        this.setState({ user })
    }
    checkUser(user, Page) {
        console.log(user)
        return (!user) ? <Navigate replace to="/loginform" /> : <Page user={user} useParams={useParams} />
    }
    render() {
        let { user } = this.state
        return (
            <>
                <ToastContainer />
                <NavBar user={user} />
                <Routes>
                    <Route path="/movies" element={<MoviePage user={user} />} />
                    <Route path="/" element={<Navigate replace to="/movies" />} />
                    <Route path="/customers" element={(user && <Customers />) || <LoginForm />} />
                    <Route path="/rentals" element={(user && <Rentals />) || <LoginForm />} />
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="/movies/:index" exact element={(user && <Form useParams={useParams} />) || <LoginForm />} />
                    <Route path="*" element={<Navigate replace to="/not-found" />} />
                    <Route path="/loginform" element={<LoginForm />} />
                    <Route path="/signupform" element={<RegisterForm />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </>
        )
    }
}

// const WithRouter = (props) => {
//     return <App {...props} />
// }

export default App;

