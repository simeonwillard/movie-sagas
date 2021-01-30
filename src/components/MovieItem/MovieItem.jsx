import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function MovieItem({ movie }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({type: 'GET_MOVIE', payload: movie.id});
        dispatch({type: 'GET_GENRE', payload: movie.id});
        history.push('/details');
    }

    return (
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} onClick={handleClick} />
        </div>
    );

}




export default MovieItem;