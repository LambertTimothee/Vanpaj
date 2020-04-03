document.addEventListener('contextmenu', event => event.preventDefault());
$(document).ready(function(){


	$( "body" ).keypress(function(event) {
		moveCursorX(event.key);
	});
	$( "body" ).contextmenu(function() {
	 	popRightClick();
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
	let li = $('<li>');

	li.append("<ul>Test</ul>");
	li.append("<ul>Test1</ul>");
	li.append("<ul>Test2</ul>");
	dp.append(li);
	$("body").append(dp);
}


function createElement(type, value) {
	let element = $('<'+type+'>');
	$.each( value, function( key, value ) {
  		element.attr(key, value);
	});

    return element;
}
    	