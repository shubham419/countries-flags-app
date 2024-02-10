import React, { useState } from "react";
import styles from "./Flags.module.css";

const SearchBar = ({ handleSearch }) => {

  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        className={styles.inputText}
        placeholder="Search for countries"
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
