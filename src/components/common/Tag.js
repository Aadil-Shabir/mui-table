import React from "react";
import { Typography } from "@mui/material";

const Tag = (props) => {
    return (
        <div
            style={{
                background:
                    props.type === "success"
                        ? "#D0F0C0"
                        : props.type === "error"
                        ? "#FF7F7F"
                        : props.type === "warning"
                        ? "#FFFFED"
                        : "none",
                width: "100%",
                padding: "0.25rem 0.25rem",
                textAlign: "center",
                borderRadius: "0.2rem",
            }}
        >
            <Typography
                variant="body2"
                color={
                    props.type === "success"
                        ? "green"
                        : props.type === "error"
                        ? "red"
                        : props.type === "warning"
                        ? "yellow"
                        : "black"
                }
                b
            >
                {props.text}
            </Typography>
        </div>
    );
};

export default Tag;
