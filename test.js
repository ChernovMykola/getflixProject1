

/*const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://netflix54.p.rapidapi.com/search/',
  params: {
    query: 'stranger',
    offset: '0',
    limit_titles: '50',
    limit_suggestions: '20',
    lang: 'en'
  },
  headers: {
    'X-RapidAPI-Key': '292285022amsh79afb984187da4dp1eb975jsnaf7202d40933',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});*/

const express = require('express');
const axios = require('axios');


const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello, world');
  });

//app.get('/api/movies', async (req, res) => {
  try {
    const response = await axios.get('https://netflix54.p.rapidapi.com/search/', {
      params: {
        query: 'comedies',
        offset: '0',
        limit_titles: '50',
        limit_suggestions: '20',
        lang: 'en'
      },
      headers: {
        'X-RapidAPI-Key': '292285022amsh79afb984187da4dp1eb975jsnaf7202d40933',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    });

    // Extract the relevant data from the response and send it as the API response
    const movies = response.data;
    console.log(movies);
    res.status(200).send(json(movies));
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching movies from the API');
  }
//});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

/*const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});*/

