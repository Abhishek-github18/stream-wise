import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useGetPopularMovies = () => {
    const dispatch = useDispatch(); 
    const popularMovies = async () => {
        const data  = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        const jsonData = await data.json();
        dispatch(addPopularMovies(jsonData.results));
    }

    useEffect(()=>{
        popularMovies();
    }, [])
}

export default useGetPopularMovies;