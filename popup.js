


// event bubbling
//https://gomakethings.com/getting-all-sibling-elements-when-a-link-or-button-is-clicked-with-vanilla-js
document.addEventListener("click", function(e) {
  
  if (!e.target.classList.contains('note')) return;
  e.target.classList.add("active");
  var notes = document.querySelectorAll(".note")
  for (var i = 0; i < notes.length; i++) {
    if (notes[i] === e.target) continue;

    notes[i].classList.remove('active');
  }
})
