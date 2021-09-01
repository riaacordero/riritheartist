import React from 'react'
import { SocialIcons } from './page-items/SocialIcons'

export default function Main() {
    return (
        <main className="main__bg" id="main">
            <div className="bg-img contents flex top-high bottom-high">
                <img src="/images/avatar.png" alt="avatar" className="avatar flex" />
                <div className="intro column bg--center">
                    <h1 className="color--white bottom-low align-center">Hello, <br></br> I am Riri!</h1>
                    <h3 className="color--orange" style={{margin: 1}}>&lt;/designer, developer&gt;</h3>
                    <ul className="social-icons--display align-center flex row">
                        {SocialIcons.map((item, index) =>{
                            return(
                                <li key={index}>
                                    <a className={item.className} href={item.url}>
                                        <i className={item.source}></i>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </main>
    )
}