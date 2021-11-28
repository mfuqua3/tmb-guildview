import React from "react";
import {IconButton, ListItemIcon, ListItemText, Menu, MenuItem} from "@mui/material";
import {useMenu} from "../../utilities/hooks/useMenu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function TopNavUserMenu() {
    const {open, close, isOpen, anchorEl} = useMenu();
    return (
        <>
            <IconButton color={"inherit"} aria-label={"menu"}
                        onClick={e => {
                            open(e.currentTarget);
                        }}>
                <AccountCircleIcon className={"menu-icon"}/>
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
                open={isOpen}
                onClose={close}>
                <MenuItem color={"secondary"}>
                    <ListItemIcon>
                        <PersonOutlineIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Sign Out
                    </ListItemText>
                </MenuItem>
            </Menu>
        </>
    )
}
export default React.memo(TopNavUserMenu);
