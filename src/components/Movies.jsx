import {Movie} from './Movie'

function Movies(props) {
    return <div className="movies">
        {
            props.movies === undefined ? 
            <h1 className='movies__title'>Write what do you want to watch</h1>:
            props.movies.map(movie => (
                <Movie key={movie.imdbID} {...movie} />
            ))
        }
    </div>;
}

export { Movies };