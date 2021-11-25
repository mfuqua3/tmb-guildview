import React, {useContext} from "react";
import {AuthContext, AuthState} from "../providers/AuthProvider";

export function useAuth(): AuthState {
    const state = useContext(AuthContext)
    if(state===null){
        throw new Error("useAuth hook may only be used with an AuthProvider");
    }
    return state;
}
