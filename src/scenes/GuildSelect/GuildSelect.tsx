import React, {useEffect, useState} from "react"
import "./GuildSelect.css";
import {Box, Button, Divider, Grid, NativeSelect, Typography} from "@mui/material";
import {GuildSummary} from "../../models";
import {GuildsApi} from "../../api/GuildsApi";
import {ConfiguredGuilds} from "../../components/ConfiguredGuilds";
import {ScrollWrapper} from "../../components/ScrollWrapper";
import {CreateGuild} from "../../components/CreateGuild";

function GuildSelect() {
    const [guilds, setGuilds] = useState<GuildSummary[] | null>(null);
    useEffect(() => {
        GuildsApi.getUserGuilds()
            .then(resp => {
                setGuilds(resp)
            });
    }, []);
    return (
        <Grid container direction={"column"} sx={{
            height: "100%"
        }}>
            <Box className={"guild-select-container"}>
                <Typography variant={"h4"}>
                    Select your Guild
                </Typography>
                <ConfiguredGuilds guilds={guilds?.filter(g => g.configured) || []}/>
            </Box>
            <Divider sx={{color: "whitesmoke"}}/>
            <Grid container direction={"column"} sx={{}} alignItems={"center"}>
                <CreateGuild guilds={guilds?.filter(g => !g.configured) || []} />
            </Grid>
        </Grid>
    );
}

export default React.memo(GuildSelect);
