{
  const welcome = () => {
    console.log("Dzień Dobry Wszystkim ten kod jest już w repozytorium Git.");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".js-body");
    const themeName = document.querySelector(".js-themeName");

    body.classList.toggle("body--dark");
    themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
  };

  const init = () => {
    const changeBackground = document.querySelector(".js-changeBackground");
    changeBackground.addEventListener("click", toggleBackground);

    welcome();
  };

  init();
}
