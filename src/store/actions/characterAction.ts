import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../config";
import { fetchApi } from "../../api";
import Character from "../../models/Character";

export const fetchCharacters = createAsyncThunk('character/fetchCharacters', async() => {
    const url = `${BASE_URL}people`;
    const { results } = await fetchApi(url);
    return results as Character[];
});