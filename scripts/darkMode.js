// Theme switch switch


var box = null; //checkbox variable
var bullets = ["bullet1", "bullet2", "bullet3", "bullet4", "bullet5"]; //menu points
var option =  ["option1", "option2", "option3", "option4"]; //answer options

var buttons = ["serbian", "finnish"]; //language choice buttons

// Determines whether darkTheme got enabled or not
var darkThemeEnabled;

/*
	This function switches the Theme depending on the state of the parameter.
	Parameter:
		-checkbox: checkbox which will be marked on the website
*/
function switchTheme(checkbox){
	//var
	var element = document.body; //gets the body of the website
	box = checkbox; //saves the checkbox object into the box variable
	darkThemeEnabled = checkbox.checked; //puts the darkThemeEnabled bool according to the state whether the checkbox got checked or not

	//code
	if(darkThemeEnabled){
		element.className = "bodyDark"; 
		document.getElementById("header").style.color = "#d1d1d1";
		document.getElementById("bar").style.backgroundColor = "black";
		document.getElementById("bar").id = "darkBar";
		bullets.forEach(switchColor); //changes color of the menu points
        document.getElementById("contButton").className = "darkContinue";
		buttons.forEach(buttonSwitch); //changes color of the language buttons
		option.forEach(switchClasses); //changes color of the options

	}

	else{
		element.className = "bodyLight";
		document.getElementById("header").style.color = "black";
		document.getElementById("darkBar").id = "bar";
		document.getElementById("bar").style.backgroundColor = "white";
		bullets.forEach(switchColor); //changes color of the menu points
		document.getElementsByClassName("learnButtonHomepage").className = "continue";
		buttons.forEach(buttonSwitch); //changes color of the buttons
		options.forEach(switchClasses); //changes color of the answer options
	}
}

//function which was made for changing the color of the menu points
function switchColor(bulletName){
	var x = document.getElementById(bulletName);

	if(box.checked){
		x.style.color = "white";
	}
	else{
		x.style.color = "black";
	}
}

//function which was made for changing the color of the languages buttons
function buttonSwitch(button){
	var x = document.getElementById(button);

	if(box.checked){
		x.className = "darkOption widen";
	}
	else{
		x.className = "option widen";
	}
}

//function which was made for changing the color of the answer buttons
function switchClasses(optionName){
	var x = document.getElementById(optionName);

	if(box.checked){
		x.className = "darkOption option";
	}

	else{
		x.className = "option";
	}
}
