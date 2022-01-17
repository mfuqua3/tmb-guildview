import React from "react";
import axios from "axios";
import {CreatePreVoteRequest, PreVoteConfiguration, PreVoteSummary} from "../models";

const root = `${process.env["REACT_APP_API_ROOT"]}/prevote`;
export type configurationType = "latest" | "default";

export const PreVoteApi = {
    create: async (request: CreatePreVoteRequest): Promise<PreVoteSummary> => {
        const resp = await axios.post<PreVoteSummary>(root, request);
        return resp.data;
    },
    getConfiguration: async (type: configurationType): Promise<PreVoteConfiguration | null> => {
        const resp = await axios.get<PreVoteConfiguration>(`${root}/configuration/${type}`);
        return resp.status !== 404 ? resp.data : null;
    }
}
