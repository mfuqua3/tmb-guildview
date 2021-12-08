import {UserSummary} from "./UserSummary";

export interface GuildOwnerDetail {
    id: number;
    name: string;
    owner: UserSummary;
}
