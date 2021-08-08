import React from 'react'
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <main className="main__bg">
            <div className="bg-img contents flex">
                <div className="social_icons flex column">
                    <a href="https://behance.net/riritheartist"><img src="/images/socials/behance-black.png" alt="behance"/></a>
                    <a href="https://github.com/riaacordero"><img src="/images/socials/github-black.png" alt="github"/></a>
                    <a href="https://linkedin.com/in/riritheartist"><img src="/images/socials/linkedin-black.png" alt="linkedin"/></a>
                </div>
                <img src="/images/avatar.png" alt="avatar" className="avatar" />
                <div className="column bg--center">
                    <h1 className="bottom-low">Hello, <br></br> I am Riri!</h1>
                    <div className="label box text-align--center">
                        <h3 className="color--blue">a web designer.</h3>
                    </div>
                </div>
            </div>
            <div>
                {/* This is for the project gallery. */}
            </div>
            <div>
                {/* This is for the contact card. */}
            </div>
        </main>
    )
}