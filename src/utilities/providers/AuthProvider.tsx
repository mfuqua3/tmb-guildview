import React, {createContext, ReactNode, useEffect, useState} from "react";
import {Role} from "../types";
import {useToken} from "../hooks/useToken";
import {withToken} from "./TokenProvider";

export interface AuthProviderProps {
    children: ReactNode;
}
export interface AuthState {
    authenticate(accessToken: string): void;
    signOut(): void;
    isAuthenticated: boolean;
    isInRole(role: Role): boolean;
}
export const AuthContext = createContext<AuthState | null>(null);
function AuthProvider({children}: AuthProviderProps) {
    const {updateToken, token, clearToken} = useToken();
    function authenticated():boolean {
        const now = +Date.now() / 1000;
        return !!token && token.payload.notBefore <= now && token.payload.expires > now;
    }
    function signOut() {
        clearToken();
    }
    function isInRole(role: Role): boolean {
        if(!authenticated())
            return false;
        return token?.payload.data.roles.includes(role) ?? false;
    }

    const state: AuthState = {
        authenticate: updateToken,
        isAuthenticated: authenticated(),
        isInRole,
        signOut

    }
    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    )
}

export default withToken(AuthProvider);
