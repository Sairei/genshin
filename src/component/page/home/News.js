import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Title } from '@mantine/core';

import { genshin_versions } from '../../../utils/database/version';
import { sortByVersion } from '../../../utils/sort/sortByVersion';
import { GenshinDB } from '../../../utils/database/genshinbd';
import VersionContent from '../news/VersionContent';

const News = () => {
  let version = genshin_versions[0];
  const [characterList, setCharacList] = useState([]);
  const [artifactList, setArtifactList] = useState([]);

  useEffect(() => {
    let cList = [];
    GenshinDB.getAllTalentsNames().forEach(name => {
      cList.push(GenshinDB.findTalents(name));
    });
    setCharacList(sortByVersion(cList)[version.num]);
    
    let aList = [];
    GenshinDB.getAllArtifactNames().forEach(name => {
      aList.push(GenshinDB.findArtifact(name));
    });
    setArtifactList(sortByVersion(aList)[version.num]);
  }, [version])

  return (
    <div className='home_news_container'>
      <Title order={1}>
        Nouveauté de la version {version.num}
      </Title>
      
      <VersionContent 
        characterList={characterList}
        artifactList={artifactList} />

      <Link className='right' to="/news">Voir toutes les versions...</Link>
    </div>
  );
};

export default News;