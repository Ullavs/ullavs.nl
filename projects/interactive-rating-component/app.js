// - nummer aanklikken --> nummer onthoudne
// - submit --> volgende pagina en nummer laten zien
// - ene pagina verdwijnt en andere verschijnt

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
