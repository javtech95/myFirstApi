//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//Mongodb
mongoose.connect('mongodb://localhost/rest_test');

//Express
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));

//Start Server
app.listen(3000);
console.log('API is running smooth on port 3000');