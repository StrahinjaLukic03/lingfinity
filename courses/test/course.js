//Switch logic

var box = null;
var bullets = ["bullet1", "bullet2", "bullet3", "bullet4", "bullet5", "bullet6"];

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


//Question section
const options = ["option1", "option2", "option3", "option4"];
let index = 0;
let AnswersIndex = 0;

function showAnswer(){
	
	options.forEach(putAnswer);
	index = 0;
}

function randomizeAIndex(){
	AnswersIndex = Math.abs(Math.floor((Math.random() - .5) * 3));
}

function putAnswer(b){
	const btn = document.getElementById(b);
	btn.innerText = answers[AnswersIndex].answer[index].text;
	index += 1;
}


function eval(b) {
	var text = b.textContent;

	var finalBool = getAnswerBool(text);

	if(finalBool == true){
		b.style.backgroundColor = "#6fe96d";
		b.style.color = "darkgreen"
	}
	
	else{
		b.style.backgroundColor = "#e95660";
		b.style.color = "darkred";
	}
}

function getAnswerBool(t){
	var x = answers.length;

	for(var i = 0; i < x; i++){
		
		for(var j = 0; j < 4; j++){
			var h = answers[i].answer[j];
			var c = h.text;
			
			if(c == t){
				var clickBool = h.correct;
				return clickBool;
			}
		}

	}
}

const answers = [
	{
		answer: [
			{text: 'пас', correct: true}, //dog
			{text: 'мачка', correct: false}, //cat
			{text: 'жирафа', correct: false}, //giraffe
			{text: 'мајмун', correct: false} //monkey
		]
	},

	{
		answer: [
			{text: 'свиња', correct: true}, //pig
			{text: 'кокошка', correct: false}, //chicken
			{text: 'овца', correct: false}, //sheep
			{text: 'јеж', correct: false} //hedgehog
		]
	},

	{
		answer: [
			{text: 'крава', correct: true}, //cow
			{text: 'коњ', correct: false}, //horse
			{text: 'миш', correct: false}, //mouse
			{text: 'птица', correct: false} //bird
		]
	}
	
];


showAnswer();