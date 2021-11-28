import React, {ReactNode} from "react";
import {Navigate, Outlet, Route, RouteProps, useLocation} from "react-router-dom";
import {Role} from "../../utilities/types";
import {useAuth} from "../../utilities/hooks/useAuth";

export interface PrivateRouteProps {
    role?: Role,
}

function PrivateRoute({role}: PrivateRouteProps) {
    const {isInRole, isAuthenticated} = useAuth();
    const location = useLocation();
    const authorized = (): boolean => {
        return isAuthenticated && (!role || isInRole(role))
    };

    return (
        authorized() ? <Outlet/> : <Navigate to={"/login"} state={{from: location}}/>
    )
}

export default PrivateRoute;
