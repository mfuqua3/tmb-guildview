import React, {ReactNode} from "react";
import {Box} from "@mui/material";

export type ScrollDirection = "horizontal" | "vertical";

export interface ScrollWrapperProps {
    children: ReactNode;
}

function ScrollWrapper({children}: ScrollWrapperProps) {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                overflowY: "scroll"
            }}>
            {children}
        </Box>
    )
}

export default React.memo(ScrollWrapper);
