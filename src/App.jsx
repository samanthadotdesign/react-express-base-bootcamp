import React, { useState } from 'react';

// Form component
const LinkForm = () => {
  // Save the value of inputText
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <input value={inputText} onChange={handleInputText} />
      <button onClick={handleLink}>Submit</button>
    </div>
  );
};

// Link component
const LinkList = () => {
  const result = links.map((link) => (
    <p>{link}</p>
  ));
  return result;
};

// Parent component
export default function App() {
  const [inputText, setInputText] = useState('');
  const [links, setLinks] = useState([]);

  // Save the inputText in the links
  const handleLink = () => {
    setLinks([...links, inputText]);
    // Empty the input text after clicking submit
    setInputText('');
  };

  return (
    <div>
      <LinkForm />
      <LinkList />
    </div>
  );
}
