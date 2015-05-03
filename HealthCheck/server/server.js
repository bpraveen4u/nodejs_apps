var http = require('http');
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// var server = http.createServer(function(req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.end('<b>Hello World<b>');
// });

app.get('/', function(req, res){
	//res.writeHead(200, {'Content-Type': 'text/html'});
	res.send('<b>Hello World with Express and nodemon <b>')
});

app.listen(port);
console.log('server listening at port:' + port);