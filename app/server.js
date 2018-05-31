const express = require('express');
const mysql = require('mysql');
const app = express();

// MAPPING
	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
app.get('/home',function(req,res,next){
    res.sendfile('home.html');
});
	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
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



con.query('SELECT * FROM account', function(err, results) {
    if (!err) {
        console.log(results[0].id_account);
        console.log(results[0].email);
        console.log(results[0].username);
        console.log(results[0].password);
    }else{
        console.log("Error with SELECT ... \n"); 
    }
});