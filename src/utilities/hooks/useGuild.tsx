import {GuildClaim} from "../../models";
import {useContext} from "react";
import {GuildContext} from "../providers/GuildProvider";

export function useGuild(): [GuildClaim | null, (guildId: string)=> Promise<void>] {
    const state = useContext(GuildContext);
    if(state===null){
        throw new Error("useGuild must be used within a GuildProvider");
    }
    return [
        state.currentGuild,
        state.changeGuild
    ]
}

