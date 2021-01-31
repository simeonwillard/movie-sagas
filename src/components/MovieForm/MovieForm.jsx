import { IconButton, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import { useHistory } from "react-router-dom";


function MovieForm() {

    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector(state => state.genres);
    let [newMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genre_id: ''
    });

    useEffect(() => {
        dispatch({type: 'FETCH_GENRES'});
    }, []);


    const handleChange = (event) => {
        setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
    }

    const addMovie = (event) => {
        event.preventDefault();
        console.log(newMovie);
        dispatch({type: 'ADD_MOVIE', payload: newMovie});
        setNewMovie({
            title: '',
            poster: '',
            description: '',
            genre_id: ''
        });
        // history.push('/');
    }

    const handleCancel = () => {
        console.log('clicked cancel');
        history.push('/');
    }


    return (
        <div>
            <form onSubmit={addMovie}>
                <div className="title">
                <input
                    type="text"
                    name="title"
                    value={newMovie.title}
                    onChange={handleChange}
                />
                </div>
                <div className="poster">
                <input
                    type="text"
                    name="poster"
                    value={newMovie.poster}
                    onChange={handleChange}
                />
                </div>
                <div className="description">
                <textarea 
                rows="7" 
                cols="35"
                name="description"
                value={newMovie.description}
                onChange={handleChange}
                />
                </div>
                <div>
                    <InputLabel>Genre</InputLabel>
                     <Select 
                     value={newMovie.genre_id}
                     name="genre_id"
                     onChange={handleChange}
                     >
                     {genres?.map((genre) => (
                         <MenuItem key={genre.id} value={genre.id}>
                         {genre.name}
                         </MenuItem>
                     ))}
                     </Select>
                </div>
                <IconButton color="secondary" onClick={handleCancel}>
                    <CloseIcon />
                </IconButton>
                <IconButton color="primary" type="submit">
                    <CheckIcon />
                </IconButton>
            </form>
        </div>
    )
}

export default MovieForm;