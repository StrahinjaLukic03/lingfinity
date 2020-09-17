//Switch logic

var box = null;
var bullets = ["bullet1", "bullet2", "bullet3", "bullet4", "bullet5"];

var css;
var style = document.createElement('style');

var dEnabled;

function Choice(checkbox){
	var element = document.body;
	box = checkbox;
	dEnabled = checkbox.checked;
	if(dEnabled){

		element.className = "dark-mode";
		document.getElementById("header").style.color = "#d1d1d1";
		document.getElementById("modeImg").src = "res/moon.png";
		document.getElementById("modeImg").className = "animate__animated animate__flipInX";
		document.getElementById("modeImg").style.filter = "invert(100%)";
		document.getElementById("bar").style.backgroundColor = "black";
		document.getElementById("bar").id = "darkBar";
		bullets.forEach(switchColor);
		document.getElementById("contButton").className = "darkContinue";
	}

	else{
		element.className = "light-mode";
		document.getElementById("header").style.color = "black";
		document.getElementById("modeImg").src = "res/sun.png";
		document.getElementById("modeImg").className = "animate__animated animate__flipInY";
		document.getElementById("modeImg").style.filter = "invert(0%)";
		document.getElementById("darkBar").id = "bar";
		document.getElementById("bar").style.backgroundColor = "white";
		bullets.forEach(switchColor);
		document.getElementById("contButton").className = "continue";
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
