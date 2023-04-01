const express = require('express');
//import path package
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'view');
console.log(publicPath);

//static pages loading url
app.use(express.static(publicPath));

app.listen(3000);