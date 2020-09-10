


// event bubbling
//https://gomakethings.com/getting-all-sibling-elements-when-a-link-or-button-is-clicked-with-vanilla-js

document.addEventListener("click", function(e) {
  console.log(e.target);
  if (!e.target.classList.contains('note-button')) {
    console.log(`the target element for this event does not have a note-button class, 
    so this callback is now aborting.`);
    var popups = document.querySelectorAll('.note-popup');
    for (var i = 0; i < popups.length; i++) {
      popups[i].classList.remove('open');
    }
    return;
  }

  var popup = e.target.parentElement.getElementsByClassName('note-popup')[0];
  
  popup.classList.add('open');

  var allPopups = document.querySelectorAll(".note-popup");
  for (var i = 0; i < allPopups.length; i++) {
    if (allPopups[i] === popup) continue;

    allPopups[i].classList.remove('open');
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