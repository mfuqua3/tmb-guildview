import React, {useState} from "react";
import {Box, Button, LinearProgress, TextField} from "@mui/material";

export interface JsonImportFormProps {
    onSubmit(blob: string): void | Promise<void>
}

function JsonImportForm({onSubmit}: JsonImportFormProps) {
    const [blob, setBlob] = useState("");

    async function handleSubmit() {
        await onSubmit(blob);
        setBlob("");
    }

    return (
        <Box>
            <TextField multiline fullWidth rows={18}
                       value={blob} onChange={(e) => setBlob(e.target.value)}/>
            <Button color={"primary"}
                    variant={"contained"}
                    onClick={handleSubmit} disabled={!blob} sx={{m:1, minWidth:100}}>
                Sync my Guild
            </Button>
        </Box>
    );
}

export default React.memo(JsonImportForm);
