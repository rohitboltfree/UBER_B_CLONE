// we call the app.js file and we can create a port so that server can listen on the 3000
const http = require('http');
const app = require('./app');

//Ports are used in the backend to identify a connection endpoint and direct data to a specific service or process
const port = process.env.PORT || 3000;

const server = http.createServer(app);


// use listen to establish a connection between client and server
server.listen(port ,()=>{
    console.log(`server is running on port --> ${port}`);
});