import React, {useEffect, useState} from "react";
import {
    useTransparencyConfig
} from "../../utilities/providers/PreVoteConfigurationProvider";
import PreVoteConfigurationForm from "./PreVoteConfigurationForm";
import {GuildsApi} from "../../api/GuildsApi";

export interface SelectListItem {
    text: string;
    value: string;
    isSelected: boolean;
}
function TransparencyConfigurationForm() {
    const {state, setState} = useTransparencyConfig();
    return (
        <PreVoteConfigurationForm>
            Transparency
        </PreVoteConfigurationForm>
    )
}

export default React.memo(TransparencyConfigurationForm);
