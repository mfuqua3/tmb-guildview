import React, {ReactNode} from "react";
import {Box, Button, Typography} from "@mui/material";

interface PreVoteConfigurationFormProps {
    children: ReactNode
}

function PreVoteConfigurationForm({children}: PreVoteConfigurationFormProps) {
    return (
        <Box display={"flex"}
             flexDirection={"column"}
             sx={{backgroundColor: "inherit", minHeight: "100%", p:2}}>
            {children}
        </Box>
    );
}

export default React.memo(PreVoteConfigurationForm);
