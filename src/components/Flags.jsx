import React from 'react'
import FlagCard from './FlagCard'

const Flags = ({img, alt ,title}) => {
  return (
    <div>
        <FlagCard img={img} alt={alt} title={title}/>
    </div>
  )
}

export default Flags