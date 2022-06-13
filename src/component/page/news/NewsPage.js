import { Title } from '@mantine/core';
import React from 'react';

import { genshin_versions } from '../../../utils/database/version';

// TODO : https://genshin-impact.fandom.com/wiki/Version

const NewsPage = () => {
  return (
    <div className='news_container'>
      {
        genshin_versions.map(version => {
          return (
            <div className='version_container'>
              <div className='title_div'>
                <Title order={1}> Version { version.num } </Title>
                <span className='release_date'>Sorti le { version.date }</span>
                <div className='title_separator'></div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default NewsPage;