import React from "react";
import axios from "axios";
import {ClaimGuildRequest, GuildOwnerDetail, ServerSummary, Token} from "../models";

const root = `${process.env["REACT_APP_API_ROOT"]}/guilds`;

export const GuildsApi = {
    getUserGuilds: async (): Promise<ServerSummary[]> => {
        const resp = await axios.get<ServerSummary[]>(root);
        return resp.data;
    },
    claimGuild: async (request: ClaimGuildRequest): Promise<GuildOwnerDetail> => {
        const url = `${root}/configure`;
        const resp = await axios.post<GuildOwnerDetail>(url, request);
        return resp.data;
    },
    changeGuildScope: async (id: number): Promise<Token> => {
        const url = `${root}/select/${id}`;
        const resp = await axios.get<Token>(url);
        return resp.data;
    },
    releaseGuild: async (id: string): Promise<void> => {
        const url = `${root}/release/${id}`;
        await axios.delete(url);
    }
}
