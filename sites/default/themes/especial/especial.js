$(document).ready(function(){
var spt = $('span.mailme');
var at = / at /;
var dot = / dot /g;
var addr = $(spt).text().replace(at,"@").replace(dot,".");
$(spt).after('<a href="mailto:'+addr+'" title="Send an email">'+ addr +'</a>')
.hover(function(){window.status="Send a letter!";}, function(){window.status="";});
$(spt).remove();
});
