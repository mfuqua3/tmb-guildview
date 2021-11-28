import {UserSummary} from "./UserSummary";

export interface GuildOwnerDetail {
    id: string;
    name: string;
    owner: UserSummary;
}
