//Variables
var clickedButton; //stores the id of the clicked button
var sheetIndex; //current index of the answers sheet

//Code

/* 
	This functions sets the variable clickedButton depending on what the user has clicked on the page.

	Parameters:
		b = the clieked button stores as an HTML Object
*/
function setClickedButton(b){
	clickedButton = b.id;
}

/*
	This functions marks the clicked button visually.
*/
function markClickedButton(){
	//will be made after the marking class is made in CSS
}


function check(){
	let answers = AnswerSheet[sheetIndex];
	let buttonText = document.getElementById(clickedButton).textContent;

	answers.forEach( (a)=>
	{
		if(a.correct)
		{
			console.log("Nice cock!");
		}

	})
}
