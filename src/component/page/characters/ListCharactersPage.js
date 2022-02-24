import React, { useEffect, useState } from 'react';

import CharacterCard from './CharacterCard';
import { simplifyText } from '../../../utils/converter/simplifyElementText';

const genshindb = require('genshin-db');

const ListCharactersPage = () => {
  const [caracterList, setList] = useState([]);

  useEffect(() => {
    let list = [];
    genshindb.characters('name', { matchCategories: true }).forEach(name => {
      let c = genshindb.characters(name);

      let obj = {};
      obj['name'] = name;
      obj['elt'] = simplifyText(c.element);
      obj['weapon'] = simplifyText(c.weapontype);
      obj['region'] = simplifyText(c.region);
      obj['rarity'] = simplifyText(c.rarity);
      obj['gender'] = simplifyText(c.gender);

      list.push(obj);
    });
    setList(list);
  }, [])

  return (
    <div className='character_list_container'>
      <div className='list_characters'>
        <ul>
          {
            caracterList.map(character => {
              let e = character.name
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