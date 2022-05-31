import { createSlice } from "@reduxjs/toolkit";
import Movie from "../../models/Movie";
import { fetchMovies } from "../actions/movieAction";

interface MovieSlice {
    values: Movie[],
    loading: boolean,
    last: Movie|null,
}

const initialState: MovieSlice = {
    values: [],
    loading: false,
    last: null,
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchMovies.pending, (state, action) => {
            state.loading = true;
        }).addCase(fetchMovies.fulfilled, (state, action) => {
            if (action.payload) {
                state.loading = false;
                state.values = action.payload as Movie[];
            }
        })
    },
});

export default movieSlice.reducer;