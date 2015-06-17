var events = require('events');
var stream = require('stream');
var util = require('util');
util.inherits(CD, events.EventEmitter);
console.log("Path:    " + __filename);


/*----CD Object Constructor----*/
	/*---- CD(barcode, cdname, singer, year, genre, totalCopies, availableCopies)----*/
function CD(barcode, cdname, singer, year, genre, totalCopies, availableCopies){
	this.barcode = barcode;
	this.cdname = cdname;
	this.singer = singer;
	this.year = year;
	this.genre = genre;
	this.totalCopies = totalCopies;
	this.availableCopies = availableCopies;
	console.log("CD Constructor Called");
}



/*----CD Object Prototype----*/
	/*----setters----*/
	/*----setCDName(cdname), no return param----*/
CD.prototype.setCDName = function(cdname){
	if(cdname != null){
		this.cdname = cdname;
		console.log("CD name changed to: " + cdname);
	}
	else{
		console.log("CD name didn't cahnge");
	}
};

	/*----setSinger(singer), no return param----*/
CD.prototype.setSinger = function(singer){
	if(singer != null){
		this.singer = singer;
		console.log("CD singer changed to: " + singer);
	}
	else{
		console.log("CD singer didn't cahnge");
	}
};

	/*----setYear(year), no return param----*/
CD.prototype.setYear = function(year){
	if(year != null){
		this.year = year;
		console.log("CD year changed to: " + year);
	}
	else{
		console.log("CD year didn't cahnge");
	}
};

	/*----setGenre(genre), no return param----*/
CD.prototype.setGenre = function(genre){
	if(genre != null){
		this.genre = singer;
		console.log("CD genre changed to: " + genre);
	}
	else{
		console.log("CD genre didn't cahnge");
	}
};

	/*----setGenre(genre), no return param----*/
CD.prototype.setGenre = function(genre){
	if(genre != null){
		this.genre = singer;
		console.log("CD genre changed to: " + genre);
	}
	else{
		console.log("CD genre didn't cahnge");
	}
};

	/*----setTotalCopies(totalCopies), no return param----*/
CD.prototype.setTotalCopies = function(totalCopies){
	if(totalCopies >= 0){
		this.totalCopies = totalCopies;
		console.log("CD total copies changed to: " + totalCopies);
	}
	else{
		console.log("CD total copies didn't cahnge");
	}
};

	/*----setAvailableCopies(totalCopies), no return param----*/
CD.prototype.setAvailableCopies = function(availableCopies){
	if(availableCopies >= 0){
		this.availableCopies = availableCopies;
		console.log("CD available copies changed to: " + availableCopies);
	}
	else{
		console.log("CD available copies didn't cahnge");
	}
};

	/*----printCDInfo(): print the cd detailes, no return param----*/
CD.prototype.printCDInfo = function(){
	console.log("----Barcode: " + this.barcode);
	console.log("----Name: " + this.cdname);
	console.log("----Singer: " + this.singer);
	console.log("----Year: " + this.year);
	console.log("----Genre: " + this.genre);
	console.log("----Total copies: " + this.totalCopies);
	console.log("----Available copies: " + this.availableCopies);
};

/*----CD Instance to export, return CD obj----*/
exports.getCD = function(barcode, cdname, singer, year, genre, totalCopies, availableCopies){
	var myCd = new CD(barcode, cdname, singer, year, genre, totalCopies, availableCopies);
	return myCd;
};
