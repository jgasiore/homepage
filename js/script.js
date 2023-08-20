console.log("Cześć!");

let button = document.querySelector(".js-buttonElement");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    body.classList.toggle("light");
    themeName.innerText = body.classList.contains("light") ? "jasny" : "ciemny"
});