import React, { useState } from 'react';
// We need to import useState from react
import { shuffleCards, makeDeck } from './createCards.js';

// Setup + Gameplay
export default function App() {
  // set the default value of the deck
  // we need to set a state for the initial message
  const [message, setMessage] = useState('welcome to the game');
  const [cards, setCards] = useState(shuffleCards(makeDeck()));

  // Keep track of score states that we can include in the render
  const [computerScore, setComputerScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);

  // set the default player hand as empty
  // I have access to playerHand throughout the program
  const [playerHand, setPlayerHand] = useState([]);

  // State for computer hand to differentiate cards
  const [computerHand, setComputerHand] = useState([]);

  // create the deal button click handler
  // Deal gives brand new cards to each player
  const dealCards = () => {
    // If there are no cards left
    if (cards.length < 2) {
      setMessage('there are no cards left. game over!');
    } else {
      const hand = [cards.pop()];
      const comHand = [cards.pop()];
      setPlayerHand(hand);
      setComputerHand(comHand);

      // updates playerHand variable to the hand array above
      setCards([...cards]);
    // deck has 52 cards
    // after cards have been popped out of the deck, we need to update the originals cards variable
    }
  };

  // Scoring logic happens here
  const checkWinner = () => {
    // Find the largest card from each of the computer & player hands
    // Let the first card be the max card
    let playerHighestCard = playerHand[0];
    for (let i = 1; i < playerHand.length; i += 1) {
      if (playerHighestCard.rank < playerHand[i].rank) {
        playerHighestCard = playerHand[i];
      }
    }

    let computerHighestCard = computerHand[0];
    for (let i = 1; i < computerHand.length; i += 1) {
      if (computerHighestCard.rank < computerHand[i].rank) {
        computerHighestCard = computerHand[i];
      }
    }

    // We make sure that the cards are 2 otherwise it will throw an error for rank
    // We have to wrap the "returned message" inside React's setMessage
    if (computerHighestCard.rank > playerHighestCard.rank) {
      setMessage('computer wins');
      setComputerScore(computerScore + 1);
    }
    else if (computerHighestCard.rank < playerHighestCard.rank) {
      setMessage('player wins');
      setPlayerScore(playerScore + 1);
    }
    else { setMessage('computer and player draw'); }
  };

  // deals one card each to com + player
  const extraCards = () => {
    if (cards.length < 2) {
      setMessage('there are no cards left. game over!');
    } else {
      const computerCard = cards.pop();
      const playerCard = cards.pop();

      // Update cards
      setCards([...cards]);

      // Give the whole player hand + new player card
      setPlayerHand([...playerHand, playerCard]);

      // Adding cards to Computer hand
      setComputerHand([...computerHand, computerCard]);
    }
  };

  // for every item in the list, create the component
  // note that when this renders the first time and the hand is empty
  const handEls = playerHand.map(({ name, suit }) => (
    <div>
      {name}
      {suit}
    </div>
  ));
  const computerEls = computerHand.map(({ name, suit }) => (
    <div>
      {name}
      {suit}
    </div>
  ));

  // Return function of the App component
  return (
    <div>
      <div>
        {/* This message will be updated to the winner name */}
        <p>{message}</p>
        <h3>player cards:</h3>
        {handEls}
        <p>{playerScore}</p>
        <h3>computer cards:</h3>
        {computerEls}
        <p>{computerScore}</p>
      </div>
      <p>
        {/* We wrap two functions to happen on click in anonymous function */}
        {/* player 1 vs player 2 */}
        <button onClick={dealCards}>redeal new hand</button>
        {/* On click, the computer and player will get each card (computer vs. player) */}
        <button onClick={extraCards}>deal more cards</button>
        {/* Evaluate cards  */}
        <button onClick={checkWinner}>check winner</button>
      </p>
    </div>
  );
}
