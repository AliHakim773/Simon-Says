// game variables
let game_on = false
let btn_disable = true
let level = 1
let user_sequence = []
let game_sequence = []
const delay = 600
// green: 0, red: 1, yellow: 2, Blue: 3
const btn_list = document.querySelectorAll(".btn")
// html elements
const body = document.querySelectorAll("body")[0]
const level_title = document.getElementById("level-title")
// aurdio varriables
const audio_list = [
    new Audio("./sounds/green.mp3"),
    new Audio("./sounds/yellow.mp3"),
    new Audio("./sounds/red.mp3"),
    new Audio("./sounds/blue.mp3"),
]
const wrong_audio = new Audio("./sounds/wrong.mp3")
// where everything start
body.addEventListener("keypress", () => {
    if (!game_on) {
        startGame()
    }
})
// functions definition
const startGame = () => {
    game_on = true
    titleRefresh()
    setTimeout(startSequence, delay)
}
const endGame = () => {
    restoreDefaultParams()
    titleRefresh()
}
const restoreDefaultParams = () => {
    game_on = false
    btn_disable = true
    level = 1
    game_sequence = []
    user_sequence = []
}
const playWrongAudio = () => wrong_audio.play()
const playBtnAudio = (i) => {
    pressedAnimation(i)
    audio_list[i].play()
}
const handleOnClick = (i) => {
    if (checkUserAnswer(i)) {
        playBtnAudio(i)
        nextLevel()
    } else {
        playWrongAudio()
        endGame()
    }
}
const onBtnClick = (i) => {
    if (btn_disable) return
    handleOnClick(i)
}
const pressedAnimation = (i) => {
    btn_list[i].classList.toggle("pressed")
    setTimeout(() => {
        btn_list[i].classList.toggle("pressed")
    }, 100)
}
const titleRefresh = () => {
    if (game_on) level_title.innerHTML = `Level ${level}`
    else level_title.innerHTML = "Game Over, Press Any Key To Restart"
}
const pushNextSequence = () => game_sequence.push(Math.floor(Math.random() * 4))
const startSequence = () => {
    pushNextSequence()
    playBtnAudio(game_sequence[game_sequence.length - 1])
    btn_disable = false
}
const compareSequencesAtIndex = (i) => user_sequence[i] == game_sequence[i]
const pushUserSequence = (seq) => user_sequence.push(seq)
const checkUserAnswer = (anw) => {
    pushUserSequence(anw)
    return compareSequencesAtIndex(user_sequence.length - 1)
}
const handleNextLevel = () => {
    user_sequence = []
    btn_disable = true
    level++
}
const nextLevel = () => {
    if (user_sequence.length != game_sequence.length) return
    handleNextLevel()
    titleRefresh()
    setTimeout(startSequence, delay)
}
// adding event listeners
btn_list.forEach((btn, i) => {
    btn.addEventListener("click", () => onBtnClick(i))
})
