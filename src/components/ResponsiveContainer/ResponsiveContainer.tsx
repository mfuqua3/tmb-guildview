import React, {ReactNode} from "react";
import {useMediaQuery, useTheme} from "@mui/material";

export interface ResponsiveContainerProps {
    xs: ReactNode;
    lg: ReactNode;
}

function ResponsiveContainer({xs, lg}: ResponsiveContainerProps) {
    const theme = useTheme();
    const useLg = useMediaQuery(theme.breakpoints.up('lg'));
    return (
        <>
            {useLg && lg}
            {!useLg && xs}
        </>
    );
}

export default React.memo(ResponsiveContainer);
