var cd = require('./cd');
var stock = require('./stock');
var express = require('express');
var http = require('http');
var app = express();
app.set('json spaces',3);

var myStock = stock.getStock();

// create server and print the response JSON to browser
http.createServer(app);

/*----get stock information----*/
/*----get all cd's at stock----*/
app.get('/stock',function(req,res) { 
	console.log(" '/cd/stock' called");
	console.log("\n************************************\n");
	console.log("Path:    " + __filename);
	console.log("PATH : '/cd/stock' ");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.status(200).json(myStock);
});

/*----get all cd's at stock----*/
app.get('/cd/all',function(req,res) { 
	console.log(" '/cd/all' called");
	console.log("\n************************************\n");
	console.log("Path:    " + __filename);
	console.log("PATH : '/cd/all' ");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.status(200).json(myStock.getAllCD());
});


/*----get all availabel cd's----*/
app.get('/cd/availabel', function(req,res){
	console.log(" '/cd/availabel' called");
	console.log("\n************************************\n");
	console.log("Path:    " + __filename);
	console.log("PATH : '/cd/available' ");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.status(200).json(myStock.getAvailabelCD());
});

/*----get cd name by barcode----*/
app.get('/cd/name/:barcode', function(req,res){
	console.log(" '/cd/name/:barcode' called");
	console.log("\n************************************\n");
	console.log("Path:    " + __filename);	
	console.log("PATH : '/cd/name/"+req.params.barcode+"' ");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.status(200).json(myStock.getCDNameByBarcode(req.params.barcode));
});

/*----get cd info by barcode----*/
app.get('/cd/:barcode', function(req,res){
	console.log(" '/cd/:barcode' called");
	console.log("\n************************************\n");
	console.log("Path:    " + __filename);	
	console.log("PATH : '/cd/"+ req.params.barcode + "' ");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.status(200).json(myStock.getCDByBarcode(req.params.barcode));
});

/*----get all cd's with specific genre----*/
app.get('/cd/genre/:genre', function(req,res){
	console.log(" '/cd/genre/:genre' called");
	console.log("\n************************************\n");
	console.log("Path:    " + __filename);	
	console.log("PATH : '/cd/genre/"+req.params.genre+"' ");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.status(200).json(myStock.getCDGenre(req.params.genre));
});

var port = process.env.PORT || 3000;
//var port = 3000;
app.listen(port);
console.log("listening on port "+port+"...\n\n");
