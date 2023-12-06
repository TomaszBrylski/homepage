console.log("Dzień Dobry Wszystkim ten kod jest już w repozytorium Git.");

let changeBackground = document.querySelector(".js-changeBackground");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName");

changeBackground.addEventListener("click", () => {
  body.classList.toggle("body--dark");

  themeName.innerText = body.classList.contains("body--dark")
    ? "jasny"
    : "ciemny";
});
