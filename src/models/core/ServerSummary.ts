import {GuildOwnerDetail} from "./GuildOwnerDetail";

export interface ServerSummary {
    id: string;
    name: string;
    guild: GuildOwnerDetail | null;
}
