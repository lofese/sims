var http = require('http');
var fs = require('fs');

var server = []
server[0] = []
server['client'] = []

http.createServer(function(req, res){
	if (req.method == 'GET') {
		
		var filePath = '.' + req.url;
		if (filePath == './'){
			filePath = 'C:/Users/user/Desktop/10/index.html';
		}
	
		fs.readFile(filePath, function(error, content){
			res.end(content);
			console.log(req.url);
		});
	}
	
	if (req.method == 'POST'){
		req.on('data', (data) =>{
			if (Buffer.from(data).toString() == 'connect'){
				res.end('key')
			}
				
			
		})
	}
}).listen (80);









/*
var net = require('net');


var socket = net.createConnection({ port: 8080, host:'127.0.0.1' });
console.log('Socket created.');
socket.on('data', function(data) {
  // Log the response from the HTTP server.
  console.log('RESPONSE: ' + data);
}).on('connect', function() {
  // Manually write an HTTP request.
  socket.write("GET / HTTP/1.0\r\n\r\n");
}).on('end', function() {
  console.log('DONE');
}).on('error', function(err){
  console.log(err.message);
});;


/*
net.createServer(function(socket){
	console.log('client connected');
	//socket.write('Echo server\r\n');
	//socket.pipe(socket);
	socket.on('connect', () => {
		console.log('client connected');
	});
}).listen(8080, '127.0.0.1');

var socket = net.createConnection({port: 8080});

socket.on('connect', function(connect) {
      console.log('connection established');
});




/*
var client = net.connect(8080, function() { //'connect' listener
  console.log('client connected');
});
client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});
client.on('end', function() {
  console.log('client disconnected');
});



/*
var net = require('net');
var fs = require('fs');

var server = net.createServer(function(connection) {
	
	console.log('CONNECTED: ' + connection.remoteAddress +':'+ connection.remotePort);
	
	connection.on('connect', function() {
		console.log('client connected');
	});
	connection.on('end', function() {
		console.log('client disconnected');
	});
	connection.on('data', function (data){
		//console.log(Buffer.from(data, 'hex').length);
		//console.log(data);
		for (var i = 0; i < Buffer.from(data, 'hex').length; i++){
			if 
		}
		
		
		
		
		
		
		fs.readFile('C:/Users/user/Desktop/chat/index.html', function(error, content) {
			connection.write(content);
			connection.pipe(connection);
		});
		fs.readFile('C:/Users/user/Desktop/chat/index.css', function(error, content) {
			connection.write(content);
			connection.pipe(connection);
		});
		fs.readFile('C:/Users/user/Desktop/chat/index.js', function(error, content) {
			connection.write(content);
			connection.pipe(connection);
		});
		
    });
	connection.on('error', (error) => {
		console.log(error);
	});
});
server.listen(80, function() {
   console.log('server is listening 80');
});

var socket = new net.Socket();






var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	console.log('ok');
	if (req.method == 'GET') {
		
		var filePath = '.' + req.url;
		if (filePath == './'){
			filePath = './index.html';
		}
	
		fs.readFile(filePath, function(error, content) {
			res.end(content);
			console.log(req.url);
		});
	}
	
	if (req.method == 'POST') {
		
	}
	
	
	
}).listen(80);



var x,y,i,j;

setInterval (() => {
	x = Math.floor(Math.random()*2);
	i+=x;
	
},40);

setInterval (() => {
	y = Math.floor(Math.random()*2);
	j+=y
	console.log(x + ' ' + y)
},1000);






















<html>
	<head>
		<meta charset="utf-8">
		<title>OllO</title>
		<link rel = 'stylesheet' href = 'index.css'>
	</head>
	
	<body>
		<button id='button' onclick='createOffer()'>createOffer</button>
		<button id='button' onclick='logOffer()'>logOffer</button>
		<button id='button' onclick='serverSend()'>send</button>
		<video id='video_me' height="120" width="160" autoplay muted></video>
		<video id='video_you' height="120" width="160" autoplay></video>
		
		
		<canvas id='canvas'></canvas>
		<script src='index.js'></script>
		<script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
	</body>
</html>





/*


*/