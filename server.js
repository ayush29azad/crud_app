const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan =require('morgan');
const path = require('path');
dotenv.config({path:'./config.env'});
const PORT = process.env.PORT ||8080
const connectDB = require('./server/database/connection');

// parse request to body parser

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// log request 
app.use(morgan('tiny'));

//mongodb connection

connectDB();


// set view engine 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
//load assets

app.use(express.static(path.join(__dirname, "assets")));

app.use('/',require('./server/routes/routes'));



app.listen(PORT,()=>{console.log('Server is running Sucessfully ');});


