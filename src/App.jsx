import React, { useState } from 'react';

import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';
import ImgBox from './components/ImgBox/index.jsx';

import { GlobalStyle, ImageContainer, Wrapper } from './styles.js';

const matrix = [
  [0, 0], [1, 0], [2, 0], [3, 0],
  [0, 1], [1, 1], [2, 1], [3, 1],
  [0, 2], [1, 2], [2, 2], [3, 2],
  [0, 3], [1, 3], [2, 3], [3, 3],
  [0, 4], [1, 4], [2, 4], [3, 4],
  [0, 5], [1, 5], [2, 5], [3, 5],
];

const App = () => {
  /* distance: distance between cursor & image center
  is a value from 0 to 1 where 0 means image is unified
  and 1 is the farthest possible distance
  on load, we want a scattered image (1) */
  const [distance, setDistance] = useState(1);

  // exponentiation function
  const easing = (num) => Math.pow(num, 3);

  const calculateDistance = ([x, y]) => {
    //  center stores an array that contains the pixel positions of the center of the window as px value
    const center = [window.innerWidth / 2, window.innerHeight / 2];

    // maximum possible value for the hypotenuse (or max distance from the center of the browser)
    // Math.hypot returns squared value
    const maxHypot = Math.hypot(center[0], center[1]);

    // Current hypotenuse for the cursor position from the center
    const hypot = Math.hypot(center[0] - x, center[1] - y);

    // distance is a percentage based off current value & maximum value (value between 0 & 1)
    const distance = hypot / maxHypot;

    const easeDistance = easing(distance);

    // easeDistance is the distance that our image should evaluate to
    setDistance(easeDistance);
  };

  // MouseEvent.clientY and MouseEvent.clientX (properties attached to the mouseEvent object)
  const handleMove = ({ clientX, clientY }) => {
    calculateDistance([clientX, clientY]);
  };

  const handleTouchMove = ({ touches }) => {
    calculateDistance([touches[0].clientX, touches[0].clientY]);
  };

  // we're using distance value to conditionally trigger the animation
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Footer />
      <Wrapper onMouseMove={handleMove} onTouchMove={handleTouchMove}>
        <ImageContainer $isTogether={distance < 0.001}>
          {matrix.map(([x, y], index) => (
            <ImgBox key={index} x={x} y={y} percent={distance} />
          ))}
        </ImageContainer>
      </Wrapper>
    </div>
  );
};
export default App;
