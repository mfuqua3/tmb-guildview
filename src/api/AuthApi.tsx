import React from "react";
import {ExternalSignInRequest} from "../models";
import axios from "axios";

const root = process.env["REACT_APP_AUTHORITY"];
export const AuthApi = {
    discordConnect: async ({returnUrl}: ExternalSignInRequest): Promise<void> => {
        const url = axios.getUri({
            params:{returnUrl},
            url: `${root}/connect/discord`
        })
        window.location.replace(url);
    }
}
