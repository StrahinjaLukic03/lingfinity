/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  
  var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("bar").style.top = "0";
    } else {
      document.getElementById("bar").style.top = "-100px";
    }

  prevScrollpos = currentScrollPos;
}

//It doesn't slide back visible when you scroll up FIX THAT PLS TNX