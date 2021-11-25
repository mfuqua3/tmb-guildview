import React from "react";
import {GuildSummary} from "../../models";
import {Typography} from "@mui/material";

export interface ConfiguredGuildsProps {
    guilds: GuildSummary[];
}
function ConfiguredGuilds({guilds}: ConfiguredGuildsProps){
    return(
        <>
            {guilds.length === 0 &&
            <Typography>
                There are no guilds available to join
            </Typography>}
            {guilds.length > 0 &&
            guilds.map(guild =>
                <Typography>{guild.name}</Typography>
            )}
        </>
    )
}
export default React.memo(ConfiguredGuilds);
