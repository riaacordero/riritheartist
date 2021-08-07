import React from 'react'
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <main className="main__bg bg-img">
            <div className="contents flex">
                <div className="social_icons flex column">
                    <a href="https://behance.net/riritheartist"><img src="/images/socials/behance-black.png" alt="behance"/></a>
                    <a href="https://github.com/riaacordero"><img src="/images/socials/github-black.png" alt="github"/></a>
                    <a href="https://linkedin.com/in/riritheartist"><img src="/images/socials/linkedin-black.png" alt="linkedin"/></a>
                </div>
                <img src="/images/avatar.png" alt="avatar" className="avatar" />
                <h1 className="bg--center">Hello, <br></br> I am Riri</h1>
            </div>
        </main>
    )
}