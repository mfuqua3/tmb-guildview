import React, {ReactNode} from "react";
import {
    IconButton,
    IconButtonProps,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    MenuItemProps,
    Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import {useGuild} from "../../utilities/hooks/useGuild";
import {Link, useNavigate} from "react-router-dom";
import {useMenu} from "../../utilities/hooks/useMenu";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import {GuildMenuItem} from "../GuildMenuItem";
import AddBoxIcon from '@mui/icons-material/AddBox';
import {useModal} from "../../utilities/hooks/useModal";

export interface TopNavMenuProps {
    edge?: false | "start" | "end" | undefined
}

function TopNavMainMenu(props: TopNavMenuProps) {
    const {open, close, isOpen, anchorEl} = useMenu();
    const navigate = useNavigate();
    const {showModal, hideModal} = useModal();
    const handleGuildSelect = () => {
        close();
        navigate("/guilds");
    }
    const handleImportSelect = () => {
        close();
        navigate("/import");
    }
    const handleCreatePreVoteSelect = () => {
        close();
        showModal(<Typography>{"test"}</Typography>)
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
                <GuildMenuItem
                    onClick={handleImportSelect}
                    icon={<ImportExportIcon/>}
                    title={"Import TMB Data"}
                    roles={["Owner"]} />
                <GuildMenuItem
                    onClick={handleCreatePreVoteSelect}
                    icon={<AddBoxIcon/>}
                    title={"Create PreVote"}
                    roles={["Owner", "Admin"]} />
            </Menu>
        </>
    )
}

export default React.memo(TopNavMainMenu);
