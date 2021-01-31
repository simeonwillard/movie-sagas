import { GridList } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css';


const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        //   overflow: 'hidden',
        },
        gridList: {
          flexWrap: 'wrap',
          transform: 'translateZ(0)',
        },
      }));


function MovieList(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    


    return (
        <main>
            <div>
                <h1>MovieList</h1>
                <nav>
                    <Link to='/add-movie'>Add A Movie</Link>
                </nav>
            </div>
            <div className={classes.root}>
            <GridList className={classes.gridList}>
                {movies.map(movie => {

                    return <MovieItem key={movie.id} movie={movie} />
                })}
            </GridList>
            </div>
        </main>

    );
}

export default MovieList;