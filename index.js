//create app with express framework
const express = require('express');
const server = express();

// home page route
server.get("",(req, res)=>{
    // get the request from browser or client
    console.log(req.query.product_id);
    res.send(`<a href='/about'>About</a>` +req.query.product_id);
});

// about page route 
server.get("/about",(req, res)=>{
    //html output 
    res.send(`
    <h1>Welcome to about page</h1>
    <a href='/'>Home</a>
    `);
});

// contact page route
server.get("/contact",(req, res)=>{
    // json format output
    res.send(
       [
        {name: 'Guled', title: "manager", phone: '63388332'},
        {name: 'Guled', title: "manager", phone: '63388332'},
        {name: 'Guled', title: "manager", phone: '63388332'},
        {name: 'Guled', title: "manager", phone: '63388332'}
       ]
    );
});


// run the express server
server.listen(3000,()=> console.log('The express server listening on port 300 runing'));