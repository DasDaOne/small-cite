let body = document.querySelector("body")
let button = document.querySelector("button")

button.onclick = function () {
    body.classList.toggle("light-theme")
    body.classList.toggle("dark-theme")
}
