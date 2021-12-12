import React, {ReactNode} from "react";
import {useGuild} from "../../utilities/hooks/useGuild";
import {ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import {GuildRole} from "../../utilities/types";
import {AuthMenuItem} from "../AuthMenuItem";

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
            <AuthMenuItem title={props.title} onClick={props.onClick} icon={props.icon} />}
        </>
    );
}

export default React.memo(GuildMenuItem);
