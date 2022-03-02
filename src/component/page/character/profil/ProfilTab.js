import { Space } from '@mantine/core';
import React from 'react';

const ProfilTab = ({ character, name }) => {
  if (!character) {
    return (
      <div></div>
    );
  }

  return (
    <div className='profil_container'>
      <div>
        <b className='elem_color_text'>{`Anniversaire : `}</b> {character.birthday}
      </div>

      <Space h='md' />

      <div>
        <b className='elem_color_text'>{`Région d'origine : `}</b> {character.region}
      </div>

      <Space h='md' />

      <div>
        <b className='elem_color_text'>{`Affiliation : `}</b> {character.affiliation}
      </div>

      <Space h='md' />

      <div>
        <b className='elem_color_text'>{`Doublage (Cover Voice) : (TODO)`}</b> 
      </div>

      <Space h='md' />

      <div>
        <div>
          <b className='elem_color_text'>Description :</b>
        </div>
        {`${character.description}`}
      </div>
    </div>
  );
};

export default ProfilTab;