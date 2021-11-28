import React from "react";
import {useNavigate} from "react-router-dom";
import {useGuild} from "../../utilities/hooks/useGuild";
import {IconButton, ListItemIcon, ListItemText, Menu, MenuItem} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import {useMenu} from "../../utilities/hooks/useMenu";

function TopNavUserMenu() {
    const {open, close, isOpen} = useMenu();
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();
    const handleGuildSelect = () => {
        handleClose();
        navigate("/guilds");
    }
    const [guild] = useGuild();
    return (
        <>
            <IconButton edge={props.edge} color={"inherit"} aria-label={"menu"}
                        onClick={e => {
                            setAnchorEl(e.currentTarget);
                        }}>
                <MenuIcon className={"menu-icon"}/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem color={"secondary"} onClick={handleGuildSelect}>
                    <ListItemIcon>
                        <SportsEsportsIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        {!!guild ? guild.name : "Select Guild"}
                    </ListItemText>
                </MenuItem>
            </Menu>
        </>
    )
}
