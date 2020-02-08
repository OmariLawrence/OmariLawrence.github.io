import React from 'react'

function Project({project}) {
    let newText = project.desc.split('\n').map((item, i) => {
        return <p key={i}>{item}</p>;
    });
    return (
        <div>
            <br/>
            <h2>{project.Name}</h2>
            {project.src}
            <p>
                {newText}
            </p>
            <b><a href= {project.link}>Access Here!</a></b>
        </div>
    )
}

export default Project
