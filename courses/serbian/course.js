//Switch logic

var box = null;
var bullets = ["bullet1", "bullet2", "bullet3", "bullet4", "bullet5", "bullet6"];
var options = ["option1", "option2", "option3", "option4"];
var clicked = false;

function Choice(checkbox){
	var element = document.body;
	box = checkbox;
	if(checkbox.checked){

		element.className = "dark-mode";
		document.getElementById("modeImg").src = "../../res/moon.png";
		document.getElementById("modeImg").className = "animate__animated animate__flipInX";
		document.getElementById("modeImg").style.filter = "invert(100%)";
		document.getElementById("bar").style.backgroundColor = "black";
		document.getElementById("bar").id = "darkBar";
		bullets.forEach(switchColor);
		document.getElementById("header").style.color = "white";
		options.forEach(switchClasses);
	}

	else{
		element.className = "light-mode";
		document.getElementById("modeImg").src = "../../res/sun.png";
		document.getElementById("modeImg").className = "animate__animated animate__flipInY";
		document.getElementById("modeImg").style.filter = "invert(0%)";
		document.getElementById("darkBar").id = "bar";
		document.getElementById("bar").style.backgroundColor = "white";
		bullets.forEach(switchColor);
		document.getElementById("header").style.color = "black";
		options.forEach(switchClasses);
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

function switchClasses(optionName){
	var x = document.getElementById(optionName);

	if(box.checked){
		x.className = "darkOption option";
	}

	else{
		x.className = "option";
	}
}

function answering(button){
	var c = button.id;

	if(!clicked){
		if(button.id == "option1"){
			button.style.backgroundColor = "#6fe96d";
			button.style.color = "darkgreen"
			clicked = true;
			var h = options;
			h.splice(h.indexOf(c),1);
			h.forEach(makeUnclickable);
			document.getElementById("box").style.filter = "opacity(100%)";
			document.getElementById("box").className = "contPopup animate__animated animate__bounceInUp";
			document.getElementById("box").innerHTML = "<p style='text-align: left;'>Correct!</p>";
		}
	
		else{
			clicked = true;
			button.style.backgroundColor = "#e95660";
			button.style.color = "darkred";
			var h = options;
			h.splice(h.indexOf(c),1);
			h.forEach(makeUnclickable);
			document.getElementById("box").style.filter = "opacity(100%)";
			document.getElementById("box").className = "contPopup animate__animated animate__bounceInUp";
			document.getElementById("box").innerHTML = "<p style='text-align: left;'>Wrong!</p>";
		}
	}

}

function makeUnclickable(button){
	document.getElementById(button).className = "option disable"
}