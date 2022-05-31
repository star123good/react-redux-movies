import { createSlice } from "@reduxjs/toolkit";
import Character from "../../models/Character";
import { fetchCharacters } from "../actions/characterAction";

interface CharacterSlice {
    values: Character[],
    loading: boolean,
    selected: Character|null,
}

const initialState: CharacterSlice = {
    values: [],
    loading: false,
    selected: null,
};

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        select: (state, action) => {
            if (typeof action.payload === 'string') {
                const found = state.values.find((ch: Character) => ch.url === action.payload);
                if (found) state.selected = found;
            }
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchCharacters.pending, (state, action) => {
            state.loading = true;
        }).addCase(fetchCharacters.fulfilled, (state, action) => {
            if (action.payload) {
                state.loading = false;
                state.values = action.payload as Character[];
            }
        })
    },
});

export const { select } = characterSlice.actions;

export default characterSlice.reducer;