const express = require('express');
const axios = require('axios');
const action = require('../models/actionModel');

const actionRoutes = express.Router();

actionRoutes.get('/', (req, res) => {
    console.log("im trying")
    const options = {
        method: 'GET',
        url: 'https://netflix54.p.rapidapi.com/search/',
        params: {
            query: 'action',
            offset: '0',
            limit_titles: '10',
            limit_suggestions: '1',
            lang: 'en',
        },
        headers: {
            'X-RapidAPI-Key': '292285022amsh79afb984187da4dp1eb975jsnaf7202d40933',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
        },
    };


        axios.request(options)
        .then((response) => {
            const movies = response.data.titles.map((title) => {
                const movie = title.jawSummary;
                return {
                    ...movie,
                    cast: movie.cast.map((c) => c.name),
                    url: movie.backgroundImage.url,
                };
            });
            action.insertMany(movies)
                .then(() => {
                    console.log('Inserted');
                    res.status(200).send({ movies: response.data });
                })
                .catch((err) => {
                    console.error(err);
                    res.status(500).send(err);
                });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send(error);
        });
});

module.exports = actionRoutes;