import React, { useEffect, useState } from 'react';

import { Title } from '@mantine/core';

import { genshin_versions } from '../../../utils/database/version';
import { sortByVersion } from '../../../utils/sort/sortByVersion';
import NewCharacters from './character/NewCharacters';

import { GenshinDB } from '../../../utils/database/genshinbd';

// TODO : https://genshin-impact.fandom.com/wiki/Version

const NewsPage = () => {
  const [characterList, setList] = useState([]);

  useEffect(() => {
    let list = [];
    GenshinDB.getAllTalentsNames().forEach(name => {
      list.push(GenshinDB.findTalents(name));
    });
    setList(sortByVersion(list));
  }, [])

  return (
    <div className='news_container'>
      {
        genshin_versions.map(version => {
          return (
            <div className='version_container' key={version.num}>
              <div className='title_div'>
                <Title order={1}> Version { version.num } </Title>
                <span className='release_date'>Sorti le { version.date }</span>
                <div className='title_separator'></div>
              </div>

              <div className='version_content'>
                <NewCharacters characters={characterList[version.num]} />

                <div className='artifacts_version'>
                  
                </div>

                <div className='recipes_version'>
                  
                </div>

                <div className='bestiary_version'>
                  
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default NewsPage;