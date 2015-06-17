
var events = require('events');
var util = require('util');
var cd = require('../cd');
util.inherits(Stock, events.EventEmitter);
console.log("Path:    " + __filename);

/*----Json object that hold all the cd's----*/
var storeData = {
	"storeName" : "Eidan Best CD store ever",
	"storeAdress" : "Yom-Tov 12, Orpaz place, Tel-Aviv",
	"cds":[
			{"barcode":"1111","cdname":"The Dark Side Of The Moon","singer":"Pink Floyd","year":"1985","genre":"Rock","total_copies":"100","available_copies":"20"},
			{"barcode":"2222","cdname":"The Wall","singer":"Pink Floyd","year":"1988","genre":"Rock","total_copies":"10","available_copies":"2"},
			{"barcode":"3333","cdname":"The Best Of Leonard Cohen","singer":"Leonard Cohen","year":"1999","genre":"Rock","total_copies":"100","available_copies":"20"},
			{"barcode":"4444","cdname":"The Best Of Nirvana","singer":"Nirvana","year":"1999","genre":"Rock","total_copies":"100","available_copies":"0"},
			{"barcode":"5555","cdname":"Shlomi Shabat","singer":"Shlomi Shabat","year":"2000","genre":"Israeli","total_copies":"15","available_copies":"8"},
			{"barcode":"6666","cdname":"The Best Of Eric Cleptin","singer":"Eric Clepton","year":"2000","genre":"Rock","total_copies":"22","available_copies":"2"},
			{"barcode":"7777","cdname":"Dudu Tasa And Friesnds","singer":"Dudu Tasa","year":"2004","genre":"Rock","total_copies":"13","available_copies":"15"},
	]
};


/*----Stock Object Constructor----*/
/*----Stock():get storeName, adress and array of cd's----*/
function Stock(){
	this.storeName = "";
	this.storeAdress = "";
	this.cds = [];
	console.log("Stock Constructor Called");
}

/*----init the stock fields by read from the json above----*/
/*----init():init data from json, using addCD(cd), no return param----*/
Stock.prototype.init = function(){
	console.log("init() called");

	this.storeName = storeData.storeName;
	this.storeAdress = storeData.storeAdress;
	
	var length = storeData.cds.length;
	for(var i = 0 ; i < length ; i++){

		var tempCd = cd.getCD(storeData.cds[i].barcode, storeData.cds[i].cdname, storeData.cds[i].singer, 
						  storeData.cds[i].year, storeData.cds[i].genre, 
						  storeData.cds[i].total_copies, storeData.cds[i].available_copies);
		this.addCD(tempCd);
	}
};

/*----Stock Object Prototype----*/
	/*----addCD(cd): check if this barcode exists can't add the cd, if the barcode doesn't exists add the new cd and print it's info, no return param----*/
Stock.prototype.addCD = function(cd){
	console.log("addCD(cd) called");
	/*check if the cd barcode already exists*/
	var exists = 0; //flag
	var length = this.cds.length;
	for(var i = 0; i < length; i++){
		if(this.cds[i].barcode == cd.barcode){
		console.log("can't add this cd because this barcode already exists at the stock");
		exists = 1;
		}
	}
	/*if the barcode doesn't exists add this cd and print it's info by using printCDInfo()*/
	if(exists == 0){
		this.cds.push(cd);
		console.log("add new CD");
		cd.printCDInfo();
		console.log("\n\n");
	}
};
	/*----getters----*/
	/*getAllCD():print all cd's at stock, return json with all cd's, using printAllStock(this.cds) , return availabelCDs: jaon array of all availabel CD's at stock*/
Stock.prototype.getAllCD = function(){
		console.log("getAllCD() called");
		var length = this.cds.length;
		if(length == 0){
			console.log("No cd's at stock");
			return{};
		}else{
			this.printAllCDs(this.cds);
			return this.cds;
		}
};
	/*getAvailabelCD():check if there are availabel copies at stock, print them or print No availabel cd's, using printAllStock(availabelCDs) , return availabelCDs: jaon array of all availabel CD's at stock*/
Stock.prototype.getAvailabelCD = function(){
	console.log("getAvailabelCD() called");
	var availableCDs = [];
	var length = this.cds.length;
	for(var i = 0; i < length; i++){
		if(this.cds[i].availableCopies > 0){
			availableCDs.push(this.cds[i]);
		}
	}

	if(availableCDs.length == 0){
		console.log("No availabel cd's at stock");
	}
	else{
		console.log("There are " + availableCDs.length + " availabel cd's at stock");
		this.printAllCDs(availableCDs);
	}
	return availableCDs;
};
	/*getCDNameByBarcode(barcode):return json with the cd name by this barcode, if doesnt existe at stock print No exostx*/
Stock.prototype.getCDNameByBarcode = function(barcode){
	console.log("getCDNameByBarcode(barcode) called");
	var length = this.cds.length;
	
	for(var i = 0; i < length; i++){
		if(this.cds[i].barcode == barcode){
			var cdName = {"cdname" : this.cds[i].cdname};
		}
	}
	if(cdName){
		return cdName;
	}
	else{
		console.log("cd with barcode: " + barcode + " no exists at stock");
		return{};
	}
};

		/*getCDByBarcode(barcode):return json with all cd info match this barcode, using printCDInfo(), if doesnt existe at stock print No exostx*/
Stock.prototype.getCDByBarcode = function(barcodeForCd){
	console.log("getCDByBarcode(barcode) called");
	var length = this.cds.length;
	var exists = 0;
	for(var i = 0; i < length; i++){
		if(this.cds[i].barcode == barcodeForCd){
			console.log("cd with barcode: " + barcodeForCd + " found at stock");
			this.cds[i].printCDInfo()
			exists = 1;
			return this.cds[i];
		}
	}
	if(!exists){
		console.log("cd with barcode: " + barcodeForCd + " no exists at stock");
			return{};
	}
};
	/*getCDGenre(genre): return json with all cd's genre at stock match this genre,if there is no match print no match eith this genre, using printAllCDs(genreCDs)*/
Stock.prototype.getCDGenre = function(genre){
	console.log("getCDGenre(genre) called");
	var genreCDs = [];
	var length = this.cds.length;
	for(var i = 0; i < length; i++){
		if(this.cds[i].genre == genre){

			genreCDs.push(this.cds[i]);
		}
	} 
	var genreCDsLength = genreCDs.length; 
	/*if there is no matching print this genre no exists at stock*/
	if(genreCDsLength == 0){
		console.log("No match, cd from " + genre + " no exists at stock");
	}
	/*if matching print all cd's from thie genre*/
	if(genreCDsLength > 0){
		console.log("There are " + genreCDsLength + " from " + genre + " exists at stock");
		this.printAllCDs(genreCDs);
	}
	return genreCDs;
};
	
/*----printAllCDs(array): print all the cd's info at the array,using printCDInfo(), no return param----*/
Stock.prototype.printAllCDs = function(array){
	var length = array.length;
	if(length > 0){
		for(var i = 0; i < length; i++){
		console.log("\n------\nCD number " + (i+1));
		array[i].printCDInfo();
		}
	}
	else{
		console.log("the array is empty - check what you have in the array");
	}
};

/*----Stock Instance to export, return Stock obj----*/
exports.getStock = function(){
	console.log("getStock() called");
	var myStock = new Stock();
	myStock.init();
	return myStock;
};