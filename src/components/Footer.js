import React, {Component} from 'react';
import { MenuItems } from './page-items/NavbarItems';
import { Link } from 'react-scroll';

class Footer extends Component{
    render(){
        return(
            <footer className="footer-items">
               <p><span>&#169; </span>2021 by Ria Cordero</p>
            </footer>
        )
    }
}

export default Footer;