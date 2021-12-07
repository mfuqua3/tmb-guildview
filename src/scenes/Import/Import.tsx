import React, {useEffect, useState} from "react";
import HelpIcon from '@mui/icons-material/Help';
import {Alert, AlertColor, Box, IconButton, LinearProgress, Typography} from "@mui/material";
import {JsonImportForm} from "../../components/JsonImportForm";
import {ImportModel} from "../../models";
import {ImportApi} from "../../api/ImportApi";

function Import() {
    const [tmbImport, setTmbImport] = useState<ImportModel | null>(null)

    async function handleSubmit(blob: string): Promise<void> {
        const result = await ImportApi.importTmbBlob(blob);
        setTmbImport(result);
    }

    useEffect(() => {
        pollImport();
    }, [tmbImport])

    async function pollImport() {
        if (tmbImport === null || tmbImport.completed || tmbImport.faulted || tmbImport.progress >= 100) {
            return;
        }
        await new Promise(r => setTimeout(r, 2000));
        try {
            const result = await ImportApi.getStatus(tmbImport.id);
            setTmbImport(result);
        } catch (e) {
            setTmbImport(null);
        }
    }

    function alertColor(): AlertColor | undefined {
        if (!tmbImport) {
            return undefined;
        }
        if (tmbImport.faulted) {
            return "error";
        }
        if (tmbImport.completed) {
            return "success";
        }
        return "info";
    }

    return (
        <Box sx={{p: 1}} height={"auto"}>
            {tmbImport &&
            <Alert variant={"outlined"} severity={alertColor()}>
                Syncing your guild state with the TMB data
                <LinearProgress variant={"determinate"} value={tmbImport.progress}/>
            </Alert>}
            <Typography variant={"h6"}>
                Welcome to TMB Loot Council, powered by ThatsMyBis
            </Typography>
            <Typography variant={"subtitle1"}>
                Import your guild's JSON blob to sync your state.
                <IconButton aria-label="help">
                    <HelpIcon/>
                </IconButton>
            </Typography>
            <JsonImportForm onSubmit={handleSubmit}/>
        </Box>
    );
}

export default React.memo(Import);
