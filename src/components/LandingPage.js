import React from 'react'
import { SocialIcons } from './page-items/SocialIcons';

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
            <div className="about contents flex column bottom-high" style={{gap: 0}} >
                <h2 className="color--black top-mid">&lt;/About me&gt;</h2>
                <div className="par--center">
                    <p>I am a 19-year old Computer Science student from <a href="https://mcm.edu.ph">Malayan Colleges Mindanao</a>, a passionate artist, and an aspiring front-end web/app developer from the Philippines. I am a freelance digital illustrator and an enthusiast in UI/UX research & design. I also have a passion to teach and I would like to become an educator someday. As a tech enthusiast, I am very passionate in learning about smartphones and similar tech... I think you can consider me an Apple and Google fangirl!</p>
                </div>
                <div className="par--center">
                    <h4> I am currently learning: </h4>
                    <div className= "icon--gap flex">
                        <img className="display--img" src="/images/tech/python.svg" alt="Python"></img>
                        <img className="display--img" src="/images/tech/java.svg" alt="Java"></img>
                        <img className="display--img" src="/images/tech/dart.svg" alt="Dart"></img>
                        <img className="display--img" src="/images/tech/flutter.svg" alt="Flutter"></img>
                        <img className="display--img" src="/images/tech/js.svg" alt="Javascript"></img>
                        <img className="display--img" src="/images/tech/react.svg" alt="ReactJS"></img>
                    </div>
                    <h4 className="icon--gap flex">I am skilled on using the following platforms:</h4>
                    <div className= "icon--gap flex">
                        <img className="display--img" src="/images/design/figma.svg" alt="Python"></img>
                        <img className="display--img" src="/images/design/adobe-ps.svg" alt="Python"></img>
                        <img className="display--img" src="/images/tech/github.svg" alt="Python"></img>
                        <img className="display--img" src="/images/tech/vscode.svg" alt="Python"></img>
                    </div>
                </div>
            </div>
            
            <div className="bg-img contents flex top-high bottom-high">
                {/* <h2 className="top-high color--blue"> Connect with me!</h2>
                <p className="bottom-high">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam turpis arcu ipsum congue aliquet. Euismod ultrices est at felis metus auctor in quam pellentesque. Mauris pellentesque ultricies elementum amet. Fermentum magna a tincidunt sodales scelerisque lacus vitae. Eu, feugiat gravida et dolor habitasse porta luctus sit felis.</p> */}

                {/* This is for the contact card. */}
            </div>
        </main>
    )
}