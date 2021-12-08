import React, {useState} from "react";
import {Button, NativeSelect, Typography} from "@mui/material";
import {ServerSummary} from "../../models";
import {GuildsApi} from "../../api/GuildsApi";
import {useGuild} from "../../utilities/hooks/useGuild";

export interface CreateGuildProps {
    guilds: ServerSummary[];
}
function CreateGuild({guilds}: CreateGuildProps) {
    const itemSx = {
        margin: "10px"
    }
    const [selectedGuild, setSelectedGuild] = useState<string>(guilds[0]?.id.toString() ?? "");
    const [guild, changeGuild] = useGuild();
    async function handleClaimGuild(): Promise<void> {
        if(selectedGuild === null){
            throw new Error("No guild has been selected");
        }
        const resp = await GuildsApi.claimGuild({serverId: selectedGuild});
        await changeGuild(resp.id);
    }
    return (
        <>
            <Typography variant={"h6"} sx={itemSx}>
                Create New?
            </Typography>
            <NativeSelect
                sx={itemSx}
                variant={"filled"}
                value={selectedGuild}
                onChange={(event) => setSelectedGuild(event.target.value)}
                inputProps={{
                    name: 'Server',
                    id: 'uncontrolled-native'
                }}>
                {guilds?.filter(g => !g.guild).map(g =>
                    <option value={g.id}>{g.name}</option>
                )}
            </NativeSelect>
            <Button color={"secondary"} variant={"contained"}
                    sx={itemSx} onClick={handleClaimGuild}>
                Claim Guild
            </Button>
        </>
    )
}

export default React.memo(CreateGuild);
