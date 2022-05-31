import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchCharacters as fetchCh } from "../store/actions/characterAction";

const useCharacter = () => {
    const dispatch: AppDispatch = useDispatch();
    const characters = useSelector((state: RootState) => state.character.values);
    const fetchCharacters = useCallback(() => dispatch(fetchCh()), [dispatch]);
    return { dispatch, characters, fetchCharacters };
};

export default useCharacter;