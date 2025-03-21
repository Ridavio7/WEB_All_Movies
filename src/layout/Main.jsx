import {Component} from "react"
import {Movies} from "../components/Movies"
import {Preloader} from "../components/Preloader"
import {Search} from "../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component{
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
        .catch((err) => {
            console.error(err);
            this.setState({loading: false})
        })
    }

    searchMovies = (str, filter, year) => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&type=${filter}&y=${year}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
        .catch((err) => {
            console.error(err);
            this.setState({loading: false})
        })
    }
    
    render(){
        const {movies} = this.state

        return <main className="container">
        <Search searchMovies = {this.searchMovies} />
            {this.state.loading ? <Preloader/> :
                <Movies movies={movies} />
            }
        </main>
    }
}

export {Main}