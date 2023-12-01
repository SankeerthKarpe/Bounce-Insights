import React, { useState } from 'react';
import InputForm from './components/InputForm';
import CountryInfo from './components/CountryInfo';
import axios from 'axios';

function App() {
  const [country, setCountry] = useState('');
  const [countryData, setCountryData] = useState(null);

  const searchCountry = async (countryName) => {
    try {
      const response = await axios.get(`http://localhost:3001/countries/${countryName}`);
      console.log('Response:', response.data);
      setCountryData(response.data);
    } catch (error) {
      console.error('Error fetching country information:', error);
    }
  };

  const handleInputChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <InputForm
        onSearch={searchCountry}
        value={country}
        onChange={handleInputChange}
      />
      {countryData && <CountryInfo countryData={countryData} />}
    </div>
  );
}

export default App;
