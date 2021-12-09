import React from "react";
import {useGuild} from "../../utilities/hooks/useGuild";
import {useLocation, Outlet, Navigate} from "react-router-dom";
import {GuildRole} from "../../utilities/types";

export interface GuildScopedRouteProps {
    roles?: GuildRole[];
}
function GuildScopedRoute({roles}: GuildScopedRouteProps) {
    const [guild] = useGuild();
    const location = useLocation();

    return(
        (!!guild &&  (!roles || roles.includes(guild.role)))? <Outlet /> : <Navigate to={"/guilds"} state={{from: location}}/>
    )
}

export default React.memo(GuildScopedRoute);
