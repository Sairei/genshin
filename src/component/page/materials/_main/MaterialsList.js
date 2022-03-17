import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Anchor } from '@mantine/core';

const genshindb = require('genshin-db');

const MaterialsList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let l = [];
    let enList = genshindb.materials('name', { matchCategories: true });
    enList.map((elt) => {
      let o = genshindb.materials(elt, { resultLanguage: "French" });
      o['link'] = elt;

      l.push(o);

      return '';
    })

    setList(l);
  }, []);

  return (
    <div className='materials_list_container'>
      <ul>
        {
          list.sort((a, b) => { return a.name.localeCompare(b.name) }).map((mat) => {
            return (
              <li key={mat.link}>
                <Anchor component={Link} to={`/item/${mat.link}`} >
                  {mat.name}
                </Anchor>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default MaterialsList;