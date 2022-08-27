"use strict";
const leftArrow = document.querySelector(".left-arrow"),
  slider = document.querySelector(".slider");


function scrollRight() {
  if (slider.scrollWidth - window.innerWidth === slider.scrollLeft) {
    slider.scrollTo({
      left: 0,
      behavior: "smooth"
    });
  } else {
    slider.scrollBy({
      left: window.innerWidth,
      behavior: "smooth"
    });
  }
}



// Auto slider
let timerId = setInterval(scrollRight, 5000);


function resetTimer() {
  clearInterval(timerId);
  timerId = setInterval(scrollRight, 0);
}

