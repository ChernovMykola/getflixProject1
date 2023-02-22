const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const db = 'mongodb+srv://Registr:09022003Kolia@cluster0.jkxzeia.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);
mongoose.connect(db);

//nouveau model pour la table rating
const model = mongoose.model('Rating', new mongoose.Schema({

        email: {
          type: String,
          ref: 'User',
        },
        title: {
          type: String,
        },
        genre: {
          type: String,
          enum: ['Popular', 'Thriller', 'Romantic', 'Horror', 'Kids', 'Action', 'Comedy'],
        },
        rating: {
          type: Number,
          min: 1,
          max: 5,
        }
      }));

      //req.query...pour les front
      app.get('/api/movies', (req, res) => {
        const userEmail = req.query.email || "email@gmail.com" ;
        const movieTitle = req.query.title || "dfsdfdf";
        const ratingValue = req.query.rating || 3;

    // creation de la nouvelle collection rating
    model.create({ email: userEmail, title: movieTitle, rating: ratingValue })
     .then((newRating) => {
      console.log('Nouvelle note créée :', newRating);
    })
    .catch((error) => {
      console.error('Erreur lors de la création de la note :', error);
      res.status(500).json({ error: 'Erreur lors de la création de la note' });
    });
});

/*const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const db = 'mongodb+srv://Registr:09022003Kolia@cluster0.jkxzeia.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);
mongoose.connect(db);

const modeluser = mongoose.model('User', new mongoose.Schema({
    username: String,
    email: String,
    password: String,

  }));

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

// Modèle pour la table rating
const model = mongoose.model('Rating', new mongoose.Schema({
  email: {
    type: String,
    ref: 'User',
  },
  title: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
}));



// Crée une nouvelle note
app.get('/api/movies',(req, res) => {
  const userEmail = req.query.email || "email@gmail.com";
  const movieTitle = req.query.title || "slkdjfklf";
  const ratingValue = req.query.rating || 3;


  Promise.all([
    modelcom.find({ title: movieTitle }).exec(),
    modelact.find({ title: movieTitle }).exec(),
    modelhor.find({ title:movieTitle }).exec(),
    modelkids.find({ title: movieTitle }).exec(),
    modelpop.find({title: movieTitle }).exec(),
    modelrom.find({ title: movieTitle }).exec(),
    modelthril.find({title: movieTitle }).exec(),
    modeluser.find({email:userEmail}).exec(),
  ])
  model.create({ email: userEmail, title: movieTitle, rating: ratingValue })
  .then((newRating) => {
   console.log('Nouvelle note créée :', newRating);
 })
 .catch((error) => {
   console.error('Erreur lors de la création de la note :', error);
   res.status(500).json({ error: 'Erreur lors de la création de la note' });
 });

});*/
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
  });

      
  
  