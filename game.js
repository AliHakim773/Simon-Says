// variables
let game_on = false

const green = document.getElementById("green")
const red = document.getElementById("red")
const yellow = document.getElementById("yellow")
const blue = document.getElementById("blue")

const startGame = () => (game_on = true)
const endGame = () => (game_on = false)

const onGreenClick = () => {
    if (!game_on) return
}
const onRedClick = () => {
    if (!game_on) return
}
const onYellowClick = () => {
    if (!game_on) return
}
const onBlueClick = () => {
    if (!game_on) return
}

document.getElementsByTagName("body")[0].addEventListener("keypress", () => {
    if (!game_on) {
        console.log("Hi")
        startGame()
    }
})
green.addEventListener("click", onGreenClick)
red.addEventListener("click", onRedClick)
yellow.addEventListener("click", onYellowClick)
blue.addEventListener("click", onBlueClick)
