var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app'));

app.listen(PORT, function(err){
	if(err){
		console.log(err);
	}else{
		console.log('Server Running');
	}
});