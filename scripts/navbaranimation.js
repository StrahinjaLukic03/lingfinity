// When the user scrolls down it hide the navbar. When the user scrolls up, show the navbar
var prevScrollPosition = window.pageYOffset;
var currentScrollPosition;
var navbarID = "bar";

window.onscroll = function() {
  
  currentScrollPosition = window.pageYOffset;
  if(prevScrollPosition < currentScrollPosition){
    document.getElementById(navbarID).style.top = "-100px";
    prevScrollPosition = currentScrollPosition;
  }

  else{
    var x = currentScrollPosition.toString().concat("px");
    document.getElementById(navbarID).style.top = x;
    prevScrollPosition = currentScrollPosition;
  }
}