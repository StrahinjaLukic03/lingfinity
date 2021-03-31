//fetching questions form the JSON file and previewing them in the console
fetch("questions.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

//here should be the part of code which makes the questions and answers dynamic


//changed the style of buttons when they're selected and assigns the class to it
document.addEventListener('DOMContentLoaded', () => {

    let myBtns = document.querySelectorAll('.buttons2');
    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('buttons2Clicked'));
          btn.classList.add('buttons2Clicked');
        });
 
    });

});

//useless code for now
function Check() {
    //this is the only this that will work vv
    //document.getElementById("panelMessage").innerText = "Correct!";
}
