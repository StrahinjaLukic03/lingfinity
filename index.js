//Switch logic
function Choice(checkbox){
	var element = document.body;
	var bar = document.getElementById("bar");
	
	if(checkbox.checked){
		element.className = "dark-mode";
		document.getElementById("header").style.color = "#d1d1d1";
		document.getElementById("contButton").className = "btn btn-outline-light";
		document.getElementById("modeImg").src = "res/moon.png";
		//TODO: Finish the bar invert!
		//document.getElementById("modeImg").style.filter = "invert(100%)";
		//document.getElementById("bar").style.backgroundColor = "black";
		//bar.getElementsByTagName("a").style.color = "white";

	}

	else{
		element.className = "light-mode";
		document.getElementById("header").style.color = "black";
		document.getElementById("contButton").className = "btn btn-outline-dark";
		document.getElementById("modeImg").src = "res/sun.png";
		//document.getElementById("bar").style.backgroundColor = "white";
		//document.getElementById("bar").style.color = "grey";
	}
}