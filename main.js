const open1 = document.getElementById("open")
const close1 = document.getElementById("close")
const div = document.querySelector("div")


open1.addEventListener("click", () => {
    div.style.display = "block"
})
close1.addEventListener("click", () => {
    div.style.display = "none"
})
window.addEventListener("click", (event) => {
    if (event.target == document.querySelector("body")) {
        div.style.display = "none"
    }

})