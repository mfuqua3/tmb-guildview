import React, {useState} from "react";
import {Stepper, StepperNode} from "../../components/Stepper";
import {Typography} from "@mui/material";
import {useModal} from "../../utilities/hooks/useModal";

function PreVoteConfiguration() {
    const [currentStep, setCurrentStep] = useState(0);
    const {hideModal} = useModal();
    return (
        <Stepper currentStep={currentStep}
                 onCancel={hideModal}
                 onComplete={hideModal}
                 onNext={({to}) => setCurrentStep(to)}
                 onBack={({to}) => setCurrentStep(to)}>
            <StepperNode title={"Initialize PreVote"}>
                <Typography>Init</Typography>
            </StepperNode>
            <StepperNode title={"Expiration"}>
                <Typography>Expiration</Typography>
            </StepperNode>
            <StepperNode title={"Item Selection"}>
                <Typography>Item Selection</Typography>
            </StepperNode>
            <StepperNode title={"Voter Selection"}>
                <Typography>Voter Select</Typography>
            </StepperNode>
            <StepperNode title={"Conflict of Interest"}>
                <Typography>Conflict of Interest</Typography>
            </StepperNode>
            <StepperNode title={"Transparency"}>
                <Typography>Transparency</Typography>
            </StepperNode>
            <StepperNode title={"Review"}>
                <Typography>Review</Typography>
            </StepperNode>
        </Stepper>
    )
}

export default React.memo(PreVoteConfiguration);
