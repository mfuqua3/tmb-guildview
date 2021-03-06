import React, {ReactNode} from "react";
import {IconButton, IconButtonProps, ListItemIcon, ListItemText, Menu, MenuItem, MenuItemProps} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import {useGuild} from "../../utilities/hooks/useGuild";
import {Link, useNavigate} from "react-router-dom";
import {useMenu} from "../../utilities/hooks/useMenu";
import ImportExportIcon from '@mui/icons-material/ImportExport';

export interface TopNavMenuProps {
    edge?: false | "start" | "end" | undefined
}

function TopNavMainMenu(props: TopNavMenuProps) {
    const {open, close, isOpen, anchorEl} = useMenu();
    const navigate = useNavigate();
    const handleGuildSelect = () => {
        close();
        navigate("/guilds");
    }
    const handleImportSelect = () => {
        close();
        navigate("/import");
    }
    const [guild] = useGuild();
    return (
        <>
            <IconButton edge={props.edge} color={"inherit"} aria-label={"menu"}
                        onClick={e => {
                            open(e.currentTarget);
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
                open={isOpen}
                onClose={close}>
                <MenuItem color={"secondary"} onClick={handleGuildSelect}>
                    <ListItemIcon>
                        <SportsEsportsIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        {!!guild ? `Select Guild (${guild.name})` : "Select Guild"}
                    </ListItemText>
                </MenuItem>
                {!!guild &&
                <MenuItem color={"secondary"} onClick={handleImportSelect}>
                    <ListItemIcon>
                        <ImportExportIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        {"Import TMB Data"}
                    </ListItemText>
                </MenuItem>}
            </Menu>
        </>
    )
}

export default React.memo(TopNavMainMenu);
