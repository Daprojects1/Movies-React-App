
import React from "react";
import { Navigate, Route } from "react-router";

const ProtectedRoutes = ({ user, Element, ...rest }) => {
    if (!user) {
        return (
            <Route element={<Navigate replace to="loginform" />} />
        )
    }
    return (
        <Route
            element={<Element {...rest} />}
        />
    )
}

export default ProtectedRoutes;

