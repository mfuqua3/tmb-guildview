import React, {ReactNode} from "react";
import {useGuild} from "../../utilities/hooks/useGuild";
import {ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import {Role} from "../../utilities/types";
import {useAuth} from "../../utilities/hooks/useAuth";

export interface AuthMenuItemProps {
    roles?: Role[];
    title: string;
    icon: ReactNode;
    onClick(): void | Promise<void>;
}
function AuthMenuItem(props: AuthMenuItemProps) {
    const authState = useAuth();
    return (
        <>
            {authState.isAuthenticated &&
            (!props.roles || props.roles.some(role=>authState.isInRole(role))) &&
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

export default React.memo(AuthMenuItem);
