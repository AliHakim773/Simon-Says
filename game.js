// variables
let game_on = false
let level = 1

const level_title = document.getElementById("level-title")
const green = document.getElementById("green")
const red = document.getElementById("red")
const yellow = document.getElementById("yellow")
const blue = document.getElementById("blue")

const wrong_audio = new Audio("./sounds/wrong.mp3")
const green_audio = new Audio("./sounds/green.mp3")
const yellow_audio = new Audio("./sounds/yellow.mp3")
const red_audio = new Audio("./sounds/red.mp3")
const blue_audio = new Audio("./sounds/blue.mp3")

const startGame = () => (game_on = true)
const endGame = () => {
    game_on = false
    level = 1
}

const onGreenClick = () => {
    if (!game_on) return
    green_audio.play()
}
const onRedClick = () => {
    if (!game_on) return
    red_audio.play()
}
const onYellowClick = () => {
    if (!game_on) return
    yellow_audio.play()
}
const onBlueClick = () => {
    if (!game_on) return
    blue_audio.play()
}
const titleRefresh = () => {
    if (game_on) {
        level_title.innerHTML = "Level " + level
    } else level_title.innerHTML = "Game Over, Press Any Key To Restart"
}

document.getElementsByTagName("body")[0].addEventListener("keypress", () => {
    if (!game_on) {
        startGame()
    }
})
green.addEventListener("click", onGreenClick)
red.addEventListener("click", onRedClick)
yellow.addEventListener("click", onYellowClick)
blue.addEventListener("click", onBlueClick)
