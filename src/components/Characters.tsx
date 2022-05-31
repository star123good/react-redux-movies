import React, { useEffect } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { styled } from '@mui/material/styles';
import Character from "../models/Character";
import useCharacter from "../hooks/useCharacter";
import useMovie from "../hooks/useMovie";

const CustomizedBox = styled(Box)`
    margin-top: 30px;
`;

export default function Characters() {

    const { characters, selected, fetchCharacters, select } = useCharacter();
    const { fetchMovies } = useMovie();

    const handleSelect = (e: any) => {
        const value: string = e.target.value;
        if (selected?.url !== value) {
            select(value);
        }
    };

    useEffect(() => {
        if (selected) {
            fetchMovies(selected.films);
        }
    }, [selected, fetchMovies]);

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);

    return (
        <CustomizedBox>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                <InputLabel id="select-characters" shrink={true}>Character:</InputLabel>
                <Select
                    id="select-characters"
                    value={(selected ? selected.url : "")}
                    onChange={handleSelect}
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
        </CustomizedBox>
    );
}