function Header(){
    return <nav className="header">
            <a href="#!" className="header__link header__title">All Movies</a>
            <ul className="header__link_wrapper">
                <li><a className="header__link" href="#!">Movies</a></li>
                <li><a className="header__link" href="#!">Series</a></li>
                <li><a className="header__link" href="#!">Cartoons</a></li>
            </ul>
        </nav>
}

export {Header}