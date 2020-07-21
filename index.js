//Switch logic
function Choice(checkbox){
	var element = document.body;
	
	if(checkbox.checked){
		element.className = "dark-mode";
		document.getElementById("header").style.color = "#d1d1d1";
		document.getElementById("contButton").className = "btn btn-outline-light";
		document.getElementById("discord").src = "res/Discord-Logo-White.png";
		document.getElementById("modeImg").src = "res/moon.png";
	}

	else{
		element.className = "light-mode";
		document.getElementById("header").style.color = "black";
		document.getElementById("contButton").className = "btn btn-outline-dark";
		document.getElementById("discord").src = "res/Discord-Logo-Black.png";
		document.getElementById("modeImg").src = "res/sun.png";
	}
}