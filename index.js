const express = require('express');
const db = require('./config/mongoose');
const port = 1700;
const app = express();

app.set('view engine','ejs');
app.set('views', './views');

app.use(express.urlencoded());
app.use('/', require('./routes'));
app.use(express.static('assets'));

app.listen(port , function(err){
    if(err){
        console.log('Error in starting the server');
        return;
    }
    console.log('Server is running on port: ', port);
});