import React, { useState } from 'react';
// We need to import useState from react
import { shuffleCards, makeDeck } from './createCards.js';

// Setup + Gameplay
export default function App() {
  // set the default value of the deck
  // we need to set a state for the initial message
  const [message, setMessage] = useState('welcome to the game');
  const [cards, setCards] = useState(shuffleCards(makeDeck()));

  // set the default player hand as empty
  // I have access to playerHand throughout the program
  const [playerHand, setPlayerHand] = useState([]);

  // State for computer hand to differentiate cards
  const [computerHand, setComputerHand] = useState([]);

  // create the deal button click handler
  const dealCards = () => {
    const hand = [cards.pop(), cards.pop()];
    setPlayerHand(hand);
    // updates playerHand variable to the hand array above
    setCards([...cards]);
    // deck has 52 cards
    // after cards have been popped out of the deck, we need to update the originals cards variable

    // We need to use hand instead of playerHand (this will not be updated until next rerender)
    // Game logic
    const playerOne = hand[0];
    const playerTwo = hand[1];
    console.log(hand);

    // We make sure that the cards are 2 otherwise it will throw an error for rank
    if (hand.length === 2) {
    // We have to wrap the "returned message" inside React's setMessage
      if (playerOne.rank > playerTwo.rank) {
        setMessage('player one wins');
      }
      else if (playerOne.rank < playerTwo.rank) {
        setMessage('player two wins');
      }
      else { setMessage('players draw'); }
    }
  };

  // deals one card each to com + player
  const computerCards = () => {
    const computerCard = cards.pop();
    const playerCard = cards.pop();

    // Update cards
    setCards([...cards]);

    // Give the whole player hand + add the two new cards
    setPlayerHand([...playerHand, computerCard, playerCard]);
  };

  // for every item in the list, create the component
  // note that when this renders the first time and the hand is empty
  const handEls = playerHand.map(({ name, suit }) => (
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
        <h3>cards:</h3>
        {handEls}
      </div>
      <p>
        {/* We wrap two functions to happen on click in anonymous function */}
        {/* player 1 vs player 2 */}
        <button onClick={dealCards}>deal</button>
        {/* On click, the computer and player will get each card (computer vs. player) */}
        <button onClick={computerCards}>play hand</button>
      </p>
    </div>
  );
}
