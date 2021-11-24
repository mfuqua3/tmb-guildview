import React, {createContext, ReactNode, useState} from "react";
import {JwtToken, JwtTokenHeader, JwtTokenPayload, UserSummary} from "../../models";
import {GuildViewConstants} from "../constants";
import {useSessionStorage} from "../hooks/useSessionStorage";

const key = "gv-accessToken";
export interface TokenProviderProps {
    children: ReactNode;
}
export interface TokenProviderState {
    updateToken(jwt: string):void;
    token: JwtToken<UserSummary> | null;
}
export const TokenContext = createContext<TokenProviderState | null>(null);

function TokenProvider({children} : TokenProviderProps) {
    const constants = GuildViewConstants.claims;
    const {getValue, setValue} = useSessionStorage(key);
    const [token, setToken] = useState<JwtToken<UserSummary> | null>(()=>{
        const currentValue = getValue();
        return currentValue === null ? null : decodeToken(currentValue);
    })
    function updateToken(jwt: string): void {
        setValue(jwt);
        setToken(decodeToken(jwt));
    }
    function decodeToken(value: string): JwtToken<UserSummary> {
        const substrings = value.split(".");
        if (substrings.length !== 3) {
            throw new Error("Invalid JWT token value provided.");
        }
        return {
            header: decodeHeader(substrings[0]),
            payload: decodePayload(substrings[1])
        }
    }
    function decodeHeader(headerToken: string): JwtTokenHeader {
        const decodedToken = atob(headerToken);
        const tokenJson = JSON.parse(decodedToken);
        return {
            algorithm: tokenJson['alg'],
            type: tokenJson['typ']
        }
    }
    function decodePayload(payloadToken: string): JwtTokenPayload<UserSummary>{
        const decodedToken = atob(payloadToken);
        const tokenJson = JSON.parse(decodedToken);
        return {
            notBefore: tokenJson[constants.notBefore],
            expires: tokenJson[constants.expires],
            issuedAt: tokenJson[constants.issuedAt],
            issuer: tokenJson[constants.issuer],
            audience: tokenJson[constants.audience],
            data: {
                id: tokenJson[constants.userId],
                username: tokenJson[constants.username],
                email: tokenJson[constants.email],
                roles: tokenJson[constants.roles]
            }
        }
    }
    return (
        <TokenContext.Provider value={{updateToken, token}}>
            {children}
        </TokenContext.Provider>
    )
}

export function withToken<T>(WrappedComponent: React.ComponentType<T>){
    const ComponentWithToken = (props: T) => {
        return (
            <TokenProvider>
                <WrappedComponent {...props} />
            </TokenProvider>
        )
    }
    return ComponentWithToken;
}
