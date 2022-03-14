import React from 'react';

import { Link } from 'react-router-dom';

const genshindb = require('genshin-db');

const CharacterNav = () => {
  let characList = genshindb.characters("name", { matchCategories: true });

  return (
    <ul>
      {
        characList.map((elt) => {
          return (
            <li key={elt}>
              <Link to={`/character/${elt}`} className="link">
                {elt}
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
};

export default CharacterNav;