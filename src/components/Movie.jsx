
function Movie(props) {
    const {
        Poster,
        Title,
        Year,
        Type,
        imdbID
    } = props

    return <div className="card">
        <div>
            {
                Poster === 'N/A' ?
                <img className="card__image" alt="movie_img" src={`https://imgholder.ru/250x350/8493a8/ffffff&text=${Title}&fz=20`}/> :
                <img className="card__image" alt="movie_img" src={Poster}/>
            }
        </div>
        <div className="card__content">
            <p className="card__title">{Title}</p>
            <p className="card__year">{Year} year</p>
            <p className="card__year">{Type}</p>
        </div>
    </div>;
}

export { Movie };