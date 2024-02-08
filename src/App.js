import logo from "./logo.svg";
import "./App.css";
import { fetchCountryDetail } from "./api/api";
import { useEffect, useState } from "react";
import Flags from "./components/Flags";
import styles from './components/Flags.module.css'

function App() {
  const [countriesData, setCountriesData] = useState([]);

  const getCountriesData = async () => {
    const data = await fetchCountryDetail();
    setCountriesData(data);
    console.log(data);
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className={styles.flagBodyWrapper}>
        {countriesData.map((country) => (
          <Flags
            img={country.flags.png}
            alt={country.flags.alt}
            title={country.name.common}
          />
        ))}

        </div>
      </header>
    </div>
  );
}

export default App;
