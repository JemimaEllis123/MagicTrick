const suit = ['hearts', 'clubs', 'diamonds', 'spades'];
// const suit = 'hearts';
const cardsWrapper = document.querySelector('.cards-wrapper');
const cardclass = document.querySelector('.card');

const cards = [];
// Create an array with objects containing the value and the suit of each card

suit.forEach((s) => {
  for (let i = 1; i <= 13; i += 1) {
    const cardObject = {
      value: i,
      suit: s,
    };
    cards.push(cardObject);
  }
});

const cardsshuffed = cards.slice();

function createCards() {
  
  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 32;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  // Your Code
  document.getElementById('start-game').classList.add('d-none');
  document.getElementById('shuffle').classList.add('d-inline');
  document.getElementById('show-hide').classList.add('d-inline');
  document.getElementById('magic').classList.add('d-inline');
}

function showhide() {
  document.querySelector('.cards-wrapper').classList.toggle('hidden');
}

function shuffle() {
  cardsshuffed.sort(() => Math.random() - 0.5);
  cardsshuffed.forEach((card, i) => {
    const positionFromLeft = i * 32;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

function magic() {
  createCards();
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('shuffle').addEventListener('click', shuffle);
document.getElementById('show-hide').addEventListener('click', showhide);
document.getElementById('magic').addEventListener('click', magic);