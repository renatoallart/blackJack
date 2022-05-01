let cards = []

function addCard(card){
    cards.push(card)
    message('display', cards)
    game(cards)
    
}

function drawCard(){

    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10) return addCard(10) // to emulate King, Queen, Jack
    if(randomNumber === 1) return addCard(11) // to emulate Aces
    addCard(randomNumber)
}

function buttonManage(type, value){

    document.getElementById(type).disabled = value
}

function message(message, value){

    let total = document.getElementById("result")
    let display = document.getElementById("display")
    let play = document.getElementById("play")
    
    if(message === "win") return play.textContent = "You Win 🤑"
    if(message === "lose") return play.textContent = "You Lose 😱"
    if(message === "draw") return play.textContent = `${cards.length >= 1 ? 'Draw another card 😏?':'Wanna Play?'} `
    if(message === "total") return total.textContent = `Result: ${value ? value : ''} `
    if(message === "display") return display.textContent = `Card: ${value ? value : ''}`
}

function game(cards){
    let result = sumCard(cards)
    if (result > 21)  return message('lose'), buttonManage('draw', true)
    if (result === 21)  return message('win'), buttonManage('draw',true)
    return message('draw')
}


function sumCard(cards){
    let result = cards.reduce((total, el) => total += el)
    message('total', result)
    return result   
}

function playAgain(){
    cards = []
    message('total')
    message('display')
    message('draw')
    buttonManage('draw',false)
}


