import { Space } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import FourPieceSet from './FourPieceSet';
import OnePieceSet from './OnePieceSet';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const ArtifactListPage = () => {
  const [artifacts, setArtifacts] = useState({});
  useEffect(() => {
    let list = {};

    GenshinDB.getAllArtifactNames().map((elt) => {
      let o = GenshinDB.findArtifact(elt);
      
      let t = '4pc'
      if (o['1pc']) {
        t = '1pc';
      }

      if (!list[t]) {
        list[t] = [];
      }
      list[t].push(o);

      return '';
    });
    setArtifacts(list);
  }, []);

  return (
    <div className='artifact_container'>
      <FourPieceSet artifacts={artifacts['4pc']} />

      <Space h="xl" />
      <hr />
      <Space h="xl" />

      <OnePieceSet artifacts={artifacts['1pc']} />
    </div>
  );
};

export default ArtifactListPage;