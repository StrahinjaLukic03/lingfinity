function Help(tekst) {
    var extractedVal = document.getElementsByClassName(tekst).value;
    if(extractedVal == "tekst")
        document.getElementByClassName(extractedVal).style.borderColor = "#07e04c";
    else
        document.getElementByClassName(extractedVal).style.borderColor = "red";

    return tekst;
}

function Check(tekst) {
    Help(tekst);
}