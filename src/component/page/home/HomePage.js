import React from 'react';

import WelcomeTo from './WelcomeTo';
import News from './News';
import StartBrowsing from './StartBrowsing';

const HomePage = () => {
  return (
    <div>
      <WelcomeTo />

      <News />

      <StartBrowsing />
    </div>
  );
};

export default HomePage;