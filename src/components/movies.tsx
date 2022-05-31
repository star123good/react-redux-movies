import React from "react";
import { List, ListItem, ListItemText, Box } from "@mui/material";
import Movie from "../models/Movie";
import useMovie from "../hooks/useMovie";

export default function Movies() {

    const { movies } = useMovie();

    return (
        <Box>
            <List>
                {
                    movies.map((movie: Movie, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={`${movie.title}`} />
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
}