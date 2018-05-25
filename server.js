var http = require('http');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  database : "friendly-money-db",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);