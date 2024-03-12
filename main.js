const open1 = document.getElementById("open")
const close1 = document.getElementById("close")
const container = document.getElementById("modal-container")
const content = document.querySelector("#modal-content")
open1.addEventListener("click", () => {
    container.style.display = "block"
    content.style.display = "block"
})
close1.addEventListener("click", () => {
    container.style.display = "none"
    content.style.display = "block"
})
window.addEventListener("click", (event) => {
    if (event.target == container) {
        container.style.display = "none"
    }
})