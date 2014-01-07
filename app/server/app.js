"use strict";

/**
 * 	Module dependencies
 */
var express = require('express'), 
    app = express(),
    path = require('path'),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

/**
 *	Internal dependencies
 */
var cards = require('./cards/module');


server.listen(3003);


//app.get('/', function (req, res) {
//  res.sendfile('../public/index.html');
//});

app.use(express.static(path.join(__dirname, '../public')));

var whiteCards = "http://www.cardsagainsthumanity.com/wcards.txt"

/*
var pingDue = true;
var score = 0;

var broadcastScore = function(score){
	io.sockets.emit('score', { score: score});
	console.log(score);
};

var pingPong = function(type){

	if(type == 'ping' && pingDue){
		score++;
	}else if(type == 'pong' && !pingDue){
		score++;
	}else{
		score = 0;
	}

	if(type == 'ping'){
		pingDue = false;
	}else{
		pingDue = true;
	}

	broadcastScore(score);

};

io.sockets.on('connection', function (socket) {
  
  socket.on('ping', function (data) {
    socket.broadcast.emit('ping', {});
		pingPong('ping');
  });

  socket.on('pong', function (data) {
    socket.broadcast.emit('pong', {});
		pingPong('pong');
  });

});
*/
