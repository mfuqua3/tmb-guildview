import React from "react";
import {useGuild} from "../../utilities/hooks/useGuild";
import {Button, Grid, Typography} from "@mui/material";
import {useAuth} from "../../utilities/hooks/useAuth";
import {GuildsApi} from "../../api/GuildsApi";

function Home() {
    const [guild] = useGuild();
    const {isInRole} = useAuth();
    return (
        <Grid container direction={"column"}>
            <Typography variant={"h2"}>Home Placeholder</Typography>
            <Typography variant={"h2"}>Guild: {guild?.name}</Typography>
            {(isInRole("Admin") || isInRole("Developer")) &&
            <Button onClick={async ()=>{
                if(guild === null) {
                    throw new Error();
                }
                await GuildsApi.releaseGuild(guild?.id)
                window.location.reload();
            }}>
            </Button>}
        </Grid>
    )
}

export default React.memo(Home);
