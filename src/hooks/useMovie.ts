import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchMovies as fetchMv } from "../store/actions/movieAction";

const useMovie = () => {
    const dispatch: AppDispatch = useDispatch();
    const movies = useSelector((state: RootState) => state.movie.values);
    const loading = useSelector((state: RootState) => state.movie.loading);
    const last = useSelector((state: RootState) => state.movie.last);
    const fetchMovies = useCallback((urls: string[]) => dispatch(fetchMv(urls)), [dispatch]);
    return { movies, loading, last, fetchMovies };
};

export default useMovie;