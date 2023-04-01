const express = require('express');
const path = require('path');

// create app with express
const app = express();
// directory path
const viewPath = path.join(__dirname,'view');

app.get('',(_, res)=>{
    res.sendFile(`${viewPath}/index.html`);
});

app.get('/about',(_, res)=>{
    res.sendFile(`${viewPath}/about.html`);
});

app.get('/product',(_, res)=>{
    res.sendFile(`${viewPath}/product.html`);
});

app.get('/other',(_, res)=>{
    res.sendFile(`${viewPath}/product.html`);
});

//error message page if user put any wrong URL
app.get('*',(_, res)=>{
    res.sendFile(`${viewPath}/error.html`);
});



app.listen(5000);