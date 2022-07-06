import React, { useEffect, useState } from 'react';

import { Accordion, Title } from '@mantine/core';

import { genshin_versions } from '../../../utils/database/version';
import { sortByVersion } from '../../../utils/sort/sortByVersion';
import VersionContent from './VersionContent';

import { GenshinDB } from '../../../utils/database/genshinbd';

// TODO : https://genshin-impact.fandom.com/wiki/Version

const NewsPage = () => {
  const [characterList, setCharacList] = useState([]);
  const [artifactList, setArtifactList] = useState([]);

  useEffect(() => {
    let cList = [];
    GenshinDB.getAllTalentsNames().forEach(name => {
      cList.push(GenshinDB.findTalents(name));
    });
    setCharacList(sortByVersion(cList));
    
    let aList = [];
    GenshinDB.getAllArtifactNames().forEach(name => {
      aList.push(GenshinDB.findArtifact(name));
    });
    setArtifactList(sortByVersion(aList));
  }, [])

  const items = genshin_versions.map(version => {
    return (
      <Accordion.Item className='version_container' key={version.num} 
        label={
          <div className='title_div'>
            <Title order={1}> Version { version.num } </Title>
            <span className='release_date'>Sorti le { version.date }</span>
            <div className='title_separator'></div>
          </div>
        }>

        <VersionContent
          characterList={characterList[version.num]}
          artifactList={artifactList[version.num]} />
      
      </Accordion.Item>
    )
  })

  return (
    <div className='news_container'>
      <Accordion initialItem={-1} iconPosition="right">
        { items }
      </Accordion>
    </div>
  );
};

export default NewsPage;