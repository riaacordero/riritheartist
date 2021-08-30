import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isClicked, setClick] = useState(false);

    return (
            <header className="Navbar">
                <div className="container container--nav flex flex--col">
                    <div className="flex flex--nav-icons">
                        <Link to="/"> 
                            <h3 className="color--black"> riritheartist </h3>
                        </Link>
                        <button className="nav__burger" onClick={e => setClick(!isClicked)}><img src="/images/others/menu__icon.svg" alt="menu"/></button>     
                    </div>
                    <nav>
                        <ul className={`nav__ul ${isClicked ? "nav__ul--open" : "" }`}>
                            <li className="nav__li"> <Link to="/" className="nav__link"> About </Link> </li>
                            <li className="nav__li"> <Link to="/" className="nav__link"> Projects </Link> </li>
                            <li className="nav__li"> <Link to="/" className="nav__link"> Contact </Link> </li>
                        </ul>
                    </nav>
                </div>
            </header>
    )
}
