const fs = require('fs');
const action = require('../models/actionModel');

const movieController = {};

movieController.getMovies = (req, res) => {
    action.find((err, movies) => {
        if (err) {
            console.error(err);
        } else {
            const actionJSON = JSON.stringify(movies);

           /* fs.writeFile('action.json', actionJSON, 'utf8', (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('Le fichier a été créé avec succès.');
                }
            });*/
            res.status(200).send({movies : movies});
        }
    });
};

// .getMoviesByID

module.exports = movieController;
