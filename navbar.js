// https://www.youtube.com/watch?v=LB70WzwBCTo

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollpos = window.pageYOffset;
  //var navbar = document.getElementById('navbar');
  if (prevScrollpos > currentScrollpos) {
    document.getElementById('navbar').style.top = "0";
    //navbar.style.top = "0";
  } else {
    document.getElementById('navbar').style.top = "-100px";
    //navbar.style.top = "-100px";
  }
  prevScrollpos = currentScrollpos;
};