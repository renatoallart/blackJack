let cards = []


const getElementById = {
    total: document.getElementById("total"),
    display: document.getElementById("display"),
    play: document.getElementById("play"),
}

const messages = {
    win: () => getElementById['play'].textContent = "You Win 🤑",
    lose: () => getElementById['play'].textContent = "You Lose 😱",
    draw: () => getElementById['play'].textContent = `${cards.length >= 1 ? 'Draw another card 😏?' : 'Wanna Play?'} `,
    total: value => getElementById['total'].textContent = `Result: ${value ? value : ''} `,
    display: value => getElementById['display'].textContent = `Card: ${value ? value : ''}`

}

function showMessage(type, value) {
    return messages[type](value)
}

function buttonManage(type, value) {
    document.getElementById(type).disabled = value
}

function drawCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) return addCard(10) // to emulate Face cards
    if (randomNumber === 1) return addCard(11) // to emulate Aces
    addCard(randomNumber)
}


function addCard(card) {
    cards.push(card)
    showMessage('display', cards)
    game(cards)
}


function game(cards) {
    let result = sumCard(cards)
    if (result > 21) return showMessage('lose'), buttonManage('draw', true)
    if (result === 21) return showMessage('win'), buttonManage('draw', true)
    return showMessage('draw')
}


function sumCard(cards) {
    let result = cards.reduce((total, el) => total += el)
    showMessage('total', result)
    return result
}

function playAgain() {
    cards = []
    showMessage('total')
    showMessage('display')
    showMessage('draw')
    buttonManage('draw', false)
}


