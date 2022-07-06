import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Title } from '@mantine/core';

import { genshin_versions } from '../../../utils/database/version';
import { sortByVersion } from '../../../utils/sort/sortByVersion';
import { GenshinDB } from '../../../utils/database/genshinbd';
import VersionContent from '../news/VersionContent';

const News = () => {
  let version = genshin_versions[0];
  const [characterList, setList] = useState([]);

  useEffect(() => {
    let list = [];
    GenshinDB.getAllTalentsNames().forEach(name => {
      list.push(GenshinDB.findTalents(name));
    });
    setList(sortByVersion(list)[version.num]);
  }, [version])

  return (
    <div className='home_news_container'>
      <Title order={1}>
        Nouveauté de la version {version.num}
      </Title>
      
      <VersionContent characterList={characterList} />

      <Link className='right' to="/news">Voir toutes les versions...</Link>
    </div>
  );
};

export default News;