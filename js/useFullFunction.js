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
	const buttonDel = $('<div>', {id: "windowHeaderButtonsDel" + name, class:"windowHeaderButtonsDel windowHeaderButton"});
	let title = $('<div>', {id: "windowHeaderTitle" + name, class: "windowsHeaderTitle"});
	const titleText = $('<p>', {text: name});
	//const buttonLarge = $('<div>', {id: "windowHeaderButtonsLar" + name, class:"windowHeaderButtonsLar windowHeaderButton", text:"Lar"});
	//const buttonReduce = $('<div>', {id: "windowHeaderButtonsRed" + name, class:"windowHeaderButtonsRed windowHeaderButton", text:"Red"});
	//buttonCont.append(buttonLarge);
	//buttonCont.append(buttonReduce);

	buttonDel.append("<span class='ui-icon ui-icon-closethick'></span>")
	buttonCont.append(buttonDel);
	title.append(titleText);
	header.append(title);
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
	$("body").css('cursor','url(/Vanpaj/graphique/sprites/curseur/curseur_repos.png), auto' );
}