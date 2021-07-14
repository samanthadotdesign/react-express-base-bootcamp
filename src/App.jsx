import React, { useState } from 'react';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [links, setLinks] = useState([]);

  // Save the value of inputText
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  // Save the inputText in the links
  const handleLink = () => {
    setLinks([...links, inputText]);
    // Empty the input text after clicking submit
    setInputText('');
  };

  return (
    <div>
      <div>
        {/* handleInputText */}
        <input value={inputText} onChange={handleInputText} />
        <button onClick={handleLink}>Submit</button>
      </div>
      <div>
        {/* We map every link to a new p tag */}
        {links.map((link) => (
          <p>{link}</p>
        ))}
      </div>
    </div>
  );
}
