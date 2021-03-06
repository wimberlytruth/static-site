//https://stackoverflow.com/a/2915912
//on mobile, both touchstart and click events are dispatched. Apparently this is why popups 
//were not staying open on mobile devices -- the touchstart event is dispatched 300 milliseconds 
//before the click event, and it seems that the touchstart event opened the popup only for the 
//click event to immediately close it.
if ('ontouchstart' in document.documentElement) {
  document.addEventListener("touchstart", popupNote);
} else {
  document.addEventListener("click", popupNote);
}

//https://gomakethings.com/checking-event-target-selectors-with-event-bubbling-in-vanilla-javascript/
// this handler uses `event bubbling` by attaching to document
function popupNote(e) {
  // if (e.type === 'touchstart') {
  //   alert('touchstart event dispatched');
  //   e.preventDefault();
  //   e.stopPropagation();
  // }
  console.log(e.target);
  console.log(e.type);

  // querySelector and querySelectorAll use CSS selectors
  var popups = document.querySelectorAll('.note .popup');
  var buttons = document.querySelectorAll('.note .btn');

  // when you click/touch any other element, the popups close
  if (!e.target.classList.contains('btn')) {
    for (var i = 0; i < popups.length; i++) {
      popups[i].classList.remove('open');
      buttons[i].classList.remove('vanish');
    }
    return;
  }

// getElementsByClassName returns the element's children w/ the specified class
  var currPopup = e.target.parentElement.getElementsByClassName('popup')[0];
  var currBtn = e.target;

  currPopup.classList.add('open');
  currBtn.classList.add('vanish');
 
  for (var i = 0; i < popups.length; i++) {
    if (popups[i] === currPopup) continue;
    popups[i].classList.remove('open');
    buttons[i].classList.remove('vanish');
  }
}

//close popups when they're no longer in the viewport
window.addEventListener("scroll", function() {
  var popups = document.querySelectorAll('.note .popup');
  var buttons = document.querySelectorAll('.note .btn');
  for (var i = 0; i < popups.length; i++) {
    if (!isInViewport(popups[i])) {
      popups[i].classList.remove('open');
      buttons[i].classList.remove('vanish');
    }
  }
});

//https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}