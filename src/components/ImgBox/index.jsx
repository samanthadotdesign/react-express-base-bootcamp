import React, { useState, useEffect } from 'react';
import { Image } from './styles.js';

const ImgBox = ({ x, y, percent }) => {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    // 400 corresponds to width of the image
    // Start in the same place but randomixed (-50)
    setPosition([
      Math.random() * 400 - x * 100 - 50,
      Math.random() * 600 - y * 100 - 50,
    ]);
  }, [x, y]);
  // Adding dependency array means useEffect is only going to run if the values we specified in the array change

  // Default behavior for useEffect is to fire effect after every completed render
  // Transient prop for calculating images new position on the page
  // $movedX = horizontal distance that image square has to move
  // Multiply position by distance (passed down from App) so we can move it by that distance on the screen as the cursor moves
  return (
    <Image
      $initialX={x}
      $initialY={y}
      $movedX={position[0] * percent}
      $movedY={position[1] * percent}
    />
  );
};

export default ImgBox;
