import React from 'react';

const CountryInfo = ({ countryData }) => {
  if (!countryData) {
    return <p>Country doesn't exist</p>;
  }
   const { name, capital, population, region, subregion, languages} = countryData;

   return (
     <div>
       <h2>{name.common}</h2>
       <p>Official Name: {name.official}</p>
       <p>Capital: {capital[0]}</p>
       <p>Population: {population}</p>
       <p>Region: {region}</p>
       <p>Subregion: {subregion}</p>
       <p>Languages: {Object.values(languages).join(', ')}</p>
     </div>
   );
 };

export default CountryInfo;


