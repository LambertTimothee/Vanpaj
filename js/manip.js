document.addEventListener('contextmenu', event => event.preventDefault());
let data;

$.getJSON( "Save/detail.json", function( d ) {
	console.log(d)
	data = d;
});

$(document).ready(function(){
	$(window).width(50);

	var height = $(window).height();


	$( "body" ).keypress(function(event) {
		const detail = {
	 		draggable : true
	 	};
	 	$("body").append(createWindow("Pr0n", 0, detail));
		moveCursorX(event.key);
	});
	$( "body" ).contextmenu(function() {
	 	popRightClick();
	});
	$( "body" ).click(function() {

	 	$(".dropdown-content").remove();
	 	$("body").css('cursor','url(/Vanpaj/graphique/sprites/curseur/curseur_clicable.png), auto' );
	 	setTimeout(function(){ cursor(); }, 100);
	 	
	});



});


