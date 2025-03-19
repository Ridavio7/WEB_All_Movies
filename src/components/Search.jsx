import { Component } from "react";

class Search extends Component{
    state = {
        search: '',
        filter: '',
        yearMovie: ''
    }

    handleKey = (event) => {
        if(event.key === 'Enter'){
            this.props.searchMovies(this.state.search, this.state.filter, this.state.yearMovie)
        }
    }

    handleChang = (event) => {
        this.setState(() => ({filter: event.target.value}), () => {
            this.props.searchMovies(this.state.search, this.state.filter, this.state.yearMovie)
        })
    }

    render(){
        const {search, filter, yearMovie} = this.state

        this.years = Array.from(new Array(76),(val, index) => index + 1950);

        return <div className="search">
                    <input
                        className="search__input"
                        placeholder="Search"
                        type="search"
                        value={search}
                        onChange={(event) => this.setState({search: event.target.value})}
                        onKeyDown={this.handleKey}
                    />
                <button className="search__button" onClick={() => this.props.searchMovies(search, filter, yearMovie)}>Search</button>
                <div className="search__label_wrapper">
                    <label>
                        <input
                            className="search__radio"
                            name="filter"
                            type="radio"
                            value=""
                            onChange={this.handleChang}
                            checked={this.state.filter === ''}
                        />
                        <span className="search__label">All</span>
                    </label>
                    <label>
                        <input
                            className="search__radio"
                            name="filter"
                            type="radio"
                            value="movie"
                            onChange={this.handleChang}
                            checked={this.state.filter === 'movie'}
                        />
                        <span className="search__label">Movie</span>
                    </label>
                    <label>
                        <input
                            className="search__radio"
                            name="filter"
                            type="radio"
                            value="series"
                            onChange={this.handleChang}
                            checked={this.state.filter === 'series'}
                        />
                        <span className="search__label">Series</span>
                    </label>
                    <label>
                        <span className="search__label">Year</span>
                        <select
                        className="search__select"
                        onChange={(event) => this.setState({yearMovie: event.target.value})}
                        >
                        <option value=''>---</option>
                            {
                                this.years.map((year, index) => {
                                    return <option key={`year${index}`} value={year}>{year}</option>
                                })
                            }
                        </select>
                    </label>
                </div>
            </div>
    }
}

export {Search}