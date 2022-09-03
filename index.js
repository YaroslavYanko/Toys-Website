const slider = document.querySelector(".slider");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const marker = document.querySelectorAll(".marker");
let count = 0;
let direction;
let time = 3000;
let sliderTimer = null;

function checkMarkers() {
  marker[count].classList.add("active");
  count++;
  if (count >= 2) {
    count = 0;
  }

  marker[count].classList.remove("active");
}
next.addEventListener("click", () => {
  checkMarkers();
  clearInterval(sliderTimer);
  autoSlider();
  direction = -1;
  slider.style.flexDirection = "row";
  slider.style.transform = "translate(-100%)";
});
prev.addEventListener("click", () => {
  direction = 1;
  checkMarkers();
  clearInterval(sliderTimer);
  autoSlider();
  slider.style.flexDirection = "row-reverse";
  slider.style.transform = "translate(100%)";
});
function autoSlider() {
  sliderTimer = setInterval(() => {
    direction = -1;
    checkMarkers();
    slider.style.flexDirection = "row";
    slider.style.transform = "translate(-100%)";
  }, time);
}

slider.addEventListener("transitionend", function () {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
  } else if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  }
  slider.style.transition = "none";
  slider.style.transform = "translate(0%)";
  setTimeout(function () {
    slider.style.transition = "all 0.5s";
  });
});
autoSlider();
