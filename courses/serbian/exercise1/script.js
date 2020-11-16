function Check() {
    var i = 0;
    var j = 0;

    var sam = document.getElementById("sam").value;
    j++;
    if(sam == "sam") {
        document.getElementById("sam").style.borderColor = "green";
        i++;
    }
    else
        document.getElementById("sam").style.borderColor = "red";

    var ti = document.getElementById("ti").value;
    j++;
    if(ti == "ti") {
        document.getElementById("ti").style.borderColor = "green";
        i++;
    }
    else
        document.getElementById("ti").style.borderColor = "red";

    var se = document.getElementById("se").value;
    j++;
    if(se == "se") {
        document.getElementById("se").style.borderColor = "green";
        i++
    }
    else
        document.getElementById("se").style.borderColor = "red";

    var si = document.getElementById("si").value;
    j++;
    if(si == "si") {
        document.getElementById("si").style.borderColor = "green";
        i++;
    }
    else
        document.getElementById("si").style.borderColor = "red";
    
    var sam2 = document.getElementById("sam2").value;
    j++;
    if(sam2 == "sam") {
        document.getElementById("sam2").style.borderColor = "green";
        i++;
    }
    else
        document.getElementById("sam2").style.borderColor = "red";
        
    var ti2 = document.getElementById("ti2").value;
    j++;
    if(ti2 == "ti") {
        document.getElementById("ti2").style.borderColor = "green";
        i++;
    }
    else
        document.getElementById("ti2").style.borderColor = "red";
       
    var sam3 = document.getElementById("sam3").value;
    j++;
    if(sam3 == "sam") {
        document.getElementById("sam3").style.borderColor = "green";
        i++;
    }
    else
        document.getElementById("sam3").style.borderColor = "red";
    
    document.getElementById("panelMessage").innerText = "You answered " + i + "/" + j + " correctly.";
}