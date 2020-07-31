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


const answers = [
	{
		answer: [
			{text: 'пас', correct: true},
			{text: 'мачка', correct: false},
			{text: 'жирафа', correct: false},
			{text: 'мајмун', correct: false}
		]
	},

	{
		answer: [
			{text: 'TEST1', correct: true},
			{text: 'TEST2', correct: false},
			{text: 'TEST3', correct: false},
			{text: 'TEST4', correct: false}
		]
	},

	{
		answer: [
			{text: 'kurac1', correct: true},
			{text: 'kurac2', correct: false},
			{text: 'kurac3', correct: false},
			{text: 'kurac4', correct: false}
		]
	}
	
];


showAnswer();