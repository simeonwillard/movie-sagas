import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css';

function MovieList(props) {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

   

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                   
                    return <MovieItem key={movie.id} movie={movie} />
                })}
            </section>
        </main>

    );
}

export default MovieList;