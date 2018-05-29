const express = require('express');
const mysql = require('mysql');
const app = express();

// MAPPING
app.get('/home',function(req,res,next){
    res.sendfile('home.html');
});
app.get('/menu',function(req,res,next){
    res.sendfile('menu.html');
});
app.get('/create',function(req,res,next){
    res.sendfile('create.html');
});
app.get('/see',function(req,res,next){
    res.sendfile('see.html');
});
app.get('/account',function(req,res,next){
    res.sendfile('account.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  database : "friendly-money-db",
  user: "root",
  password: ""
});
con.connect(function(err) {
    if(!err) {
        console.log("Database is connected ... \n\n");  
    } else {
        console.log("Error connecting database ... \n\n");  
    }
});