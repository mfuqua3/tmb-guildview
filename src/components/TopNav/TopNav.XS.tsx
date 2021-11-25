import React from "react";
import Icon from "../../assets/logo.svg";
import {Grid, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./TopNav.css";
import {useAuth} from "../../utilities/hooks/useAuth";

function TopNavXS() {
    const {isAuthenticated} = useAuth();
    return (
        <Grid container justifyContent={"space-between"} alignContent={"stretch"} alignItems={"center"}>
            <Grid item>
                <IconButton edge={"start"} color={"inherit"} aria-label={"menu"}>
                    <MenuIcon className={"menu-icon"}/>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton color={"inherit"} aria-label={"menu"}>
                    <img src={Icon} className={"menu-icon"}/>
                </IconButton>
            </Grid>
            <Grid item marginRight={"25px"}>
                {isAuthenticated &&
                <IconButton color={"inherit"} aria-label={"menu"}>
                    <AccountCircleIcon className={"menu-icon"}/>
                </IconButton>}
            </Grid>
        </Grid>
    );
}

export default React.memo(TopNavXS);
