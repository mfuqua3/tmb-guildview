import React from "react";
import {useConflictOfInterestConfig} from "../../utilities/providers/PreVoteConfigurationProvider";
import PreVoteConfigurationForm from "./PreVoteConfigurationForm";

function ConflictOfInterestConfigurationForm() {
    const {state, setState} = useConflictOfInterestConfig();
    return (
        <PreVoteConfigurationForm>
            COI
        </PreVoteConfigurationForm>
    )
}
export default React.memo(ConflictOfInterestConfigurationForm);
