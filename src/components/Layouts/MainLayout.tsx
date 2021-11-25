import React, {ReactNode} from "react";
import {ResponsiveContainer} from "../ResponsiveContainer";
import {AppBar, Box, Grid, Toolbar} from "@mui/material";
import TopNavXS from "../TopNav/TopNav.XS";
import {Outlet} from "react-router-dom";
import "./Layouts.css";
import {ScrollWrapper} from "../ScrollWrapper";

function MainLayout() {
    return (
        <Box className={"layout-container"}>
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
                  className={"layout-body "}
                  container item direction="column"
                  alignItems="stretch" wrap="nowrap" xs={12}>
                <ScrollWrapper>
                    <Outlet />
                </ScrollWrapper>
            </Grid>
        </Box>
    )
}

export default React.memo(MainLayout);

