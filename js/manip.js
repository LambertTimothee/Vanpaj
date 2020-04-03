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
	const person = {
	  isHuman: false,
	  printIntroduction: function () {
	    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
	  }
	};
	let currentMousePos = {};
	currentMousePos.x = event.pageX;
    currentMousePos.y = event.pageY;
    console.log(currentMousePos)
	const value = {
		id: "dropDownList",
		class: "dropDown",
		position: "absolute",

	};
	console.log(createElement("div",value));
}


function createElement(type, value) {
	console.log(value)
	let element = $('<'+type+'>');
	$.each( value, function( key, value ) {
  		element.attr(key, value);
	});

    return element;
}
    	