function createElement(type, value) {
	let element = $('<'+type+'>');
	$.each( value, function( key, value ) {
  		element.attr(key, value);
	});

    return element;
}

function createWindow(name, size, detail){

	let container = $('<container>',{ id: "window_" + name, class: "windows" });
	let mainDiv = $('<div>', {id: "windowMainDiv_" + name, class:"windowsMainDiv"});
	let header = $('<div>', {id: "windowHeader" + name, class:"windowsHeader"});
	let buttonCont = $('<div>', {id: "windowHeaderButtons" + name, class:"windowHeaderButtons"});
	const buttonDel = $('<div>', {id: "windowHeaderButtonsDel" + name, class:"windowHeaderButtonsDel windowHeaderButton", text:"Test"});
	const buttonLarge = $('<div>', {id: "windowHeaderButtonsLar" + name, class:"windowHeaderButtonsLar windowHeaderButton", text:"Lar"});
	const buttonReduce = $('<div>', {id: "windowHeaderButtonsRed" + name, class:"windowHeaderButtonsRed windowHeaderButton", text:"Red"});
	buttonCont.append(buttonReduce);
	buttonCont.append(buttonLarge);
	buttonCont.append(buttonDel);
	header.append(buttonCont);
	container.append(header);
	container.append(mainDiv);
	if(detail.draggable  == true){
		container.addClass("draggable");
		container.draggable();
	}

	return container;
}

function cursor(){
	$("body").css('cursor','url(/Vanpaj/sprites/curseur/curseur_repos.png), auto' );
}