import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="Navbar">
                <div className="flex">
                    <h4 className="color--blue"> riritheartist </h4>
                </div>
                {/* <button className="nav__burger" onClick={e => setClick(!useState)}><img src="/images/others/menu__icon.png" alt="nav menu"/></button> */}
            </nav>
        </>
    )
}

export default Navbar;
