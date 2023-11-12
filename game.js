// variables
let game_on = false
let btn_disable = true
let level = 1
let user_sequence = []
const game_sequence = []
const delay = 500

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

// where everything start
document.getElementsByTagName("body")[0].addEventListener("keypress", () => {
    if (!game_on) {
        startGame()
    }
})

// functions definition
const startGame = () => {
    game_on = true
    titleRefresh()
    pushNextSequence()
    setTimeout(startSequence, 500)
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
    if (btn_disable) return
    playGreenAudio()
}
const onRedClick = () => {
    if (btn_disable) return
    playRedAudio()
}
const onYellowClick = () => {
    if (btn_disable) return
    playYellowAudio()
}
const onBlueClick = () => {
    if (btn_disable) return
    playBlueAudio()
}
const titleRefresh = () => {
    if (game_on) {
        level_title.innerHTML = "Level " + level
    } else level_title.innerHTML = "Game Over, Press Any Key To Restart"
}
const pushNextSequence = () => game_sequence.push(Math.floor(Math.random() * 4))
const pushUserSequence = (seq) => user_sequence.push(seq)
const startSequence = () => {
    for (const i of game_sequence) {
        setTimeout(playAudio(i), i * 500)
    }
    btn_disable = false
}
const compareSequencesAtIndex = (i) => user_sequence[i] == game_sequence[i]
const checkUserAnswer = (anw) => {
    pushUserSequence(anw)
    return compareSequencesAtIndex(user_sequence.length - 1)
}

// adding event listeners
green.addEventListener("click", onGreenClick)
red.addEventListener("click", onRedClick)
yellow.addEventListener("click", onYellowClick)
blue.addEventListener("click", onBlueClick)
