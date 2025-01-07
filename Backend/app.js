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
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');


connectToDb();
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


//Route middleware for handling user-related API requests
app.use('/users',userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides',rideRoutes);

app.get('/', (req, res) => { res.send('Hello, World!'); });

app.get('/get-cookie',(req,res)=>{
    try {
        console.log("Headers: ", req.headers);
        console.log("Cookies: ", req.cookies);
        res.json({
          cookies: req.cookies,
        }); //Returns cookie
      } catch (error) {
        console.log("Error getting cookie", error);
      }
})

app.get("/set-cookie", (req, res) => {
    res.cookie("jwt", "abcdef123456", {
      httpOnly: true,
    });
    res.json({ message: "Cookie has been set" });
  });

module.exports = app;
