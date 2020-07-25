//Switch logic

var box = null;
var bullets = ["bullet1", "bullet2", "bullet3", "bullet4", "bullet5", "bullet6"];

var css;
var style = document.createElement('style');

var buttons = ["CUV", "FW", "F", "GW", "PP", "TH"];

function Choice(checkbox){
	var element = document.body;
	box = checkbox;
	if(checkbox.checked){

		element.className = "dark-mode";
		document.getElementById("modeImg").src = "res/moon.png";
		document.getElementById("modeImg").className = "animate__animated animate__flipInX";
		document.getElementById("modeImg").style.filter = "invert(100%)";
		document.getElementById("bar").style.backgroundColor = "black";
		document.getElementById("bar").id = "darkBar";
		bullets.forEach(switchColor);
		buttons.forEach(buttonSwitch);
	}

	else{
		element.className = "light-mode";
		document.getElementById("modeImg").src = "res/sun.png";
		document.getElementById("modeImg").className = "animate__animated animate__flipInY";
		document.getElementById("modeImg").style.filter = "invert(0%)";
		document.getElementById("darkBar").id = "bar";
		document.getElementById("bar").style.backgroundColor = "white";
		bullets.forEach(switchColor);
		buttons.forEach(buttonSwitch);
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

function buttonSwitch(button){
	var x = document.getElementById(button);

	if(box.checked){
		x.className = "darkOption widen";
	}
	else{
		x.className = "option widen";
	}
}