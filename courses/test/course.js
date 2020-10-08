// idk what is this
var clicked = false;

// The 4 buttons that are answers to the question
var options =  ["option1", "option2", "option3", "option4"];

// Question section
var selected;
let index = 0;
let AnswersIndex = 0;

// Functions
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



// what the fuck is this
var clicked = false;
var oldButton = "";


// Function that makes the answer buttons unclickable after the answer is checked
function makeUnclickable(buttonName){
	if(buttonName != selected){
		document.getElementById(buttonName).disabled = true;
	}
}

// erm i don't know seems like a loop function
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


// Show answer obviously
showAnswer();

// Explain this mess dud
var Cclicked = false;

function checc(){
	var theText = document.getElementById(selected).textContent;
	var correct = getAnswerBool(theText);
	var sound;

	// If the Continue button is clicked then continue (edit if I'm wrong)
	if(Cclicked){
		continuing();
	}

else{

	if(correct){
		// does exactly what mate?
		console.log("true");
		document.getElementById(selected).style = "background-color:lightgreen; color:green;";
		document.getElementById("continueMessage").textContent = "This answer is correct!";
		document.getElementById("continueButton").textContent = "Continue";
		sound = new Audio('../../res/correct.mp3');
		sound.play();
		Cclicked = true;
		options.forEach(makeUnclickable);
		document.getElementById(selected).disabled = true;
	}

	else{
		// also what does it do
		console.log("false");
		document.getElementById(selected).style = "background-color: #e95660; color: darkred;";
		var correctText = getCorrectAnswer();
		var message = "This answer is wrong. The correct answer is ";
		document.getElementById("continueButton").onclick = nextQuestion();
		var correctionMessage = message.concat(correctText);
		document.getElementById("continueMessage").textContent = correctionMessage;
		document.getElementById("continueButton").textContent = "Continue";
		sound = new Audio('../../res/wrong.mp3');
		sound.volume = 0.3;
		sound.play();
		Cclicked = true;
		options.forEach(makeUnclickable);
		document.getElementById(selected).disabled = true;
	}
}

// is this necessary?
}

// Function that gets and writes the content of the correct answer
function getCorrectAnswer(){
	var answerArray = answers[AnswersIndex].answer;

	for(var i = 0; i < 4; i++){
		if(answerArray[i].correct){
			var z = answerArray[i].text;
			var a = ".";
			var h = z.concat(a);
			return h;
		}
	}
}

// Function that..?
function continuing(){
	console.log("continue");
	nextQuestion();

}

// Next question function that.. ?
function nextQuestion(){
	var oldIndex = AnswersIndex;

	while(oldIndex == AnswersIndex){
		randomizeAIndex();
	}

	options.forEach(putAnswer);
	index = 0;
}

// Fuction that refreshes the state of the answer buttons
function refresh(){
	options.forEach(makeWhite);
	options.forEach(makeClickable);
}

// What is this for exactly?
function makeWhite(b){
	b.style = "background-color: white; color: black;";
}

// Function that "makes clickable"
function makeClickable(b){
	b.disabled = false;
}