import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DUMMY_DATA } from "../data/tableData";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const columns = [
    {
        field: "invoice",
        headerName: "Invoice #",
        headerClassName: "hearder-bg",
        width: 100,
        align: "center",
        headerAlign: "center",
    },
    {
        field: "title",
        headerName: "Title",
        headerClassName: "hearder-bg",
        width: 180,
        align: "center",
        headerAlign: "center",
    },
    {
        field: "name",
        headerName: "Name",
        width: 180,
        headerClassName: "hearder-bg",
        headerAlign: "center",
        renderCell: (params) => (
            <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                <Avatar sx={{ width: 30, height: 30 }} />
                <Typography variant="body2">{params.value}</Typography>
            </div>
        ),
    },
    {
        field: "date",
        headerName: "Date",
        type: "number",
        width: 180,
        align: "center",
        headerClassName: "hearder-bg",
        headerAlign: "center",
    },
    {
        field: "amount",
        headerName: "Amount",
        width: 180,
        align: "center",
        headerClassName: "hearder-bg",
        headerAlign: "center",
    },
    {
        field: "status",
        headerName: "Status",
        width: 178,
        align: "center",
        headerClassName: "hearder-bg",
        headerAlign: "center",
        renderCell: (params) => <div>{params.value}</div>,
    },
];

export default function DataTable() {
    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
                "& .hearder-bg": {
                    backgroundColor: "#663046",
                    color: "white",
                },
            }}
        >
            <DataGrid
                rows={DUMMY_DATA}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                rowSelection={false}
            />
        </Box>
    );
}
