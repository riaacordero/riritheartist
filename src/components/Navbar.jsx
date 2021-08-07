import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="Navbar">
                <div className="container--nav flex">
                    <h2 className="color--blue"> riritheartist </h2>
                </div> 
            </nav>
        </>
    )
}

export default Navbar;
