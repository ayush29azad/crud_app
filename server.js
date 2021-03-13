const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan =require('morgan');
const path = require('path');
const PORT = process.env.PORT ||8080
dotenv.config({path:'config.env'});

app.get('/',(req,res)=>{
res.send("Crud Application");
});
// parse request to body parser

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// log request 
app.use(morgan('tiny'));

// set view engine 
app.set("view engine","ejs");
app.set("views",path.resolve(__dirname,"views/ejs"))
//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
//css/style.css
app.use('/css',express.static(path.resolve(__dirname,"assets/img")));
app.use('/css',express.static(path.resolve(__dirname,"assets/js")));

app.listen(PORT,()=>{

console.log('Server is running on http://localhost:${PORT}');

});


