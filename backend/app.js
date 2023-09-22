const express = require('express');
const app = express();
const cookieparser = require('cookie-parser')
require('dotenv').config({path:"config/config.env"})
const cors = require('cors');

//middlewares

app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({ extended: true }))
//new comments

//routes
const user = require('./routes/User')

//using routes
app.use('/api/v1',user);

module.exports = app;