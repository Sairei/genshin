import React from 'react';

import { Title } from '@mantine/core';

import { genshin_versions } from '../../../utils/database/version';
import { Link } from 'react-router-dom';

const News = () => {
  let version = genshin_versions[0];

  return (
    <div className='home_news_container'>
      <Title order={1}>
        Nouveauté de la version {version.num}
      </Title>
      
      <Link className='right' to="/news">Voir toutes les versions...</Link>
    </div>
  );
};

export default News;