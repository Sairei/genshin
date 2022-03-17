import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Anchor, Image } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';
import { convertTextWithGender } from '../../../../utils/converter/convertTextWithGender';

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
            convertTextWithGender(mat.name);
            return (
              <li key={mat.link}>
                <Image
                  fit='contain'
                  width={40} height={40}
                  src={findImage(mat.images.nameicon)} />

                <Anchor className='item_link vertical_align_text' 
                  component={Link} to={`/item/${mat.link}`} >
                  {convertTextWithGender(mat.name)}
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