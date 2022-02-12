const colorForm = document.getElementById("color-form");

colorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const color = formData.get("color").substring(1);
  const mode = formData.get("mode");

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=${mode}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      data.colors.forEach((color, index) => {
        const hex = color.hex.value;
        document.getElementById(`color${index + 1}`).style.backgroundColor =
          hex;
        document.getElementById(`hex-code${index + 1}`).textContent = hex;
      });

      // const color1 = data.colors[0].hex.value;
      // const color2 = data.colors[1].hex.value;
      // const color3 = data.colors[2].hex.value;
      // const color4 = data.colors[3].hex.value;
      // const color5 = data.colors[4].hex.value;

      // document.getElementById("color1").style.backgroundColor = color1;
      // document.getElementById("color2").style.backgroundColor = color2;
      // document.getElementById("color3").style.backgroundColor = color3;
      // document.getElementById("color4").style.backgroundColor = color4;
      // document.getElementById("color5").style.backgroundColor = color5;

      // document.getElementById("hex-code1").textContent = color1;
      // document.getElementById("hex-code2").textContent = color2;
      // document.getElementById("hex-code3").textContent = color3;
      // document.getElementById("hex-code4").textContent = color4;
      // document.getElementById("hex-code5").textContent = color5;
    });
});
