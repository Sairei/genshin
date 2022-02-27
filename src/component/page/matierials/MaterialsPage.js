import { Image } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { findImage } from '../../../utils/finder/findImage';

const genshindb = require('genshin-db');

const MaterialsPage = () => {
  const [materialList, setList] = useState([]);

  useEffect(() => {
    let list = [];
    genshindb.materials('name', { matchCategories: true }).forEach(link => {
      let m = genshindb.materials(link, { resultLanguage: 'French' });

      let obj = {};
      obj['link'] = link;
      obj['name'] = m.name;
      obj['description'] = m.description;
      obj['image'] = m.images.nameicon;
      obj['category'] = m.category;
      obj['source'] = m.source;
      obj['dropdomain'] = m.dropdomain;
      obj['daysofweek'] = m.daysofweek;

      list.push(obj);
    });
    setList(list);
  }, []);

  return (
    <div className='materials_list_container'>
      <ul>
        {
          materialList.map((e) => {
            return (
              <li key={e.name} >
                <div style={{display: 'flex'}}>
                  <Image
                    src={findImage(e.image)}
                    height={50}
                    fit='contain' />

                  {e.name}
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default MaterialsPage;