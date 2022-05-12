import React from "react";
import { ParkingComponent } from "./components";
import { InputComponent } from "./components";
import Box from "@mui/material/Box";

function App() {
    return (
        <>
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <ParkingComponent />
                <InputComponent />
            </Box>
        </>
    );
}

export default App;
