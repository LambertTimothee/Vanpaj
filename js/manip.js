document.addEventListener('contextmenu', event => event.preventDefault());
let data;
$.getJSON( "Save/detail.json", function( d ) {
	data = d;
});
$(document).ready(function(){


	$( "body" ).keypress(function(event) {
		moveCursorX(event.key);
	});
	$( "body" ).contextmenu(function() {
	 	popRightClick();
	});
	$( "body" ).click(function() {
	 	$(".dropdown-content").remove();
	});




});



function moveCursorX(dir){
	switch(dir){
		case "q":
		$("#clicker").css({left: "-=10"});
		break;
		case "z":
		$("#clicker").css({top: "-=10"});
		break;
		case "d":
		$("#clicker").css({left: "+=10"});
		break;
		case "s":
		$("#clicker").css({top: "+=10"});
		break;
	}
}

function popRightClick(){
	$(".dropdown-content").remove();
	let currentMousePos = {};
	currentMousePos.x = event.pageX;
    currentMousePos.y = event.pageY;
	const value = {
		id: "dropDownList",
		class: "dropdown-content"
	};
	let dp = createElement("div",value);
	dp.css({
		top: currentMousePos.y, left: currentMousePos.x
	});
	let ul = $('<ul>');
	$.each( data.contextmenu, function(id,value) {
  		ul.append("<li>"+value+"</li>");
	});
	
	dp.append(ul);
	$("body").append(dp);
}


function createElement(type, value) {
	let element = $('<'+type+'>');
	$.each( value, function( key, value ) {
  		element.attr(key, value);
	});

    return element;
}
    	