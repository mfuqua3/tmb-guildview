import React, {ReactNode} from "react";
import {useGuild} from "../../utilities/hooks/useGuild";
import {ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import {GuildRole} from "../../utilities/types";

export interface GuildMenuItemProps {
    roles?: GuildRole[];
    title: string;
    icon: ReactNode;
    onClick(): void | Promise<void>;
}
function GuildMenuItem(props: GuildMenuItemProps) {
    const [guild] = useGuild();
    return (
        <>
            {!!guild &&
            (!props.roles || props.roles.includes(guild.role)) &&
            <MenuItem onClick={props.onClick}>
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText>
                    {props.title}
                </ListItemText>
            </MenuItem>}
        </>
    );
}

export default React.memo(GuildMenuItem);
