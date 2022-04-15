const buttons = document.querySelectorAll(".button");
const submit = document.getElementById("submit");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Hallo!");
  });
});

buttons.map((button) => {
  console.log("button");
});
