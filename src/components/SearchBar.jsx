import React from 'react'
import styles from './Flags.module.css'

const SearchBar = ({handleSearch}) => {
  return (
    <div className={styles.searchbar}>
        <input type="text" placeholder='Search for countries' onChange={handleSearch}/>
    </div>
  )
}

export default SearchBar