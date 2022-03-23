import React from 'react';

import { Title } from '@mantine/core';

const WelcomeTo = () => {
  return (
    <div className='welcome_container'>
      <Title order={1}>
        Bienvenue !
      </Title>
      <p>
        Vous avez ici un site réalisé en REACT pour genshin.
        <br/>
        Il s'agit d'un site où les données sont récupérées automatiquement sur la base <a href="https://github.com/theBowja/genshin-db">genshin db</a> et il est fait pour le fun !!
      </p>
    </div>
  );
};

export default WelcomeTo;