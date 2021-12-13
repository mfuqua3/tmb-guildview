import React from "react";
import {
     useVoterSelectionConfig
} from "../../utilities/providers/PreVoteConfigurationProvider";
import PreVoteConfigurationForm from "./PreVoteConfigurationForm";

function VoterSelectionConfigurationForm() {
    const {state, setState} = useVoterSelectionConfig();
    return (
        <PreVoteConfigurationForm>
            Transparency
        </PreVoteConfigurationForm>
    )
}

export default React.memo(VoterSelectionConfigurationForm);
