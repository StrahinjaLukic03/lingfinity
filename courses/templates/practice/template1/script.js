function Check() {
    var i = 0;
    var j = 0;

    var id = document.getElementById("to").value;

    j++;
    if(id == "to") {
        document.getElementById("to").style.borderColor = "green";
        i++;
    }
    else
        document.getElementById("to").style.borderColor = "red";
    
    if(id == 0)
        document.getElementById("panelMessage").innerText = "You left a field empty.";
    else
        document.getElementById("panelMessage").innerText = "You answered " + i + "/" + j + " correctly.";
}