const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/checkuser');
const path = require('path');
const keys = require('./config/keys')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const actionRoute = require('./routes/actionRoute');
const actionController = require('./controllers/actionCont');


// const token = require('./controllers/checkuser')



const port = 3000;
const db = 'mongodb+srv://Registr:09022003Kolia@cluster0.jkxzeia.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);

mongoose
    .connect(db)
    .then((res) => console.log('Connect to DB'))
    .catch((error) => console.log('error'));


const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);



// app.use(passport.initialize())
// require("./midleware/passport")(passport)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use('/db/populate/movies', actionRoute);
app.get('/api/movies', actionController.getMovies);


app.use('/api/auth', authRoutes)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})