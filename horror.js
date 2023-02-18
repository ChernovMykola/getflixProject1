const express = require('express');
const axios = require('axios');
const fs = require('fs');


const mongoose = require('mongoose');
const db = 'mongodb+srv://Registr:09022003Kolia@cluster0.jkxzeia.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);

mongoose
    .connect(db)
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log('error in connexion'));


 const movieSchema =  mongoose.Schema({
    
    id : Number,
    title : String,
    synopsis : String,
    cast : [String],
    url : String,
    releaseYear : Number,
    //trailer : String,//ne se trouve pas dans api
    //rating : Number,//ne se trouve pas dans api
      
 }) ;

 
 const model = mongoose.model("Horror",movieSchema);

const app = express();

const port = 3000;


app.get('/api/movies', (req, res) => {


    const options = {
        method: 'GET',
        url: 'https://netflix54.p.rapidapi.com/search/',
        params: {
          query: 'horror',
          offset: '0',
          limit_titles: '10',
          limit_suggestions: '1',
          lang: 'en'
        },
        headers: {
          'X-RapidAPI-Key': '292285022amsh79afb984187da4dp1eb975jsnaf7202d40933',
          'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
      };


 
axios.request(options).then(function (response) {
    const movies = response.data.titles.map((title) => {
        const movie = title.jawSummary;
        return {
            ...movie,
            cast: movie.cast.map((c) => c.name),
            url : movie.backgroundImage.url,
        }
    })
    model.insertMany(movies)
      .then(() => {
        console.log("Inserted");
        res.status(200).send(response.data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  }).catch(function (error) {
    console.error(error);
    res.status(500).send(error);
  });
  
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



model.find((err, users) => {
  if (err) {
    console.error(err);
  } else {
    
    const horrorJSON = JSON.stringify(users);

    
    fs.writeFile('horror.json', horrorJSON, 'utf8', (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Le fichier a été créé avec succès.');
      }
    });
  }
});