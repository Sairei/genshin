import { Space } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import FourPieceSet from './FourPieceSet';
import OnePieceSet from './OnePieceSet';

const genshindb = require('genshin-db');

const ArtifactListPage = () => {
  const [artifacts, setArtifacts] = useState({});
  useEffect(() => {
    let list = {};

    genshindb.artifacts('name', { matchCategories: true }).map((elt) => {
      let o = genshindb.artifacts(elt, { resultLanguage: 'French' });
      o['link'] = elt;

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