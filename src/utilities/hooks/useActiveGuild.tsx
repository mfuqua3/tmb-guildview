import {GuildClaim} from "../../models";
import {useToken} from "./useToken";

export function useActiveGuild(): GuildClaim | null {
    const {token} = useToken();
    return token?.payload?.data.activeGuild ?? null;
}
