import React, {useState} from "react";
import Icon from "../../assets/logo.svg";
import {Grid, IconButton} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./TopNav.css";
import {useAuth} from "../../utilities/hooks/useAuth";
import {useNavigate} from "react-router-dom";
import TopNavMainMenu from "./TopNav.MainMenu";


function TopNavXS() {
    const navigate = useNavigate();
    const {isAuthenticated} = useAuth();
    return (
        <Grid container justifyContent={"space-between"} alignContent={"stretch"} alignItems={"center"}>
            <Grid item>
                <TopNavMainMenu edge={"start"} />
            </Grid>
            <Grid item>
                <IconButton color={"inherit"} aria-label={"menu"}
                            onClick={() => navigate("/")}>
                    <img src={Icon} className={"menu-icon"}/>
                </IconButton>
            </Grid>
            <Grid item>
                {isAuthenticated &&
                <IconButton color={"inherit"} aria-label={"menu"}>
                    <AccountCircleIcon className={"menu-icon"}/>
                </IconButton>}
            </Grid>
        </Grid>
    );
}

export default React.memo(TopNavXS);
