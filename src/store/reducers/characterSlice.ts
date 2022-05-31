import { createSlice } from "@reduxjs/toolkit";

interface CharacterSlice {
    values: any[],
    selected: any,
}

const initialState: CharacterSlice = {
    values: [],
    selected: null,
};

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        select: (state, action) => {
            //
        },
    },
});

export const { select } = characterSlice.actions;

export default characterSlice.reducer;