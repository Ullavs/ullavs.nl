const button = document.querySelector(".generate-button");
const passwords = document.querySelectorAll(".password");

const characterSet =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+=-".split(
    ""
  );

function generatePassword(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }
  return password;
}

button.addEventListener("click", () => {
  [...passwords].forEach((password) => {
    password.textContent = generatePassword(15);
  });
});

function copyPassword(event) {
  const password = event.target.textContent;
  navigator.clipboard.writeText(password);

  const copyDiv = document.createElement("div");
  copyDiv.classList.add("copy-div");
  copyDiv.textContent = "Copied!";
  event.target.append(copyDiv);
  setTimeout(() => {
    copyDiv.parentNode.removeChild(copyDiv);
  }, 1000);
}

[...passwords].forEach((password) => {
  password.addEventListener("click", copyPassword);
});
