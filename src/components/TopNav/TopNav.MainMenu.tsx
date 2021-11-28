import React, {ReactNode} from "react";
import {IconButton, IconButtonProps, ListItemIcon, ListItemText, Menu, MenuItem, MenuItemProps} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import {useGuild} from "../../utilities/hooks/useGuild";
import {Link, useNavigate} from "react-router-dom";

export interface TopNavMenuProps {
    edge?: false | "start" | "end" | undefined
}

function TopNavMainMenu(props: TopNavMenuProps) {
    const [anchorEl, setAnchorEl] = React.useState<Element | ((element: Element) => Element) | null | undefined>(null);
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

export default React.memo(TopNavMainMenu);
