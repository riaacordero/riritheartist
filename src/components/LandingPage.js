import React from 'react'
import { Link } from "react-router-dom";
import { SocialIcons } from './SocialIcons';

export default function Landing() {
    return (
        <main className="main__bg">
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
            <div className="project contents flex column" style={{gap: 0}} >
                {/* <h2 className="top-high color--orange"> Here's what I do: </h2>
                <p className="par--center bottom-high"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam turpis arcu ipsum congue aliquet. Euismod ultrices est at felis metus auctor in quam pellentesque. Mauris pellentesque ultricies elementum amet. Fermentum magna a tincidunt sodales scelerisque lacus vitae. Eu, feugiat gravida et dolor habitasse porta luctus sit felis. </p>
                <div className="project--gallery container box flex contents">
                    PLACEHOLDER
                    <img src="/images/avatar.png" alt="avatar" className="avatar" />
                    <img src="/images/avatar.png" alt="avatar" className="avatar" />
                    <img src="/images/avatar.png" alt="avatar" className="avatar" />
                </div> */}
            </div>
            
            <div className="bg-img contents flex top-high bottom-high">
                {/* <h2 className="top-high color--blue"> Connect with me!</h2>
                <p className="bottom-high">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam turpis arcu ipsum congue aliquet. Euismod ultrices est at felis metus auctor in quam pellentesque. Mauris pellentesque ultricies elementum amet. Fermentum magna a tincidunt sodales scelerisque lacus vitae. Eu, feugiat gravida et dolor habitasse porta luctus sit felis.</p> */}

                {/* This is for the contact card. */}
            </div>
        </main>
    )
}