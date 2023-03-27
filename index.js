// javascripts variables
const app = require('./app');

console.log(app.test());

//Global modules
console.log("The console log function is global modules");
console.log(__dirname);  // global modules don't need to import 
console.log(__filename);

// Non Global modules
const fs = require('fs');
fs.writeFileSync('api.txt',"name: Guled Mohamed, title: manager"); // you must import the fs modules
