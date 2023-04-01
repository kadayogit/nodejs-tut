const fs = require('fs');
const path = require('path');

//create dirPath for the file
const dirPath = path.join(__dirname, 'crud');

// create file path
const filePath = `${dirPath}/customer.txt`;

//create file with crud directory
// fs.writeFileSync(filePath,'All the customer infortion are in this file');

// create to read the file
// fs.readFile(filePath,'utf8', (err, item)=>{
//  console.log(item);
// });

//update file text
// fs.appendFile(filePath, 'we have new customer want to pay out products', (err)=>{
//  if(!err) console.log('File text has been updated successfully');
// });


// create raname the file 
// fs.rename(filePath,`${dirPath}/payment.txt`,(err)=> {
//     if(!err) console.log('File name has been renamed');
// })


// create delete the file 
fs.unlinkSync(`${dirPath}/payment.txt`);
