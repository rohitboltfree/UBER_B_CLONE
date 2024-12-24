// we the help of dotenv we can listen the port of environment variable
const dotenv = require('dotenv');
dotenv.config();

// we use cors in production so that we can link website domain with the backend 
const cors = require('cors');

const express = require("express");
const app = express();
const connectToDb= require('./db/db');
const cookieParser  = require('cookie-parser');
// all routes
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');


connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('hello world');
});

//Route middleware for handling user-related API requests
app.use('/users',userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;
