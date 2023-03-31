const fs = require('fs');

// how to create input text dynamically 
const input = process.argv;

// add or remove the file using if condition
if(input[2] == 'add') {
    fs.writeFileSync(input[3], input[4]);
}
else if (input[2] == 'remove'){
    fs.unlinkSync(input[3])
}
else {
    console.log("Invalid input text");
}