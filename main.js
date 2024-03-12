const open1 = document.getElementById("open")
const close1 = document.getElementById("close")
const div = document.querySelector("div")


open1.addEventListener("click", () => {
    div.style.display = "block"
    if (div.style.display == "block") {
        document.querySelector("body").style.backgroundColor = "red"
        console.log("salm")
    }
})
close1.addEventListener("click", () => {
    div.style.display = "none"
    if (div.style.display == "none") {
        document.querySelector("body").style.backgroundColor = "aqua"
        console.log("salm")
    }
})
window.addEventListener("click", (event) => {
    if (event.target == document.querySelector("body")) {
        div.style.display = "none"
    }
    if (div.style.display == "none") {
        document.querySelector("body").style.backgroundColor = "aqua"
        console.log("salm")
    }

})