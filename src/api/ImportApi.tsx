import React from "react";
import axios from "axios";
import {ImportModel} from "../models";

const root = `${process.env["REACT_APP_API_ROOT"]}/import`;

export const ImportApi = {
    importTmbBlob: async (blob: string): Promise<ImportModel> => {
        const resp = await axios.post<ImportModel>(root, JSON.parse(blob));
        return resp.data;
    },
    getStatus: async (id: number): Promise<ImportModel> => {
        const resp = await axios.get<ImportModel>(`${root}/${id}`);
        return resp.data;
    }
}
