import React, { useEffect, useState } from 'react';

import CharacterCard from './CharacterCard';

const genshindb = require('genshin-db');

const ListCharactersPage = () => {
  const [caracterNameList, setNameList] = useState([]);

  useEffect(() => {
    setNameList(genshindb.characters('name', { matchCategories: true, resultLanguage: "French" }));
  }, [])

  return (
    <div className='character_list_container'>
      <div className='list_characters'>
        <ul>
          {
            caracterNameList.map(e => {
              return (
                <li key={e}>
                  <CharacterCard name={e} />
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default ListCharactersPage;