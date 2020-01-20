import React from 'react'
import egg from './pictures/egg.png'
import tdegg from './pictures/3degg.png'

function Projects() {

    const projects = [{
        id: 1,
        Name: "Eggcellence 2: Hard Boiled",
        src: egg,
        desc: "A silly game where you run around a village throwing eggs at people and there houses, while trying to avoid being caught by the villagers"
    }]

    return (
        <div>
            <div>
                <h1>Projects</h1>
                <br/>
                <h2>Eggcellence 2: Hard Boiled</h2>
                <img src={egg} alt='egg'height="20%" width="20%"/>
                <p>A silly game where you run around a village throwing eggs at 
                    people and there houses, while trying to avoid being caught by
                    the villagers. 
                    <br></br>
                    <b><a href= "https://jormsgames.github.io/">Play Here!</a></b>
                </p>
            </div>
            <div>
                <br/>
                <h2>Eggcellence 3D</h2>
                <img src={tdegg} alt='tegg'height="20%" width="20%"/>
                <p>
                    a third person shooter where players control Giant Floating Eggs and 
                    try eliminate eacch other by shooting smaller eggs at one another
                </p>
            </div>
        </div>
    )
}

export default Projects
