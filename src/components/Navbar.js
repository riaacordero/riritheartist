import React, {Component} from 'react';
import { MenuItems } from './page-items/NavbarItems';
import { Link } from 'react-scroll';

class Navbar extends Component{
    state= { isClicked: false };
    handleClick = () => {
        // Sets state value of isClicked to false to switch between hamburger icon and 'x'. 
        this.setState({isClicked : !this.state.isClicked})
    }

    render(){
        return(
            <nav className="navbar-items">
                {/* Scrolls to 'main' page. */}
                <Link
                    activeClass="active"
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <h3 className="navbar-logo">riritheartist</h3>
                </Link>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.isClicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link activeClass="active"
                                    to={item.url} 
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className={item.className}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;