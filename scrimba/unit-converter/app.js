const input = document.getElementById("input");

function calculateLength(value) {
  const footInMeter = 0.3048;
  const feet = (value / footInMeter).toFixed(3);
  const meters = (value * footInMeter).toFixed(3);
  const length = document.getElementById("length");
  length.textContent = `${value} meters = ${feet} feet | ${value} feet = ${meters} meters`;
}

function calculateVolume(value) {
  const gallonInLiter = 3.78541178;
  const gallons = (value / gallonInLiter).toFixed(3);
  const liters = (value * gallonInLiter).toFixed(3);
  const volume = document.getElementById("volume");
  volume.textContent = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`;
}

function calculateMass(value) {
  const poundInKg = 0.45359237;
  const pounds = (value / poundInKg).toFixed(3);
  const kilograms = (value * poundInKg).toFixed(3);
  const mass = document.getElementById("mass");
  mass.textContent = `${value} kilograms = ${pounds} pounds | ${value} pounds = ${kilograms} kilograms`;
}

const timeOut = setTimeout(() => {
  const value = input.value;
  input.value = "";
  input.focus();
  input.value = value;
}, 2000);

input.addEventListener("keyup", (event) => {
  const inputValue = event.target.value;
  calculateLength(inputValue);
  calculateVolume(inputValue);
  calculateMass(inputValue);
});

input.addEventListener("focus", () => {
  clearTimeout(timeOut);
});
