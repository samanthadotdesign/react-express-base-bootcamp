import React from 'react';
import { Header } from './styles.js';
import LogoSVG from './logo.svg';

const HeaderComponent = () => (
  <Header>
    <img
      src={LogoSVG}
      style={{
        height: 'auto',
        maxWidth: '760px',
        width: '100%',
      }}
    />
    {/* <svg><Logo title="Milky Mood Logo" /></svg> */}
  </Header>
);

export default HeaderComponent;
