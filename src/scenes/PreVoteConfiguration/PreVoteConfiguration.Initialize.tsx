import React, {useEffect} from "react";
import {useInvoke} from "../../utilities/hooks/useInvoke";
import {usePreVoteConfiguration} from "../../utilities/providers/PreVoteConfigurationProvider";
import {Box, Button, Typography} from "@mui/material";


function PreVoteConfigurationInitialize() {
    const invoke = useInvoke();
    const {initialize, loadPreviousConfig, canLoadPreviousConfig} = usePreVoteConfiguration();
    useEffect(() => {
        (async () => {
            await invoke(initialize);
        })();
    }, [])
    async function handleLoadPrevious() {
        await invoke(loadPreviousConfig);
    }
    const itemSx = {
        p:1
    }
    return (
        <Box display={"flex"}
             flexDirection={"column"}
             width={"100%"}
             justifyContent={"center"}
             alignItems={"center"}
        sx={{backgroundColor:"inherit", minHeight:"100%"}}>
            <Typography variant={"h4"} sx={itemSx}>PreVote Creation Wizard</Typography>
            <Button variant={"contained"} color={"secondary"} sx={itemSx}
            disabled={!canLoadPreviousConfig} onClick={handleLoadPrevious}>
                {canLoadPreviousConfig ? "Load Previous Configuration" : "No Configuration Available"}
            </Button>
            <Typography sx={itemSx}>
                Or Click "Next" to Begin
            </Typography>
        </Box>
    );
}

export default React.memo(PreVoteConfigurationInitialize);
