var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('user connected');
});

var index = 0;

setInterval(function(){
		console.log("send data");
		var data = [];
		for(var i = 0; i < 3; i++){
			data.push({
				x: (++index),
				y: parseInt(Math.random() * (100 - 20) + 20)
			});
		}

		io.emit('dataMessage', data);

	}, 500);

http.listen(3000, function(){
  console.log('listening on *:3000');
});