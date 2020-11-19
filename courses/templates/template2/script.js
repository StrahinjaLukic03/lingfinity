function Check() {
    var dugme = document.getElementById("A1");
    dugme.classList.remove("mystyle");
    
    //this is the only this that will work vv
    document.getElementById("panelMessage").innerText = "Correct!";
}