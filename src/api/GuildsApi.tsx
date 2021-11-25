import React from "react";
import axios from "axios";
import {GuildSummary} from "../models";

const root = `${process.env["REACT_APP_API_ROOT"]}/guilds`;

export const GuildsApi = {
    getUserGuilds: async (): Promise<GuildSummary[]> => {
        const resp = await axios.get<GuildSummary[]>(root);
        return resp.data;
    }
}
