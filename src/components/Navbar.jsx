import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './NavbarItems'
import { Button } from './Button'

class Navbar extends Component{
    state= { isClicked: false };
    handleClick = () => {
        // Sets state value of isClicked to false to switch between hamburger icon and 'x'. 
        this.setState({isClicked : !this.state.isClicked})
    }

    render(){
        return(
            <nav className="navbar-items">
                <h3 className="navbar-logo">riritheartist</h3>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.isClicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <a className={item.className} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;