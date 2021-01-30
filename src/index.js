import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('GET_MOVIE', getMovie, getGenre);
}

// saga to store individual movie's genres in redux
function* getGenre(action) {
    try {
        const response = yield axios.get(`/api/genre/${action.payload}`);
        yield put({type: 'SET_GENRE_INFO', payload: response.data[0]});
    } catch (error) {
        console.log(`error getting genres for selected movie ${error}`);
    }
}

// saga to store individual movie in redux
function* getMovie(action) {
    try {
        const response = yield axios.get(`/api/movie/${action.payload}`);
        yield put({type: 'SET_MOVIE_INFO', payload: response.data[0]});
    } catch (error) {
        console.log(`error getting movie info ${error}`);
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// reducer storing individual movie genres
const moviesGenres = (state = {}, action) => {
    if (action.type === 'SET_GENRE_INFO') {
        return action.payload;
    }
    return state;
}

// reducer storing individual movie data
const movieInfo = (state = {}, action) => {
   if (action.type === 'SET_MOVIE_INFO') {
       return action.payload;
   }
   return state;
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieInfo,
        moviesGenres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
