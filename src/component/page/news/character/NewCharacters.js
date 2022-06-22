import React from 'react';

import { Title } from '@mantine/core';

import CharacterList from './CharacterList';

const NewCharacters = ({ characters }) => {
  return (
    <div className='characters_version'>
      <Title order={3}>
        Personnages
      </Title>

      <CharacterList characters={characters} />
    </div>
  );
};

export default NewCharacters;