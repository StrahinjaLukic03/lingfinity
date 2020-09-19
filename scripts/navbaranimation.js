// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
var prevScrollpos = window.pageYOffset;
var currentScrollPos;
var barID = "bar";
var checcc = false;

// This is confusing pls explain
window.onscroll = function() {
  
  currentScrollPos = window.pageYOffset;
  if(prevScrollpos < currentScrollPos){
    document.getElementById(barID).style.top = "-100px";
    prevScrollpos = currentScrollPos;
  }

  else{
    var x = currentScrollPos.toString().concat("px");
    document.getElementById(barID).style.top = x;
    prevScrollpos = currentScrollPos;
  }
   
}
// hmmm
function changeName(){
  if(checcc){
    barID = "bar";
    checcc = false;
  }

  else{
    barID = "darkBar";
    checcc = true;
  }

}