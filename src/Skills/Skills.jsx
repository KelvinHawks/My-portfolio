import React from 'react'
import './skills.css'
import data from './allSkills'

function Skills() {

    const skills = data.map(skill=>{
        return(
            <div className="container-content">
                <h1>{skill.title}</h1>
                <p>{skill.experience}</p>
            </div>
        )
    })

  return (
    <div className='all-container'>
       {skills}
    </div>
  )
}

export default Skills