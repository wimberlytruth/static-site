


// event bubbling
//https://gomakethings.com/getting-all-sibling-elements-when-a-link-or-button-is-clicked-with-vanilla-js
/*
  document.addEventListener("click", function(e) {
    console.log(e.target);
    if (!e.target.classList.contains('note-button')) return;
    e.target.classList.add("open");
    var notes = document.querySelectorAll(".note-button");
    for (var i = 0; i < notes.length; i++) {
      if (notes[i] === e.target) continue;

      notes[i].classList.remove('open');
    }
  }); 
*/

document.addEventListener("click", function(e) {
  console.log(e.target);
  if (!e.target.classList.contains('note-button')) {
    console.log(`the target element for this event does not have a note class, 
    so this call is now aborting.`);
    return;
  }
  e.target.classList.add("open-popup");
  var notes = document.querySelectorAll(".note-button");
  for (var i = 0; i < notes.length; i++) {
    if (notes[i] === e.target) continue;

    notes[i].classList.remove('open-popup');
  }
});

//https://www.youtube.com/watch?v=YrE62Dzg4oM
// var noteElements = document.querySelectorAll('.note');
// for (var i = 0; i < noteElements.length; i++) {
//   if
// }

/* what if i put all the notes into the javascript file.
for every single html doc that contains notes?*/

function show_and_hide() {

}