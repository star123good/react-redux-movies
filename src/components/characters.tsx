import React, { useEffect } from "react";
import useCharacter from "../hooks/useCharacter";

export default function Characters() {

    const { fetchCharacters } = useCharacter();

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);

    return (
        <></>
    );
}