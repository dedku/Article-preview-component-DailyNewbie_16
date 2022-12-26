const btn = document.querySelector(".btn-cta");
const share = document.querySelector(".share");

btn.addEventListener("click", function () {
    share.classList.toggle("show");
});