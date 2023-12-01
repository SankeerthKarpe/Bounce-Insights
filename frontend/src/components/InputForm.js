import React, { useState } from 'react';
import './InputForm.css'; 

const InputForm = ({ onSearch}) => {
  const [countryName, setCountry] = useState('');

  const handleInputChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSearch = () => {
    onSearch(countryName);
  };

  return (
    <div>
      <input type="text" value={countryName} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search Country</button>
    </div>
  );
};

export default InputForm;
