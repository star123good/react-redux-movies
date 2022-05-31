import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import useMovie from "../hooks/useMovie";

const CustomizedBox = styled(Box)`
    width: 300px;
    margin-top: 30px;
`;

export default function LastMovie() {

    const { last } = useMovie();

    return (
        <CustomizedBox>
            <Typography>Name / Year last Movie:</Typography>
            {
                last && <Typography>{last.title} - {last.release_date.slice(0, 4)}</Typography>
            }
        </CustomizedBox>
    )
}