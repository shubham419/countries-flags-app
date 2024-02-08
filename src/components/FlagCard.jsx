import React from 'react'
import styles from './Flags.module.css'


const FlagCard = ({img, alt ,title}) => {
  return (
    <div className={styles.flagCard}>
        <img src={img} alt={alt} />
        <h2>{title}</h2>
    </div>
  )
}

export default FlagCard