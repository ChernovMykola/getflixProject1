/*const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const db = 'mongodb+srv://Registr:09022003Kolia@cluster0.jkxzeia.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);
mongoose.connect(db);

const model = mongoose.model('Comedy', new mongoose.Schema({
  id: Number,
  title: String,
  synopsis: String,
  cast: [String],
  url: String,
  releaseYear: Number,
}));

app.get('/api/movies', (req, res) => {
  const yearFilter = req.query.year || 2022; // par défaut, filtre par année = 2022
  
  model.find({ releaseYear: yearFilter })
    .then((movies) => {
      res.status(200).send(movies);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Erreur lors de la récupération des films');
    });
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});*/

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const db = 'mongodb+srv://Registr:09022003Kolia@cluster0.jkxzeia.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);
mongoose.connect(db);

/*Pour créer les filtes il faut créer des schemas avec les mêmes nom que les tables existantes */
const modelcom = mongoose.model('Comedy', new mongoose.Schema({
      id: Number,
      title: String,
      synopsis: String,
      cast: [String],
      url: String,
      releaseYear: Number,
    }));

 const modelact = mongoose.model('Action', new mongoose.Schema({
      id: Number,
      title: String,
      synopsis: String,
      cast: [String],
      url: String,
      releaseYear: Number,
    }));

const modelkids = mongoose.model('Kids', new mongoose.Schema({
      id: Number,
      title: String,
      synopsis: String,
      cast: [String],
      url: String,
      releaseYear: Number,
    }));
const modelpop = mongoose.model('Popular', new mongoose.Schema({
      id: Number,
      title: String,
      synopsis: String,
      cast: [String],
      url: String,
      releaseYear: Number,
    }));

const modelrom = mongoose.model('Romance', new mongoose.Schema({
      id: Number,
      title: String,
      synopsis: String,
      cast: [String],
      url: String,
      releaseYear: Number,
    }));

const modelhor = mongoose.model('Horror', new mongoose.Schema({
      id: Number,
      title: String,
      synopsis: String,
      cast: [String],
      url: String,
      releaseYear: Number,
    }));

const modelthril = mongoose.model('Thriller', new mongoose.Schema({
      id: Number,
      title: String,
      synopsis: String,
      cast: [String],
      url: String,
      releaseYear: Number,
    }));

    app.get('/api/movies', (req, res) => {
      /* req.query.year fait référence à la valeur de l'année qui est envoyée dans la requête HTTP en tant que paramètre
       de requête (query parameter). Dans un contexte frontend, cela pourrait se faire via un formulaire ou une requête
       à l'API du serveur backend.*/
      const yearFilter = req.query.year || 2022;


      /*La fonction Promise.all permet d'exécuter plusieurs promesses en parallèle et de retourner une nouvelle promesse 
      qui se résoudra lorsque toutes les promesses auront été résolues.Dans ce cas-ci, on utilise Promise.all pour exécuter 
      en parallèle des requêtes sur les collections différentes et récupérer tous les documents de 
      ces collections qui ont une clé releaseYear égale à yearFilter. Chacune de ces requêtes est effectuée avec la méthode exec() 
      qui exécute la requête et retourne une promesse. Le résultat de Promise.all est une nouvelle promesse qui se résoudra
       lorsque toutes les promesses passées en paramètre seront résolues. Cette nouvelle promesse retournera un tableau contenant les 
       résultats de chaque promesse résolue. Dans ce cas-ci, le tableau contiendra les résultats des requêtes sur mes collections*/
      Promise.all([
         modelcom.find({ releaseYear: yearFilter }).exec(),
         modelact.find({ releaseYear: yearFilter }).exec(),
         modelhor.find({ releaseYear: yearFilter }).exec(),
         modelkids.find({ releaseYear: yearFilter }).exec(),
         modelpop.find({ releaseYear: yearFilter }).exec(),
         modelrom.find({ releaseYear: yearFilter }).exec(),
         modelthril.find({ releaseYear: yearFilter }).exec(),
       ])

       /*Dans cette partie de code, le serveur récupère les résultats de toutes les requêtes de recherche de films pour 
       chaque collection de la base de données. Les résultats sont stockés dans un tableau de tableaux results. 
       Ensuite, la méthode reduce est utilisée pour concaténer tous les tableaux de résultats en un seul tableau de films movies. 
       Enfin, le serveur renvoie une réponse HTTP contenant le tableau de films avec un statut. Cela permet donc de renvoyer une réponse HTTP 
       contenant l'ensemble des films trouvés dans toutes les collections pour la valeur donnée de yearFilter.*/
       .then((results) => {
            const movies = results.reduce((acc, curr) => acc.concat(curr), []); 
            res.status(200).send(movies);
          })

      /*En cas d'erreur lors de la récupération des films, la fonction catch est appelée avec l'erreur en paramètre. Cette erreur est 
      affichée dans la console avec console.error et une réponse HTTP 500 (Internal Server Error) est renvoyée.*/
      .catch((error) => {
            console.error(error);
            res.status(500).send('Erreur lors de la récupération des films');
          });
      });
      

      app.listen(port, () => {
        console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
      });




