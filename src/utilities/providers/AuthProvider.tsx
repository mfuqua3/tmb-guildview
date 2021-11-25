import React, {createContext, ReactNode} from "react";
import {Role} from "../types";
import {useToken} from "../hooks/useToken";
import {withToken} from "./TokenProvider";

export interface AuthProviderProps {
    children: ReactNode;
}
export interface AuthState {
    authenticate(accessToken: string): void;
    isAuthenticated: boolean;
    isInRole(role: Role): boolean;
}
export const AuthContext = createContext<AuthState | null>(null);
function AuthProvider({children}: AuthProviderProps) {
    const {updateToken, token} = useToken();
    function isAuthenticated(): boolean {
        const now = +Date.now()/1000;
        return !!token && token.payload.notBefore <= now && token.payload.expires > now;
    }
    function isInRole(role: Role): boolean {
        if(!isAuthenticated())
            return false;
        return token?.payload.data.roles.includes(role) ?? false;
    }
    const state: AuthState = {
        authenticate: updateToken,
        isAuthenticated: isAuthenticated(),
        isInRole
    }
    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    )
}

export default withToken(AuthProvider);
