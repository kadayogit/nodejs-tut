const express = require('express');
const path = require('path');

const app = express();
const dirPath = path.join(__dirname, 'views');
//set app express to use ejs templete engine
app.set('view engine', 'ejs');

app.get('/profile',(req, res)=>{
    //create some data in here for dynamicaly
    const users ={
        name: 'kadayo',
        email: 'admin@admin.com',
        login_date: '01/04/2023'
    }

    // then you can use users as object in second parameters
    res.render('profile', {users});
})

app.listen(3000);