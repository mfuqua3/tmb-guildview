import React from "react"
import {useExpirationConfig} from "../../utilities/providers/PreVoteConfigurationProvider";
import PreVoteConfigurationForm from "./PreVoteConfigurationForm";
import {Stack, TextField} from "@mui/material";
import {MobileDateTimePicker} from "@mui/lab";

function ExpirationConfigurationForm() {
    const {state, setState} = useExpirationConfig();
    return (
        <PreVoteConfigurationForm>{state &&
        <Stack spacing={3}>
            <MobileDateTimePicker onChange={(val) => {
                if (!val) {
                    return;
                }
                setState({...state, expirationTime: val})
            }}
                                  value={state.expirationTime}
                                  renderInput={(params) => <TextField {...params} label={"Expiration Time"}/>}/>
            <TextField type={"number"} label={"Allow New Comments (Minutes Before Expiration)"}
                       value={state.lockCommentsTteMinutes}
                       onChange={val=>setState({...state, lockCommentsTteMinutes: +val.target.value})}
                       InputLabelProps={{
                shrink: true,
            }}/>
            <TextField type={"number"} label={"Allow Objections (Minutes Before Expiration)"}
                       value={state.lockObjectionsTteMinutes}
                       onChange={val=>setState({...state, lockObjectionsTteMinutes: +val.target.value})}
                       InputLabelProps={{
                shrink: true,
            }}/>
            <TextField type={"number"} label={"Allow Votes (Minutes Before Expiration)"}
                       value={state.lockVotesTteMinutes}
                       onChange={val=>setState({...state, lockVotesTteMinutes: +val.target.value})}
                       InputLabelProps={{
                shrink: true,
            }}/>
        </Stack>}
        </PreVoteConfigurationForm>
    )
}

export default React.memo(ExpirationConfigurationForm);
