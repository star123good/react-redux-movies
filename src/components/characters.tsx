import React, { useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import useCharacter from "../hooks/useCharacter";
import { Character } from "../models/Character";

export default function Characters() {

    const { characters, selected, fetchCharacters } = useCharacter();

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);

    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
            <InputLabel id="select-characters" shrink={true}>Character:</InputLabel>
            <Select
                id="select-characters"
                value={(selected ? selected.url : "")}
                // onChange={handleChange}
                label="Character:"
                displayEmpty
            >
                {
                    characters.map((ch: Character, index) => (
                        <MenuItem key={index} value={ch.url}>{ch.name}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
}