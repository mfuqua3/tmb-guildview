import React, {useContext} from "react";
import {TokenContext, TokenProviderState} from "../providers/TokenProvider";

export function useToken(): TokenProviderState {
    const state = useContext(TokenContext);
    if(state===null){
        throw new Error("useToken must be used within a token provider");
    }
    return state;
}
