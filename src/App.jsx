import './styles.scss';
import React, { useState } from 'react';
import mango from './assets/image2.jpeg';
import fig from './assets/image3.jpeg';
import gaze from './assets/image4.jpeg';
import peach from './assets/image5.jpeg';
import avocado from './assets/image6.jpeg';
import cabbage from './assets/image1.jpeg';

const images = [cabbage, mango, fig, gaze, peach, avocado];

// Loading component for slow internet
const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favorite images</label>
      <progress id="images-loaded" max="100" value={calculatedWidth} />
    </div>
  </aside>
);

const App = () => {
  // currentImage is the index of the currentImage
  const [currentImage, setCurrentImage] = useState(0);

  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = () => {
    setCurrentImage((currentImage) => (currentImage < images.length - 1 ? currentImage + 1 : 0));
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project
          <br />
          by Samantha Lee
        </h2>
      </header>

      <figure>
        {numLoaded < images.length
          && <Loading calculatedWidth={(numLoaded / images.length) * 100} /> }

        <figcaption>
          {currentImage + 1}
          {' '}
          /
          {' '}
          {images.length}
        </figcaption>

        {images.map((imageURL, index) => (
          <img
            alt=""
            key={imageURL}
            src={imageURL}
            onClick={handleClick}
            onLoad={handleImageLoad}
            // Hiding and displaying images based on its index
            // style={{ opacity: currentImage === index ? 1 : 0 }}
            className={currentImage === index ? 'display' : 'hide'}
          />
        ))}
      </figure>
    </section>
  );
};
export default App;
