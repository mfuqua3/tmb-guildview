import {Box, CircularProgress, Fade, Grid, makeStyles} from "@mui/material";
import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";

export interface LoadingContextState {
    loading: boolean;
}

export interface ProvidedLoadingProps {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<ProvidedLoadingProps | null>(null);

export interface LoadingProviderProps {
    children: ReactNode;
}

export function LoadingProvider({children}: LoadingProviderProps): JSX.Element {
    const [loading, setLoading] = useState<boolean>(false);
    const styles = {
        wrapper: {
            display: "flex",
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 2147483647,
        },
        spinner: {
            margin: "auto",
        }
    };

    const provided: ProvidedLoadingProps = {
        loading,
        setLoading
    };

    return (
        <LoadingContext.Provider value={provided}>
            <>
                {children}
                {
                    <Fade
                        in={loading}
                        unmountOnExit={true}
                    >
                        <Box
                            onClick={(e) => e.preventDefault()}
                            sx={{display: "flex",
                                position: "fixed",
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                zIndex: 2147483647}} >
                            <CircularProgress size="4rem" sx={{margin: "auto"}}/>
                        </Box>
                    </Fade>
                }
            </>
        </LoadingContext.Provider>
    );
}

export function useLoading(): ProvidedLoadingProps {
    const provided = useContext(LoadingContext);
    if (provided === null) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return provided;
}

export default React.memo(LoadingProvider);
