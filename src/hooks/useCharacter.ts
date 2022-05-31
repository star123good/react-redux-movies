import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchCharacters as fetchCh } from "../store/actions/characterAction";
import { select as sel } from "../store/reducers/characterSlice";

const useCharacter = () => {
    const dispatch: AppDispatch = useDispatch();
    const characters = useSelector((state: RootState) => state.character.values);
    const loading = useSelector((state: RootState) => state.character.loading);
    const selected = useSelector((state: RootState) => state.character.selected);
    const fetchCharacters = useCallback(() => dispatch(fetchCh()), [dispatch]);
    const select = useCallback((url: string) => dispatch(sel(url)), [dispatch]);
    return { characters, loading, selected, fetchCharacters, select };
};

export default useCharacter;