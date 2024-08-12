import React from 'react'

function SkillsCard(props) {
  return (
    <span>
    <img src={props.Icon} alt="checkMark" srcset="" />
    <p>{props.skill}</p>
</span>
  )
}

export default SkillsCard
