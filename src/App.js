import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, Navigate, useParams, useNavigate, useLocation } from "react-router-dom";
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
import { createBrowserHistory } from "history";
import "./app.css"



class App extends React.Component {
    state = {
        checker: 0,
        currentLocation: {}
    }
    componentDidMount() {
        const user = auth.getUser();
        const history = createBrowserHistory()
        this.setState({ user })
        this.setState({ currentLocation: { ...history } })
    }
    returnToLocation() {
        return null;
    }
    returnPage = () => {
        return <LoginForm  {...this.props} history={this.state.currentLocation} user={this.state.user} />
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
                    <Route path="/customers" element={(user && <Customers />) || this.returnPage()} />
                    <Route path="/rentals" element={(user && <Rentals />) || this.returnPage()} />
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="/movies/:index" element={(user && <Form useParams={useParams} />) || this.returnPage()} />
                    <Route path="*" element={<Navigate replace to="/not-found" />} />
                    <Route path="/loginform" element={this.returnPage()} />
                    <Route path="/signupform" element={<RegisterForm />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </>
        )
    }
}


const WithLocation = () => {
    return <App nav={useNavigate()} location={useLocation()} />
}
export default WithLocation;

