import React from 'react'
import './projects.css'
import data from './allData'

function Projects() {
  const projects = data.map((project)=>{
    return(
       <div className="item-from-data">
          <img src={project.img} alt="nisha"/>
          <h2>{project.title}</h2>
          <p>{project.desc}</p>
          <div className="buttons">
            <button ><a href={project.demo} target='blank'>view project</a></button>
            <button> <a href={project.code} target='blank'>View Code</a> </button>
          </div>
        </div>
    )
  })
  // const demoBtn = document.querySelectorAll('.btn')
  // demoBtn.forEach(demo=>{
  //   demo.addEventListener('click', (e)=>{
  //     const target = e.currentTarget.dataset.id
      
  //     //console.log(target);
  //     console.log(target);
  //   })
  // })
 
  return (
    <div className='container'>
      <h1>Projects</h1>
      <div className="content">
           {projects} 
      </div>
    </div>
  )
}

export default Projects