import React, {useEffect, useState} from "react";
import {
    useVoterSelectionConfig
} from "../../utilities/providers/PreVoteConfigurationProvider";
import PreVoteConfigurationForm from "./PreVoteConfigurationForm";
import {GuildsApi} from "../../api/GuildsApi";
import {SelectListItem} from "./TransparencyConfigurationForm";
import {Checkbox, FormControlLabel, FormGroup, Stack} from "@mui/material";

function VoterSelectionConfigurationForm() {
    const {state, setState} = useVoterSelectionConfig();
    const [selectListItems, setSelectListItems] = useState<SelectListItem[]>([]);
    useEffect(() => {
        GuildsApi.getGuildUsers()
            .then((resp) => {
                setSelectListItems(resp.map(guildUser => {
                    return {
                        text: guildUser.displayName,
                        value: guildUser.id.toString(),
                        isSelected: state?.eligibleVoterIds?.includes(guildUser.id) ?? false
                    }
                }))
            })
    }, [])
    useEffect(() => {
        let configState = state;
        if(!configState){
            configState = {
                eligibleVoterIds: [],
                eligibleVoterRoles: [],
                fixedVoters: [],
                ineligibleVoterIds: [],
                maximumVotersPerItem: 5,
                minimumVotersPerItem: 3,
                randomize: true
            }
        }
        setState({...configState, eligibleVoterIds: selectListItems.filter(x => x.isSelected).map(x => +x.value)})
    }, [selectListItems]);
    return (
        <PreVoteConfigurationForm>
            <Stack spacing={-1}>
                {selectListItems.map((item, idx) =>
                    <FormGroup key={item.value}>
                        <FormControlLabel control={<Checkbox checked={item.isSelected} onChange={(e)=>{
                            let shallowCopy = [...selectListItems];
                            let replacement = {
                                ...shallowCopy[idx],
                                isSelected: Boolean(e.target.checked)
                            };
                            shallowCopy[idx] = replacement;
                            setSelectListItems(shallowCopy);
                        }}/>} label={item.text}/>
                    </FormGroup>
                )}
            </Stack>
        </PreVoteConfigurationForm>
    )
}

export default React.memo(VoterSelectionConfigurationForm);
