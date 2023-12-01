const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

app.get('/countries/:name', async (req, res) => {
  const commonName = req.params.name;
  console.log('Country Name:', commonName);
  
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${commonName}`);
    const countryData = response.data[0]; 
    res.json(countryData);
  } catch (error) {
    console.error('Error fetching country information:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello, this is the country info backend!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
