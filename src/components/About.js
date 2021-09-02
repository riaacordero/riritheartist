import React from 'react';
import { TechItems } from './page-items/About/TechItems';
import { DesignItems } from './page-items/About/DesignItems';

export default function Main() {
    return (
        <main className="main__bg" id="about">
            <div className="par--center contents flex column bottom-high" style={{gap: 0}} >
                <h2 className="color--black top-mid">&lt;/About me&gt;</h2>
                <div className="par--center flex">
                    <p className="short--width">I am a 19-year old Computer Science student from <a href="https://mcm.edu.ph" >Malayan Colleges Mindanao</a>, a passionate artist, and an aspiring front-end web/app developer from the Philippines. I am a freelance digital illustrator and an enthusiast in UI/UX research & design. I also have a passion to teach and I would like to become an educator someday. As a tech enthusiast, I am very passionate in learning about smartphones and similar tech... I think you can consider me an Apple and Google fangirl!</p>
                </div>
                <div className="par--center">
                    <h4> I am currently learning: </h4>
                    <div className="icon--gap flex">
                        {TechItems.map((item, index) =>{
                                return(
                                    <a href={item.url}>
                                        <i>
                                            <img className={item.className} src={item.src} alt={item.alt}></img>
                                        </i>
                                    </a>
                                )
                            })}
                    </div>
                    <h4 className="icon--gap flex">I am skilled on using the following platforms:</h4>
                    <div className="icon--gap flex">
                        {DesignItems.map((item, index) =>{
                                return(
                                    <a href={item.url}>
                                        <i>
                                            <img className={item.className} src={item.src} alt={item.alt}></img>
                                        </i>
                                    </a>
                                )
                            })}
                    </div>
                </div>
            </div>
        </main>
    );
}