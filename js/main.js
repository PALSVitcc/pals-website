function myFunction(x) { 
  if (x.matches) { // If media query matches
    document.getElementById("top").style.order  = "1";
    document.getElementById("down").style.order  = "2";
  } 
  else {
  	document.getElementById("top").style.order  = "2";
    document.getElementById("down").style.order  = "1";	
  }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x)
x.addListener(myFunction)