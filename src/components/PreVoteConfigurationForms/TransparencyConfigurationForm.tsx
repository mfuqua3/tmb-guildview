import React from "react";
import {
    useTransparencyConfig
} from "../../utilities/providers/PreVoteConfigurationProvider";
import PreVoteConfigurationForm from "./PreVoteConfigurationForm";

function TransparencyConfigurationForm() {
    const {state, setState} = useTransparencyConfig();
    return (
        <PreVoteConfigurationForm>
            Transparency
        </PreVoteConfigurationForm>
    )
}

export default React.memo(TransparencyConfigurationForm);
