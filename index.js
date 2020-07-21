function Choice(elem){
    if(elem.id == "dTbutton"){
        var element = document.body;
        element.classList.toggle("dark-mode");

        if(elem.firstChild.data == "Light Theme"){
            elem.firstChild.data = "Dark Theme";
            document.getElementById("header").style.color = "black";
            document.getElementById("dTbutton").className = "btn btn-dark";
            document.getElementById("contButton").className = "btn btn-outline-dark";
        }
        else{
            elem.firstChild.data = "Light Theme";
            document.getElementById("header").style.color = "#d1d1d1";
            document.getElementById("dTbutton").className = "btn btn-outline-light";
            document.getElementById("contButton").className = "btn btn-outline-light";
        }
    };
};