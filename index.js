//Switch logic

var box = null;
var bullets = ["bullet1", "bullet2", "bullet3", "bullet4"];


function Choice(checkbox){
	var element = document.body;
	box = checkbox;
	if(checkbox.checked){
		element.className = "dark-mode";
		document.getElementById("header").style.color = "#d1d1d1";
		document.getElementById("contButton").className = "btn btn-outline-light";
		document.getElementById("modeImg").src = "res/moon.png";
		document.getElementById("modeImg").style.filter = "invert(100%)";
		document.getElementById("bar").style.backgroundColor = "black";
		bullets.forEach(switchColor);
	}

	else{
		element.className = "light-mode";
		document.getElementById("header").style.color = "black";
		document.getElementById("contButton").className = "btn btn-outline-dark";
		document.getElementById("modeImg").src = "res/sun.png";
		document.getElementById("modeImg").style.filter = "invert(0%)";
		document.getElementById("bar").style.backgroundColor = "white";
		
		bullets.forEach(switchColor);
	}
}

function switchColor(bulletName){
	var x = document.getElementById(bulletName);

	if(box.checked){
		x.style.color = "white";
	}
	else{
		x.style.color = "black";
	}
}
