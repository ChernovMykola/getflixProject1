const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Post = require('./models/post');

const path = require('path');

const port = 3000;
const db = 'mongodb+srv://Registr:09022003Kolia@cluster0.jkxzeia.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);

mongoose
    .connect(db)
    .then((res) => console.log('Connect to DB'))
    .catch((error) => console.log('error'));


const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})