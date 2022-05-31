import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "../../api";
import { Character } from "../../models/Character";

export const fetchCharacters = createAsyncThunk('character/fetchCharacters', async() => {
    const { results } = await fetchApi('people');
    return results as Character[];
});