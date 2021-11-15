import React, {ReactNode} from "react";
import {ResponsiveContainer} from "../ResponsiveContainer";
import {AppBar, Grid, Toolbar} from "@mui/material";
import TopNavXS from "../TopNav/TopNav.XS";

export interface MainLayoutProps {
    children?: ReactNode;
}

function MainLayout({children}: MainLayoutProps) {
    return (
        <>
            <AppBar position={"relative"}>
                <Toolbar>
                    <ResponsiveContainer xs={
                        <TopNavXS/>
                    } lg={
                        <>
                            <TopNavXS/>
                        </>
                    }/>
                </Toolbar>
            </AppBar>
            <Grid id="main-layout-body"
                  container item direction="column"
                  alignItems="stretch" wrap="nowrap" xs={12}>
                {!!children && children}
            </Grid>
        </>
    )
}

export default React.memo(MainLayout);

