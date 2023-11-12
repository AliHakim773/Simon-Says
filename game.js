// variables
let game_on = false
let level = 1
const delay = 500
const game_sequence = []

const level_title = document.getElementById("level-title")
const green = document.getElementById("green")
const red = document.getElementById("red")
const yellow = document.getElementById("yellow")
const blue = document.getElementById("blue")
const container = document.getElementsByClassName("container")[0]

const wrong_audio = new Audio("./sounds/wrong.mp3")
const green_audio = new Audio("./sounds/green.mp3")
const yellow_audio = new Audio("./sounds/yellow.mp3")
const red_audio = new Audio("./sounds/red.mp3")
const blue_audio = new Audio("./sounds/blue.mp3")

const startGame = () => {
    game_on = true
    titleRefresh()
    pushNextSequence()
    startSequence()
}
const endGame = () => {
    game_on = false
    level = 1
}
const playGreenAudio = () => green_audio.play()
const playRedAudio = () => red_audio.play()
const playYellowAudio = () => yellow_audio.play()
const playBlueAudio = () => blue_audio.play()
const playAudio = (i) => {
    if (i == 0) playGreenAudio()
    else if (i == 1) playRedAudio()
    else if (i == 2) playYellowAudio()
    else if (i == 3) playBlueAudio()
}
const onGreenClick = () => {
    if (!game_on) return
    playGreenAudio()
}
const onRedClick = () => {
    if (!game_on) return
    playRedAudio()
}
const onYellowClick = () => {
    if (!game_on) return
    playYellowAudio()
}
const onBlueClick = () => {
    if (!game_on) return
    playBlueAudio()
}
const titleRefresh = () => {
    if (game_on) {
        level_title.innerHTML = "Level " + level
    } else level_title.innerHTML = "Game Over, Press Any Key To Restart"
}
const pushNextSequence = () => game_sequence.push(Math.floor(Math.random() * 4))
const startSequence = () => {
    for (const i of game_sequence) {
        setTimeout(playAudio(i), i * 100)
    }
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
