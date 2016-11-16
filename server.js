var express = require('express');
var app = express();
var faker = require('faker');



app.listen(2605, function(){
	console.log('I am listening 2605');
});

app.use(express.static('public'));