// https://www.youtube.com/watch?v=JEBgqbZWYIQ

var lastScrollTop = 0;

window.addEventListener("scroll", function() {
  var navbar = document.getElementById('navbar');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});