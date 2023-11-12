// variables
let game_on = false

document.getElementsByTagName("body")[0].addEventListener("keypress", () => {
    if (!game_on) {
        console.log("Hi")
        startGame()
    }
})

const startGame = () => {
    game_on = true
}
const endGame = () => {
    game_on = false
}
