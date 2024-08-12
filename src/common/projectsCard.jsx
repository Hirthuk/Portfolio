import React from 'react'

function ProjectsCard(props) {
  return (
    
      <a href= {props.link} target="_blank" rel="noopener noreferrer">
        <img  className = "hover" src= {props.card} alt={props.p} srcset="" />
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
        </a>
        
    
  )
}

export default ProjectsCard
