import React from "react";
import {useGuild} from "../../utilities/hooks/useGuild";
import {useLocation, Outlet, Navigate} from "react-router-dom";

function GuildScopedRoute() {
    const guild = useGuild();
    const location = useLocation();

    return(
        !!guild ? <Outlet /> : <Navigate to={"/guilds"} state={{from: location}}/>
    )
}

export default React.memo(GuildScopedRoute);
