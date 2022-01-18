import React, {ReactNode, useState} from "react";
import {Stepper, StepperNode} from "../../components/Stepper";
import PreVoteConfigurationInitialize from "./PreVoteConfiguration.Initialize";
import {
    ConflictOfInterestConfigurationForm,
    ExpirationConfigurationForm,
    ItemSelectionConfigurationForm, TransparencyConfigurationForm,
    VoterSelectionConfigurationForm
} from "../../components/PreVoteConfigurationForms";
import {StepperNodeProps} from "../../components/Stepper/StepperNode";
import {LoadingProvider} from "../../utilities/providers/LoadingProvider";
import {usePreVoteConfiguration} from "../../utilities/providers/PreVoteConfigurationProvider";
import {PreVoteApi} from "../../api/PreVoteApi";

interface StepperDefinition {
    title: string;
    component: ReactNode;
}
interface PreVoteConfigurationStepperProps {
    onComplete(): void;
}
function PreVoteConfigurationStepper({onComplete}: PreVoteConfigurationStepperProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const {buildRequest} = usePreVoteConfiguration();
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
    async function handleOnComplete() : Promise<void> {
        const request = buildRequest();
        const result = await PreVoteApi.create(request);
        debugger;
        onComplete();
    }
    return (
        <Stepper currentStep={currentStep}
                 onCancel={onComplete}
                 onComplete={handleOnComplete}
                 onNext={({to}) => setCurrentStep(to)}
                 onBack={({to}) => setCurrentStep(to)}>
            {steps.map(MapStep)}
        </Stepper>
    )
}

export default React.memo(PreVoteConfigurationStepper);
