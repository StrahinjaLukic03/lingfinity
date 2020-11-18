function Check() {
    //this shit needs fixing
    var CorrectAnswer = document.getElementById("A2")

    if(document.getElementById('A1').clicked == true)
        document.getElementById("A1").style.borderColor = "green";
    else
        document.getElementById("A1").style.borderColor = "red";
    
    //this is the only this that will work vv
    document.getElementById("panelMessage").innerText = "Correct!";
}