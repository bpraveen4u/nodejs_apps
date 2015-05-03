var config = require('./config');
var FileStreamRotator = require('file-stream-rotator');
var fs = require('fs');
var http = require('http');
var express = require('express');
var logger = require('morgan');
var app = express();

var port = config.server.listenPort; //process.env.PORT || 3000;
var logDirectory = config.server.logDirectory; 

// var server = http.createServer(function(req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.end('<b>Hello World<b>');
// });

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
var accessLogStream = FileStreamRotator.getStream({
  filename: logDirectory + '/log1.log',//'/access-%DATE%.log',
  frequency: 'daily',
  verbose: false
});

console.log(logDirectory)

app.use(logger('combined', 
	{ 
		//stream: accessLogStream,
		skip:function(req, res){
			return res.statusCode < 400;
		}
	})
);
app.get('/', function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Fibonacci of ' + req.url.substr(1) + ' is ' + fib(req.url.substr(1)));
	//res.send('<b>Hello World with Express and nodemon <b>')
});

// app.get('/:id', function(req, res){
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.end('Fibonacci of ' + req.params.id+ ' is ' + fib(req.params.id));
// 	//res.send('<b>Hello World with Express and nodemon <b>')
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


function fib(n){
	return n<2?n:fib(n-1)+fib(n-2);
}

app.listen(port);
console.log('server listening at port:' + port);