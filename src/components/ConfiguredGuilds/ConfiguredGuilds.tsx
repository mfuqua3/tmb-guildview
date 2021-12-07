import React from "react";
import {ServerSummary} from "../../models";
import {Button, Grid, Paper, Typography} from "@mui/material";
import {ScrollWrapper} from "../ScrollWrapper";
import {useGuild} from "../../utilities/hooks/useGuild";

export interface ConfiguredGuildsProps {
    servers: ServerSummary[];
}

function ConfiguredGuilds({servers}: ConfiguredGuildsProps) {
    const [guild, changeGuild] = useGuild();

    async function handleSelectGuild(id: number): Promise<void> {
        await changeGuild(id);
    }

    return (
        <Paper variant={"outlined"}
               sx={{
                   width: "100%",
                   padding: "6px",
                   margin: "5px",
                   height: "90%"
               }}>
            {servers.length === 0 &&
            <Typography>
                There are no guilds available to join
            </Typography>}
            {servers.length > 0 &&
            <ScrollWrapper>
                <Grid container
                      direction={"column"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      minHeight={"70%"}>
                    {servers.filter(s => !!s.guild).map(server =>
                        <Button variant={"outlined"}
                                color={"secondary"}
                                size={"large"}
                                onClick={() => handleSelectGuild(server.guild?.id ?? 0)}
                                sx={{
                                    width: "90%"
                                }}>
                            {server.name}
                        </Button>
                    )}
                </Grid>
            </ScrollWrapper>}
        </Paper>
    )
}

export default React.memo(ConfiguredGuilds);
