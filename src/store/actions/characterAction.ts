import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "../../api";

export const fetchCharacters = createAsyncThunk('character/fetchCharacters', async() => {
    const res = await fetchApi('people');
    return res;
});