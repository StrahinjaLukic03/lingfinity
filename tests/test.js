var STenabled = false;
function scrollTest(){
    var sT = "aaaaaa<br><br><br><br><br><br><br><br>aaaaaa<br><br><br><br><br><br><br><br>aaaaaa<br><br><br><br><br><br><br><br>aaaaaa<br><br><br><br><br></br><br><br><br>aaaaaa<br><br><br><br><br><br><br><br>aaaaaa<br><br><br><br><br><br><br><br>aaaaaa<br><br><br><br><br><br><br><br>aaaaaa<br><br><br><br><br><br><br><br>aaaaaa<br><br><br><br><br><br><br><br></br>";
    var divTest = document.getElementById("test");

    if(!STenabled){
        divTest.innerHTML += sT;
        STenabled = true;
    }

    else{
        divTest.innerHTML = "";
        STenabled = false;
    }
}