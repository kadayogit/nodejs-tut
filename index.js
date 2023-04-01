//create app with express framework
const express = require('express');

const server = express();

// home page route
server.get("",(req, res)=>{
    res.send("Hello home page!");
});

// about page route 
server.get("/about",(req, res)=>{
    res.send("Hello about page!");
});

// contact page route
server.get("/contact",(req, res)=>{
    res.send("Hello contact page!");
});


// run the express server
server.listen(3000,()=> console.log('The express server listening on port 300 runing'));