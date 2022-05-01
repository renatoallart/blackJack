
let cards = []
let total = document.getElementById("result")
let display = document.getElementById("display")
let play = document.getElementById("play")

function addCard(card){
    cards.push(card)
    message('display', cards)
    game(cards)
    
}

function drawCard(){

    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10) return addCard(10)
    if(randomNumber === 1) return addCard(11)
    addCard(randomNumber)
}

function buttonManage(type, value){

    document.getElementById(type).disabled = value
}

function message(message, value){
    
    if(message === "win") return play.textContent = "You Win 🤑"
    if(message === "lose") return play.textContent = "You Lose 😱"
    if(message === "draw") return play.textContent = `${cards.length >= 1 ? 'Draw another card 😏?':'Wanna Play?'} `
    if(message === "total") return total.textContent = `Result: ${value ? value : ''} `
    if(message === "display") return display.textContent = `Card: ${value ? value : ''}`
}

function game(cards){
    let result = sumCard(cards)
    // console.log(result)
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


// version withou reduce

// let card, sum = 0
// let total = document.getElementById("result")
// let display = document.getElementById("display")
// let play = document.getElementById("play")


// function drawCard(){
//     card = Math.floor(Math.random() * (11)) +1
//     document.getElementById("display").textContent += `${card} - `
//     game(card)
    
// }

// function game(card){
//     let result = sumCard(card)
//     console.log(result)
//     if (result > 21)  return play.textContent = "You Lose 😱", document.getElementById("draw").disabled = true
//     if (result == 21)  return play.textContent = "You Win 🤑", document.getElementById("draw").disabled = true
//     return play.textContent = `Draw another card? 😏`
// }


// function sumCard(card){
//     sum += card
//     total.textContent = `Result: ${sum}`
//     return sum   
// }

// function playAgain(){
//     sum = 0
//     total.textContent = `Result: `
//     display.textContent = "Card: "
//     play.textContent = `Draw another card? 😏`
//     document.getElementById("draw").disabled = false
// }