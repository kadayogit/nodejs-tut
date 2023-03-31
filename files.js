// create files within folder and read them again
const fs = require('fs');
var path = require('path');

var dirPath = path.join(__dirname, 'files');
console.log(dirPath);

// for loop to files within folder
for(i = 0; i< 3; i++) {

    //first way for syntax you can write it
    // fs.writeFileSync(dirPath+'file'+i+'.txt','guled file name');

    //second way for syntax you can write it
    fs.writeFileSync(`${dirPath}/file${i}.txt`,'guled file name');
}

//how to read files with in folder and display
fs.readdir(dirPath, (err, files)=>{
console.log(files);
// also you can use foreach loop to display line by line the files
files.forEach((item)=>{
    console.log(item);
})
});