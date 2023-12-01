import React, { useState } from 'react';
import './InputForm.css'; 

const InputForm = ({ onSearch}) => {
  const [country, setCountry] = useState('');

  const handleInputChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSearch = () => {
    onSearch(country);
  };

  return (
    <div>
      <input type="text" value={country} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search Country</button>
    </div>
  );
};

export default InputForm;
