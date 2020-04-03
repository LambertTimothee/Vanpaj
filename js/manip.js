document.addEventListener('contextmenu', event => event.preventDefault());
let data;

$.getJSON( "Save/detail.json", function( d ) {
	data = d;
});

$(document).ready(function(){
	$(window).width(50);

	var height = $(window).height();


	$( "body" ).keypress(function(event) {
		moveCursorX(event.key);
	});
	$( "body" ).contextmenu(function() {
	 	popRightClick();
	});
	$( "body" ).click(function() {

	 	$(".dropdown-content").remove();
	 	$("body").css('cursor','url(/Vanpaj/sprites/curseur/curseur_clicable.png), auto' );
	 	setTimeout(function(){ cursor(); }, 100);

	 	$("body").append(createWindow("Yolo", 0, 0));
	});



});


