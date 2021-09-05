import React, { useState } from 'react'
import ToggleSwitch from './page-items/Button/ToggleSwitch';
import ArtPortfolio from './page-items/PortfolioItems/ArtPortfolio'
import DevPortfolio from './page-items/PortfolioItems/DevPortfolio'


export default function Portfolio() {
    const [isToggled, setIsToggled] = useState(true)

    return(
        <main className="main__bg" id="portfolio">
            <div className="contents flex flex--col top-high bottom-high">
                <div className="flex flex--row">
                    <ToggleSwitch rounded={true} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}/>
                </div>
                {isToggled === true && <ArtPortfolio/>}
                {isToggled === false && <DevPortfolio/>}
            </div>
        </main> 
    )
}