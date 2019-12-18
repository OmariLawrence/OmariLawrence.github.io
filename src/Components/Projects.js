import React from 'react'
import egg from './pictures/egg.png'

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <br/>
            <h2>Eggcellence 2: Hard Boiled</h2>
            <img src={egg} alt='egg'height="20%" width="20%"/>
            <p>A silly game where you run around a village throwing eggs at 
                people and there houses, while trying to avoid being caught by
                the villagers
            </p>
        </div>
    )
}

export default Projects
