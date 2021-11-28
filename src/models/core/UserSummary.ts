import {GuildClaim} from "./GuildClaim";

export interface UserSummary {
    id: string;
    username: string;
    email: string;
    roles: string[];
    activeGuild?: GuildClaim;
}
