$(document).ready(function() {
"use strict";	

  function generate(){
    var quotes = ["QUOTE@AUTHOR"]; 
	var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    var quoteAuthor=randomQuote.split("@");
	$('.saying').text(quoteAuthor[0]);
    $('.author').text(quoteAuthor[1]);
  }  
  
$(".button").on( "click", function() {
    generate();
});  
});
