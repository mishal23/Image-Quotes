var quotes=['img/1.png','img/2.png','img/3.png']
var x=quotes.length;
function newQuote(){
	var randomNumber = Math.floor((Math.random()*x)+1);

	document.getElementById('showImage').src=quotes[randomNumber];
}
