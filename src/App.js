import logo from "./logo.svg";
import "./App.css";
import { fetchCountryDetail } from "./api/api";
import { useEffect, useState, useCallback } from "react";
import Flags from "./components/Flags";
import styles from "./components/Flags.module.css";
import SearchBar from "./components/SearchBar";

function App() {
  const [countriesData, setCountriesData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const getCountriesData = async () => {
    const data = await fetchCountryDetail();
    setCountriesData(data);
    setFilteredData(data);
    console.log(data);
  };

  const handleSearch = useCallback((event) => {
    const value = event.target.value;
    const newData = countriesData.filter((country) => {
      return country.name.common.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredData(newData);
  }, []);

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar handleSearch={handleSearch} />
      </header>
      <div className={styles.flagBodyWrapper}>
        {filteredData.map((country) => (
          <Flags
            img={country.flags.png}
            alt={country.flags.alt}
            title={country.name.common}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
