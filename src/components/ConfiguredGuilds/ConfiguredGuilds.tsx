import React from "react";
import {GuildSummary} from "../../models";
import {Button, Grid, Paper, Typography} from "@mui/material";
import {ScrollWrapper} from "../ScrollWrapper";
import {useGuild} from "../../utilities/hooks/useGuild";

export interface ConfiguredGuildsProps {
    guilds: GuildSummary[];
}

function ConfiguredGuilds({guilds}: ConfiguredGuildsProps) {
    const [guild, changeGuild] = useGuild();

    async function handleSelectGuild(id: string): Promise<void> {
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
            {guilds.length === 0 &&
            <Typography>
                There are no guilds available to join
            </Typography>}
            {guilds.length > 0 &&
            <ScrollWrapper>
                <Grid container
                      direction={"column"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      minHeight={"70%"}>
                    {guilds.map(guild =>
                        <Button variant={"outlined"}
                                color={"secondary"}
                                size={"large"}
                                onClick={() => handleSelectGuild(guild.id)}
                                sx={{
                                    width: "90%"
                                }}>
                            {guild.name}
                        </Button>
                    )}
                </Grid>
            </ScrollWrapper>}
        </Paper>
    )
}

export default React.memo(ConfiguredGuilds);
