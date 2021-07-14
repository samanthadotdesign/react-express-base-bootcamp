import React, { useState } from 'react';

const hangman = ['(凸', 'ಠ', '益', 'ಠ', ')凸'];
const secretWord = ['b', 'a', 'n', 'a', 'n', 'a'];

export default function App() {
  // Set state for input box
  // Get hold of the value for the input box
  const [inputText, setInputText] = useState('');
  const [userHangman, setUserHangman] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  // the array begins with only _
  const [guessedLetters, setGuessedLetters] = useState([
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
  ]);

  // When the user types a letter, take the input value
  // and check if it exists
  // Reset after it has finished the check
  // Event is implied here
  const handleUserInput = (event) => {
    // This updates the inputText to the value the user typed in
    const userInput = event.target.value;
    setInputText(userInput);

    // Takes user input and checks if it exists & number of instances inside the array
    // For every letter in my secret word, if it exists,
    let isWrong = true;
    for (let i = 0; i < secretWord.length; i += 1) {
      if (userInput === secretWord[i]) {
        // *** replace that guessedLetter with the letter in place ***
        guessedLetters[i] = userInput;
        isWrong = false;
      }
    }

    if (isWrong) {
      // Add the hangman string to the existing userHangman stored
      setUserHangman(userHangman + hangman.shift());

      // There is a bug here because userHangman is not updated for it to be used inside this code block
      if (hangman.length === 0) {
        setUserHangman(`${userHangman} \n you lost!`);
        setIsDisabled(true);
      }
    }

    // need to update with the guessedLetters array
    setGuessedLetters([...guessedLetters]);
  };

  return (
    // Form for user to input letter
    <div>
      {/* We need the value of the inputText here to  */}
      {/* Reset the input box value to empty if it's empty */}
      <input disabled={isDisabled} value={inputText} type="text" onChange={(e) => { handleUserInput(e); setTimeout(() => setInputText(''), 1000); }} />
      <p>{guessedLetters}</p>
      <p>{userHangman}</p>
    </div>
  );
}
