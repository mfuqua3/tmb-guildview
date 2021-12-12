import React, {ReactNode} from "react";

export interface StepperNodeProps {
    children: ReactNode;
    title: string;
}

function StepperNode({children}: StepperNodeProps) {
    return (
        <>
            {children}
        </>
    );
}

export default React.memo(StepperNode);
