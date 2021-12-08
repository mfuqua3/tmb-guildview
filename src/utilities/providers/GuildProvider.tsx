import React, {ReactNode, useState} from "react";
import {GuildClaim} from "../../models";
import {useToken} from "../hooks/useToken";
import {GuildsApi} from "../../api/GuildsApi";

export interface GuildProviderProps {
    children: ReactNode;
}
export interface GuildProviderState {
    changeGuild(guildId: number): Promise<void>;
    currentGuild: GuildClaim | null;
}
export const GuildContext = React.createContext<GuildProviderState | null>(null);

function GuildProvider({children}: GuildProviderProps) {
    const {token, updateToken} = useToken();
    async function changeGuild(guildId: number): Promise<void>{
        const token = await GuildsApi.changeGuildScope(guildId);
        updateToken(token.accessToken);
    }
    return (
        <GuildContext.Provider value={{currentGuild: token?.payload?.data?.activeGuild ?? null, changeGuild}}>
            {children}
        </GuildContext.Provider>
    )
}

export default React.memo(GuildProvider);
