document.addEventListener('DOMCOntentLoaded',() =>{

    //card options
    const cardArray = [
        {
            name:'fries',
            img:'images/fries.jpg'
        },
        {
            name:'fries',
            img:'images/fries.jpg'
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.jpg'
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.jpg'
        },
        {
            name:'hotdog',
            img:'images/hotdog.jpg'
        },
        {
            name:'hotdog',
            img:'images/hotdog.jpg'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.jpg'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.jpg'
        },
        {
            name:'milkshake',
            img:'images/milkshake.jpg'
        },
        {
            name:'milkshake',
            img:'images/milkshake.jpg'
        },
        {
            name:'pizza',
            img:'images/pizza.jpg'
        },
        {
            name:'pizza',
            img:'images/pizza.jpg'
        }
    ]

cardArray.sort(() => 0.5 -Math.random())    

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon =[]

//create your board
function createBoard() {
    for(let i=0;i<cardArray.length;i++) {
        var card = document.createElement('img')
        card.setAttribute('src','images/blank.jpg')
        card.setAttribute('data-id',i)
        //card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
}
// check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0]===cardsChosenId[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src','images/white.jpg')
        cards[optionTwoId].setAttribute('src','images/white.jpg')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src','images/blank.jpg')
        cards[optionTwoId].setAttribute('src','images/blank.jpg')
        alert('Sorry,try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length=== cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations!You found them all!'
    }
}

//flipyour card
function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length ===2) {
        setTimeout(checkForMatch,500)
    }
}

createBoard()




})