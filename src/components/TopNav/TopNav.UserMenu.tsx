import React from "react";
import {IconButton, ListItemIcon, ListItemText, Menu, MenuItem} from "@mui/material";
import {useMenu} from "../../utilities/hooks/useMenu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {AuthMenuItem} from "../AuthMenuItem";
import {useAuth} from "../../utilities/hooks/useAuth";

function TopNavUserMenu() {
    const {open, close, isOpen, anchorEl} = useMenu();
    const {signOut} = useAuth();
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
                <AuthMenuItem icon={<PersonOutlineIcon />} title={"Sign Out"} onClick={signOut}/>
            </Menu>
        </>
    )
}
export default React.memo(TopNavUserMenu);
