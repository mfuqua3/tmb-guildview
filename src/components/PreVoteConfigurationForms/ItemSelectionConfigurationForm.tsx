import React from "react";
import {
    useItemSelectionConfig
} from "../../utilities/providers/PreVoteConfigurationProvider";
import PreVoteConfigurationForm from "./PreVoteConfigurationForm";

function ItemSelectionConfigurationForm() {
    const {state, setState} = useItemSelectionConfig();
    return (
        <PreVoteConfigurationForm>
            Item Select
        </PreVoteConfigurationForm>
    )
}
export default React.memo(ItemSelectionConfigurationForm);
