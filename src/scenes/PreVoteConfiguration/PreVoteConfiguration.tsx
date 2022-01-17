import React, {ReactNode, useState} from "react";
import {Stepper, StepperNode} from "../../components/Stepper";
import {useModal} from "../../utilities/hooks/useModal";
import {LoadingProvider} from "../../utilities/providers/LoadingProvider";
import {StepperNodeProps} from "../../components/Stepper/StepperNode";
import PreVoteConfigurationInitialize from "./PreVoteConfiguration.Initialize";
import PreVoteConfigurationProvider from "../../utilities/providers/PreVoteConfigurationProvider";
import {
    ConflictOfInterestConfigurationForm,
    ExpirationConfigurationForm,
    ItemSelectionConfigurationForm, TransparencyConfigurationForm,
    VoterSelectionConfigurationForm
} from "../../components/PreVoteConfigurationForms";

interface StepperDefinition {
    title: string;
    component: ReactNode;
}

function PreVoteConfiguration() {
    const [currentStep, setCurrentStep] = useState(0);
    const {hideModal} = useModal();
    const steps: StepperDefinition[] = [
        {title: "Initialize PreVote", component: <PreVoteConfigurationInitialize/>},
        {title: "Expiration", component: <ExpirationConfigurationForm />},
        {title: "Item Selection", component: <ItemSelectionConfigurationForm />},
        {title: "Voter Selection", component: <VoterSelectionConfigurationForm />},
        {title: "Conflict of Interest", component: <ConflictOfInterestConfigurationForm />},
        {title: "Transparency", component: <TransparencyConfigurationForm />},
        {title: "Review", component: <>Component Needed</>}
    ]

    function MapStep(definition: StepperDefinition): React.ReactElement<StepperNodeProps> {
        return (
            <StepperNode title={definition.title} key={definition.title}>
                <LoadingProvider>
                    {definition.component}
                </LoadingProvider>
            </StepperNode>
        )
    }

    return (
        <PreVoteConfigurationProvider>
            <Stepper currentStep={currentStep}
                     onCancel={hideModal}
                     onComplete={hideModal}
                     onNext={({to}) => setCurrentStep(to)}
                     onBack={({to}) => setCurrentStep(to)}>
                {steps.map(MapStep)}
            </Stepper>
        </PreVoteConfigurationProvider>
    )
}

export default React.memo(PreVoteConfiguration);
