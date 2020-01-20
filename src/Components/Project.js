import React from 'react'

function Project({project}) {
    return (
        <div>
            <br/>
            <h2>{project.name}</h2>
            <img src={project.src} alt='egg'height="20%" width="20%"/>
            <p>
                {project.desc}
            </p>
        </div>
    )
}

export default Project
