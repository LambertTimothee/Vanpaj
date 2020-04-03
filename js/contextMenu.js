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