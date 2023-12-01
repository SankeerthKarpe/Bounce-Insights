import React, { useEffect, useState } from 'react'
import InputForm from './components/InputForm';
import CountryInfo from './components/CountryInfo';
import axios from 'axios';
import './App.css';


function App() {
  const [countryData, setCountryData] = useState(null);

  const searchCountry = async (country) => {
    try {
      const response = await axios.get(`http://localhost:3001/countries/${country}`);
      console.log('Response:', response.data);
      setCountryData(response.data);
    } catch (error) {
      console.error('Error fetching country information:', error);
    }
  };

  return (
    <div>
      <InputForm onSearch={searchCountry}/>
      {countryData && <CountryInfo countryData={countryData} />}
    </div>
  );
}

export default App;

