

console.log('1');
var express = require('express');
console.log('1.1');
var app = express();
console.log('1.2');
var PORT = process.env.PORT|| 3000;
console.log('1.3');

// app.configure(function (){
//  	app.use(express.static(__dirname+'/'));
//  });


//app.use(middleware.requiereAuthentication);


app.use(express.static(__dirname +'/'));
console.log('1.4');

console.log(__dirname);

app.listen(PORT, function () {
	console.log('Express started on port '+ PORT+ '!');
});

