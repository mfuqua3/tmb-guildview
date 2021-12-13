import React, {ReactNode} from "react";
import {Box, Button, Container, Typography} from "@mui/material";
import {StepperNode} from "./index";
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {StepperNodeProps} from "./StepperNode";
import {ScrollWrapper} from "../ScrollWrapper";
import CloseIcon from '@mui/icons-material/Close';

export interface StepChangedEvent {
    from: number;
    to: number;
}

export interface StepperProps {
    children: React.ReactElement<StepperNodeProps>[];
    currentStep: number;

    onComplete?(): void | Promise<void>;

    onCancel?(): void | Promise<void>;

    onBack?(event: StepChangedEvent): void | Promise<void>;

    onNext?(event: StepChangedEvent): void | Promise<void>;
}

function Stepper(props: StepperProps) {
    function canBack() {
        return props.currentStep > 0;
    }

    function canNext() {
        return props.currentStep < (props.children.length - 1);
    }

    function handleBack() {
        if (!props.onBack || !canBack()) {
            return;
        }
        props.onBack({
            from: props.currentStep,
            to: props.currentStep - 1
        })
    }

    function handleNext() {
        if (!props.onNext ||
            !canNext()) {
            return;
        }
        props.onNext({
            from: props.currentStep,
            to: props.currentStep + 1
        })
    }
    const buttonStyle = {
        color: "primary.contrastText",
        ":disabled": {
            color: "gray"
        }
    };
    return (
        <Box display={"flex"} flexDirection={"column"}>
            <Box width={"100%"}
                 display={"flex"}
                 justifyContent={"center"}
                 alignItems={"center"}
                 bgcolor={"primary.main"}
                 color={"primary.contrastText"}
                 padding={"4px"}>
                    <Typography variant={"h5"}>
                        {props.children[props.currentStep].props.title}
                    </Typography>
                <Box sx={{
                    right: 0,
                    position: "absolute",
                }}>
                    <Button sx={buttonStyle} onClick={props.onCancel}>
                        <CloseIcon />
                    </Button>
                </Box>
            </Box>
            <ScrollWrapper>
                <Box sx={{
                    height: "50vh",
                    backgroundColor: "background.default"
                }}>
                    {props.children[props.currentStep]}
                </Box>
            </ScrollWrapper>
            <Box width={"100%"}
                 display={"flex"}
                 justifyContent={"space-between"}
                 alignItems={"center"}
                 bgcolor={"primary.main"}
                 color={"primary.contrastText"}
                 padding={"2px"}>
                <Button startIcon={<ArrowBackIosIcon/>}
                        disabled={!canBack()}
                        onClick={handleBack}
                        sx={buttonStyle}>Back</Button>
                <Typography variant={"h6"}>
                    {props.currentStep + 1}/{props.children.length}
                </Typography>
                {canNext() &&
                    <Button endIcon={<ArrowForwardIosIcon/>}
                            onClick={handleNext}
                            disabled={!canNext()}
                            sx={buttonStyle}>
                        Next
                    </Button>
                }
                {!canNext() &&
                    <Button endIcon={<DoneIcon/>}
                            onClick={props.onComplete}
                            sx={buttonStyle}>
                        Done
                    </Button>
                }
            </Box>
        </Box>
    )
}

export default React.memo(Stepper);
