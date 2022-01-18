import React from "react";
import {useModal} from "../../utilities/hooks/useModal";
import PreVoteConfigurationProvider from "../../utilities/providers/PreVoteConfigurationProvider";
import PreVoteConfigurationStepper from "./PreVoteConfiguration.Stepper";


function PreVoteConfiguration() {
    const {hideModal} = useModal();
    return (
        <PreVoteConfigurationProvider>
           <PreVoteConfigurationStepper onComplete={hideModal} />
        </PreVoteConfigurationProvider>
    )
}

export default React.memo(PreVoteConfiguration);
