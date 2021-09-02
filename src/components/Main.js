import React, {useState} from 'react'
import { SocialIcons } from './page-items/SocialIcons'
import { LinkButton } from './page-items/Button/LinkButton'

export default function Main() {
    const [imgURL, setImgURL] = useState('images/avatar-art.png')
    const changeUrl = () => {
        if (imgURL === 'images/avatar-art.png') {
            setImgURL('images/avatar-face.png')
         } else {
            setImgURL('images/avatar-art.png')
         }    
    }

    return (
        <main className="main__bg" id="main">
            <div className="bg-img contents flex top-high bottom-high">
                <div className="display--avatar avatar flex column">
                    {/* SHOW/HIDE feature added. To be modified for later. */}
                    <img src={imgURL} alt='avatar'/>
                    <LinkButton onClick ={()=> changeUrl()}>face reveal</LinkButton>
                </div>
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