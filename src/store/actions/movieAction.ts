import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "../../api";
import Movie from "../../models/Movie";

export const fetchMovies = createAsyncThunk('movie/fetchMovie', async(urls: string[]) => {
    const res = await Promise.all(urls.map(url => fetchApi(url)));
    return res as Movie[];
});