import React from "react";
import Table from "./components/Table";
import { Box } from "@mui/material";

function App() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1>Yo</h1>
            <Box sx={{ width: "1000px" }}>
                <Table />
            </Box>
        </div>
    );
}

export default App;
