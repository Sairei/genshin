import React from 'react';
import { useParams } from 'react-router-dom';

const CharacterPage = () => {
  const { name } = useParams()

  return (
    <div>
      {name}
    </div>
  );
};

export default CharacterPage;