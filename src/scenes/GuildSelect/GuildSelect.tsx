import React, {useEffect, useState} from "react"
import "./GuildSelect.css";
import {Box, Typography} from "@mui/material";
import {GuildSummary} from "../../models";
import {GuildsApi} from "../../api/GuildsApi";
import {ConfiguredGuilds} from "../../components/ConfiguredGuilds";

function GuildSelect() {
    const [guilds, setGuilds] = useState<GuildSummary[] | null>(null);
    useEffect(() => {
        GuildsApi.getUserGuilds()
            .then(resp => setGuilds(resp));
    },[]);
    return (
            <Box className={"guild-select-container"}>
                <Typography variant={"h5"}>
                    Select your Guild
                </Typography>
                <ConfiguredGuilds guilds={guilds?.filter(g=>g.configured) || []} />
            </Box>
    );
}

export default React.memo(GuildSelect);
