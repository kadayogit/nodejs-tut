const express = require('express');
//import path package
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'view');
console.log(publicPath);

app.use(express.static(publicPath));

app.listen(3000);