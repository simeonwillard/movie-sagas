import { IconButton, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import './MovieForm.css';


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
        dispatch({ type: 'FETCH_GENRES' });
    }, []);


    const handleChange = (event) => {
        setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
    }

    const addMovie = (event) => {
        event.preventDefault();
        console.log(newMovie);
        dispatch({ type: 'ADD_MOVIE', payload: newMovie });
        setNewMovie({
            title: '',
            poster: '',
            description: '',
            genre_id: ''
        });
        Swal.fire({
            title: 'Sweet!',
            text: 'you added a new movie!',
            imageUrl: newMovie.poster,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
        history.push('/');
    }

    const handleCancel = () => {
        console.log('clicked cancel');
        Swal.fire({
            title: 'Are you sure?',
            text: 'your new movie will be deleted',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#30856',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'your movie has been deleted.',
                    'success'
                )
                history.push('/');
            }
        })
    }


    return (
        <div className="form">
            <h3>Add a new movie!</h3>
            <form onSubmit={addMovie}>
                <div className="title">
                
                    <input
                        type="text"
                        name="Movie Title"
                        value={newMovie.title}
                        onChange={handleChange}
                        placeholder="title"
                    />
                </div>
                <div className="poster">
                
                    <input
                        type="text"
                        name="poster"
                        value={newMovie.poster}
                        onChange={handleChange}
                        placeholder="Poster URL"
                    />
                </div>
                <div className="description">
                
                    <textarea
                        rows="7"
                        cols="35"
                        name="description"
                        value={newMovie.description}
                        onChange={handleChange}
                        placeholder="Movie Description"
                    />
                </div>
                <div>
                    
                    <h5>Genre:</h5>
                    <Select
                        value={newMovie.genre_id}
                        name="genre_id"
                        onChange={handleChange}
                        background-color="white"
                    >
                        {genres?.map((genre) => (
                            <MenuItem  key={genre.id} value={genre.id}>
                                {genre.name}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
                <IconButton color="secondary" onClick={handleCancel}>
                    <CloseIcon />
                    <h6>cancel</h6>
                </IconButton>
                <IconButton color="primary" type="submit">
                    
                    <CheckIcon />
                    <h6>save</h6>
                </IconButton>
            </form>
        </div>
    )
}

export default MovieForm;