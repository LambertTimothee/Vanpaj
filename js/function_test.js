
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

	/* 		  window.resizeTo(
    window.screen.availWidth / 2,
    window.screen.availHeight / 2
  	);*/
}

