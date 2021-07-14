import React, { useState } from 'react';

// Form component
// props.FunctionName -> alternatively
// const LinkForm = (props) => {}
const LinkForm = ({ setInputText, inputText, handleLink }) => {
  // We need access to everything inside the parent component
  // that wasn't declared inside the component
  // setInputText, inputText, handleInputText, handleLink

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
const LinkList = ({ links }) => {
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
      {/* This is where I put the prop */}
      <LinkForm
        setInputText={setInputText}
        inputText={inputText}
        handleLink={handleLink}
      />
      <LinkList links={links} />
    </div>
  );
}
