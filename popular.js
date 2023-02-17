
/*Pour faire des requêtes HTTP vers une API en Node.js, on peux utiliser  le 
module "axios". C'est une bibliothèque pour faire des requêtes HTTP en Node.js.*/

// les modules express et axios sont importés.
const express = require('express');
const axios = require('axios');
const fs = require('fs');

//connection a mongoose db
const mongoose = require('mongoose');
const db = 'mongodb+srv://Registr:09022003Kolia@cluster0.jkxzeia.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);

mongoose
    .connect(db)
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log('error in connexion'));

//creation d'une table dans la db
 const movieSchema =  mongoose.Schema({
    
    id : Number,
    title : String,
    synopsis : String,
    cast : [String],
    url : String,
    releaseYear : Number,
    //trailer : String,//ne se trouve pas dans api
    rating : Number,//ne se trouve pas dans api
      
 }) ;

 //Création d'un model nomé "Movies" selon le model de moviesSchema
 const model = mongoose.model("Popular",movieSchema);


//creation d'une instance express et stockée dans la variable "app"
const app = express();
//port dans lequel le serveur doit ecouter est stocké dans la variable "port"
const port = 3000;

//fonction "app.get()" définit une route qui sera utilisé pour obtenir les données
//Danc ce cas la route est "/api/movies"
app.get('/api/movies', (req, res) => {

/*Dans la fonction callback associée à la route, une requête est envoyée à l'API Netflix en 
utilisant la bibliothèque axios. Les options pour la requête sont stockées dans une variable nommée options. 
Ces options comprennent l'URL de l'API Netflix, les paramètres de la requête (dans ce cas, la recherche de films comiques) et 
les en-têtes de la requête (qui incluent la clé d'API et l'hôte).*/
    const options = {
        method: 'GET',
        url: 'https://netflix54.p.rapidapi.com/search/',
        params: {
          query: 'popular movies',
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

/*Ensuite, axios.request() est utilisé pour envoyer la requête à l'API Netflix en utilisant 
les options définies dans la variable options.*/

/*Si la requête est réussie, la fonction callback associée à .then() est exécutée. 
Cette fonction envoie la réponse de l'API Netflix à l'aide de la méthode .send() de l'objet res d'Express. 
Le statut de la réponse est également défini sur 200 (OK). */ 

/*Si la requête échoue, la fonction callback associée à .catch() est exécutée. Cette fonction affiche l'erreur dans la console.*/

 
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




/*Enfin, la fonction app.listen() est appelée pour démarrer le serveur Express et écouter les connexions 
entrantes sur le port spécifié. La fonction affiche un message dans la console pour indiquer que le serveur 
est en cours d'exécution.*/

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


model.find((err, users) => {
  if (err) {
    console.error(err);
  } else {
    // Conversion en JSON
    const popularJSON = JSON.stringify(users);

    // Écriture du fichier JSON
    fs.writeFile('popular.json', popularJSON, 'utf8', (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Le fichier a été créé avec succès.');
      }
    });
  }
});

//Ceci est juste un teste pour voir si ça fonctionne
/*const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});*/

