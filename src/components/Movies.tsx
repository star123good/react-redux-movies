import React from "react";
import { List, ListItem, ListItemText, Box, Typography, LinearProgress } from "@mui/material";
import { styled } from '@mui/material/styles';
import Movie from "../models/Movie";
import useMovie from "../hooks/useMovie";

const CustomizedBox = styled(Box)`
    width: 300px;
    margin-top: 20px;
    & .MuiList-root {
        height: 300px;
        overflow-y: auto;
        border: 1px solid #CCCCCC;
        & .MuiListItem-root:hover {
            background-color: rgba(204, 204, 204, 0.38);
        }
    }
`;

export default function Movies() {

    const { movies, loading } = useMovie();

    return (
        <CustomizedBox>
            <Typography>List of Movies:</Typography>
            {
                loading && <LinearProgress />
            }
            <List>
                {
                    movies.map((movie: Movie, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={`${movie.title}`} />
                        </ListItem>
                    ))
                }
            </List>
        </CustomizedBox>
    );
}