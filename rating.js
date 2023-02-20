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
        const movieTitle = req.query.title || "Kate";
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

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
  });

      
  
  