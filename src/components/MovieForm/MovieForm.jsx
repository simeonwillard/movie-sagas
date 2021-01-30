import { useState } from "react";


function MovieForm() {

    const [movie, setMovie] = useState({
        title: '',
        poster: '',
        description: ''
    });



    const handleChange = (event) => {
        setMovie({ [this.event.target.name]: this.event.target.value });
    }

    const addMovie = (event) => {
        console.log('clicked submit');
        console.log(movie);

    }


    return (
        <div>
            <form onSubmit={addMovie}>
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="poster"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="description"
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    value="add Movie"
                />
            </form>
        </div>
    )
}

export default MovieForm;