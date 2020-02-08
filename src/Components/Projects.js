import React from 'react'
import egg from './pictures/egg.png'
import tdegg from './pictures/3degg.png'
import SSSS from './pictures/ssss.png'
import Project from './Project'

function Projects() {

    const projects = [{
        id: 1,
        Name: "Eggcellence 2: Hard Boiled",
        src: <img src={egg} alt='egg'height="20%" width="20%"/>,
        desc: "A silly game where you run around a village throwing eggs at \n people and there houses, while trying to avoid being caught by \n the villagers",
        link: "https://jormsgames.github.io/"
    },
    {
        id: 2,
        Name: "Eggcellence 3D",
        src: <img src={tdegg} alt='tegg'height="20%" width="20%"/>,
        desc: "A third person shooter where players control Giant Floating Eggs and \n try eliminate each other by shooting smaller eggs at one another",
        link: "https://github.com/OmariLawrence/Eggcellence-3D"
    },
    {
        id: 2,
        Name: "SpaceShip SlingShot",
        src: <img src={SSSS} alt='ssss'height="20%" width="20%"/>,
        desc: "A game made for Game Developers Trinidad and Tobago January game dev event \n The game is about shooting a spaceship in such a \n way that it gets to the green planet",
        link: "https://spaceship-slingshot.netlify.com/"
    }]

    const projectList = projects.map((project,index) => <Project key={index} project={project}/>)
    return (
        <div>
            <h1>Projects</h1>
            {projectList}
        </div>
    )
}

export default Projects
