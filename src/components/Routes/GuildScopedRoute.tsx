import React from "react";
import {useActiveGuild} from "../../utilities/hooks/useActiveGuild";
import {useLocation, Outlet, Navigate} from "react-router-dom";

function GuildScopedRoute() {
    const guild = useActiveGuild();
    const location = useLocation();

    return(
        !!guild ? <Outlet /> : <Navigate to={"/guilds"} state={{from: location}}/>
    )
}

export default React.memo(GuildScopedRoute);
