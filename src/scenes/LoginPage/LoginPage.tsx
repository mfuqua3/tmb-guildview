import React from "react";
import {Box, Button, Typography} from "@mui/material";
import "./LoginPage.css";


function LoginPage() {
    return (
        <Box className={"login-container"}>
            <div className={"login-item"}>
                <Typography variant={"h4"}>Welcome to GuildView</Typography>
            </div>
            <div className={"login-item"}>
                <Typography variant={"body1"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </div>
            <div className={"login-item"}>
                <Button color={"secondary"} variant={"contained"}>
                    Sign in with Discord
                </Button>
            </div>
        </Box>
    );
}

export default React.memo(LoginPage);
