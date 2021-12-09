import React from "react";
import axios from "axios";
import {CreatePreVoteRequest, PreVoteSummary} from "../models";

const root = `${process.env["REACT_APP_API_ROOT"]}/prevote`;

export const PreVoteApi = {
    create: async (request: CreatePreVoteRequest): Promise<PreVoteSummary> => {
        const resp = await axios.post<PreVoteSummary>(root, request);
        return resp.data;
    }
}
