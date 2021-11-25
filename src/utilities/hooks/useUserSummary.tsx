import React from "react";
import {UserSummary} from "../../models";
import {useToken} from "./useToken";

export function useUserSummary(): UserSummary | null {
    const {token} = useToken();
    return token?.payload.data ?? null;
}

