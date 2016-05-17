

var express = require('express');
var app = express();
var PORT = process.env.PORT|| 3000;
var middleware = {
	requiereAuthentication: function(req, res, next){
		console.log('private route hit');
		next();
	},
	logger: function(req,res, next){
		   
          console.log('Request:' + req.method + ' '+new Date().toString()+'  '+req.originalUrl);
          next();
	}
}
//app.use(middleware.requiereAuthentication);
app.use(middleware.logger);

app.use(express.static(__dirname+ ''));
app.use(express.static(__dirname+ '/app'));
app.use(express.static(__dirname+ '/app/views'));
//app.use(express.static(__dirname+ ''));


console.log(__dirname);


app.listen(PORT, function () {
	console.log('Express started on port '+ PORT+ '!');
});
