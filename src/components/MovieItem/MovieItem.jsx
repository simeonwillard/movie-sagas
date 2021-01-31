import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { makeStyles } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import './MovieItem.css';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: "rgba(134, 224, 223, 0.12)"
    },
    tiles: {
        height: 700,
        width: 500,
        padding: 20
    }
}));


function MovieItem({ movie }) {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: 'GET_MOVIE', payload: movie.id });
        dispatch({ type: 'GET_MOVIE_GENRES', payload: movie.id });
        history.push('/details');
    }

    return (
        <GridListTile className={classes.tiles} key={movie.id}>
            <img src={movie.poster} alt={movie.title} onClick={handleClick} />
            <GridListTileBar
                title={movie.title}
                actionIcon={
                    <IconButton
                        aria-label={`info about ${movie.title}`}
                        className={classes.icon}
                    >
                       
                    </IconButton>
                }
            />
        </GridListTile>
    );

}




export default MovieItem;