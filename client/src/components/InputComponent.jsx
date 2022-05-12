import React from "react";

import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";

export function InputComponent() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
            }}
        >
            <TextField></TextField>
            <Button>Add button</Button>
        </Box>
    );
}
