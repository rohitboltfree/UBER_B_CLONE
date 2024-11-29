// we the help of dotenv we can listen the port of environment variable
const dotenv = require('dotenv');
dotenv.config();

// we use cors in production so that we can link website domain with the backend 
const cors = require('cors');

const express = require("express");
const app = express();
const connectToDb= require('./db/db');

connectToDb();
app.use(cors());


app.get('/', (req, res) => {
    res.send('hello world');
});

module.exports = app;
