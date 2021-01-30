import { useSelector } from "react-redux";



function Details() {

    const movieInfo = useSelector(state => state.movieInfo);
    console.log('movie info is:', movieInfo);
    

   

    return (
        <>
            <h2>Genres: </h2>
            <p>{movieInfo.description}</p>

        </>
    )
}




export default Details;