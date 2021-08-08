import React from 'react'
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <main className="main__bg">
            <div className="bg-img contents flex top-high bottom-high">
                <div className="social_icons flex column">
                    <a href="https://behance.net/riritheartist"><img src="/images/socials/behance-black.png" alt="behance"/></a>
                    <a href="https://github.com/riaacordero"><img src="/images/socials/github-black.png" alt="github"/></a>
                    <a href="https://linkedin.com/in/riritheartist"><img src="/images/socials/linkedin-black.png" alt="linkedin"/></a>
                </div>
                <img src="/images/avatar.png" alt="avatar" className="avatar" />
                <div className="intro column bg--center">
                    <h1 className="bottom-low">Hello, <br></br> I am Riri!</h1>
                    <h3 className="color--blue" style={{margin: 1}}>&lt;/designer, developer&gt;</h3>
                </div>
            </div>
            <div className="project contents flex column" style={{gap: 0}} >
                <h2 className="top-high color--blue"> Here's what I do: </h2>
                <p className="par--center bottom-high"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam turpis arcu ipsum congue aliquet. Euismod ultrices est at felis metus auctor in quam pellentesque. Mauris pellentesque ultricies elementum amet. Fermentum magna a tincidunt sodales scelerisque lacus vitae. Eu, feugiat gravida et dolor habitasse porta luctus sit felis. </p>
                <div className="project--gallery container box flex contents">
                    <img src="/images/avatar.png" alt="avatar" className="avatar" />
                    <img src="/images/avatar.png" alt="avatar" className="avatar" />
                    <img src="/images/avatar.png" alt="avatar" className="avatar" />
                </div>
            </div>
            
            <div className="bg-img contents flex top-high bottom-high">
                {/* This is for the contact card. */}
            </div>
        </main>
    )
}