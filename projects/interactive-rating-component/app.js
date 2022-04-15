const buttons = document.querySelectorAll(".button");
const submit = document.getElementById("submit");
const rating = document.getElementById("rating");
const thanksContainer = document.getElementById("thanks-container");
const ratingContainer = document.getElementById("ratings-container");
let number = null;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    event.target.classList.add("active");

    number = event.target.textContent;
    rating.innerHTML = number;
  });
});

submit.addEventListener("click", () => {
  if (number) {
    ratingContainer.style.display = "none";
    thanksContainer.style.display = "block";
  }
});
