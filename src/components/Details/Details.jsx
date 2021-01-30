import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function Details() {

    const movieInfo = useSelector(state => state.movieInfo);
    const movieGenre = useSelector(state => state.moviesGenres);
    const history = useHistory();

    const handleClick = () => {
        history.push('/')
    }

    return (
        <>
            <div>
                <header>
                    <h2>{movieInfo.title}</h2>
                </header>
                <h4>Genres:</h4>
                <ul>
                    {movieGenre.map((genre, i) => (
                        <li key={i}>{genre.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>Description</h4>
                <p>{movieInfo.description}</p>
            </div>
            <div>
                <IconButton 
                color="primary"
                onClick={handleClick}
                >
                    <ArrowBackIosIcon /><h6>back</h6>
                </IconButton>
            </div>

        </>
    )
}




export default Details;