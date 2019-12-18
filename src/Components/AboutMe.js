import React, { Component } from 'react'
import omari from './pictures/picture.jpg'

export class AboutMe extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            skills: ["Python/Java/C++",
            "Unity/Game Maker Studio 2",
            "HTML/CSS/JavaScript",
            "Object Oriented Programming",
            "Android Studio"],
        
            edu: [<p><b>Expected Graduation:</b> October 2020</p>,
                <p><b>Bachelor of Science:</b> Computer Science</p>,
                <p><b>Institution:</b> The University of the West Indies - St Augustine Campue</p>
            ],
        
            accomp: ["1st Teleios Code Jam Best in Challenge #1 2018",
                "3rd University of the West Indies Computing Society Computing Olympiad Competition"],
        
            exp: ["09/2019 – Current, Student Lab Assistant, The University of the West Indies – St. Augustine Campus",
                "07/2019-07/2019 – Mentor, DCIT Bootcamp, The University of the West Indies – St. Augustine Campus",
                "17/10/2019-8/12/2019, Intern, Quenk Technologies"],
        
            affil: ["Vice President, University of the West Indies Computing Society, 2019 to 2020",
                "Founder, JORM Games, 2018 - current"]
       }
   }
   

    skillList = this.state.skills.map((skill, index) => <li key={index}>{skill}</li>)
    eduList = this.state.edu.map((ed) => ed)
    accompList = this.state.accomp.map((acc, index) => <li key={index}>{acc}</li>)
    expList = this.state.exp.map((ex, index) => <li key={index}>{ex}</li>)
    afilList = this.state.affil.map((aff, index) => <li key={index}>{aff}</li>)

    render() {
        return (
            <div>
            <h1>Omari Lawrence</h1>
            <img src={omari} alt="omari" height="10%" width="10%"/>
            <br/>
            <h2>Professional Summary</h2>
            <p>Proactive Student with skills in Python, Java and C++. 
                Eager to bring value to any Software Development establishment through 
                hard work and commitment to quality.</p>
            <br/>
            <h2>Skills</h2>
            <ul>
                {this.skillList}
            </ul>
            <br/>
            <h2>Education</h2>
                {this.eduList}
            <br/>
            <h2>Accomplishments</h2>
            <ul>
                {this.accompList}
            </ul>
            <br/>
            <h2>Experience</h2>
            <ul>
                {this.expList}
            </ul>
            <br/>
            <h2>Affiliations</h2>
            <ul>
                {this.afilList}
            </ul>
        </div>
        )
    }
}

export default AboutMe
